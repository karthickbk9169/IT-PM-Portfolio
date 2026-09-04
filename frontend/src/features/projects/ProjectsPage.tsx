import type { Project } from './types'
import { ProjectList } from './ProjectList'

type ProjectsPageProps = {
  projects: Project[]
  loading: boolean
  error: string | null
}

export function ProjectsPage({
  projects,
  loading,
  error,
}: ProjectsPageProps) {
  return (
    <>
      <h1>Projects</h1>

      {loading && <p>Loading projects...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && <ProjectList projects={projects} />}
    </>
  )
}