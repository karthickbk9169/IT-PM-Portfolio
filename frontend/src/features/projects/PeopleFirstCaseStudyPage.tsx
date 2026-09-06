import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  CircleDollarSign,
  Clock3,
  Layers3,
  UsersRound,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import { BackToTop } from '../../shared/components/BackToTop'
import { PageSideDecoration } from '../../shared/components/PageSideDecoration'

import './PeopleFirstCaseStudyPage.css'

export function PeopleFirstCaseStudyPage() {
  return (
    <main className="case-study-page">
      <PageSideDecoration />

      <div className="case-study-page__content">

        {/* =====================================================
            CASE STUDY HERO
            ===================================================== */}

        <section
          className="case-study-hero"
          aria-labelledby="peoplefirst-case-study-heading"
        >
          <div className="case-study__inner">
            <Link
              to="/projects"
              className="case-study-back"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to Projects
            </Link>

            <p className="case-study-hero__eyebrow">
              Featured Case Study
            </p>

            <h1 id="peoplefirst-case-study-heading">
              PeopleFirst Employee
              <span> Self-Service Portal</span>
            </h1>

            <p className="case-study-hero__lead">
              A simulated enterprise IT project demonstrating
              structured project governance, Agile delivery,
              stakeholder coordination, risk and issue management,
              quality practices, and technical delivery planning.
            </p>

            <div className="case-study-hero__meta">
              <span>
                <BriefcaseBusiness
                  size={17}
                  aria-hidden="true"
                />
                IT Project Management Simulation
              </span>

              <span>
                <UsersRound
                  size={17}
                  aria-hidden="true"
                />
                Technical Project Manager / Scrum Master
              </span>

              <span className="case-study-status">
                <i aria-hidden="true" />
                In Progress
              </span>
            </div>
          </div>
        </section>


        {/* =====================================================
            MAIN CASE STUDY CONTENT
            ===================================================== */}

        <section
          className="case-study-overview"
          aria-labelledby="project-overview-heading"
        >
          <div className="case-study__inner">

            {/* =================================================
                PROJECT OVERVIEW
                ================================================= */}

            <div className="case-study-section-heading">
              <p>Project Overview</p>

              <h2 id="project-overview-heading">
                Project at a Glance
              </h2>
            </div>


            <div className="case-study-snapshot">

              <div className="case-study-snapshot__item">
                <span className="case-study-snapshot__icon">
                  <Layers3 aria-hidden="true" />
                </span>

                <div>
                  <span>Project Type</span>

                  <strong>
                    Simulated Enterprise IT Project
                  </strong>
                </div>
              </div>


              <div className="case-study-snapshot__item">
                <span className="case-study-snapshot__icon">
                  <UsersRound aria-hidden="true" />
                </span>

                <div>
                  <span>Role</span>

                  <strong>
                    Technical Project Manager / Scrum Master
                  </strong>
                </div>
              </div>


              <div className="case-study-snapshot__item">
                <span className="case-study-snapshot__icon">
                  <CalendarDays aria-hidden="true" />
                </span>

                <div>
                  <span>Timeline</span>

                  <strong>
                    Aug 2026 – Jan 2027
                  </strong>
                </div>
              </div>


              <div className="case-study-snapshot__item">
                <span className="case-study-snapshot__icon">
                  <CircleDollarSign aria-hidden="true" />
                </span>

                <div>
                  <span>Project Budget</span>

                  <strong>$420,000</strong>
                </div>
              </div>


              <div className="case-study-snapshot__item">
                <span className="case-study-snapshot__icon">
                  <Clock3 aria-hidden="true" />
                </span>

                <div>
                  <span>Delivery Approach</span>

                  <strong>
                    Hybrid Governance + Scrum
                  </strong>
                </div>
              </div>


              <div className="case-study-snapshot__item">
                <span className="case-study-snapshot__icon">
                  <BriefcaseBusiness aria-hidden="true" />
                </span>

                <div>
                  <span>Status</span>

                  <strong>In Progress</strong>
                </div>
              </div>

            </div>


            {/* =================================================
                BUSINESS CONTEXT
                ================================================= */}

            <section
              className="case-study-detail"
              aria-labelledby="business-context-heading"
            >
              <div className="case-study-section-heading">
                <p>Business Context</p>

                <h2 id="business-context-heading">
                  Business Need &amp; Project Objective
                </h2>
              </div>


              <div className="business-context-grid">

                <article className="business-context-card">
                  <p className="business-context-card__label">
                    Business Problem
                  </p>

                  <h3>Manual Leave Management</h3>

                  <p>
                    PeopleFirst currently manages employee leave
                    through spreadsheets and email, resulting in
                    processing delays, inconsistent leave balances,
                    limited reporting, and the absence of a reliable
                    audit trail.
                  </p>

                  <ul>
                    <li>
                      Spreadsheet and email-based processes
                    </li>

                    <li>Processing delays</li>

                    <li>
                      Inconsistent leave balances
                    </li>

                    <li>Limited reporting</li>

                    <li>
                      No reliable audit trail
                    </li>
                  </ul>
                </article>


                <article className="business-context-card business-context-card--objective">
                  <p className="business-context-card__label">
                    Project Objective
                  </p>

                  <h3>
                    Digitize the Leave Management Process
                  </h3>

                  <p>
                    The project aims to digitize leave management
                    through an employee self-service solution that
                    improves the employee experience, reduces manual
                    administrative effort, and provides greater
                    reporting capability and transparency.
                  </p>

                  <ul>
                    <li>
                      Digitize leave management
                    </li>

                    <li>
                      Improve employee experience
                    </li>

                    <li>
                      Reduce manual effort
                    </li>

                    <li>
                      Improve reporting
                    </li>

                    <li>
                      Increase transparency
                    </li>
                  </ul>
                </article>

              </div>
            </section>


            {/* =================================================
                SCOPE & REQUIREMENTS
                ================================================= */}

            <section
              className="case-study-detail case-study-detail--requirements"
              aria-labelledby="scope-requirements-heading"
            >
              <div className="case-study-section-heading">
                <p>
                  Scope &amp; Requirements
                </p>

                <h2 id="scope-requirements-heading">
                  From Business Need to Defined Requirements
                </h2>

                <p className="case-study-section-heading__description">
                  Business requirements were translated into
                  functional capabilities covering employees,
                  managers, HR administrators, reporting, and
                  notifications, supported by defined nonfunctional
                  requirements.
                </p>
              </div>


              <div className="requirements-grid">

                <article className="requirement-card">
                  <span className="requirement-card__number">
                    01
                  </span>

                  <h3>
                    Employee Leave Management
                  </h3>

                  <p>
                    Apply for leave, view balances and leave
                    history, cancel pending requests, request
                    half-day leave, and provide supporting
                    attachments where required.
                  </p>
                </article>


                <article className="requirement-card">
                  <span className="requirement-card__number">
                    02
                  </span>

                  <h3>
                    Manager Approval Workflow
                  </h3>

                  <p>
                    Approve or reject requests, provide mandatory
                    rejection comments, receive notifications,
                    support escalation, and nominate delegates.
                  </p>
                </article>


                <article className="requirement-card">
                  <span className="requirement-card__number">
                    03
                  </span>

                  <h3>
                    HR Administration
                  </h3>

                  <p>
                    Configure leave types, policies and holiday
                    calendars, review employee leave history,
                    and generate operational reports.
                  </p>
                </article>


                <article className="requirement-card">
                  <span className="requirement-card__number">
                    04
                  </span>

                  <h3>Reporting</h3>

                  <p>
                    Provide leave balance, departmental summary,
                    monthly utilization, and leave-trend reporting.
                  </p>
                </article>


                <article className="requirement-card">
                  <span className="requirement-card__number">
                    05
                  </span>

                  <h3>
                    Email Notifications
                  </h3>

                  <p>
                    Notify users about submissions, approvals,
                    rejections, cancellations, and reminders.
                  </p>
                </article>


                <article className="requirement-card requirement-card--nfr">
                  <span className="requirement-card__number">
                    NFR
                  </span>

                  <h3>
                    Nonfunctional Requirements
                  </h3>

                  <p>
                    Defined expectations for availability,
                    performance, concurrent usage, Microsoft
                    Entra ID authentication, backup, and recovery.
                  </p>
                </article>

              </div>


              <div className="scope-boundary">
                <div>
                  <span className="scope-boundary__label">
                    Deferred / Out of Scope
                  </span>

                  <strong>
                    Advanced Analytics · SMS Notifications ·
                    Microsoft Teams Notifications
                  </strong>
                </div>

                <p>
                  These capabilities were explicitly deferred to
                  maintain clear scope boundaries for the current
                  release.
                </p>
              </div>

            </section>


            {/* =================================================
                MY ROLE
                ================================================= */}

            <section
              className="case-study-detail"
              aria-labelledby="role-responsibilities-heading"
            >
              <div className="case-study-section-heading">
                <p>My Role</p>

                <h2 id="role-responsibilities-heading">
                  Technical Project Manager / Scrum Master
                </h2>

                <p className="case-study-section-heading__description">
                  I am responsible for coordinating the simulated
                  project across business, technical, quality, and
                  delivery workstreams while maintaining governance,
                  delivery visibility, and Scrum execution.
                </p>
              </div>


              <div className="role-grid">

                <article className="role-card">
                  <span className="role-card__number">
                    01
                  </span>

                  <h3>
                    Project Planning &amp; Governance
                  </h3>

                  <p>
                    Establish project plans, milestones, governance
                    practices, delivery controls, and supporting
                    project documentation across the project
                    lifecycle.
                  </p>
                </article>


                <article className="role-card">
                  <span className="role-card__number">
                    02
                  </span>

                  <h3>
                    Stakeholder Coordination
                  </h3>

                  <p>
                    Coordinate business and delivery stakeholders,
                    facilitate project communication, track actions,
                    maintain visibility, and escalate decisions or
                    blockers where required.
                  </p>
                </article>


                <article className="role-card">
                  <span className="role-card__number">
                    03
                  </span>

                  <h3>Scrum Facilitation</h3>

                  <p>
                    Facilitate Sprint Planning, Daily Scrum,
                    Sprint Reviews, and Retrospectives while
                    helping maintain sprint goals, delivery focus,
                    and impediment visibility.
                  </p>
                </article>


                <article className="role-card">
                  <span className="role-card__number">
                    04
                  </span>

                  <h3>
                    Risk, Issue &amp; Dependency Control
                  </h3>

                  <p>
                    Identify and track risks, issues, assumptions,
                    and dependencies; assess their delivery impact;
                    coordinate actions with owners; and escalate
                    significant concerns.
                  </p>
                </article>


                <article className="role-card">
                  <span className="role-card__number">
                    05
                  </span>

                  <h3>
                    Cross-Functional Delivery
                  </h3>

                  <p>
                    Coordinate simulated Product, Business Analysis,
                    Architecture, Development, QA, Security, DevOps,
                    and Operations responsibilities to maintain
                    clear ownership and delivery alignment.
                  </p>
                </article>


                <article className="role-card">
                  <span className="role-card__number">
                    06
                  </span>

                  <h3>
                    Technical Delivery Coordination
                  </h3>

                  <p>
                    Participate in technical readiness, architecture,
                    integration, environment, testing, security, and
                    release discussions to understand dependencies
                    and support informed project decisions.
                  </p>
                </article>

              </div>
            </section>


            {/* =================================================
                DELIVERY APPROACH
                ================================================= */}

            <section
              className="case-study-detail"
              aria-labelledby="delivery-approach-heading"
            >
              <div className="case-study-section-heading">
                <p>Delivery Approach</p>

                <h2 id="delivery-approach-heading">
                  Hybrid Governance + Scrum
                </h2>

                <p className="case-study-section-heading__description">
                  The project combines structured project governance
                  with iterative Scrum delivery, allowing overall
                  scope, schedule, risks, dependencies, quality, and
                  stakeholder commitments to be managed while
                  solution development progresses through focused
                  sprints.
                </p>
              </div>


              <div className="delivery-approach-grid">

                <article className="delivery-approach-card">
                  <span className="delivery-approach-card__label">
                    Project Governance
                  </span>

                  <h3>
                    Structured Planning &amp; Control
                  </h3>

                  <p>
                    Project governance provides the framework for
                    scope, milestones, budget, risks, dependencies,
                    stakeholder communication, quality, change
                    control, readiness, and overall delivery
                    visibility.
                  </p>

                  <ul>
                    <li>
                      Project Management Plan
                    </li>

                    <li>
                      Integrated schedule and milestones
                    </li>

                    <li>
                      Risk, issue, assumption, and dependency control
                    </li>

                    <li>
                      Stakeholder communication and escalation
                    </li>

                    <li>
                      Quality and release readiness
                    </li>
                  </ul>
                </article>


                <article className="delivery-approach-card">
                  <span className="delivery-approach-card__label">
                    Scrum Delivery
                  </span>

                  <h3>
                    Iterative Development &amp; Feedback
                  </h3>

                  <p>
                    Scrum supports iterative delivery by organizing
                    development work into sprints, maintaining clear
                    sprint goals, surfacing impediments, and
                    incorporating regular stakeholder feedback.
                  </p>

                  <ul>
                    <li>Sprint Planning</li>
                    <li>Daily Scrum</li>
                    <li>Sprint Review / Demo</li>
                    <li>Sprint Retrospective</li>
                    <li>
                      Backlog refinement and updates
                    </li>
                  </ul>
                </article>

              </div>


              <div
                className="delivery-approach-flow"
                aria-label="Project delivery flow"
              >
                <span>Initiate</span>
                <i aria-hidden="true" />

                <span>Plan</span>
                <i aria-hidden="true" />

                <strong>Scrum Sprints</strong>
                <i aria-hidden="true" />

                <span>Validate</span>
                <i aria-hidden="true" />

                <span>Release</span>
                <i aria-hidden="true" />

                <span>Close</span>
              </div>

            </section>


            {/* =================================================
                PLANNING & GOVERNANCE
                ================================================= */}

            <section
              className="case-study-detail"
              aria-labelledby="planning-governance-heading"
            >
              <div className="case-study-section-heading">
                <p>
                  Planning &amp; Governance
                </p>

                <h2 id="planning-governance-heading">
                  Establishing Delivery Control
                </h2>

                <p className="case-study-section-heading__description">
                  Project governance was established through
                  structured planning, clearly defined
                  responsibilities, delivery controls,
                  communication practices, and dedicated project
                  registers used to maintain visibility across the
                  project lifecycle.
                </p>
              </div>


              <div className="governance-grid">

                <article className="governance-card">
                  <span className="governance-card__number">
                    01
                  </span>

                  <h3>
                    Project Management Plan
                  </h3>

                  <p>
                    The Project Management Plan provides the
                    overarching governance framework for managing
                    scope, schedule, stakeholders, communications,
                    quality, risks, dependencies, and delivery
                    activities.
                  </p>
                </article>


                <article className="governance-card">
                  <span className="governance-card__number">
                    02
                  </span>

                  <h3>
                    Schedule &amp; Milestones
                  </h3>

                  <p>
                    Major phases, milestones, dependencies, and
                    delivery activities are planned and monitored
                    to maintain visibility of progress against the
                    overall project timeline.
                  </p>
                </article>


                <article className="governance-card">
                  <span className="governance-card__number">
                    03
                  </span>

                  <h3>
                    Stakeholder Management
                  </h3>

                  <p>
                    Stakeholders are identified, their interests
                    and influence considered, and engagement
                    activities planned to support timely
                    communication, decisions, and alignment.
                  </p>
                </article>


                <article className="governance-card">
                  <span className="governance-card__number">
                    04
                  </span>

                  <h3>
                    Communication Management
                  </h3>

                  <p>
                    Defined communication practices support project
                    kickoff, status reporting, Scrum events,
                    stakeholder updates, technical discussions,
                    and escalation of delivery concerns.
                  </p>
                </article>


                <article className="governance-card">
                  <span className="governance-card__number">
                    05
                  </span>

                  <h3>
                    Quality Management
                  </h3>

                  <p>
                    Quality expectations, review activities,
                    testing responsibilities, acceptance
                    considerations, and release readiness are
                    incorporated into project planning and
                    delivery.
                  </p>
                </article>


                <article className="governance-card">
                  <span className="governance-card__number">
                    06
                  </span>

                  <h3>Change Control</h3>

                  <p>
                    Proposed changes are evaluated for their impact
                    on scope, schedule, cost, quality, risks, and
                    dependencies before being incorporated into
                    the project baseline.
                  </p>
                </article>

              </div>


              <div className="project-controls">

                <div className="project-controls__intro">
                  <span className="project-controls__label">
                    Project Controls
                  </span>

                  <h3>
                    Dedicated Registers for Delivery Visibility
                  </h3>

                  <p>
                    Separate registers are maintained so that risks,
                    issues, assumptions, and dependencies remain
                    clearly distinguishable and can be reviewed,
                    assigned, tracked, and escalated appropriately.
                  </p>
                </div>


                <div className="project-controls__items">

                  <div className="project-control-item">
                    <strong>Risk Register</strong>

                    <span>
                      Potential events that may affect project
                      objectives.
                    </span>
                  </div>


                  <div className="project-control-item">
                    <strong>Issue Log</strong>

                    <span>
                      Current problems requiring action or
                      resolution.
                    </span>
                  </div>


                  <div className="project-control-item">
                    <strong>Assumptions Log</strong>

                    <span>
                      Planning assumptions requiring validation
                      or monitoring.
                    </span>
                  </div>


                  <div className="project-control-item">
                    <strong>Dependencies Log</strong>

                    <span>
                      Internal and external dependencies affecting
                      delivery.
                    </span>
                  </div>

                </div>
              </div>

            </section>


            {/* =================================================
                AGILE / SCRUM DELIVERY
                ================================================= */}

            <section
              className="case-study-detail"
              aria-labelledby="scrum-delivery-heading"
            >
              <div className="case-study-section-heading">
                <p>
                  Agile / Scrum Delivery
                </p>

                <h2 id="scrum-delivery-heading">
                  Managing Iterative Delivery
                </h2>

                <p className="case-study-section-heading__description">
                  Development work is organized through Scrum, with
                  prioritized backlog items translated into sprint
                  goals, reviewed through regular Scrum events, and
                  refined using delivery progress and stakeholder
                  feedback.
                </p>
              </div>


              <div className="scrum-cycle">

                <div className="scrum-cycle__item">
                  <span className="scrum-cycle__number">
                    01
                  </span>

                  <strong>Product Backlog</strong>

                  <p>
                    Requirements and delivery needs are maintained
                    as prioritized backlog items.
                  </p>
                </div>

                <span
                  className="scrum-cycle__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="scrum-cycle__item">
                  <span className="scrum-cycle__number">
                    02
                  </span>

                  <strong>Sprint Planning</strong>

                  <p>
                    Sprint goals and selected backlog items are
                    agreed for the upcoming iteration.
                  </p>
                </div>

                <span
                  className="scrum-cycle__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="scrum-cycle__item">
                  <span className="scrum-cycle__number">
                    03
                  </span>

                  <strong>Sprint Execution</strong>

                  <p>
                    The team delivers selected work while progress
                    and impediments remain visible.
                  </p>
                </div>

                <span
                  className="scrum-cycle__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="scrum-cycle__item">
                  <span className="scrum-cycle__number">
                    04
                  </span>

                  <strong>
                    Review &amp; Feedback
                  </strong>

                  <p>
                    Completed work is demonstrated and stakeholder
                    feedback is captured.
                  </p>
                </div>

                <span
                  className="scrum-cycle__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="scrum-cycle__item">
                  <span className="scrum-cycle__number">
                    05
                  </span>

                  <strong>Retrospective</strong>

                  <p>
                    The team reviews its way of working and
                    identifies improvements for the next sprint.
                  </p>
                </div>

              </div>


              <div className="scrum-practices-grid">

                <article className="scrum-practice-card">
                  <span className="scrum-practice-card__label">
                    Planning
                  </span>

                  <h3>Sprint Planning</h3>

                  <p>
                    Facilitate Sprint Planning to establish the
                    sprint goal, clarify planned work, identify
                    dependencies, and ensure the team has a shared
                    understanding of the iteration.
                  </p>
                </article>


                <article className="scrum-practice-card">
                  <span className="scrum-practice-card__label">
                    Coordination
                  </span>

                  <h3>Daily Scrum</h3>

                  <p>
                    Support daily coordination by maintaining
                    visibility of progress, emerging impediments,
                    dependencies, and items requiring follow-up
                    outside the Scrum event.
                  </p>
                </article>


                <article className="scrum-practice-card">
                  <span className="scrum-practice-card__label">
                    Transparency
                  </span>

                  <h3>Backlog Visibility</h3>

                  <p>
                    Maintain visibility of planned and evolving work
                    so that priorities, status, dependencies, and
                    delivery expectations remain clear throughout
                    the sprint.
                  </p>
                </article>


                <article className="scrum-practice-card">
                  <span className="scrum-practice-card__label">
                    Inspection
                  </span>

                  <h3>Sprint Review / Demo</h3>

                  <p>
                    Facilitate review of completed work with
                    stakeholders, capture feedback, discuss delivery
                    progress, and identify changes that may influence
                    future backlog priorities.
                  </p>
                </article>


                <article className="scrum-practice-card">
                  <span className="scrum-practice-card__label">
                    Improvement
                  </span>

                  <h3>Sprint Retrospective</h3>

                  <p>
                    Facilitate reflection on team practices,
                    collaboration, delivery challenges, and
                    improvement opportunities to strengthen
                    subsequent sprints.
                  </p>
                </article>


                <article className="scrum-practice-card">
                  <span className="scrum-practice-card__label">
                    Facilitation
                  </span>

                  <h3>Impediment Visibility</h3>

                  <p>
                    Help surface impediments and coordinate
                    follow-up with the appropriate owners while
                    escalating concerns when they extend beyond
                    the team's ability to resolve them.
                  </p>
                </article>

              </div>


              <div className="scrum-role-callout">
                <div>
                  <span className="scrum-role-callout__label">
                    TPM / Scrum Master Focus
                  </span>

                  <h3>
                    Connecting Sprint Delivery With Project
                    Governance
                  </h3>
                </div>

                <p>
                  Sprint-level progress, impediments, dependencies,
                  stakeholder feedback, and emerging delivery
                  concerns feed into the wider project-management
                  process, maintaining alignment between iterative
                  development and overall project objectives.
                </p>
              </div>

            </section>


            {/* =================================================
                RISKS & ISSUES
                ================================================= */}

            <section
              className="case-study-detail"
              aria-labelledby="risks-issues-heading"
            >
              <div className="case-study-section-heading">
                <p>
                  Risks &amp; Issues
                </p>

                <h2 id="risks-issues-heading">
                  Proactive Risk &amp; Issue Control
                </h2>

                <p className="case-study-section-heading__description">
                  Risks and issues are managed through separate
                  project controls, with clear assessment,
                  ownership, response actions, escalation paths,
                  and regular review through project governance
                  and status reporting.
                </p>
              </div>


              <div className="risk-process">

                <div className="risk-process__item">
                  <span className="risk-process__number">
                    01
                  </span>

                  <strong>Identify</strong>

                  <p>
                    Capture emerging uncertainty across delivery,
                    technical, dependency, quality, security,
                    resource, and stakeholder areas.
                  </p>
                </div>

                <span
                  className="risk-process__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="risk-process__item">
                  <span className="risk-process__number">
                    02
                  </span>

                  <strong>Assess</strong>

                  <p>
                    Evaluate probability, impact, and overall
                    exposure to determine appropriate management
                    priority.
                  </p>
                </div>

                <span
                  className="risk-process__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="risk-process__item">
                  <span className="risk-process__number">
                    03
                  </span>

                  <strong>Plan Response</strong>

                  <p>
                    Assign an accountable owner and define
                    appropriate mitigation or other response
                    actions.
                  </p>
                </div>

                <span
                  className="risk-process__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="risk-process__item">
                  <span className="risk-process__number">
                    04
                  </span>

                  <strong>Monitor</strong>

                  <p>
                    Review triggers, response progress, residual
                    exposure, dependencies, and changing project
                    conditions.
                  </p>
                </div>

                <span
                  className="risk-process__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="risk-process__item">
                  <span className="risk-process__number">
                    05
                  </span>

                  <strong>
                    Escalate / Close
                  </strong>

                  <p>
                    Escalate material exposure, close risks that
                    no longer apply, or convert realized risks
                    into issues.
                  </p>
                </div>

              </div>


              <div className="risk-area-heading">
                <span>
                  Representative Risk Areas
                </span>

                <h3>
                  Delivery Uncertainty Requiring Active Monitoring
                </h3>
              </div>


              <div className="risk-area-grid">

                <article className="risk-area-card">
                  <span className="risk-area-card__category">
                    Integration
                  </span>

                  <h3>
                    HRMS / API Integration
                  </h3>

                  <p>
                    Integration with enterprise HR systems
                    introduces dependency and interface uncertainty
                    that may affect development, testing, and
                    schedule commitments.
                  </p>

                  <div className="risk-area-card__response">
                    <span>
                      Management Focus
                    </span>

                    <strong>
                      Early interface validation, dependency
                      tracking, technical coordination, and
                      contingency planning.
                    </strong>
                  </div>
                </article>


                <article className="risk-area-card">
                  <span className="risk-area-card__category">
                    Identity &amp; Access
                  </span>

                  <h3>
                    Microsoft Entra ID Integration
                  </h3>

                  <p>
                    Authentication and identity configuration
                    depend on client-controlled access,
                    configuration, and technical support being
                    available when required.
                  </p>

                  <div className="risk-area-card__response">
                    <span>
                      Management Focus
                    </span>

                    <strong>
                      Confirm prerequisites, ownership, access
                      readiness, technical dependencies, and
                      required support early.
                    </strong>
                  </div>
                </article>


                <article className="risk-area-card">
                  <span className="risk-area-card__category">
                    Quality
                  </span>

                  <h3>
                    SIT Defects &amp; Retesting
                  </h3>

                  <p>
                    Defects identified during system integration
                    testing may require additional remediation and
                    regression testing before progression to later
                    quality gates.
                  </p>

                  <div className="risk-area-card__response">
                    <span>
                      Management Focus
                    </span>

                    <strong>
                      Track defect trends, prioritize remediation,
                      protect retest capacity, and monitor exit
                      criteria.
                    </strong>
                  </div>
                </article>


                <article className="risk-area-card">
                  <span className="risk-area-card__category">
                    Security
                  </span>

                  <h3>
                    Security Remediation
                  </h3>

                  <p>
                    Vulnerability assessment or penetration testing
                    may identify findings requiring remediation
                    before production readiness can be confirmed.
                  </p>

                  <div className="risk-area-card__response">
                    <span>
                      Management Focus
                    </span>

                    <strong>
                      Schedule security validation early enough to
                      allow remediation, retesting, and risk
                      acceptance decisions.
                    </strong>
                  </div>
                </article>


                <article className="risk-area-card">
                  <span className="risk-area-card__category">
                    Performance
                  </span>

                  <h3>
                    Performance &amp; Capacity
                  </h3>

                  <p>
                    Performance testing may identify tuning needs
                    that could affect application readiness,
                    infrastructure, or delivery timing.
                  </p>

                  <div className="risk-area-card__response">
                    <span>
                      Management Focus
                    </span>

                    <strong>
                      Validate nonfunctional targets, test under
                      realistic load, and retain time for tuning
                      and regression.
                    </strong>
                  </div>
                </article>


                <article className="risk-area-card">
                  <span className="risk-area-card__category">
                    Deployment
                  </span>

                  <h3>
                    Production Readiness
                  </h3>

                  <p>
                    Go-live depends on technical readiness,
                    approvals, environment availability,
                    operational preparation, and successful
                    completion of required quality checks.
                  </p>

                  <div className="risk-area-card__response">
                    <span>
                      Management Focus
                    </span>

                    <strong>
                      Use readiness checkpoints, dependency
                      tracking, rollback planning, and formal
                      go-live criteria.
                    </strong>
                  </div>
                </article>

              </div>


              <div className="issue-management">

                <div className="issue-management__intro">
                  <span className="issue-management__label">
                    Issue Management
                  </span>

                  <h3>
                    From Realized Problem to Verified Resolution
                  </h3>

                  <p>
                    Once a risk materializes or another delivery
                    problem occurs, it is managed through the Issue
                    Log rather than remaining only in the Risk
                    Register.
                  </p>
                </div>


                <div className="issue-management__steps">

                  <div className="issue-step">
                    <strong>Log</strong>

                    <span>
                      Record the issue, source, impact, and required
                      context.
                    </span>
                  </div>


                  <div className="issue-step">
                    <strong>Assign</strong>

                    <span>
                      Nominate an owner accountable for coordinating
                      resolution.
                    </span>
                  </div>


                  <div className="issue-step">
                    <strong>Resolve</strong>

                    <span>
                      Define corrective actions and target
                      resolution dates.
                    </span>
                  </div>


                  <div className="issue-step">
                    <strong>Escalate</strong>

                    <span>
                      Escalate where authority, urgency, or delivery
                      impact requires management intervention.
                    </span>
                  </div>


                  <div className="issue-step">
                    <strong>
                      Verify &amp; Close
                    </strong>

                    <span>
                      Close only after agreed resolution actions and
                      outcomes have been verified.
                    </span>
                  </div>

                </div>
              </div>


              <div className="risk-governance-callout">
                <div>
                  <span className="risk-governance-callout__label">
                    TPM Responsibility
                  </span>

                  <h3>
                    Maintaining Project Risk Visibility
                  </h3>
                </div>

                <p>
                  As Technical Project Manager, I coordinate risk
                  and issue reviews, maintain visibility of
                  significant exposure, facilitate cross-functional
                  response actions, and escalate matters requiring
                  management attention or decisions.
                </p>
              </div>

            </section>


            {/* =================================================
                QUALITY & TESTING
                ================================================= */}

            <section
              className="case-study-detail"
              aria-labelledby="quality-testing-heading"
            >
              <div className="case-study-section-heading">
                <p>
                  Quality &amp; Testing
                </p>

                <h2 id="quality-testing-heading">
                  Building Quality Into Delivery
                </h2>

                <p className="case-study-section-heading__description">
                  Quality is managed throughout the delivery
                  lifecycle through defined acceptance criteria,
                  structured testing, defect management,
                  nonfunctional validation, and readiness checks
                  before progression toward production release.
                </p>
              </div>


              <div className="quality-flow">

                <div className="quality-flow__item">
                  <span className="quality-flow__number">
                    01
                  </span>

                  <strong>Requirements</strong>

                  <p>
                    Establish clear functional and nonfunctional
                    expectations.
                  </p>
                </div>

                <span
                  className="quality-flow__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="quality-flow__item">
                  <span className="quality-flow__number">
                    02
                  </span>

                  <strong>
                    Acceptance Criteria
                  </strong>

                  <p>
                    Define testable conditions for determining
                    whether delivered functionality meets
                    expectations.
                  </p>
                </div>

                <span
                  className="quality-flow__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="quality-flow__item">
                  <span className="quality-flow__number">
                    03
                  </span>

                  <strong>
                    Test &amp; Validate
                  </strong>

                  <p>
                    Validate functionality, integration,
                    performance, security, and business usability.
                  </p>
                </div>

                <span
                  className="quality-flow__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="quality-flow__item">
                  <span className="quality-flow__number">
                    04
                  </span>

                  <strong>
                    Resolve Defects
                  </strong>

                  <p>
                    Prioritize, remediate, retest, and monitor
                    defects through agreed quality controls.
                  </p>
                </div>

                <span
                  className="quality-flow__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="quality-flow__item">
                  <span className="quality-flow__number">
                    05
                  </span>

                  <strong>Readiness</strong>

                  <p>
                    Confirm required quality criteria and approvals
                    before progressing toward release.
                  </p>
                </div>

              </div>


              <div className="quality-area-heading">
                <span>
                  Validation Coverage
                </span>

                <h3>
                  Multiple Layers of Quality Assurance
                </h3>
              </div>


              <div className="quality-testing-grid">

                <article className="quality-testing-card">
                  <span className="quality-testing-card__label">
                    Functional
                  </span>

                  <h3>
                    Functional Testing
                  </h3>

                  <p>
                    Validate employee, manager, HR administration,
                    reporting, notification, and workflow
                    capabilities against defined requirements and
                    acceptance criteria.
                  </p>
                </article>


                <article className="quality-testing-card">
                  <span className="quality-testing-card__label">
                    Integration
                  </span>

                  <h3>
                    System Integration Testing
                  </h3>

                  <p>
                    Validate end-to-end interactions between
                    application components and required enterprise
                    integrations before progression to business
                    acceptance.
                  </p>
                </article>


                <article className="quality-testing-card">
                  <span className="quality-testing-card__label">
                    Business
                  </span>

                  <h3>
                    User Acceptance Testing
                  </h3>

                  <p>
                    Support business users in validating that key
                    leave management workflows meet agreed business
                    needs and are suitable for operational use.
                  </p>
                </article>


                <article className="quality-testing-card">
                  <span className="quality-testing-card__label">
                    Performance
                  </span>

                  <h3>
                    Performance Testing
                  </h3>

                  <p>
                    Validate response-time and concurrent-usage
                    expectations under representative workload
                    conditions and coordinate remediation where
                    required.
                  </p>
                </article>


                <article className="quality-testing-card">
                  <span className="quality-testing-card__label">
                    Security
                  </span>

                  <h3>
                    Security Validation
                  </h3>

                  <p>
                    Coordinate security assessment activities,
                    review findings, track required remediation,
                    and support confirmation of security readiness.
                  </p>
                </article>


                <article className="quality-testing-card">
                  <span className="quality-testing-card__label">
                    Regression
                  </span>

                  <h3>
                    Regression Testing
                  </h3>

                  <p>
                    Retest affected functionality following defect
                    fixes or changes to confirm that existing
                    behavior remains stable.
                  </p>
                </article>

              </div>


              <div className="quality-targets">

                <div className="quality-targets__intro">
                  <span className="quality-targets__label">
                    Nonfunctional Targets
                  </span>

                  <h3>
                    Measurable Quality Expectations
                  </h3>

                  <p>
                    Nonfunctional requirements establish measurable
                    expectations for application availability,
                    performance, capacity, identity, backup, and
                    recovery.
                  </p>
                </div>


                <div className="quality-targets__grid">

                  <div className="quality-target">
                    <strong>99.5%</strong>
                    <span>Availability Target</span>
                  </div>

                  <div className="quality-target">
                    <strong>&lt; 3 sec</strong>
                    <span>95% of Transactions</span>
                  </div>

                  <div className="quality-target">
                    <strong>300</strong>
                    <span>Concurrent Users</span>
                  </div>

                  <div className="quality-target">
                    <strong>Entra ID</strong>
                    <span>Single Sign-On</span>
                  </div>

                  <div className="quality-target">
                    <strong>Daily</strong>
                    <span>Backup</span>
                  </div>

                  <div className="quality-target">
                    <strong>4h / 24h</strong>
                    <span>RTO / RPO</span>
                  </div>

                </div>
              </div>


              <div className="defect-management">

                <div className="defect-management__intro">
                  <span className="defect-management__label">
                    Defect Control
                  </span>

                  <h3>
                    From Detection to Verified Closure
                  </h3>

                  <p>
                    Defects identified during testing are managed
                    through a controlled workflow so that severity,
                    ownership, remediation, retesting, and closure
                    remain visible.
                  </p>
                </div>


                <div className="defect-management__steps">

                  <div className="defect-step">
                    <strong>Log</strong>

                    <span>
                      Record the defect and supporting evidence.
                    </span>
                  </div>


                  <div className="defect-step">
                    <strong>Triage</strong>

                    <span>
                      Assess severity, priority, impact, and
                      required action.
                    </span>
                  </div>


                  <div className="defect-step">
                    <strong>Assign</strong>

                    <span>
                      Allocate ownership for investigation and
                      remediation.
                    </span>
                  </div>


                  <div className="defect-step">
                    <strong>
                      Fix &amp; Retest
                    </strong>

                    <span>
                      Implement the correction and validate the
                      resulting fix.
                    </span>
                  </div>


                  <div className="defect-step">
                    <strong>
                      Verify &amp; Close
                    </strong>

                    <span>
                      Confirm expected behavior before formally
                      closing the defect.
                    </span>
                  </div>

                </div>
              </div>


              <div className="quality-gate-callout">
                <div>
                  <span className="quality-gate-callout__label">
                    TPM Quality Focus
                  </span>

                  <h3>
                    Quality as a Release Decision
                  </h3>
                </div>

                <p>
                  As Technical Project Manager, I coordinate
                  quality activities across business, development,
                  QA, security, and technical stakeholders; monitor
                  defects and readiness dependencies; and maintain
                  visibility of whether agreed quality conditions
                  are satisfied before release decisions are made.
                </p>
              </div>

            </section>


            {/* =================================================
                TECHNICAL DELIVERY
                ================================================= */}

            <section
              className="case-study-detail"
              aria-labelledby="technical-delivery-heading"
            >
              <div className="case-study-section-heading">
                <p>
                  Technical Delivery
                </p>

                <h2 id="technical-delivery-heading">
                  Coordinating the Technical Delivery Landscape
                </h2>

                <p className="case-study-section-heading__description">
                  Technical delivery is coordinated across
                  architecture, integrations, identity,
                  environments, security, testing, and deployment
                  so that technical dependencies and readiness
                  remain aligned with project milestones and
                  business expectations.
                </p>
              </div>


              <div className="technical-landscape">

                <div className="technical-landscape__item">
                  <span className="technical-landscape__label">
                    User Experience
                  </span>

                  <strong>Web Application</strong>

                  <p>
                    Employee, manager, and HR administration
                    interfaces for leave-management activities.
                  </p>
                </div>

                <span
                  className="technical-landscape__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="technical-landscape__item">
                  <span className="technical-landscape__label">
                    Application
                  </span>

                  <strong>REST APIs</strong>

                  <p>
                    Application services supporting business
                    workflows, integrations, and data exchange.
                  </p>
                </div>

                <span
                  className="technical-landscape__connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="technical-landscape__item">
                  <span className="technical-landscape__label">
                    Data
                  </span>

                  <strong>SQL Server</strong>

                  <p>
                    Business and transactional data supporting
                    leave management and reporting.
                  </p>
                </div>

              </div>


              <div className="technical-area-heading">
                <span>
                  Enterprise Integrations
                </span>

                <h3>
                  Coordinating External Services &amp; Dependencies
                </h3>
              </div>


              <div className="technical-grid">

                <article className="technical-card">
                  <span className="technical-card__label">
                    Identity
                  </span>

                  <h3>
                    Microsoft Entra ID
                  </h3>

                  <p>
                    Provides user authentication through OpenID
                    Connect / OAuth 2.0, with role-based access
                    supporting employees, managers, HR
                    administrators, and system administrators.
                  </p>

                  <div className="technical-card__focus">
                    <span>TPM Focus</span>

                    <strong>
                      Track configuration readiness, access
                      dependencies, ownership, and timing against
                      development and testing milestones.
                    </strong>
                  </div>
                </article>


                <article className="technical-card">
                  <span className="technical-card__label">
                    HR Integration
                  </span>

                  <h3>HRMS REST API</h3>

                  <p>
                    Employee master data is synchronized from the
                    client HRMS through a REST API to support
                    accurate employee and organizational
                    information.
                  </p>

                  <div className="technical-card__focus">
                    <span>TPM Focus</span>

                    <strong>
                      Coordinate API documentation, credentials,
                      network access, integration sequencing, and
                      dependency escalation.
                    </strong>
                  </div>
                </article>


                <article className="technical-card">
                  <span className="technical-card__label">
                    Notifications
                  </span>

                  <h3>Exchange Online</h3>

                  <p>
                    Email notifications support leave submissions,
                    approvals, rejections, cancellations, reminders,
                    and other workflow events.
                  </p>

                  <div className="technical-card__focus">
                    <span>TPM Focus</span>

                    <strong>
                      Coordinate configuration readiness and ensure
                      notification testing is included in the
                      system-testing plan.
                    </strong>
                  </div>
                </article>


                <article className="technical-card">
                  <span className="technical-card__label">
                    File Storage
                  </span>

                  <h3>
                    Azure Blob Storage
                  </h3>

                  <p>
                    Supporting medical certificates and other
                    approved attachments are stored separately from
                    core business data using Azure Blob Storage.
                  </p>

                  <div className="technical-card__focus">
                    <span>TPM Focus</span>

                    <strong>
                      Track provisioning, security, access, and
                      environment readiness before attachment
                      functionality is required.
                    </strong>
                  </div>
                </article>

              </div>


              <div className="environment-readiness">

                <div className="environment-readiness__intro">
                  <span className="environment-readiness__label">
                    Environment Readiness
                  </span>

                  <h3>
                    Preparing the Delivery Path
                  </h3>

                  <p>
                    Environment availability and client-controlled
                    technical prerequisites are treated as project
                    dependencies because delays can block
                    development, integration testing, acceptance
                    testing, or production deployment.
                  </p>
                </div>


                <div className="environment-readiness__flow">

                  <div className="environment-step">
                    <strong>Development</strong>

                    <span>
                      Application build and integration development.
                    </span>
                  </div>

                  <span
                    className="environment-step__connector"
                    aria-hidden="true"
                  >
                    →
                  </span>


                  <div className="environment-step">
                    <strong>Test / SIT</strong>

                    <span>
                      Functional and system integration validation.
                    </span>
                  </div>

                  <span
                    className="environment-step__connector"
                    aria-hidden="true"
                  >
                    →
                  </span>


                  <div className="environment-step">
                    <strong>
                      UAT / Staging
                    </strong>

                    <span>
                      Business acceptance and production-like
                      validation.
                    </span>
                  </div>

                  <span
                    className="environment-step__connector"
                    aria-hidden="true"
                  >
                    →
                  </span>


                  <div className="environment-step">
                    <strong>Production</strong>

                    <span>
                      Controlled deployment and operational
                      transition.
                    </span>
                  </div>

                </div>
              </div>


              <div className="technical-controls">

                <div className="technical-controls__intro">
                  <span className="technical-controls__label">
                    Security &amp; Technical Controls
                  </span>

                  <h3>
                    Supporting Secure Delivery
                  </h3>

                  <p>
                    Security and technical controls are considered
                    throughout architecture, development, testing,
                    and release-readiness activities rather than
                    being introduced only at go-live.
                  </p>
                </div>


                <div className="technical-controls__grid">

                  <div className="technical-control">
                    <strong>Authentication</strong>

                    <span>
                      Microsoft Entra ID with MFA inherited from
                      the tenant.
                    </span>
                  </div>


                  <div className="technical-control">
                    <strong>Authorization</strong>

                    <span>
                      Role-based access for defined application
                      roles.
                    </span>
                  </div>


                  <div className="technical-control">
                    <strong>Data in Transit</strong>

                    <span>TLS 1.2+.</span>
                  </div>


                  <div className="technical-control">
                    <strong>Data at Rest</strong>

                    <span>
                      AES-256 encryption.
                    </span>
                  </div>


                  <div className="technical-control">
                    <strong>Code Assurance</strong>

                    <span>
                      Static code analysis before production
                      release.
                    </span>
                  </div>


                  <div className="technical-control">
                    <strong>Security Testing</strong>

                    <span>
                      Penetration testing before go-live.
                    </span>
                  </div>

                </div>
              </div>


              <div className="technical-readiness-callout">
                <div>
                  <span className="technical-readiness-callout__label">
                    Technical Readiness
                  </span>

                  <h3>
                    Architecture Validated — Dependencies Tracked
                  </h3>
                </div>

                <p>
                  The high-level architecture was reviewed during
                  technical readiness activities with no major
                  blockers identified. Remaining identity,
                  integration, environment, network, and security
                  dependencies continue to be tracked through
                  project planning and governance.
                </p>
              </div>


              <div className="technical-role-callout">
                <div>
                  <span className="technical-role-callout__label">
                    TPM Technical Role
                  </span>

                  <h3>
                    Connecting Technical Work With Project Delivery
                  </h3>
                </div>

                <p>
                  My role is not to replace the solution architect,
                  developers, security specialists, or DevOps
                  engineers. I participate in technical discussions
                  to understand architecture, dependencies, risks,
                  readiness, sequencing, and delivery impact so that
                  technical work remains aligned with the overall
                  project plan.
                </p>
              </div>

            </section>


            {/* =================================================
                CURRENT STATUS & OUTCOMES
                ================================================= */}

            <section
              className="case-study-detail"
              aria-labelledby="current-status-heading"
            >
              <div className="case-study-section-heading">
                <p>Current Status</p>

                <h2 id="current-status-heading">
                  Progressing From Planning Into Delivery
                </h2>

                <p className="case-study-section-heading__description">
                  The simulated project remains in progress. Project
                  foundations, governance controls, requirements,
                  technical planning, and delivery practices have
                  been established, providing a structured basis
                  for continued iterative development, validation,
                  and release preparation.
                </p>
              </div>


              <div className="status-summary">

                <div className="status-summary__intro">
                  <span className="status-summary__label">
                    Project Position
                  </span>

                  <h3>In Progress</h3>

                  <p>
                    The project is being progressed through a
                    combination of structured project governance
                    and Scrum delivery, with technical dependencies,
                    risks, quality activities, and stakeholder
                    coordination maintained alongside iterative
                    solution development.
                  </p>
                </div>


                <div className="status-summary__indicator">
                  <span
                    className="status-summary__dot"
                    aria-hidden="true"
                  />

                  <div>
                    <strong>
                      Delivery Active
                    </strong>

                    <span>
                      Governance and implementation activities
                      continuing
                    </span>
                  </div>
                </div>

              </div>


              <div className="status-area-heading">
                <span>
                  Progress Established
                </span>

                <h3>
                  Foundations in Place for Controlled Delivery
                </h3>
              </div>


              <div className="progress-grid">

                <article className="progress-card">
                  <span className="progress-card__number">
                    01
                  </span>

                  <h3>
                    Business Need Defined
                  </h3>

                  <p>
                    The business problem, project objective,
                    expected capabilities, scope boundaries, and
                    key stakeholders have been identified and
                    documented.
                  </p>
                </article>


                <article className="progress-card">
                  <span className="progress-card__number">
                    02
                  </span>

                  <h3>
                    Requirements Established
                  </h3>

                  <p>
                    Functional and nonfunctional requirements have
                    been documented to provide a structured basis
                    for solution planning, backlog development,
                    testing, and acceptance.
                  </p>
                </article>


                <article className="progress-card">
                  <span className="progress-card__number">
                    03
                  </span>

                  <h3>
                    Governance Established
                  </h3>

                  <p>
                    Project planning, stakeholder communication,
                    quality management, change control, and
                    dedicated risk, issue, assumption, and
                    dependency controls have been defined.
                  </p>
                </article>


                <article className="progress-card">
                  <span className="progress-card__number">
                    04
                  </span>

                  <h3>
                    Scrum Delivery Structured
                  </h3>

                  <p>
                    Iterative delivery practices have been
                    incorporated through backlog management,
                    sprint planning, Scrum events, stakeholder
                    feedback, and impediment visibility.
                  </p>
                </article>


                <article className="progress-card">
                  <span className="progress-card__number">
                    05
                  </span>

                  <h3>
                    Technical Readiness Reviewed
                  </h3>

                  <p>
                    Architecture, integrations, identity,
                    environments, security, and other technical
                    dependencies have been considered to support
                    coordinated implementation and testing.
                  </p>
                </article>


                <article className="progress-card">
                  <span className="progress-card__number">
                    06
                  </span>

                  <h3>
                    Quality Controls Defined
                  </h3>

                  <p>
                    Testing layers, nonfunctional expectations,
                    defect management, security validation, and
                    readiness considerations have been incorporated
                    into the delivery approach.
                  </p>
                </article>

              </div>


              <div className="project-trajectory">

                <div className="project-trajectory__intro">
                  <span className="project-trajectory__label">
                    Delivery Trajectory
                  </span>

                  <h3>
                    From Foundation to Release
                  </h3>

                  <p>
                    The project progresses through controlled
                    stages while maintaining feedback between
                    Scrum delivery and overall project governance.
                  </p>
                </div>


                <div className="project-trajectory__flow">

                  <div className="trajectory-step trajectory-step--complete">
                    <span>01</span>
                    <strong>Initiation</strong>
                    <small>Established</small>
                  </div>

                  <span
                    className="trajectory-connector"
                    aria-hidden="true"
                  >
                    →
                  </span>


                  <div className="trajectory-step trajectory-step--complete">
                    <span>02</span>
                    <strong>Planning</strong>
                    <small>Established</small>
                  </div>

                  <span
                    className="trajectory-connector"
                    aria-hidden="true"
                  >
                    →
                  </span>


                  <div className="trajectory-step trajectory-step--active">
                    <span>03</span>
                    <strong>
                      Iterative Delivery
                    </strong>
                    <small>In Progress</small>
                  </div>

                  <span
                    className="trajectory-connector"
                    aria-hidden="true"
                  >
                    →
                  </span>


                  <div className="trajectory-step">
                    <span>04</span>
                    <strong>Validation</strong>
                    <small>Planned</small>
                  </div>

                  <span
                    className="trajectory-connector"
                    aria-hidden="true"
                  >
                    →
                  </span>


                  <div className="trajectory-step">
                    <span>05</span>
                    <strong>Release</strong>
                    <small>Planned</small>
                  </div>

                  <span
                    className="trajectory-connector"
                    aria-hidden="true"
                  >
                    →
                  </span>


                  <div className="trajectory-step">
                    <span>06</span>
                    <strong>Closure</strong>
                    <small>Planned</small>
                  </div>

                </div>
              </div>


              <div className="status-area-heading">
                <span>
                  Expected Business Outcomes
                </span>

                <h3>
                  Value the Project Is Designed to Deliver
                </h3>
              </div>


              <div className="outcomes-grid">

                <article className="outcome-card">
                  <span className="outcome-card__label">
                    Employee Experience
                  </span>

                  <h3>
                    Greater Self-Service
                  </h3>

                  <p>
                    Give employees direct access to leave requests,
                    balances, history, cancellations, and supporting
                    information without relying on manual email
                    exchanges.
                  </p>
                </article>


                <article className="outcome-card">
                  <span className="outcome-card__label">
                    Operational Efficiency
                  </span>

                  <h3>
                    Reduced Manual Administration
                  </h3>

                  <p>
                    Replace spreadsheet and email-based activities
                    with structured digital workflows for
                    employees, managers, and HR administrators.
                  </p>
                </article>


                <article className="outcome-card">
                  <span className="outcome-card__label">
                    Data Quality
                  </span>

                  <h3>
                    Improved Leave Information
                  </h3>

                  <p>
                    Improve consistency and visibility of leave
                    balances, employee leave history, approvals,
                    and related transactional information.
                  </p>
                </article>


                <article className="outcome-card">
                  <span className="outcome-card__label">
                    Management Visibility
                  </span>

                  <h3>Better Reporting</h3>

                  <p>
                    Provide operational reporting and leave-trend
                    visibility to support HR administration and
                    management oversight.
                  </p>
                </article>


                <article className="outcome-card">
                  <span className="outcome-card__label">
                    Governance
                  </span>

                  <h3>
                    Greater Process Transparency
                  </h3>

                  <p>
                    Establish clearer workflow status, approvals,
                    notifications, responsibilities, and
                    traceability than the existing manual process.
                  </p>
                </article>


                <article className="outcome-card">
                  <span className="outcome-card__label">
                    Delivery
                  </span>

                  <h3>
                    Controlled Enterprise Implementation
                  </h3>

                  <p>
                    Introduce the solution through structured
                    governance, iterative delivery, quality
                    validation, technical readiness, and managed
                    release preparation.
                  </p>
                </article>

              </div>


              <div className="outcome-note">
                <div>
                  <span className="outcome-note__label">
                    Case Study Status
                  </span>

                  <h3>
                    Outcomes Are Expected, Not Claimed as Realized
                  </h3>
                </div>

                <p>
                  Because PeopleFirst is a simulated project that
                  remains in progress, these represent intended
                  business outcomes and delivery objectives rather
                  than measured post-release benefits.
                </p>
              </div>

            </section>


            {/* =================================================
                PROJECT ARTIFACTS
                ================================================= */}

            <section
              className="case-study-detail"
              aria-labelledby="project-artifacts-heading"
            >
              <div className="case-study-section-heading">
                <p>
                  Project Artifacts
                </p>

                <h2 id="project-artifacts-heading">
                  Evidence of Project Management in Practice
                </h2>

                <p className="case-study-section-heading__description">
                  The PeopleFirst simulation is supported by project
                  documentation developed across initiation,
                  planning, governance, requirements, delivery,
                  risk management, technical readiness, quality,
                  and release preparation. Selected artifacts are
                  presented as portfolio evidence of the
                  project-management approach applied throughout
                  the case study.
                </p>
              </div>


              {/* ===============================================
                  GOVERNANCE & PLANNING
                  =============================================== */}

              <div className="artifact-group">

                <div className="artifact-group__heading">
                  <span>01</span>

                  <div>
                    <p>
                      Governance &amp; Planning
                    </p>

                    <h3>
                      Establishing Project Direction &amp; Control
                    </h3>
                  </div>
                </div>


                <div className="artifact-grid">

                  <article className="artifact-card">
                    <div className="artifact-card__top">
                      <span className="artifact-card__type">
                        Project Plan
                      </span>

                      <span className="artifact-card__status">
                        Available
                      </span>
                    </div>

                    <h3>
                      Project Management Plan
                    </h3>

                    <p>
                      Defines the overall framework for project
                      governance, scope, schedule, stakeholders,
                      communications, quality, risks, dependencies,
                      change control, and delivery management.
                    </p>

                    <Link
                      to="/artifacts"
                      className="artifact-card__link"
                    >
                      View Artifact
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>


                  <article className="artifact-card">
                    <div className="artifact-card__top">
                      <span className="artifact-card__type">
                        Schedule
                      </span>

                      <span className="artifact-card__status">
                        Available
                      </span>
                    </div>

                    <h3>
                      Project Schedule &amp; Milestones
                    </h3>

                    <p>
                      Provides visibility of major project phases,
                      milestones, sequencing, dependencies, and
                      planned delivery activities.
                    </p>

                    <Link
                      to="/artifacts"
                      className="artifact-card__link"
                    >
                      View Artifact
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>


                  <article className="artifact-card">
                    <div className="artifact-card__top">
                      <span className="artifact-card__type">
                        Stakeholders
                      </span>

                      <span className="artifact-card__status">
                        Available
                      </span>
                    </div>

                    <h3>
                      Stakeholder Register
                    </h3>

                    <p>
                      Identifies key project stakeholders and
                      supports analysis of their roles, interests,
                      influence, communication needs, and
                      engagement approach.
                    </p>

                    <Link
                      to="/artifacts"
                      className="artifact-card__link"
                    >
                      View Artifact
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>


                  <article className="artifact-card">
                    <div className="artifact-card__top">
                      <span className="artifact-card__type">
                        Communications
                      </span>

                      <span className="artifact-card__status">
                        Available
                      </span>
                    </div>

                    <h3>
                      Communications Management Plan
                    </h3>

                    <p>
                      Defines project communication channels,
                      audiences, responsibilities, cadence,
                      reporting practices, meetings, and
                      escalation arrangements.
                    </p>

                    <Link
                      to="/artifacts"
                      className="artifact-card__link"
                    >
                      View Artifact
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>

                </div>
              </div>


              {/* ===============================================
                  REQUIREMENTS & SCOPE
                  =============================================== */}

              <div className="artifact-group">

                <div className="artifact-group__heading">
                  <span>02</span>

                  <div>
                    <p>
                      Requirements &amp; Scope
                    </p>

                    <h3>
                      Translating Business Needs Into Delivery
                      Requirements
                    </h3>
                  </div>
                </div>


                <div className="artifact-grid">

                  <article className="artifact-card">
                    <div className="artifact-card__top">
                      <span className="artifact-card__type">
                        Requirements
                      </span>

                      <span className="artifact-card__status">
                        Available
                      </span>
                    </div>

                    <h3>
                      Requirements Register
                    </h3>

                    <p>
                      Records functional and nonfunctional
                      requirements covering employee leave
                      management, approvals, administration,
                      reporting, notifications, performance,
                      availability, identity, backup, and recovery.
                    </p>

                    <Link
                      to="/artifacts"
                      className="artifact-card__link"
                    >
                      View Artifact
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>


                  <article className="artifact-card">
                    <div className="artifact-card__top">
                      <span className="artifact-card__type">
                        Analysis
                      </span>

                      <span className="artifact-card__status">
                        Available
                      </span>
                    </div>

                    <h3>
                      Business Analysis Document
                    </h3>

                    <p>
                      Captures the business context, current-state
                      problem, project objectives, business needs,
                      scope, and supporting analysis used to shape
                      the proposed solution.
                    </p>

                    <Link
                      to="/artifacts"
                      className="artifact-card__link"
                    >
                      View Artifact
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>

                </div>
              </div>


              {/* ===============================================
                  PROJECT CONTROLS
                  =============================================== */}

              <div className="artifact-group">

                <div className="artifact-group__heading">
                  <span>03</span>

                  <div>
                    <p>Project Controls</p>

                    <h3>
                      Maintaining Delivery Visibility
                    </h3>
                  </div>
                </div>


                <div className="artifact-grid">

                  <article className="artifact-card">
                    <div className="artifact-card__top">
                      <span className="artifact-card__type">
                        Risk
                      </span>

                      <span className="artifact-card__status">
                        Available
                      </span>
                    </div>

                    <h3>Risk Register</h3>

                    <p>
                      Tracks identified project risks, assessment,
                      ownership, response actions, monitoring
                      information, and escalation requirements.
                    </p>

                    <Link
                      to="/artifacts"
                      className="artifact-card__link"
                    >
                      View Artifact
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>


                  <article className="artifact-card">
                    <div className="artifact-card__top">
                      <span className="artifact-card__type">
                        Issue
                      </span>

                      <span className="artifact-card__status">
                        Available
                      </span>
                    </div>

                    <h3>Issue Log</h3>

                    <p>
                      Records active project problems, their
                      impact, ownership, required actions,
                      escalation, target resolution, and closure
                      status.
                    </p>

                    <Link
                      to="/artifacts"
                      className="artifact-card__link"
                    >
                      View Artifact
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>


                  <article className="artifact-card">
                    <div className="artifact-card__top">
                      <span className="artifact-card__type">
                        Assumption
                      </span>

                      <span className="artifact-card__status">
                        Available
                      </span>
                    </div>

                    <h3>
                      Assumptions Log
                    </h3>

                    <p>
                      Maintains planning assumptions requiring
                      validation, monitoring, or follow-up as
                      project conditions develop.
                    </p>

                    <Link
                      to="/artifacts"
                      className="artifact-card__link"
                    >
                      View Artifact
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>


                  <article className="artifact-card">
                    <div className="artifact-card__top">
                      <span className="artifact-card__type">
                        Dependency
                      </span>

                      <span className="artifact-card__status">
                        Available
                      </span>
                    </div>

                    <h3>
                      Dependencies Log
                    </h3>

                    <p>
                      Tracks internal and external dependencies
                      that may influence sequencing, technical
                      readiness, testing, stakeholder actions, or
                      delivery milestones.
                    </p>

                    <Link
                      to="/artifacts"
                      className="artifact-card__link"
                    >
                      View Artifact
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>

                </div>
              </div>


              {/* ===============================================
                  TECHNICAL & QUALITY
                  =============================================== */}

              <div className="artifact-group">

                <div className="artifact-group__heading">
                  <span>04</span>

                  <div>
                    <p>
                      Technical &amp; Quality
                    </p>

                    <h3>
                      Supporting Technical Readiness &amp; Quality
                      Control
                    </h3>
                  </div>
                </div>


                <div className="artifact-grid">

                  <article className="artifact-card">
                    <div className="artifact-card__top">
                      <span className="artifact-card__type">
                        Technical
                      </span>

                      <span className="artifact-card__status">
                        Available
                      </span>
                    </div>

                    <h3>
                      Technical Readiness Assessment
                    </h3>

                    <p>
                      Reviews architecture, integrations,
                      environments, identity, infrastructure,
                      security prerequisites, dependencies, and
                      readiness considerations.
                    </p>

                    <Link
                      to="/artifacts"
                      className="artifact-card__link"
                    >
                      View Artifact
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>


                  <article className="artifact-card">
                    <div className="artifact-card__top">
                      <span className="artifact-card__type">
                        Quality
                      </span>

                      <span className="artifact-card__status">
                        Available
                      </span>
                    </div>

                    <h3>
                      Quality Management Plan
                    </h3>

                    <p>
                      Defines quality expectations, testing
                      responsibilities, review practices, defect
                      management, acceptance considerations, and
                      release-readiness controls.
                    </p>

                    <Link
                      to="/artifacts"
                      className="artifact-card__link"
                    >
                      View Artifact
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>

                </div>
              </div>


              {/* ===============================================
                  ARTIFACT LIBRARY CTA
                  =============================================== */}

              <div className="artifact-library-callout">

                <div>
                  <span className="artifact-library-callout__label">
                    Portfolio Evidence
                  </span>

                  <h3>
                    Explore the Project Artifact Library
                  </h3>

                  <p>
                    Selected PeopleFirst project artifacts are
                    presented in the portfolio as supporting
                    evidence of planning, governance, analysis,
                    technical coordination, quality, and
                    delivery-management practices.
                  </p>
                </div>


                <Link
                  to="/artifacts"
                  className="artifact-library-callout__button"
                >
                  View All Artifacts
                  <span aria-hidden="true">→</span>
                </Link>

              </div>

            </section>

          </div>
        </section>

      </div>

      <BackToTop />
    </main>
  )
}