import { Link } from 'react-router-dom'
import './ArtifactPreview.css'

const artifacts = [
  'Project Charter',
  'Project Management Plan',
  'Risk Register',
  'Quality Management Plan',
]

export function ArtifactPreview() {
  return (
    <section className="artifact-preview-section">
      <div className="artifact-preview-section__inner">
        <div className="artifact-preview-section__heading">
          <p className="artifact-preview-section__eyebrow">
            Project Artifacts
          </p>

          <h2>Documentation That Supports Delivery</h2>

          <p>
            Selected project-management artifacts demonstrating structured
            planning, governance, risk management, and quality control.
          </p>
        </div>

        <div className="artifact-preview-section__grid">
          {artifacts.map((artifact) => (
            <div className="artifact-preview-card" key={artifact}>
              <h3>{artifact}</h3>
            </div>
          ))}
        </div>

        <Link
          className="artifact-preview-section__link"
          to="/artifacts"
        >
          View All Artifacts →
        </Link>
      </div>
    </section>
  )
}