import type { Project } from '../../projects/types'
import { Link } from 'react-router-dom'
import './FeaturedProject.css'

type FeaturedProjectProps = {
  project?: Project
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  if (!project) {
    return null
  }

  return (
    <section
      className="featured-project-section"
      aria-labelledby="featured-project-heading"
    >
      <div className="featured-project-section__inner">
        <div className="featured-project-section__content">
          <p className="featured-project-section__eyebrow">
            Featured Project
          </p>

          <h2 id="featured-project-heading">
            {project.title}
          </h2>

          <p className="featured-project-section__summary">
            {project.summary}
          </p>

          <div
            className="featured-project-section__tags"
            aria-label="Project details"
          >
            <span>{project.category}</span>
            <span>Technical Project</span>
            <span>{project.status}</span>
          </div>

          <Link
  className="featured-project-section__link"
  to="/projects"
  aria-label={`View project details for ${project.title}`}
>
  View Project Details
  <span aria-hidden="true"> →</span>
</Link>
        </div>

        <div
          className="featured-project-visual"
          aria-label="PeopleFirst project delivery dashboard"
        >
          <div className="featured-project-visual__header">
            <div>
              <p>PeopleFirst Portal</p>
              <strong>Project Delivery Overview</strong>
            </div>

            <span className="featured-project-visual__status">
              {project.status}
            </span>
          </div>

          <div className="featured-project-visual__progress">
            <div>
              <span>Planning</span>
              <strong>Complete</strong>
            </div>

            <div>
              <span>Delivery</span>
              <strong>In Progress</strong>
            </div>

            <div>
              <span>Quality</span>
              <strong>Active</strong>
            </div>
          </div>

          <div className="featured-project-visual__grid">
            <div className="featured-project-visual__card">
              <span>Delivery Model</span>
              <strong>Hybrid Agile</strong>
            </div>

            <div className="featured-project-visual__card">
              <span>Role</span>
              <strong>TPM / Scrum Master</strong>
            </div>

            <div className="featured-project-visual__card">
              <span>Governance</span>
              <strong>Active</strong>
            </div>

            <div className="featured-project-visual__card">
              <span>Risk Management</span>
              <strong>Tracked</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}