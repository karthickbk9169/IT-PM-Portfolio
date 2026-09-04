import { Link } from 'react-router-dom'
import './RecruiterContactCTA.css'

export function RecruiterContactCTA() {
  return (
    <section className="recruiter-cta-section">
      <div className="recruiter-cta-section__inner">
        <div className="recruiter-cta-section__content">
          <p className="recruiter-cta-section__eyebrow">
            Let&apos;s Connect
          </p>

          <h2>
            Recruiting for an IT Project Manager or Technical Project Manager?
          </h2>

          <p>
            I&apos;d be happy to connect and discuss relevant opportunities.
          </p>

          <Link
            className="recruiter-cta-section__link"
            to="/contact"
          >
            Contact Me →
          </Link>
        </div>
      </div>
    </section>
  )
}