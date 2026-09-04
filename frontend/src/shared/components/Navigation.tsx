import { NavLink } from 'react-router-dom'
import './Navigation.css'

export function Navigation() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'primary-navigation__link is-active' : 'primary-navigation__link'

  return (
    <nav className="primary-navigation" aria-label="Primary navigation">
      <NavLink to="/" end className={getNavLinkClass}>
        Home
      </NavLink>

      <NavLink to="/about" className={getNavLinkClass}>
        About
      </NavLink>

      <NavLink to="/projects" className={getNavLinkClass}>
        Projects
      </NavLink>

      <NavLink to="/artifacts" className={getNavLinkClass}>
        Artifacts
      </NavLink>

      <NavLink to="/contact" className={getNavLinkClass}>
        Contact
      </NavLink>
    </nav>
  )
}