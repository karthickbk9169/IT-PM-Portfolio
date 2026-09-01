import type { Project } from './types'
import { Card } from '../../shared/components/Card'

type ProjectListProps = {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <>
      {projects.map(project => (
  <Card key={project.id}>
    <h2>{project.title}</h2>
    <p>{project.category}</p>
    <p>{project.summary}</p>
    <p>{project.role}</p>
    <p>{project.status}</p>
  </Card>
))}
    </>
  )
}