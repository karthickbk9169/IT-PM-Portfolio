import { useEffect, useState } from 'react'
import './App.css'

type Project = {
  id: number
  title: string
  category: string
  description: string
}

function App() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('http://localhost:5029/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error))
  }, [])

  return (
    <div>
      <h1>IT Project Management Portfolio</h1>

      <h2>Project Management Artifacts</h2>

      {projects.map(project => (
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