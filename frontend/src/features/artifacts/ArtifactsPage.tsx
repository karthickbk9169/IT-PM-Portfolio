import {
  BookOpenCheck,
  Boxes,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  FileText,
  Gauge,
  ListChecks,
  Network,
  ShieldCheck,
  TriangleAlert,
  UsersRound,
} from 'lucide-react'

import { BackToTop } from '../../shared/components/BackToTop'
import { PageSideDecoration } from '../../shared/components/PageSideDecoration'

import './ArtifactsPage.css'

const peopleFirstArtifacts = [
  {
    title: 'Project Management Plan',
    type: 'Project Plan',
    category: 'Governance & Planning',
    description:
      'Defines the overall project-management approach for scope, schedule, stakeholders, communications, quality, risks, dependencies, and delivery governance.',
    icon: FileText,
  },
  {
    title: 'Project Schedule & Milestones',
    type: 'Schedule',
    category: 'Governance & Planning',
    description:
      'Provides visibility of major project phases, milestones, delivery activities, dependencies, and the planned implementation timeline.',
    icon: Gauge,
  },
  {
    title: 'Stakeholder Register',
    type: 'Stakeholders',
    category: 'Governance & Planning',
    description:
      'Identifies key stakeholders and supports structured consideration of their interests, influence, communication needs, and engagement approach.',
    icon: UsersRound,
  },
  {
    title: 'Communications Management Plan',
    type: 'Communications',
    category: 'Governance & Planning',
    description:
      'Defines project communication practices covering status reporting, Scrum events, stakeholder updates, technical discussions, and escalation.',
    icon: Network,
  },
  {
    title: 'Requirements Register',
    type: 'Requirements',
    category: 'Requirements & Scope',
    description:
      'Records functional and nonfunctional requirements for employees, managers, HR administrators, reporting, notifications, and supporting technical expectations.',
    icon: ListChecks,
  },
  {
    title: 'Business Analysis Document',
    type: 'Analysis',
    category: 'Requirements & Scope',
    description:
      'Connects the business problem and project objectives with scope, stakeholder needs, requirements, assumptions, and planned solution capabilities.',
    icon: FileSearch,
  },
  {
    title: 'Risk Register',
    type: 'Risk',
    category: 'Project Controls',
    description:
      'Tracks project risks, probability and impact, response actions, ownership, monitoring information, and escalation considerations.',
    icon: TriangleAlert,
  },
  {
    title: 'Issue Log',
    type: 'Issue',
    category: 'Project Controls',
    description:
      'Records current project problems requiring action, ownership, resolution, escalation, verification, and closure.',
    icon: ClipboardCheck,
  },
  {
    title: 'Assumptions Log',
    type: 'Assumption',
    category: 'Project Controls',
    description:
      'Maintains planning assumptions that require validation or continued monitoring during project delivery.',
    icon: BookOpenCheck,
  },
  {
    title: 'Dependencies Log',
    type: 'Dependency',
    category: 'Project Controls',
    description:
      'Tracks internal and external dependencies that may affect implementation, testing, security, environments, integrations, or release timing.',
    icon: Boxes,
  },
  {
    title: 'Technical Readiness Assessment',
    type: 'Technical',
    category: 'Technical & Quality',
    description:
      'Documents architecture, integrations, identity, environments, technical prerequisites, delivery dependencies, and readiness considerations.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality Management Plan',
    type: 'Quality',
    category: 'Technical & Quality',
    description:
      'Defines quality expectations, testing responsibilities, review activities, defect controls, acceptance considerations, and release-readiness practices.',
    icon: FileCheck2,
  },
]

const portfolioPlatformArtifacts = [
  {
    title: 'Solution Architecture Document',
    type: 'Architecture',
    description:
      'Documents the modular full-stack architecture, frontend and backend boundaries, database integration, design principles, and expansion approach.',
    icon: Network,
  },
  {
    title: 'Sprint Master Checklist',
    type: 'Delivery',
    description:
      'Provides a structured view of sprint activities, implementation checkpoints, delivery progress, and release-readiness tasks.',
    icon: ListChecks,
  },
  {
    title: 'Development Ecosystem Glossary',
    type: 'Technical Reference',
    description:
      'Captures the software-development concepts, tools, technologies, files, frameworks, and delivery terminology applied during the project.',
    icon: BookOpenCheck,
  },
]

