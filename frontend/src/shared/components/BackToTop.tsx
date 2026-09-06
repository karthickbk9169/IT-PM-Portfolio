import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

import './BackToTop.css'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion
        ? 'auto'
        : 'smooth',
    })
  }

  return (
    <button
      type="button"
      className={`back-to-top ${
        isVisible ? 'back-to-top--visible' : ''
      }`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp
        size={20}
        strokeWidth={2.2}
        aria-hidden="true"
      />
    </button>
  )
}