import './CoreExpertise.css'

const expertise = [
  {
    title: 'Project Initiation',
    description: 'Define objectives, scope, and success criteria.',
    icon: '🚀',
    iconClass: 'expertise-card__icon--violet',
  },
  {
    title: 'Project Planning',
    description: 'Create plans, estimates, and roadmaps.',
    icon: '🗓️',
    iconClass: 'expertise-card__icon--blue',
  },
  {
    title: 'Project Execution',
    description: 'Lead delivery with Agile practices and teamwork.',
    icon: '✓',
    iconClass: 'expertise-card__icon--teal',
  },
  {
    title: 'Monitoring & Control',
    description: 'Track progress, manage risks, issues and ensure quality.',
    icon: '↗',
    iconClass: 'expertise-card__icon--cobalt',
  },
  {
    title: 'Stakeholder Management',
    description: 'Engage stakeholders and manage expectations.',
    icon: '👥',
    iconClass: 'expertise-card__icon--violet',
  },
  {
    title: 'Project Closure',
    description: 'Deliver results, capture learnings, and close.',
    icon: '⚑',
    iconClass: 'expertise-card__icon--magenta',
  },
]

export function CoreExpertise() {
  return (
    <section
      className="expertise-section"
      aria-labelledby="expertise-heading"
    >
      <div className="expertise-section__inner">
        <div className="expertise-section__heading">
          <p className="expertise-section__eyebrow">
            Core Expertise
          </p>

          <h2 id="expertise-heading">
            End-to-End Project Delivery
          </h2>

          <p>
            Practical project leadership across the full lifecycle,
            focusing on outcomes, quality, and stakeholder value.
          </p>
        </div>

        <div className="expertise-section__grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.title}>
              <span
                className={`expertise-card__icon ${item.iconClass}`}
                aria-hidden="true"
              >
                {item.icon}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}