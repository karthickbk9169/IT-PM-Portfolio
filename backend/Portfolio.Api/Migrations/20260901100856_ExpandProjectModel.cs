using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portfolio.Api.Migrations
{
    /// <inheritdoc />
    public partial class ExpandProjectModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsFeatured",
                table: "Projects",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "Projects",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Projects",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Summary",
                table: "Projects",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsFeatured",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "Role",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "Summary",
                table: "Projects");
        }
    }
}
