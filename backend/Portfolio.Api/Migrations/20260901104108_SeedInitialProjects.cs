using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Portfolio.Api.Migrations
{
    /// <inheritdoc />
    public partial class SeedInitialProjects : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "Category", "Description", "IsFeatured", "Role", "Status", "Summary", "Title" },
                values: new object[,]
                {
                    { 1, "IT Project Management Simulation", "A simulated enterprise IT project covering the planning and delivery of an employee self-service portal. The project demonstrates end-to-end project management across initiation, planning, technical design, Agile delivery, testing, deployment, transition and closure, supported by practical governance, quality, risk, stakeholder and delivery artifacts.", true, "Technical Project Manager / Scrum Master", "In Progress", "End-to-end planning and delivery of an employee self-service portal using structured project governance, Agile practices, cross-functional coordination and delivery controls.", "PeopleFirst Employee Self-Service Portal" },
                    { 2, "Full-Stack Web Development", "A full-stack portfolio application built using React, TypeScript, ASP.NET Core, Entity Framework Core and SQL Server. The project applies iterative delivery, modular architecture, source control, accessibility practices, testing and release management while providing a professional platform for demonstrating IT project-management experience.", false, "Technical Project Manager / Developer", "In Progress", "Design and development of a modular, accessible portfolio platform that demonstrates IT project-management capability through projects, case studies and practical delivery artifacts.", "IT Project Management Portfolio Platform" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
