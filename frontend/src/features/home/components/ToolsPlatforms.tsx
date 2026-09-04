import './ToolsPlatforms.css'

const tools = [
  { name: 'Jira', mark: 'J' },
  { name: 'ClickUp', mark: 'C' },
  { name: 'Figma', mark: 'F' },
  { name: 'Confluence', mark: 'C' },
  { name: 'VS Code', mark: 'VS' },
  { name: 'Generative AI', mark: 'AI' },
]

export function ToolsPlatforms() {
  return (
    <section
      className="tools-section"
      aria-labelledby="tools-heading"
    >
      <div className="tools-section__inner">
        <h2 id="tools-heading" className="tools-section__heading">
          Tools &amp; Platforms
        </h2>

        <div className="tools-section__grid">
          {tools.map((tool) => (
            <div className="tool-card" key={tool.name}>
              <span
                className="tool-card__mark"
                aria-hidden="true"
              >
                {tool.mark}
              </span>

              <span className="tool-card__name">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}