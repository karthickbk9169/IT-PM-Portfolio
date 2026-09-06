import {
  Rocket,
  CalendarDays,
  ClipboardList,
  ChartNoAxesCombined,
  Flag,
  Users,
  CircleDashed,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react'

export function HeroDashboard() {
  const lifecycle = [
    { label: 'Initiate', Icon: Rocket },
    { label: 'Plan', Icon: CalendarDays },
    { label: 'Execute', Icon: ClipboardList },
    { label: 'Monitor', Icon: ChartNoAxesCombined },
    { label: 'Close', Icon: Flag },
  ]

  return (
    <div
      className="hero-dashboard"
      aria-label="Project lifecycle and delivery dashboard"
    >
      <div className="hero-dashboard__card hero-dashboard__lifecycle">
        <p className="hero-dashboard__label">Project Lifecycle</p>

        <div className="hero-dashboard__steps">
          {lifecycle.map((step, index) => {
            const Icon = step.Icon

            return (
              <div
                className="hero-dashboard__step-group"
                key={step.label}
              >
                <div className="hero-dashboard__step">
                  <Icon
                    className="hero-dashboard__step-icon"
                    size={30}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <span>{step.label}</span>
                </div>

                {index < lifecycle.length - 1 && (
                  <ChevronRight
                    className="hero-dashboard__step-arrow"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="hero-dashboard__grid">
        <div className="hero-dashboard__card hero-dashboard__summary-card">
          <Users
            className="hero-dashboard__summary-icon"
            size={34}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <div>
            <p className="hero-dashboard__label">Project Status</p>

            <strong className="hero-dashboard__status">
              <span
                className="hero-dashboard__status-dot"
                aria-hidden="true"
              />
              On Track
            </strong>
          </div>
        </div>

        <div className="hero-dashboard__card hero-dashboard__summary-card">
          <Users
            className="hero-dashboard__summary-icon"
            size={34}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <div>
            <p className="hero-dashboard__label">Team</p>
            <strong>Cross-Functional</strong>
          </div>
        </div>

        <div className="hero-dashboard__card hero-dashboard__summary-card">
          <CircleDashed
            className="hero-dashboard__summary-icon"
            size={34}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <div>
            <p className="hero-dashboard__label">Delivery Approach</p>
            <strong>Agile</strong>
          </div>
        </div>

        <div className="hero-dashboard__card hero-dashboard__summary-card">
          <ShieldCheck
            className="hero-dashboard__summary-icon"
            size={34}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <div>
            <p className="hero-dashboard__label">Risk Control</p>
            <strong>Active</strong>
          </div>
        </div>
      </div>
    </div>
  )
}