export function ArtifactsPage() {
  return (
    <main className="artifacts-page">
      <PageSideDecoration />

      <div className="artifacts-page__content">

        {/* =====================================================
            HERO
            ===================================================== */}

        <section
          className="artifacts-hero"
          aria-labelledby="artifacts-heading"
        >
          <div className="artifacts-section__inner">

            <p className="artifacts-hero__eyebrow">
              Project Evidence
            </p>

            <h1 id="artifacts-heading">
              Project Artifacts
              <span> in Practice.</span>
            </h1>

            <p className="artifacts-hero__lead">
              Explore selected project documentation demonstrating
              practical application of planning, governance,
              requirements management, project controls, technical
              coordination, quality management, and software-delivery
              practices.
            </p>

          </div>
        </section>


        {/* =====================================================
            PEOPLEFIRST INTRO
            ===================================================== */}

        <section
          className="artifacts-library"
          aria-labelledby="peoplefirst-artifacts-heading"
        >
          <div className="artifacts-section__inner">

            <div className="artifacts-section-heading">

              <p>
                PeopleFirst Project Artifacts
              </p>

              <h2 id="peoplefirst-artifacts-heading">
                Evidence of Structured IT Project Management
              </h2>

              <p className="artifacts-section-heading__description">
                These artifacts support the PeopleFirst Employee
                Self-Service Portal case study and demonstrate how
                project-management practices are applied across
                initiation, planning, governance, requirements,
                delivery control, technical readiness, and quality.
              </p>

            </div>


            <div className="artifacts-project-note">

              <div>
                <span>
                  Project Context
                </span>

                <strong>
                  PeopleFirst Employee Self-Service Portal
                </strong>
              </div>

              <div className="artifacts-project-note__status">
                Simulated Enterprise IT Project
              </div>

              <p>
                PeopleFirst is a portfolio simulation created to
                demonstrate realistic project-management methods and
                documentation. It is not presented as a live client
                engagement.
              </p>

            </div>


            {/* =================================================
                GOVERNANCE & PLANNING
                ================================================= */}

            <ArtifactGroup
              number="01"
              label="Governance & Planning"
              heading="Establishing Direction & Delivery Control"
              artifacts={peopleFirstArtifacts.filter(
                (artifact) =>
                  artifact.category === 'Governance & Planning',
              )}
            />


            {/* =================================================
                REQUIREMENTS & SCOPE
                ================================================= */}

            <ArtifactGroup
              number="02"
              label="Requirements & Scope"
              heading="Translating Business Needs Into Requirements"
              artifacts={peopleFirstArtifacts.filter(
                (artifact) =>
                  artifact.category === 'Requirements & Scope',
              )}
            />


            {/* =================================================
                PROJECT CONTROLS
                ================================================= */}

            <ArtifactGroup
              number="03"
              label="Project Controls"
              heading="Maintaining Project Visibility"
              artifacts={peopleFirstArtifacts.filter(
                (artifact) =>
                  artifact.category === 'Project Controls',
              )}
            />


            {/* =================================================
                TECHNICAL & QUALITY
                ================================================= */}

            <ArtifactGroup
              number="04"
              label="Technical & Quality"
              heading="Supporting Readiness & Quality Control"
              artifacts={peopleFirstArtifacts.filter(
                (artifact) =>
                  artifact.category === 'Technical & Quality',
              )}
            />

          </div>
        </section>


        {/* =====================================================
            PORTFOLIO PLATFORM
            ===================================================== */}

        <section
          className="artifacts-platform"
          aria-labelledby="platform-artifacts-heading"
        >
          <div className="artifacts-section__inner">

            <div className="artifacts-section-heading">

              <p>
                Portfolio Platform Artifacts
              </p>

              <h2 id="platform-artifacts-heading">
                Documentation From the Full-Stack Portfolio Project
              </h2>

              <p className="artifacts-section-heading__description">
                Supporting documentation from the portfolio platform
                demonstrates architecture planning, iterative delivery,
                technical learning, and the structured development
                approach used while building the application.
              </p>

            </div>


            <div className="artifacts-grid artifacts-grid--platform">

              {portfolioPlatformArtifacts.map((artifact) => {
                const Icon = artifact.icon

                return (
                  <article
                    className="artifact-card"
                    key={artifact.title}
                  >
                    <div className="artifact-card__top">

                      <span className="artifact-card__icon">
                        <Icon
                          size={19}
                          aria-hidden="true"
                        />
                      </span>

                      <span className="artifact-card__type">
                        {artifact.type}
                      </span>

                    </div>

                    <h3>
                      {artifact.title}
                    </h3>

                    <p>
                      {artifact.description}
                    </p>

                    <div className="artifact-card__footer">
                      <span>
                        Accessible PDF preparation
                      </span>
                    </div>

                  </article>
                )
              })}

            </div>

          </div>
        </section>


        {/* =====================================================
            ACCESSIBILITY NOTE
            ===================================================== */}

        <section
          className="artifacts-accessibility"
          aria-labelledby="artifact-accessibility-heading"
        >
          <div className="artifacts-section__inner">

            <div className="artifacts-accessibility__panel">

              <div>

                <p>
                  Accessible Documentation
                </p>

                <h2 id="artifact-accessibility-heading">
                  Portfolio Evidence Designed for Accessible Review
                </h2>

              </div>

              <div>

                <p>
                  Selected artifacts will be published as accessible
                  PDFs with structured headings, logical reading order,
                  searchable text, meaningful document metadata,
                  accessible tables, descriptive links, and appropriate
                  treatment of informative and decorative graphics.
                </p>

                <p>
                  Source DOCX and XLSX files remain working project
                  documents, while accessible PDF versions will be used
                  for recruiter-facing portfolio publication.
                </p>

              </div>

            </div>

          </div>
        </section>

      </div>

      <BackToTop />
    </main>
  )
}


/* =========================================================
   ARTIFACT GROUP
   ========================================================= */

type ArtifactGroupProps = {
  number: string
  label: string
  heading: string
  artifacts: typeof peopleFirstArtifacts
}

function ArtifactGroup({
  number,
  label,
  heading,
  artifacts,
}: ArtifactGroupProps) {
  return (
    <section className="artifact-group">

      <div className="artifact-group__heading">

        <span>
          {number}
        </span>

        <div>
          <p>
            {label}
          </p>

          <h3>
            {heading}
          </h3>
        </div>

      </div>


      <div className="artifacts-grid">

        {artifacts.map((artifact) => {
          const Icon = artifact.icon

          return (
            <article
              className="artifact-card"
              key={artifact.title}
            >
              <div className="artifact-card__top">

                <span className="artifact-card__icon">
                  <Icon
                    size={19}
                    aria-hidden="true"
                  />
                </span>

                <span className="artifact-card__type">
                  {artifact.type}
                </span>

              </div>

              <h4>
                {artifact.title}
              </h4>

              <p>
                {artifact.description}
              </p>

              <div className="artifact-card__footer">
                <span>
                  Accessible PDF preparation
                </span>
              </div>

            </article>
          )
        })}

      </div>

    </section>
  )
}