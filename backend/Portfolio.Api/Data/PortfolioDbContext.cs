using Microsoft.EntityFrameworkCore;
using Portfolio.Api.Models;

namespace Portfolio.Api.Data;

public class PortfolioDbContext : DbContext
{
    public PortfolioDbContext(DbContextOptions<PortfolioDbContext> options)
        : base(options)
    {
    }

    public DbSet<Project> Projects { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);

    modelBuilder.Entity<Project>().HasData(
        new Project
        {
            Id = 1,
            Title = "PeopleFirst Employee Self-Service Portal",
            Category = "IT Project Management Simulation",
            Summary = "End-to-end planning and delivery of an employee self-service portal using structured project governance, Agile practices, cross-functional coordination and delivery controls.",
            Description = "A simulated enterprise IT project covering the planning and delivery of an employee self-service portal. The project demonstrates end-to-end project management across initiation, planning, technical design, Agile delivery, testing, deployment, transition and closure, supported by practical governance, quality, risk, stakeholder and delivery artifacts.",
            Role = "Technical Project Manager / Scrum Master",
            Status = "In Progress",
            IsFeatured = true
        },
        new Project
        {
            Id = 2,
            Title = "IT Project Management Portfolio Platform",
            Category = "Full-Stack Web Development",
            Summary = "Design and development of a modular, accessible portfolio platform that demonstrates IT project-management capability through projects, case studies and practical delivery artifacts.",
            Description = "A full-stack portfolio application built using React, TypeScript, ASP.NET Core, Entity Framework Core and SQL Server. The project applies iterative delivery, modular architecture, source control, accessibility practices, testing and release management while providing a professional platform for demonstrating IT project-management experience.",
            Role = "Technical Project Manager / Developer",
            Status = "V1 Deployed",
            IsFeatured = false
        }
    );
}
}