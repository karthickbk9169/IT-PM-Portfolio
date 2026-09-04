import './Metrics.css'

const metrics = [
  {
    value: '16 Years',
    label: 'Leadership & Project Experience',
  },
  {
    value: '7+',
    label: 'Major Clients Supported',
  },
  {
    value: '10+ Years',
    label: 'Senior Team Leadership',
  },
  {
    value: '3',
    label: 'Professional & Technology Credentials',
  },
]

export function Metrics() {
  return (
    <section
      className="metrics-section"
      aria-labelledby="metrics-heading"
    >
      <h2 id="metrics-heading" className="visually-hidden">
        Professional experience highlights
      </h2>

      <div className="metrics-section__inner">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong className="metric__value">{metric.value}</strong>
            <span className="metric__label">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}