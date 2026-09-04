import { Link } from 'react-router-dom'
import './AboutPreview.css'

export function AboutPreview() {
  return (
    <section className="about-preview-section">
      <div className="about-preview-section__inner">
        <div className="about-preview-section__content">
          <p className="about-preview-section__eyebrow">
            Professional Journey
          </p>

          <h2>
            Leadership Experience Evolving Into Technical Project Delivery
          </h2>

          <p>
            I bring extensive experience in team leadership, project
            coordination, stakeholder management, quality, and delivery
            operations, complemented by growing hands-on experience in IT
            project management and software delivery.
          </p>

          <Link className="about-preview-section__link" to="/about">
            More About Me →
          </Link>
        </div>
      </div>
    </section>
  )
}