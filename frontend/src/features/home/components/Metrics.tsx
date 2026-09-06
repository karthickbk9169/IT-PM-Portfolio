import {
  Award,
  UsersRound,
  ShieldCheck,
  BadgeCheck,
} from 'lucide-react'

import './Metrics.css'

const metrics = [
  {
    value: '16',
    suffix: 'Years',
    label: 'Leadership & Project Experience',
    icon: Award,
  },
  {
    value: '7+',
    suffix: '',
    label: 'Major Clients Supported',
    icon: UsersRound,
  },
  {
    value: '10+',
    suffix: 'Years',
    label: 'Senior Team Leadership',
    icon: ShieldCheck,
  },
  {
    value: '3',
    suffix: '',
    label: 'Professional & Technology Credentials',
    icon: BadgeCheck,
  },
]

export function Metrics() {
  return (
    <section
      className="metrics-section"
      aria-labelledby="metrics-heading"
    >
      <h2
        id="metrics-heading"
        className="visually-hidden"
      >
        Professional experience highlights
      </h2>

      <div className="metrics-section__inner">
        {metrics.map((metric) => {
          const Icon = metric.icon

          return (
            <div
              className="metric"
              key={metric.label}
            >
              <div
                className="metric__icon"
                aria-hidden="true"
              >
                <Icon
                  size={30}
                  strokeWidth={1.8}
                />
              </div>

              <div className="metric__content">
                <div className="metric__value-row">
                  <strong className="metric__value">
                    {metric.value}
                  </strong>

                  {metric.suffix && (
                    <span className="metric__suffix">
                      {metric.suffix}
                    </span>
                  )}
                </div>

                <span className="metric__label">
                  {metric.label}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}