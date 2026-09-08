using System.Threading.RateLimiting;
using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Data;
using Portfolio.Api.Features.Contact;
using Portfolio.Api.Features.Projects;
using Resend;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddOpenApi();


// Configure CORS for local development and production frontend.
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:5173",
                "https://it-pm-portfolio-frontend.onrender.com"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});


// Use SQL Server locally and an in-memory database in production.
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<PortfolioDbContext>(options =>
        options.UseSqlServer(
            builder.Configuration.GetConnectionString(
                "DefaultConnection"
            )
        ));
}
else
{
    builder.Services.AddDbContext<PortfolioDbContext>(options =>
        options.UseInMemoryDatabase(
            "PortfolioDb"
        ));
}


// Configure Resend email service.
var resendApiKey =
    builder.Configuration["Resend:ApiKey"]
    ?? throw new InvalidOperationException(
        "Resend API key is not configured."
    );

builder.Services.AddOptions();

builder.Services.AddHttpClient<ResendClient>();

builder.Services.Configure<ResendClientOptions>(
    options =>
    {
        options.ApiToken = resendApiKey;
    }
);

builder.Services.AddTransient<IResend, ResendClient>();


// Protect the public Contact endpoint from excessive submissions.
builder.Services.AddRateLimiter(options =>
{
    options.AddPolicy(
        "ContactFormPolicy",
        context =>
            RateLimitPartition.GetFixedWindowLimiter(
                partitionKey:
                    context.Connection.RemoteIpAddress?.ToString()
                    ?? "unknown",

                factory:
                    _ => new FixedWindowRateLimiterOptions
                    {
                        PermitLimit = 5,
                        Window = TimeSpan.FromMinutes(10),
                        QueueLimit = 0,
                        AutoReplenishment = true
                    }
            )
    );

    options.RejectionStatusCode =
        StatusCodes.Status429TooManyRequests;
});


var app = builder.Build();


// Ensure the configured database is created and seeded.
using (var scope = app.Services.CreateScope())
{
    var db =
        scope.ServiceProvider
            .GetRequiredService<PortfolioDbContext>();

    db.Database.EnsureCreated();
}


// Enable CORS.
app.UseCors("FrontendPolicy");


// Enable rate limiting.
app.UseRateLimiter();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();


// Map API endpoints.
app.MapProjectEndpoints();
app.MapContactEndpoints();


app.Run();