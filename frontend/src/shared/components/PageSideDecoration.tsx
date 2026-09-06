import './PageSideDecoration.css'

export function PageSideDecoration() {
  return (
    <div
      className="page-side-decoration"
      aria-hidden="true"
    >
      {/* LEFT SIDE */}
      <div className="page-side-decoration__panel page-side-decoration__panel--left" />

      <span className="page-side-decoration__line page-side-decoration__line--left" />

      <span className="page-side-decoration__dots page-side-decoration__dots--left" />

      <span className="page-side-decoration__circle page-side-decoration__circle--left-top" />

      <span className="page-side-decoration__circle page-side-decoration__circle--left-outline" />

      <span className="page-side-decoration__glow page-side-decoration__glow--left" />

      {/* RIGHT SIDE */}
      <div className="page-side-decoration__panel page-side-decoration__panel--right" />

      <span className="page-side-decoration__line page-side-decoration__line--right" />

      <span className="page-side-decoration__dots page-side-decoration__dots--right" />

      <span className="page-side-decoration__circle page-side-decoration__circle--right-top" />

      <span className="page-side-decoration__circle page-side-decoration__circle--right-outline" />

      <span className="page-side-decoration__glow page-side-decoration__glow--right" />
    </div>
  )
}