import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Layers3,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import type { Project } from './types'

import { PageSideDecoration } from '../../shared/components/PageSideDecoration'

import './ProjectsPage.css'

const peopleFirstTags = [
  'Project Governance',
  'Agile / Scrum',
  'Risk & Issue Management',
  'Quality & Testing',
]

const portfolioTags = [
  'React / TypeScript',
  'ASP.NET Core',
  'SQL Server',
  'Git / GitHub',
  'Azure',
  'Generative AI',
]

type ProjectsPageProps = {
  projects: Project[]
  loading: boolean
  error: string | null
}

export function ProjectsPage({
  projects,
  loading,
  error,
}: ProjectsPageProps) {
  const peopleFirstProject = projects.find(
    (project) =>
      project.title
        .toLowerCase()
        .includes('peoplefirst'),
  )

  const portfolioProject = projects.find(
    (project) =>
      project.title
        .toLowerCase()
        .includes('portfolio'),
  )

  return (
    <main className="projects-page">
      <PageSideDecoration />

      <div className="projects-page__content">

        {/* =====================================================
            PAGE INTRO
            ===================================================== */}

        <section
          className="projects-intro"
          aria-labelledby="projects-heading"
        >
          <div className="projects-section__inner">
            <h1 id="projects-heading">
              Project Delivery
              <span> in Practice.</span>
            </h1>

            <p className="projects-intro__lead">
              Explore projects that demonstrate structured project
              management, Agile delivery, stakeholder coordination,
              technical understanding, quality practices, and
              end-to-end ownership.
            </p>
          </div>
        </section>


        {/* =====================================================
            PROJECT DATA STATUS
            ===================================================== */}

        {loading && (
          <section
            className="projects-data-state"
            aria-live="polite"
          >
            <div className="projects-section__inner">
              <p>
                Loading project information...
              </p>
            </div>
          </section>
        )}

        {!loading && error && (
          <section
            className="projects-data-state projects-data-state--error"
            role="alert"
          >
            <div className="projects-section__inner">
              <p>
                {error}
              </p>
            </div>
          </section>
        )}


        {/* =====================================================
            PEOPLEFIRST
            ===================================================== */}

        {!loading && !error && peopleFirstProject && (
          <section
            className="projects-showcase"
            aria-labelledby="peoplefirst-heading"
          >
            <div className="projects-section__inner">
              <article className="project-case project-case--featured">

                <div className="project-case__content">
                  <p className="project-case__eyebrow">
                    Featured Case Study
                  </p>

                  <h2 id="peoplefirst-heading">
                    {peopleFirstProject.title}
                  </h2>

                  <div className="project-case__meta">
                    <span>
                      <BriefcaseBusiness
                        size={16}
                        aria-hidden="true"
                      />
                      {peopleFirstProject.category}
                    </span>

                    <span>
                      <UsersRound
                        size={16}
                        aria-hidden="true"
                      />
                      {peopleFirstProject.role}
                    </span>

                    <span className="project-case__status">
                      <span
                        className="project-case__status-dot"
                        aria-hidden="true"
                      />
                      {peopleFirstProject.status}
                    </span>
                  </div>

                  <p className="project-case__summary">
                    {peopleFirstProject.summary}
                  </p>

                  <div
                    className="project-case__tags"
                    aria-label="PeopleFirst project capabilities"
                  >
                    {peopleFirstTags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/projects/peoplefirst"
                    className="project-case__link"
                  >
                    View Case Study

                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                    />
                  </Link>
                </div>


                {/* =================================================
                    PEOPLEFIRST VISUAL
                    ================================================= */}

                <div
                  className="project-case__visual"
                  aria-hidden="true"
                >
                  <div className="peoplefirst-preview">

                    <div className="peoplefirst-preview__header">
                      <div className="peoplefirst-preview__brand">
                        <span className="peoplefirst-preview__logo">
                          PF
                        </span>

                        <div>
                          <strong>
                            PeopleFirst
                          </strong>

                          <span>
                            Employee Portal
                          </span>
                        </div>
                      </div>

                      <span className="peoplefirst-preview__avatar">
                        KB
                      </span>
                    </div>


                    <div className="peoplefirst-preview__body">

                      <aside className="peoplefirst-preview__sidebar">
                        <span className="is-active">
                          Dashboard
                        </span>

                        <span>
                          My Requests
                        </span>

                        <span>
                          Services
                        </span>

                        <span>
                          Documents
                        </span>
                      </aside>


                      <div className="peoplefirst-preview__main">

                        <div className="peoplefirst-preview__welcome">
                          <span>
                            Welcome back
                          </span>

                          <strong>
                            Employee Dashboard
                          </strong>
                        </div>


                        <div className="peoplefirst-preview__stats">

                          <div>
                            <strong>
                              04
                            </strong>

                            <span>
                              Open Requests
                            </span>
                          </div>


                          <div>
                            <strong>
                              02
                            </strong>

                            <span>
                              Pending Approvals
                            </span>
                          </div>


                          <div>
                            <strong>
                              12
                            </strong>

                            <span>
                              Available Services
                            </span>
                          </div>

                        </div>


                        <div className="peoplefirst-preview__panels">

                          <div className="peoplefirst-preview__panel">
                            <span>
                              My Requests
                            </span>

                            <i />
                            <i />
                            <i />
                          </div>


                          <div className="peoplefirst-preview__panel">
                            <span>
                              Quick Actions
                            </span>

                            <div className="peoplefirst-preview__actions">
                              <b />
                              <b />
                              <b />
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </article>
            </div>
          </section>
        )}


        {/* =====================================================
            PORTFOLIO PLATFORM
            ===================================================== */}

        {!loading && !error && portfolioProject && (
          <section
            className="projects-showcase projects-showcase--secondary"
            aria-labelledby="portfolio-project-heading"
          >
            <div className="projects-section__inner">
              <article className="project-case project-case--technical">

                <div className="project-case__content">
                  <p className="project-case__eyebrow">
                    Full-Stack Portfolio Project
                  </p>

                  <h2 id="portfolio-project-heading">
                    {portfolioProject.title}
                  </h2>

                  <div className="project-case__meta">

                    <span>
                      <Layers3
                        size={16}
                        aria-hidden="true"
                      />

                      {portfolioProject.category}
                    </span>


                    <span>
                      <Code2
                        size={16}
                        aria-hidden="true"
                      />

                      {portfolioProject.role}
                    </span>


                    <span className="project-case__status">
                      <span
                        className="project-case__status-dot"
                        aria-hidden="true"
                      />

                      {portfolioProject.status}
                    </span>

                  </div>


                  <p className="project-case__summary">
                    {portfolioProject.summary}
                  </p>


                  <p className="project-case__ai-note">
                    <Sparkles
                      size={17}
                      aria-hidden="true"
                    />

                    <span>
                      AI-assisted planning, development support,
                      troubleshooting, documentation, and review were
                      incorporated throughout the project while
                      implementation and validation remained human-led.
                    </span>
                  </p>


                  <div
                    className="project-case__tags"
                    aria-label="Portfolio platform technologies"
                  >
                    {portfolioTags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>


                  <Link
                    to="/projects/portfolio-platform"
                    className="project-case__link"
                  >
                    View Case Study

                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                    />
                  </Link>
                </div>


                {/* =================================================
                    ARCHITECTURE VISUAL
                    ================================================= */}

                <div
                  className="project-case__visual"
                  aria-hidden="true"
                >
                  <div className="architecture-preview">
                    <p>
                      Solution Architecture
                    </p>


                    <div className="architecture-preview__flow">

                      <div className="architecture-preview__node">
                        <span>
                          <Code2 />
                        </span>

                        <strong>
                          React
                        </strong>

                        <small>
                          TypeScript
                        </small>
                      </div>


                      <span className="architecture-preview__arrow">
                        →
                      </span>


                      <div className="architecture-preview__node">
                        <span>
                          <Layers3 />
                        </span>

                        <strong>
                          ASP.NET Core
                        </strong>

                        <small>
                          REST API
                        </small>
                      </div>


                      <span className="architecture-preview__arrow">
                        →
                      </span>


                      <div className="architecture-preview__node">
                        <span>
                          <Database />
                        </span>

                        <strong>
                          SQL Server
                        </strong>

                        <small>
                          EF Core
                        </small>
                      </div>

                    </div>


                    <div className="architecture-preview__delivery">

                      <div>
                        <GitBranch />
                        <span>
                          Git / GitHub
                        </span>
                      </div>


                      <div>
                        <ShieldCheck />
                        <span>
                          Quality &amp; Accessibility
                        </span>
                      </div>


                      <div>
                        <CheckCircle2 />
                        <span>
                          Azure Deployment
                        </span>
                      </div>

                    </div>
                  </div>
                </div>

              </article>
            </div>
          </section>
        )}


        {/* =====================================================
            EMPTY STATE
            ===================================================== */}

        {!loading &&
          !error &&
          projects.length === 0 && (
            <section
              className="projects-data-state"
              aria-live="polite"
            >
              <div className="projects-section__inner">
                <p>
                  No project information is currently available.
                </p>
              </div>
            </section>
          )}


        {/* =====================================================
            PROJECT PHILOSOPHY
            ===================================================== */}

        {!loading && !error && projects.length > 0 && (
          <section
            className="projects-principles"
            aria-labelledby="projects-principles-heading"
          >
            <div className="projects-section__inner">
              <div className="projects-principles__panel">

                <div>
                  <p className="project-case__eyebrow">
                    Delivery Approach
                  </p>

                  <h2 id="projects-principles-heading">
                    From Requirements to Working Outcomes
                  </h2>

                  <p>
                    These projects are used to demonstrate practical
                    application of project-management disciplines
                    alongside modern software-delivery concepts—not
                    simply to display finished screens.
                  </p>
                </div>


                <div className="projects-principles__steps">
                  <span>
                    Plan
                  </span>

                  <i />

                  <span>
                    Coordinate
                  </span>

                  <i />

                  <span>
                    Execute
                  </span>

                  <i />

                  <span>
                    Validate
                  </span>

                  <i />

                  <span>
                    Deliver
                  </span>
                </div>

              </div>
            </div>
          </section>
        )}

      </div>
    </main>
  )
}