import './NetworkPattern.css'

type NetworkPatternProps = {
  position: 'left' | 'right'
  variant?: 'standard' | 'subtle'
  className?: string
}

export function NetworkPattern({
  position,
  variant = 'standard',
  className = '',
}: NetworkPatternProps) {
  return (
    <svg
      className={[
        'network-pattern',
        `network-pattern--${position}`,
        `network-pattern--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      viewBox="0 0 360 620"
      aria-hidden="true"
      focusable="false"
    >
      <g className="network-pattern__lines">
        <line x1="36" y1="55" x2="112" y2="92" />
        <line x1="112" y1="92" x2="190" y2="54" />
        <line x1="190" y1="54" x2="275" y2="96" />
        <line x1="275" y1="96" x2="330" y2="62" />

        <line x1="36" y1="55" x2="72" y2="150" />
        <line x1="112" y1="92" x2="72" y2="150" />
        <line x1="112" y1="92" x2="158" y2="170" />
        <line x1="190" y1="54" x2="158" y2="170" />
        <line x1="190" y1="54" x2="238" y2="150" />
        <line x1="275" y1="96" x2="238" y2="150" />
        <line x1="275" y1="96" x2="322" y2="176" />

        <line x1="72" y1="150" x2="42" y2="235" />
        <line x1="72" y1="150" x2="132" y2="235" />
        <line x1="158" y1="170" x2="132" y2="235" />
        <line x1="158" y1="170" x2="214" y2="250" />
        <line x1="238" y1="150" x2="214" y2="250" />
        <line x1="238" y1="150" x2="300" y2="248" />
        <line x1="322" y1="176" x2="300" y2="248" />

        <line x1="42" y1="235" x2="92" y2="326" />
        <line x1="132" y1="235" x2="92" y2="326" />
        <line x1="132" y1="235" x2="170" y2="330" />
        <line x1="214" y1="250" x2="170" y2="330" />
        <line x1="214" y1="250" x2="258" y2="338" />
        <line x1="300" y1="248" x2="258" y2="338" />
        <line x1="300" y1="248" x2="338" y2="325" />

        <line x1="92" y1="326" x2="48" y2="410" />
        <line x1="92" y1="326" x2="142" y2="420" />
        <line x1="170" y1="330" x2="142" y2="420" />
        <line x1="170" y1="330" x2="220" y2="410" />
        <line x1="258" y1="338" x2="220" y2="410" />
        <line x1="258" y1="338" x2="310" y2="430" />
        <line x1="338" y1="325" x2="310" y2="430" />

        <line x1="48" y1="410" x2="92" y2="500" />
        <line x1="142" y1="420" x2="92" y2="500" />
        <line x1="142" y1="420" x2="180" y2="520" />
        <line x1="220" y1="410" x2="180" y2="520" />
        <line x1="220" y1="410" x2="268" y2="510" />
        <line x1="310" y1="430" x2="268" y2="510" />

        <line x1="92" y1="500" x2="150" y2="580" />
        <line x1="180" y1="520" x2="150" y2="580" />
        <line x1="180" y1="520" x2="245" y2="585" />
        <line x1="268" y1="510" x2="245" y2="585" />

        <line x1="72" y1="150" x2="158" y2="170" />
        <line x1="158" y1="170" x2="238" y2="150" />
        <line x1="42" y1="235" x2="132" y2="235" />
        <line x1="132" y1="235" x2="214" y2="250" />
        <line x1="214" y1="250" x2="300" y2="248" />
        <line x1="92" y1="326" x2="170" y2="330" />
        <line x1="170" y1="330" x2="258" y2="338" />
        <line x1="48" y1="410" x2="142" y2="420" />
        <line x1="142" y1="420" x2="220" y2="410" />
        <line x1="220" y1="410" x2="310" y2="430" />
      </g>

      <g className="network-pattern__nodes">
        <circle cx="36" cy="55" r="3" />
        <circle cx="112" cy="92" r="3.5" />
        <circle cx="190" cy="54" r="3" />
        <circle cx="275" cy="96" r="3.5" />
        <circle cx="330" cy="62" r="3" />

        <circle cx="72" cy="150" r="3" />
        <circle cx="158" cy="170" r="4" />
        <circle cx="238" cy="150" r="3" />
        <circle cx="322" cy="176" r="3" />

        <circle cx="42" cy="235" r="3" />
        <circle cx="132" cy="235" r="3.5" />
        <circle cx="214" cy="250" r="4" />
        <circle cx="300" cy="248" r="3.5" />

        <circle cx="92" cy="326" r="3" />
        <circle cx="170" cy="330" r="4" />
        <circle cx="258" cy="338" r="3" />
        <circle cx="338" cy="325" r="3" />

        <circle cx="48" cy="410" r="3" />
        <circle cx="142" cy="420" r="3.5" />
        <circle cx="220" cy="410" r="4" />
        <circle cx="310" cy="430" r="3" />

        <circle cx="92" cy="500" r="3" />
        <circle cx="180" cy="520" r="3.5" />
        <circle cx="268" cy="510" r="3" />

        <circle cx="150" cy="580" r="3" />
        <circle cx="245" cy="585" r="3" />
      </g>
    </svg>
  )
}