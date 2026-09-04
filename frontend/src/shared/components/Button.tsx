import { Link } from 'react-router-dom'
import './Button.css'

type ButtonProps = {
  children: React.ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
}: ButtonProps) {
  const className = `button button--${variant}`

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}