export function HeroDashboard() {
  return (
    <div
      className="hero-dashboard"
      aria-label="Project lifecycle and delivery dashboard"
    >
      <div className="hero-dashboard__card hero-dashboard__lifecycle">
        <p className="hero-dashboard__label">Project Lifecycle</p>

        <div className="hero-dashboard__steps">
          <span>Initiate</span>
          <span>Plan</span>
          <span>Execute</span>
          <span>Monitor</span>
          <span>Close</span>
        </div>
      </div>

      <div className="hero-dashboard__grid">
        <div className="hero-dashboard__card">
          <p className="hero-dashboard__label">Project Status</p>
          <strong className="hero-dashboard__status">
            <span
              className="hero-dashboard__status-dot"
              aria-hidden="true"
            />
            On Track
          </strong>
        </div>

        <div className="hero-dashboard__card">
          <p className="hero-dashboard__label">Team</p>
          <strong>Cross-Functional</strong>
        </div>

        <div className="hero-dashboard__card">
          <p className="hero-dashboard__label">Delivery Approach</p>
          <strong>Agile</strong>
        </div>

        <div className="hero-dashboard__card">
          <p className="hero-dashboard__label">Risk Control</p>
          <strong>Active</strong>
        </div>
      </div>
    </div>
  )
}