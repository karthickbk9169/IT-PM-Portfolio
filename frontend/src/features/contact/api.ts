export type ContactRequest = {
  name: string
  company: string
  email: string
  message: string
}

type ContactResponse = {
  message: string
}

export async function sendContactMessage(
  request: ContactRequest,
): Promise<ContactResponse> {
  const response = await fetch(
    'http://localhost:5029/api/contact',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(request),
    },
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.message ||
        'Unable to send your message.',
    )
  }

  return data
}