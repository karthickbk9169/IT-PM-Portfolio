using System.Net.Mail;

namespace Portfolio.Api.Features.Contact;

public static class ContactEndpoints
{
    public static void MapContactEndpoints(
        this WebApplication app
    )
    {
        app.MapPost(
            "/api/contact",
            (ContactRequest request) =>
            {
                var validationError =
                    ValidateContactRequest(request);

                if (validationError is not null)
                {
                    return Results.BadRequest(
                        new
                        {
                            message = validationError
                        }
                    );
                }

                /*
                 * Email delivery will be connected here.
                 *
                 * For now, reaching this point confirms that:
                 *
                 * React submitted the form successfully.
                 * The ASP.NET Core endpoint received the data.
                 * Server-side validation passed.
                 */

                return Results.Ok(
                    new
                    {
                        message =
                            "Your message was submitted successfully."
                    }
                );
            }
        );
    }


    private static string? ValidateContactRequest(
        ContactRequest request
    )
    {
        if (string.IsNullOrWhiteSpace(request.Name))
        {
            return "Name is required.";
        }

        if (string.IsNullOrWhiteSpace(request.Company))
        {
            return "Company or organization is required.";
        }

        if (string.IsNullOrWhiteSpace(request.Email))
        {
            return "Email is required.";
        }

        if (!IsValidEmail(request.Email))
        {
            return "Please enter a valid email address.";
        }

        if (string.IsNullOrWhiteSpace(request.Message))
        {
            return "Message is required.";
        }

        if (request.Name.Length > 100)
        {
            return "Name must not exceed 100 characters.";
        }

        if (request.Company.Length > 150)
        {
            return "Company or organization must not exceed 150 characters.";
        }

        if (request.Email.Length > 254)
        {
            return "Email address is too long.";
        }

        if (request.Message.Length > 5000)
        {
            return "Message must not exceed 5000 characters.";
        }

        return null;
    }


    private static bool IsValidEmail(
        string email
    )
    {
        try
        {
            var address = new MailAddress(email);

            return address.Address == email.Trim();
        }
        catch
        {
            return false;
        }
    }
}