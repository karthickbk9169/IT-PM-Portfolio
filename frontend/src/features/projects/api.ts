import type { Project } from './types'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5029'

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_BASE_URL}/api/projects`)

  if (!response.ok) {
    throw new Error('Unable to load projects.')
  }

  return response.json()
}