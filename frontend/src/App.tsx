import { useEffect, useState } from 'react'
import './App.css'
import type { Project } from './features/projects/types'
import { getProjects } from './features/projects/api'
import { ProjectList } from './features/projects/ProjectList'

function App() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
const [error, setError] = useState<string | null>(null)

  useEffect(() => {
  const loadProjects = async () => {
    try {
      const data = await getProjects()
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

      {!loading && !error && <ProjectList projects={projects} />}
    </div>
  )
}

export default App