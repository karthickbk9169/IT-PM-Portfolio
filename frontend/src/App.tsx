import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import type { Project } from './features/projects/types'
import { getProjects } from './features/projects/api'

import { PageShell } from './shared/layouts/PageShell'
import { HomePage } from './features/home/HomePage'
import { AboutPage } from './features/about/AboutPage'
import { ProjectsPage } from './features/projects/ProjectsPage'
import { ArtifactsPage } from './features/artifacts/ArtifactsPage'
import { ContactPage } from './features/contact/ContactPage'
import { PeopleFirstCaseStudyPage } from './features/projects/PeopleFirstCaseStudyPage'
import { PortfolioPlatformCaseStudyPage } from './features/projects/PortfolioPlatformCaseStudyPage'

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
        setError(
          err instanceof Error
            ? err.message
            : 'Something went wrong.',
        )
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  return (
  <PageShell>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/projects"
          element={
            <ProjectsPage
              projects={projects}
              loading={loading}
              error={error}
            />
          }
        />

        <Route
          path="/projects/peoplefirst"
          element={<PeopleFirstCaseStudyPage />}
        />

        <Route
          path="/projects/portfolio-platform"
          element={<PortfolioPlatformCaseStudyPage />}
        />

        <Route
          path="/artifacts"
          element={<ArtifactsPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>
    </PageShell>
  )
}

export default App