import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Navigation } from './Navigation'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">

        <Link
          className="site-header__brand"
          to="/"
          aria-label="Karthick — Home"
        >
          <span className="site-header__brand-mark" aria-hidden="true">
            K
          </span>

          <span className="site-header__brand-name">
            Karthick
          </span>
        </Link>

        <button
          className="site-header__menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation-panel"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>

        <div
          id="primary-navigation-panel"
          className={`site-header__navigation ${
            menuOpen ? 'is-open' : ''
          }`}
        >
          <Navigation />

          <Link
            className="site-header__cta"
            to="/contact"
          >
            Let&apos;s Connect
          </Link>
        </div>

      </div>
    </header>
  )
}