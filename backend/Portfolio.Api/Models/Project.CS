namespace Portfolio.Api.Models;

public class Project
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Category { get; set; } = string.Empty;

    public string Summary { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string Role { get; set; } = string.Empty;

    public string Status { get; set; } = string.Empty;

    public bool IsFeatured { get; set; }
}