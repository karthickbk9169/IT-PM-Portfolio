import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { Header } from '../components/Header'
import { BackToTop } from '../components/BackToTop'
import './PageShell.css'

type PageShellProps = {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="page-shell">
      <Header />

      <main>
        {children}
      </main>

      <BackToTop />

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__content">

            <div className="site-footer__brand">
              <Link
                className="site-footer__brand-link"
                to="/"
                aria-label="Karthick — Home"
              >
                <span
                  className="site-footer__brand-mark"
                  aria-hidden="true"
                >
                  <span className="site-footer__brand-shape site-footer__brand-shape--left" />
                  <span className="site-footer__brand-shape site-footer__brand-shape--right" />
                </span>

                <span className="site-footer__brand-name">
                  Karthick
                </span>
              </Link>

              <p>
                Delivering IT Projects That Drive Business Success.
              </p>

              <a
                className="site-footer__linkedin"
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true">in</span>
                <span>LinkedIn</span>
              </a>
            </div>

            <nav
              className="site-footer__column"
              aria-label="Footer navigation"
            >
              <h2>Quick Links</h2>

              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/artifacts">Artifacts</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            <div className="site-footer__column">
              <h2>Expertise</h2>

              <span>Project Delivery</span>
              <span>Agile &amp; Scrum</span>
              <span>Risk Management</span>
              <span>Technical Delivery</span>
            </div>

            <div className="site-footer__connect">
              <h2>Let&apos;s Connect</h2>

              <p>
                Open to Technical Project Manager / Scrum Master
                opportunities.
              </p>

              <Link
                className="site-footer__cta"
                to="/contact"
              >
                <Mail size={17} aria-hidden="true" />
                <span>Get In Touch</span>
              </Link>
            </div>

          </div>

          <div className="site-footer__bottom">
            <p>© 2026 Karthick. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}