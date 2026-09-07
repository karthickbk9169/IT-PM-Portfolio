using System.Net;
using System.Net.Mail;
using Resend;

namespace Portfolio.Api.Features.Contact;

public static class ContactEndpoints
{
    public static void MapContactEndpoints(
        this WebApplication app
    )
    {
        app.MapPost(
            "/api/contact",
            async (
                ContactRequest request,
                IResend resend,
                IConfiguration configuration,
                ILogger<ContactRequest> logger
            ) =>
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

                var recipientEmail =
                    configuration["Resend:RecipientEmail"];

                if (string.IsNullOrWhiteSpace(recipientEmail))
                {
                    logger.LogError(
                        "The contact-form recipient email is not configured."
                    );

                    return Results.Problem(
                        statusCode:
                            StatusCodes.Status500InternalServerError,
                        title:
                            "Email configuration error",
                        detail:
                            "The contact service is not configured correctly."
                    );
                }

                try
                {
                    var safeName =
                        WebUtility.HtmlEncode(
                            request.Name.Trim()
                        );

                    var safeCompany =
                        WebUtility.HtmlEncode(
                            request.Company.Trim()
                        );

                    var safeEmail =
                        WebUtility.HtmlEncode(
                            request.Email.Trim()
                        );

                    var safeMessage =
                        WebUtility.HtmlEncode(
                            request.Message.Trim()
                        )
                        .Replace(
                            "\r\n",
                            "<br />"
                        )
                        .Replace(
                            "\n",
                            "<br />"
                        );

                    var email =
                        new EmailMessage
                        {
                            From =
                                "Karthick Portfolio <onboarding@resend.dev>",

                            Subject =
                                $"Portfolio Contact - {request.Company.Trim()}",

                            HtmlBody =
                                $"""
                                <h2>New Portfolio Contact</h2>

                                <p>
                                    A new message was submitted through
                                    your IT Project Management portfolio.
                                </p>

                                <hr />

                                <p>
                                    <strong>Name:</strong>
                                    {safeName}
                                </p>

                                <p>
                                    <strong>Company / Organization:</strong>
                                    {safeCompany}
                                </p>

                                <p>
                                    <strong>Email:</strong>
                                    {safeEmail}
                                </p>

                                <p>
                                    <strong>Message:</strong>
                                </p>

                                <p>
                                    {safeMessage}
                                </p>
                                """
                        };

                    email.To.Add(
                        recipientEmail
                    );

                    email.ReplyTo =
                        new EmailAddressList
                        {
                            request.Email.Trim()
                        };

                    await resend.EmailSendAsync(
                        email
                    );

                    return Results.Ok(
                        new
                        {
                            message =
                                "Your message was sent successfully."
                        }
                    );
                }
                catch (Exception exception)
                {
                    logger.LogError(
                        exception,
                        "Failed to send portfolio contact email."
                    );

                    return Results.Problem(
                        statusCode:
                            StatusCodes.Status502BadGateway,
                        title:
                            "Unable to send message",
                        detail:
                            "The message could not be sent at this time. Please try again later."
                    );
                }
            }
        )
        .RequireRateLimiting(
            "ContactFormPolicy"
        );
    }


    private static string? ValidateContactRequest(
        ContactRequest request
    )
    {
        if (string.IsNullOrWhiteSpace(
            request.Name
        ))
        {
            return "Name is required.";
        }

        if (string.IsNullOrWhiteSpace(
            request.Company
        ))
        {
            return "Company or organization is required.";
        }

        if (string.IsNullOrWhiteSpace(
            request.Email
        ))
        {
            return "Email is required.";
        }

        if (!IsValidEmail(
            request.Email
        ))
        {
            return "Please enter a valid email address.";
        }

        if (string.IsNullOrWhiteSpace(
            request.Message
        ))
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
            var address =
                new MailAddress(
                    email.Trim()
                );

            return address.Address ==
                email.Trim();
        }
        catch
        {
            return false;
        }
    }
}