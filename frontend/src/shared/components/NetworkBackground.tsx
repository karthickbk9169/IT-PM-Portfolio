import './NetworkBackground.css'

type NetworkBackgroundProps = {
  intensity?: 'strong' | 'medium' | 'light'
}

export function NetworkBackground({
  intensity = 'medium',
}: NetworkBackgroundProps) {
  return (
    <div
      className={`network-background network-background--${intensity}`}
      aria-hidden="true"
    >
      <div
        className="
          network-background__field
          network-background__field--primary
        "
      />

      <div
        className="
          network-background__field
          network-background__field--secondary
        "
      />
    </div>
  )
}