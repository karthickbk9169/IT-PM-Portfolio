import {
  BriefcaseBusiness,
  FileText,
} from 'lucide-react'

import './Hero.css'
import { Button } from '../../../shared/components/Button'
import { HeroDashboard } from './HeroDashboard'

export function Hero() {
  return (
    <section
      className="hero-section"
      aria-labelledby="hero-heading"
    >
      <div className="hero-section__inner">
        <div className="hero-section__content">
          <p className="hero-section__eyebrow">
            Technical Project Management / Scrum Delivery
          </p>

          <h1 id="hero-heading">
            Delivering IT Projects That Drive Business{' '}
            <span className="hero-section__highlight">
              Success.
            </span>
          </h1>

          <p className="hero-section__description">
            Project and people leader transitioning into Technical Project Management,
            combining extensive leadership and project experience with structured project
            governance, Agile delivery, and practical technical understanding.
          </p>

          <div
            className="hero-section__actions"
            aria-label="Portfolio actions"
          >
            <Button to="/projects">
              <BriefcaseBusiness
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />

              <span>View Projects</span>
            </Button>

            <Button
              to="/artifacts"
              variant="secondary"
            >
              <FileText
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />

              <span>View Artifacts</span>
            </Button>
          </div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  )
}