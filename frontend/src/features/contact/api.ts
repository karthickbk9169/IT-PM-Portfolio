export type ContactRequest = {
  name: string
  company: string
  email: string
  message: string
}

type ContactResponse = {
  message: string
}

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5029'

export async function sendContactMessage(
  request: ContactRequest,
): Promise<ContactResponse> {
  const response = await fetch(
    `${API_BASE_URL}/api/contact`,
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