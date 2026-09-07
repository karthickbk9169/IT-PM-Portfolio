using System.Threading.RateLimiting;
using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Data;
using Portfolio.Api.Features.Contact;
using Portfolio.Api.Features.Projects;
using Resend;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddOpenApi();

builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy
            .WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddDbContext<PortfolioDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString(
            "DefaultConnection"
        )
    ));

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

app.UseCors("FrontendPolicy");

app.UseRateLimiter();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapProjectEndpoints();
app.MapContactEndpoints();

app.Run();