import './Hero.css'
import { Button } from '../../../shared/components/Button'
import { HeroDashboard } from './HeroDashboard'

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-section__inner">
        <div className="hero-section__content">
          <p className="hero-section__eyebrow">
            Technical Project Manager / Scrum Master
          </p>

          <h1 id="hero-heading">
            Delivering IT Projects That Drive Business{' '}
           <span className="hero-section__highlight">Success.</span>
          </h1>

          <p className="hero-section__description">
            Technical Project Manager and Scrum Master with extensive leadership
            and project experience, combining structured project governance,
            Agile delivery and practical technical understanding.
          </p>

          <div
            className="hero-section__actions"
            aria-label="Portfolio actions"
          >
            <Button to="/projects">View Projects</Button>
            <Button to="/artifacts" variant="secondary">View Artifacts</Button>
          </div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  )
}