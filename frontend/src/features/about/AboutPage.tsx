import {
  BriefcaseBusiness,
  UsersRound,
  Workflow,
  ShieldCheck,
  MessageSquareText,
  Code2,
  Database,
  GitBranch,
  Cloud,
  Award,
  GraduationCap,
  BadgeCheck,
  ArrowRight,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import { PageSideDecoration } from '../../shared/components/PageSideDecoration'

import './AboutPage.css'

const capabilities = [
  {
    title: 'Project Delivery',
    description:
      'Plan, coordinate, track, and support project delivery from initiation through closure.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Agile & Scrum',
    description:
      'Support iterative delivery, Scrum practices, prioritization, team coordination, and continuous improvement.',
    icon: Workflow,
  },
  {
    title: 'Stakeholder Management',
    description:
      'Engage stakeholders, manage expectations, communicate progress, and maintain alignment.',
    icon: UsersRound,
  },
  {
    title: 'Risk & Quality Management',
    description:
      'Identify risks and issues early, support mitigation, and maintain delivery and quality controls.',
    icon: ShieldCheck,
  },
  {
    title: 'Communication & Governance',
    description:
      'Use structured reporting, documentation, decision tracking, and project governance practices.',
    icon: MessageSquareText,
  },
  {
    title: 'Technical Coordination',
    description:
      'Work effectively with technical teams by understanding application, API, database, and delivery concepts.',
    icon: Code2,
  },
]

const technicalAreas = [
  {
    title: 'Frontend',
    value: 'React · TypeScript',
    icon: Code2,
  },
  {
    title: 'Backend & APIs',
    value: 'ASP.NET Core · C# · REST APIs',
    icon: Cloud,
  },
  {
    title: 'Data',
    value: 'SQL Server · Entity Framework Core',
    icon: Database,
  },
  {
    title: 'Source Control',
    value: 'Git · GitHub',
    icon: GitBranch,
  },
]

const credentials = [
  {
    title: 'IBM IT Project Manager Professional Certificate',
    type: 'Professional Certificate',
    icon: Award,
  },
  {
    title: 'Diploma in Software Technology – Java',
    type: 'Technology Education',
    icon: GraduationCap,
  },
  {
    title: 'Sun Certified Programmer for Java SE 5.0',
    type: 'Technology Credential',
    icon: BadgeCheck,
  },
]

export function AboutPage() {
  return (
    <main className="about-page">
      <PageSideDecoration />

      <div className="about-page__content">
        {/* =====================================================
            INTRO
            ===================================================== */}

        <section
          className="about-intro"
          aria-labelledby="about-heading"
        >
          <div className="about-intro__inner">

            <h1 id="about-heading">
              Project Leadership
              <span> With Practical Technical Understanding.</span>
            </h1>

            <p className="about-intro__lead">
              I am an experienced project and people leader transitioning into Technical Project Management and Scrum,
              with extensive leadership and project experience, combining structured project governance, Agile delivery,
              stakeholder coordination, and practical understanding of modern software delivery.
            </p>

            <p className="about-intro__body">
              My background includes managing people, coordinating complex
              projects, improving operational processes, resolving delivery
              issues, supporting technology adoption, and working with
              cross-functional teams and stakeholders.
            </p>
          </div>
        </section>


        {/* =====================================================
            EXPERIENCE SUMMARY
            ===================================================== */}

        <section
          className="about-experience"
          aria-labelledby="experience-heading"
        >
          <div className="about-section__inner">
            <div className="about-section__heading">
              <p className="about-section__eyebrow">
                Professional Journey
              </p>

              <h2 id="experience-heading">
                Leadership Experience Applied to IT Delivery
              </h2>

              <p>
                A career foundation built on project coordination,
                team leadership, stakeholder communication, process
                improvement, and delivery accountability.
              </p>
            </div>

            <div className="about-experience__grid">
              <article className="experience-card">
                <strong>16 Years</strong>

                <h3>
                  Leadership & Project Experience
                </h3>

                <p>
                  Experience coordinating work, people, timelines,
                  quality, stakeholders, and delivery outcomes.
                </p>
              </article>

              <article className="experience-card">
                <strong>10+ Years</strong>

                <h3>
                  Senior Team Leadership
                </h3>

                <p>
                  Led teams, supported performance, resolved operational
                  issues, and maintained quality and delivery standards.
                </p>
              </article>

              <article className="experience-card">
                <strong>7+</strong>

                <h3>
                  Major Clients Supported
                </h3>

                <p>
                  Experience supporting major publishing clients and
                  collaborating across organizational boundaries.
                </p>
              </article>
            </div>
          </div>
        </section>


        {/* =====================================================
            CAPABILITIES
            ===================================================== */}

        <section
          className="about-capabilities"
          aria-labelledby="capabilities-heading"
        >
          <div className="about-section__inner">
            <div className="about-section__heading">
              <p className="about-section__eyebrow">
                Core Capabilities
              </p>

              <h2 id="capabilities-heading">
                How I Approach Project Delivery
              </h2>

              <p>
                Structured project-management practices supported by
                communication, collaboration, quality focus, and technical
                awareness.
              </p>
            </div>

            <div className="about-capabilities__grid">
              {capabilities.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    className="capability-card"
                    key={item.title}
                  >
                    <span
                      className="capability-card__icon"
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>


        {/* =====================================================
            TECHNICAL UNDERSTANDING
            ===================================================== */}

        <section
          className="about-technical"
          aria-labelledby="technical-heading"
        >
          <div className="about-section__inner">
            <div className="about-technical__panel">
              <div className="about-technical__intro">
                <p className="about-section__eyebrow">
                  Technical Understanding
                </p>

                <h2 id="technical-heading">
                  Bridging Project Management and Technology
                </h2>

                <p>
                  I have developed a practical understanding of software development and continue to
                  expand my technical knowledge to communicate effectively with technical teams, understand
                  delivery dependencies, and make informed project decisions.
                </p>
              </div>

              <div className="about-technical__grid">
                {technicalAreas.map((item) => {
                  const Icon = item.icon

                  return (
                    <article
                      className="technical-card"
                      key={item.title}
                    >
                      <span
                        className="technical-card__icon"
                        aria-hidden="true"
                      >
                        <Icon />
                      </span>

                      <div>
                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.value}
                        </p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            CREDENTIALS
            ===================================================== */}

        <section
          className="about-credentials"
          aria-labelledby="credentials-heading"
        >
          <div className="about-section__inner">
            <div className="about-section__heading">
              <p className="about-section__eyebrow">
                Credentials
              </p>

              <h2 id="credentials-heading">
                Professional & Technology Credentials
              </h2>
            </div>

            <div className="about-credentials__grid">
              {credentials.map((credential) => {
                const Icon = credential.icon

                return (
                  <article
                    className="credential-card"
                    key={credential.title}
                  >
                    <span
                      className="credential-card__icon"
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>

                    <div>
                      <p className="credential-card__type">
                        {credential.type}
                      </p>

                      <h3>
                        {credential.title}
                      </h3>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>


        {/* =====================================================
            CTA
            ===================================================== */}

        <section
          className="about-cta"
          aria-labelledby="about-cta-heading"
        >
          <div className="about-section__inner">
            <div className="about-cta__panel">
              <div>
                <p className="about-section__eyebrow">
                  Explore My Work
                </p>

                <h2 id="about-cta-heading">
                  See How These Skills Are Applied in Practice.
                </h2>

                <p>
                  Explore my projects and project-management artifacts
                  to see the planning, delivery, governance, technical,
                  and quality practices behind the portfolio.
                </p>
              </div>

              <div className="about-cta__actions">
                <Link
                  to="/projects"
                  className="about-cta__button about-cta__button--primary"
                >
                  View Projects
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="about-cta__button about-cta__button--secondary"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}