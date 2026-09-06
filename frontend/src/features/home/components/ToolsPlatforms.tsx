import './ToolsPlatforms.css'

function JiraIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 3 24.5 11.5 16 20 7.5 11.5 16 3Z"
        fill="#2684FF"
      />
      <path
        d="M16 10.5 21.5 16 16 21.5 10.5 16 16 10.5Z"
        fill="#0052CC"
      />
      <path
        d="M16 17 20 21 16 25 12 21 16 17Z"
        fill="#2684FF"
      />
    </svg>
  )
}

function ClickUpIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8 18.5 16 25l8-6.5"
        fill="none"
        stroke="#7B68EE"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11.5C10.6 8.8 13 7.5 16 7.5s5.4 1.3 7.5 4"
        fill="none"
        stroke="#FF7A00"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function FigmaIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="8" y="3" width="8" height="8" rx="4" fill="#F24E1E" />
      <rect x="16" y="3" width="8" height="8" rx="4" fill="#FF7262" />
      <rect x="8" y="11" width="8" height="8" rx="4" fill="#A259FF" />
      <rect x="16" y="11" width="8" height="8" rx="4" fill="#1ABCFE" />
      <rect x="8" y="19" width="8" height="8" rx="4" fill="#0ACF83" />
    </svg>
  )
}

function ConfluenceIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M7 9c4.3 2.6 7.8 3.9 10.7 3.9 2.8 0 5.2-.9 7.3-2.6"
        fill="none"
        stroke="#2684FF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M25 23c-4.3-2.6-7.8-3.9-10.7-3.9-2.8 0-5.2.9-7.3 2.6"
        fill="none"
        stroke="#0052CC"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function VSCodeIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M22.5 4.5 11.8 13 6.5 9.1 3.5 12l5.1 4-5.1 4 3 2.9 5.3-3.9 10.7 8.5 6-2.8V7.3l-6-2.8Z"
        fill="#007ACC"
      />
      <path
        d="M22.5 10.2v11.6L15.2 16l7.3-5.8Z"
        fill="#ffffff"
        opacity="0.85"
      />
    </svg>
  )
}

function GenerativeAIIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 4c1.1 5 3.9 7.8 9 9-5.1 1.1-7.9 4-9 9-1.1-5-4-7.9-9-9 5-1.2 7.9-4 9-9Z"
        fill="#5B5FEF"
      />
      <path
        d="M24.5 19.5c.6 2.6 2.1 4.1 4.7 4.7-2.6.6-4.1 2.1-4.7 4.7-.6-2.6-2.1-4.1-4.7-4.7 2.6-.6 4.1-2.1 4.7-4.7Z"
        fill="#2684FF"
      />
    </svg>
  )
}

const tools = [
  { name: 'Jira', Icon: JiraIcon },
  { name: 'ClickUp', Icon: ClickUpIcon },
  { name: 'Figma', Icon: FigmaIcon },
  { name: 'Confluence', Icon: ConfluenceIcon },
  { name: 'VS Code', Icon: VSCodeIcon },
  { name: 'Generative AI', Icon: GenerativeAIIcon },
]

export function ToolsPlatforms() {
  return (
    <section
      className="tools-section"
      aria-labelledby="tools-heading"
    >
      <div className="tools-section__inner">
        <h2
          id="tools-heading"
          className="tools-section__heading"
        >
          Tools &amp; Platforms
        </h2>

        <div className="tools-section__grid">
          {tools.map(({ name, Icon }) => (
            <div
              className="tool-card"
              key={name}
            >
              <span
                className="tool-card__mark"
                aria-hidden="true"
              >
                <Icon />
              </span>

              <span className="tool-card__name">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}