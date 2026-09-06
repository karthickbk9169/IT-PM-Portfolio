import './SideDecoration.css'

type SideDecorationProps = {
  intensity?: 'light' | 'medium'
}

export function SideDecoration({
  intensity = 'medium',
}: SideDecorationProps) {
  return (
    <div
      className={`side-decoration side-decoration--${intensity}`}
      aria-hidden="true"
    >
      <div className="side-decoration__left">
        <span className="side-decoration__wash" />

        <span className="side-decoration__line side-decoration__line--left-one" />
        <span className="side-decoration__line side-decoration__line--left-two" />

        <span className="side-decoration__dots side-decoration__dots--left" />
      </div>

      <div className="side-decoration__right">
        <span className="side-decoration__wash" />

        <span className="side-decoration__line side-decoration__line--right-one" />
        <span className="side-decoration__line side-decoration__line--right-two" />

        <span className="side-decoration__dots side-decoration__dots--right" />
      </div>
    </div>
  )
}