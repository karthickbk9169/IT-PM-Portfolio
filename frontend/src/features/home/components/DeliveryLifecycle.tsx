import './DeliveryLifecycle.css'

const lifecycleSteps = [
  'Initiate',
  'Plan',
  'Design',
  'Deliver',
  'Test',
  'Deploy',
  'Close',
]

export function DeliveryLifecycle() {
  return (
    <section className="lifecycle-section">
      <div className="lifecycle-section__inner">
        <div className="lifecycle-section__heading">
          <p className="lifecycle-section__eyebrow">How I Deliver Projects</p>

          <h2>Structured Delivery Across the Project Lifecycle</h2>

          <p>
            A disciplined approach that connects business needs, technical
            execution, quality, and delivery governance from initiation through
            closure.
          </p>
        </div>

        <div className="lifecycle-section__steps">
          {lifecycleSteps.map((step, index) => (
            <div className="lifecycle-step" key={step}>
              <span className="lifecycle-step__number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}