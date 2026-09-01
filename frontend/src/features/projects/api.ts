import type { Project } from './types'

export async function getProjects(): Promise<Project[]> {
  const response = await fetch('http://localhost:5029/api/projects')

  if (!response.ok) {
    throw new Error('Unable to load projects.')
  }

  return response.json()
}