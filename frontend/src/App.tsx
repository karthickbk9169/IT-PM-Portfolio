import { useEffect, useState } from 'react'
import './App.css'

type Project = {
  id: number
  title: string
  category: string
  summary: string
  description: string
  role: string
  status: string
  isFeatured: boolean
}

function App() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
const [error, setError] = useState<string | null>(null)

  useEffect(() => {
  const loadProjects = async () => {
    try {
      const response = await fetch('http://localhost:5029/api/projects')

      if (!response.ok) {
        throw new Error('Unable to load projects.')
      }

      const data: Project[] = await response.json()
      setProjects(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  loadProjects()
}, [])

  return (
    <div>
      {loading && <p>Loading projects...</p>}
      {error && <p>{error}</p>}
      <h1>IT Project Management Portfolio</h1>

      <h2>Project Management Artifacts</h2>

      {!loading && !error && projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p><strong>Category:</strong> {project.category}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App