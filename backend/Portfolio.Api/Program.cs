using Portfolio.Api.Models;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
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

var app = builder.Build();

app.UseCors("FrontendPolicy");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var projects = new Project[]
{
    new Project
    {
        Id = 1,
        Title = "Project Charter",
        Category = "Project Document",
        Description = "Defines project purpose, objectives, scope, deliverables, milestones, budget, risks, governance, stakeholders, and success criteria."
    },
    new Project
    {
        Id = 2,
        Title = "Project Lifecycle Selection",
        Category = "Decision Tool",
        Description = "Evaluates project characteristics to support selection of predictive, Agile, or hybrid delivery."
    },
    new Project
    {
        Id = 3,
        Title = "Stakeholder Register",
        Category = "Stakeholder Management",
        Description = "Identifies stakeholders and documents their influence, interest, engagement, communication needs, and management strategies."
    }
};

app.MapGet("/api/projects", () =>
{
    return projects;
})
.WithName("GetProjects");

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
