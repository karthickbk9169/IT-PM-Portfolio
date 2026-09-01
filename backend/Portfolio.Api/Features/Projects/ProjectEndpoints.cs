using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Data;

namespace Portfolio.Api.Features.Projects;

public static class ProjectEndpoints
{
    public static IEndpointRouteBuilder MapProjectEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/api/projects", async (PortfolioDbContext db) =>
        {
            var projects = await db.Projects.ToListAsync();

            return projects;
        })
        .WithName("GetProjects");

        return app;
    }
}