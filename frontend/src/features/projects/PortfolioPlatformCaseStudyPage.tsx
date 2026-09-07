import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Workflow,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { PageSideDecoration } from '../../shared/components/PageSideDecoration'
import './PortfolioPlatformCaseStudyPage.css'

export function PortfolioPlatformCaseStudyPage() {
  return (
    <main className="platform-case-study">
      <PageSideDecoration />

      <div className="platform-case-study__content">

        {/* =====================================================
            HERO
            ===================================================== */}

        <section
          className="platform-case-study-hero"
          aria-labelledby="portfolio-platform-heading"
        >
          <div className="platform-case-study__inner">

            <Link
              to="/projects"
              className="platform-case-study-back"
            >
              <ArrowLeft
                size={16}
                aria-hidden="true"
              />

              Back to Projects
            </Link>

            <p className="platform-case-study-hero__eyebrow">
              Full-Stack Portfolio Project
            </p>

            <h1 id="portfolio-platform-heading">
              IT Project Management
              <span> Portfolio Platform</span>
            </h1>

            <p className="platform-case-study-hero__lead">
              A full-stack web application planned and developed
              to demonstrate project-management capability,
              practical software-delivery understanding,
              technical coordination, accessibility awareness,
              and end-to-end ownership.
            </p>

            <div className="platform-case-study-hero__meta">

              <span>
                <Code2
                  size={17}
                  aria-hidden="true"
                />

                Full-Stack Web Application
              </span>

              <span>
                <BriefcaseBusiness
                  size={17}
                  aria-hidden="true"
                />

                Technical Project Manager / Developer
              </span>

              <span className="platform-case-study-status">
                <i aria-hidden="true" />

                In Progress
              </span>

            </div>

          </div>
        </section>


        {/* =====================================================
            MAIN CONTENT
            ===================================================== */}

        <section
          className="platform-case-study-overview"
          aria-labelledby="platform-overview-heading"
        >
          <div className="platform-case-study__inner">

            {/* =================================================
                PROJECT OVERVIEW
                ================================================= */}

            <div className="platform-section-heading">

              <p>
                Project Overview
              </p>

              <h2 id="platform-overview-heading">
                Project at a Glance
              </h2>

              <p className="platform-section-heading__description">
                The portfolio platform was created as a practical
                project to combine project-management methods with
                hands-on software delivery, allowing planning,
                architecture, development, testing, accessibility,
                version control, and deployment activities to be
                applied within one working solution.
              </p>

            </div>


            <div className="platform-snapshot">

              <div className="platform-snapshot__item">
                <span className="platform-snapshot__icon">
                  <Layers3 aria-hidden="true" />
                </span>

                <div>
                  <span>
                    Project Type
                  </span>

                  <strong>
                    Full-Stack Portfolio Application
                  </strong>
                </div>
              </div>


              <div className="platform-snapshot__item">
                <span className="platform-snapshot__icon">
                  <BriefcaseBusiness aria-hidden="true" />
                </span>

                <div>
                  <span>
                    Role
                  </span>

                  <strong>
                    Technical Project Manager / Developer
                  </strong>
                </div>
              </div>


              <div className="platform-snapshot__item">
                <span className="platform-snapshot__icon">
                  <CalendarDays aria-hidden="true" />
                </span>

                <div>
                  <span>
                    Delivery Model
                  </span>

                  <strong>
                    Iterative Delivery
                  </strong>
                </div>
              </div>


              <div className="platform-snapshot__item">
                <span className="platform-snapshot__icon">
                  <Code2 aria-hidden="true" />
                </span>

                <div>
                  <span>
                    Frontend
                  </span>

                  <h3>
                    React + TypeScript
                  </h3>
                </div>
              </div>


              <div className="platform-snapshot__item">
                <span className="platform-snapshot__icon">
                  <Workflow aria-hidden="true" />
                </span>

                <div>
                  <span>
                    Backend
                  </span>

                  <strong>
                    ASP.NET Core Web API
                  </strong>
                </div>
              </div>


              <div className="platform-snapshot__item">
                <span className="platform-snapshot__icon">
                  <Database aria-hidden="true" />
                </span>

                <div>
                  <span>
                    Data
                  </span>

                  <strong>
                    SQL Server + EF Core
                  </strong>
                </div>
              </div>

            </div>


            {/* =================================================
                PROJECT OBJECTIVE
                ================================================= */}

            <section
              className="platform-detail"
              aria-labelledby="platform-objective-heading"
            >
              <div className="platform-section-heading">

                <p>
                  Project Objective
                </p>

                <h2 id="platform-objective-heading">
                  Turning Project-Management Learning Into
                  Working Evidence
                </h2>

                <p className="platform-section-heading__description">
                  Rather than presenting project-management
                  knowledge only through a resume or static
                  documents, the platform was designed to provide
                  recruiters with visible evidence of planning,
                  technical understanding, project artifacts,
                  delivery practices, and a functioning software
                  product.
                </p>

              </div>


              <div className="platform-objective-grid">

                <article className="platform-objective-card">

                  <span className="platform-objective-card__number">
                    01
                  </span>

                  <h3>
                    Demonstrate Project Management
                  </h3>

                  <p>
                    Present structured project planning,
                    governance, Agile delivery, risks, quality,
                    technical coordination, and project artifacts
                    through realistic case studies.
                  </p>

                </article>


                <article className="platform-objective-card">

                  <span className="platform-objective-card__number">
                    02
                  </span>

                  <h3>
                    Build Practical Technical Understanding
                  </h3>

                  <p>
                    Develop hands-on familiarity with frontend,
                    backend, APIs, databases, source control,
                    testing, accessibility, and deployment.
                  </p>

                </article>


                <article className="platform-objective-card">

                  <span className="platform-objective-card__number">
                    03
                  </span>

                  <h3>
                    Demonstrate End-to-End Ownership
                  </h3>

                  <p>
                    Carry the project from requirements and
                    architecture through implementation,
                    validation, version control, and production
                    deployment.
                  </p>

                </article>

              </div>
            </section>


            {/* =================================================
                MY ROLE
                ================================================= */}

            <section
              className="platform-detail"
              aria-labelledby="platform-role-heading"
            >
              <div className="platform-section-heading">

                <p>
                  My Role
                </p>

                <h2 id="platform-role-heading">
                  Technical Project Manager / Developer
                </h2>

                <p className="platform-section-heading__description">
                  I am responsible for both project-management
                  activities and hands-on implementation of the
                  portfolio platform, allowing delivery decisions
                  to be connected directly with the technical work
                  required to produce the application.
                </p>

              </div>


              <div className="platform-role-grid">

                <article className="platform-role-card">

                  <span className="platform-role-card__number">
                    01
                  </span>

                  <h3>
                    Requirements &amp; Scope
                  </h3>

                  <p>
                    Define recruiter-facing objectives, page scope,
                    functional needs, delivery priorities, and
                    boundaries for the initial portfolio release.
                  </p>

                </article>


                <article className="platform-role-card">

                  <span className="platform-role-card__number">
                    02
                  </span>

                  <h3>
                    Planning &amp; Prioritization
                  </h3>

                  <p>
                    Break the project into manageable delivery
                    stages, prioritize recruiter-facing value, and
                    coordinate implementation around release goals.
                  </p>

                </article>


                <article className="platform-role-card">

                  <span className="platform-role-card__number">
                    03
                  </span>

                  <h3>
                    Solution Implementation
                  </h3>

                  <p>
                    Build and refine the React frontend, ASP.NET
                    Core API, EF Core data layer, SQL Server
                    database, routing, shared components, and
                    supporting application structure.
                  </p>

                </article>


                <article className="platform-role-card">

                  <span className="platform-role-card__number">
                    04
                  </span>

                  <h3>
                    Quality &amp; Accessibility
                  </h3>

                  <p>
                    Review responsive behavior, semantic structure,
                    keyboard access, focus visibility, content
                    quality, usability, and overall release
                    readiness.
                  </p>

                </article>


                <article className="platform-role-card">

                  <span className="platform-role-card__number">
                    05
                  </span>

                  <h3>
                    Version Control
                  </h3>

                  <p>
                    Use Git and GitHub to maintain source history,
                    review changes, create meaningful commits, and
                    prepare the solution for deployment.
                  </p>

                </article>


                <article className="platform-role-card">

                  <span className="platform-role-card__number">
                    06
                  </span>

                  <h3>
                    Deployment Ownership
                  </h3>

                  <p>
                    Prepare the frontend, API, database,
                    configuration, and production validation
                    activities required to release the application
                    through Azure.
                  </p>

                </article>

              </div>
            </section>


            {/* =================================================
                DELIVERY APPROACH
                ================================================= */}

            <section
              className="platform-detail"
              aria-labelledby="platform-delivery-heading"
            >
              <div className="platform-section-heading">

                <p>
                  Delivery Approach
                </p>

                <h2 id="platform-delivery-heading">
                  Iterative Build, Review &amp; Refinement
                </h2>

                <p className="platform-section-heading__description">
                  The platform is developed incrementally, with
                  requirements, design, implementation, testing,
                  and refinement performed in short feedback
                  cycles rather than waiting for the entire
                  application to be completed before review.
                </p>

              </div>


              <div
                className="platform-delivery-flow"
                aria-label="Portfolio platform delivery flow"
              >

                <div className="platform-delivery-step">
                  <span>
                    01
                  </span>

                  <strong>
                    Plan
                  </strong>

                  <p>
                    Define requirements, scope, priorities, and
                    acceptance expectations.
                  </p>
                </div>

                <span
                  className="platform-delivery-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-delivery-step">
                  <span>
                    02
                  </span>

                  <strong>
                    Build
                  </strong>

                  <p>
                    Implement frontend, backend, database, and
                    shared application capabilities.
                  </p>
                </div>

                <span
                  className="platform-delivery-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-delivery-step">
                  <span>
                    03
                  </span>

                  <strong>
                    Review
                  </strong>

                  <p>
                    Inspect functionality, content, visual
                    consistency, and technical behavior.
                  </p>
                </div>

                <span
                  className="platform-delivery-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-delivery-step">
                  <span>
                    04
                  </span>

                  <strong>
                    Refine
                  </strong>

                  <p>
                    Correct issues and improve usability,
                    maintainability, and recruiter-facing value.
                  </p>
                </div>

                <span
                  className="platform-delivery-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-delivery-step">
                  <span>
                    05
                  </span>

                  <strong>
                    Validate
                  </strong>

                  <p>
                    Perform responsive, accessibility, API, and
                    release-readiness checks.
                  </p>
                </div>

              </div>
            </section>


            {/* =================================================
                SOLUTION ARCHITECTURE
                ================================================= */}

            <section
              className="platform-detail"
              aria-labelledby="platform-architecture-heading"
            >
              <div className="platform-section-heading">

                <p>
                  Solution Architecture
                </p>

                <h2 id="platform-architecture-heading">
                  A Modular Full-Stack Web Application
                </h2>

                <p className="platform-section-heading__description">
                  The application uses a modular monolith with
                  feature-oriented separation. The frontend and
                  backend communicate through REST APIs, while
                  Entity Framework Core manages persistence to
                  SQL Server.
                </p>

              </div>


              <div className="platform-architecture-flow">

                <div className="platform-architecture-node">

                  <span>
                    User
                  </span>

                  <h3>
                    Recruiter Browser
                  </h3>

                  <p>
                    Navigates portfolio pages and case studies.
                  </p>

                </div>

                <span
                  className="platform-architecture-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-architecture-node">

                  <span>
                    Frontend
                  </span>

                  <strong>
                    React + TypeScript
                  </strong>

                  <p>
                    Renders the user interface and requests project
                    data.
                  </p>

                </div>

                <span
                  className="platform-architecture-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-architecture-node">

                  <span>
                    API
                  </span>

                  <h3>
                    ASP.NET Core
                  </h3>

                  <p>
                    Provides HTTP endpoints and application
                    services.
                  </p>

                </div>

                <span
                  className="platform-architecture-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-architecture-node">

                  <span>
                    Data Access
                  </span>

                  <h3>
                    Entity Framework Core
                  </h3>

                  <p>
                    Maps application models to database operations.
                  </p>

                </div>

                <span
                  className="platform-architecture-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-architecture-node">

                  <span>
                    Database
                  </span>

                  <h3>
                    SQL Server
                  </h3>

                  <p>
                    Stores persistent portfolio project data.
                  </p>

                </div>

              </div>


              <div className="platform-architecture-principles">

                <div>

                  <span className="platform-architecture-principles__label">
                    Architecture Principles
                  </span>

                  <h3>
                    Designed for Maintainability &amp; Expansion
                  </h3>

                  <p>
                    Features are separated into clear modules and
                    shared interface patterns are centralized so
                    that future capabilities can be added,
                    modified, disabled, or removed with minimal
                    impact on unrelated parts of the application.
                  </p>

                </div>


                <div className="platform-architecture-principles__grid">

                  <div className="platform-principle">

                    <strong>
                      Feature-Oriented
                    </strong>

                    <span>
                      Related files remain grouped by application
                      capability.
                    </span>

                  </div>


                  <div className="platform-principle">

                    <strong>
                      API-First
                    </strong>

                    <span>
                      Frontend data access is separated from
                      backend implementation.
                    </span>

                  </div>


                  <div className="platform-principle">

                    <strong>
                      Shared UI
                    </strong>

                    <span>
                      Reusable components and design tokens reduce
                      duplication.
                    </span>

                  </div>


                  <div className="platform-principle">

                    <strong>
                      Cloud-Ready
                    </strong>

                    <span>
                      Local development can transition to Azure
                      deployment without redesigning the solution.
                    </span>

                  </div>

                </div>

              </div>
            </section>


            {/* =================================================
                FRONTEND DELIVERY
                ================================================= */}

            <section
              className="platform-detail"
              aria-labelledby="platform-frontend-heading"
            >
              <div className="platform-section-heading">

                <p>
                  Frontend Delivery
                </p>

                <h2 id="platform-frontend-heading">
                  Building a Reusable React Interface
                </h2>

                <p className="platform-section-heading__description">
                  The frontend is implemented with React and
                  TypeScript using feature-oriented organization,
                  reusable shared components, centralized visual
                  patterns, and route-based page composition.
                </p>

              </div>


              <div className="platform-technical-grid">

                <article className="platform-technical-card">

                  <span className="platform-technical-card__label">
                    Framework
                  </span>

                  <h3>
                    React
                  </h3>

                  <p>
                    The interface is composed from reusable React
                    components, allowing pages and features to be
                    assembled from smaller, maintainable units.
                  </p>

                </article>


                <article className="platform-technical-card">

                  <span className="platform-technical-card__label">
                    Language
                  </span>

                  <h3>
                    TypeScript
                  </h3>

                  <p>
                    TypeScript provides explicit data structures
                    and type checking for project data, component
                    properties, and frontend application logic.
                  </p>

                </article>


                <article className="platform-technical-card">

                  <span className="platform-technical-card__label">
                    Navigation
                  </span>

                  <h3>
                    React Router
                  </h3>

                  <p>
                    Client-side routing provides dedicated URLs for
                    the Home, About, Projects, case studies,
                    Artifacts, and Contact pages.
                  </p>

                </article>


                <article className="platform-technical-card">

                  <span className="platform-technical-card__label">
                    Components
                  </span>

                  <h3>
                    Shared UI Patterns
                  </h3>

                  <p>
                    Common navigation, layout, buttons, cards,
                    side decoration, and Back to Top behavior are
                    implemented as reusable shared components.
                  </p>

                </article>


                <article className="platform-technical-card">

                  <span className="platform-technical-card__label">
                    Styling
                  </span>

                  <h3>
                    Centralized Visual System
                  </h3>

                  <p>
                    Shared design tokens and consistent interface
                    patterns help maintain typography, spacing,
                    card treatments, focus behavior, and branding
                    across pages.
                  </p>

                </article>


                <article className="platform-technical-card">

                  <span className="platform-technical-card__label">
                    Responsive UI
                  </span>

                  <h3>
                    Adaptive Layout
                  </h3>

                  <p>
                    Layouts are designed to reflow across desktop
                    and narrow viewports while preserving content
                    hierarchy and avoiding unnecessary horizontal
                    scrolling.
                  </p>

                </article>

              </div>


              <div className="platform-code-flow">

                <span>
                  Page
                </span>

                <i aria-hidden="true">
                  →
                </i>

                <span>
                  Feature Components
                </span>

                <i aria-hidden="true">
                  →
                </i>

                <span>
                  Shared Components
                </span>

                <i aria-hidden="true">
                  →
                </i>

                <span>
                  API Layer
                </span>

              </div>
            </section>


            {/* =================================================
                API & BACKEND
                ================================================= */}

            <section
              className="platform-detail"
              aria-labelledby="platform-backend-heading"
            >
              <div className="platform-section-heading">

                <p>
                  API &amp; Backend
                </p>

                <h2 id="platform-backend-heading">
                  Connecting the Interface to Application Data
                </h2>

                <p className="platform-section-heading__description">
                  An ASP.NET Core Web API provides the backend
                  boundary between the React frontend and
                  persistent project data, keeping presentation,
                  application behavior, and data access separated.
                </p>

              </div>


              <div className="platform-backend-flow">

                <div className="platform-backend-node">

                  <span>
                    Request
                  </span>

                  <strong>
                    React Frontend
                  </strong>

                  <p>
                    Requests portfolio project information through
                    the frontend API layer.
                  </p>

                </div>

                <span
                  className="platform-backend-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-backend-node">

                  <span>
                    HTTP
                  </span>

                  <strong>
                    REST Endpoint
                  </strong>

                  <p>
                    Receives the request through the ASP.NET Core
                    application.
                  </p>

                </div>

                <span
                  className="platform-backend-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-backend-node">

                  <span>
                    Application
                  </span>

                  <strong>
                    Project Endpoint
                  </strong>

                  <p>
                    Coordinates retrieval of the required project
                    records.
                  </p>

                </div>

                <span
                  className="platform-backend-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-backend-node">

                  <span>
                    Response
                  </span>

                  <strong>
                    JSON
                  </strong>

                  <p>
                    Project information is returned to the
                    frontend as a structured HTTP response.
                  </p>

                </div>

              </div>


              <div className="platform-technical-grid">

                <article className="platform-technical-card">

                  <span className="platform-technical-card__label">
                    Platform
                  </span>

                  <h3>
                    ASP.NET Core
                  </h3>

                  <p>
                    Provides the web API runtime, application
                    configuration, dependency registration, and
                    HTTP request pipeline.
                  </p>

                </article>


                <article className="platform-technical-card">

                  <span className="platform-technical-card__label">
                    Language
                  </span>

                  <h3>
                    C#
                  </h3>

                  <p>
                    Backend models, endpoint behavior, database
                    integration, and application configuration are
                    implemented in C#.
                  </p>

                </article>


                <article className="platform-technical-card">

                  <span className="platform-technical-card__label">
                    Interface
                  </span>

                  <h3>
                    REST API
                  </h3>

                  <p>
                    HTTP endpoints provide a defined interface
                    between the frontend application and backend
                    capabilities.
                  </p>

                </article>

              </div>


              <div className="platform-implementation-callout">

                <div>

                  <span className="platform-implementation-callout__label">
                    Working Integration
                  </span>

                  <h3>
                    Project Data Retrieved Through the API
                  </h3>

                </div>

                <p>
                  The Projects page retrieves project records from
                  the ASP.NET Core API rather than relying only on
                  hardcoded application data. Loading and error
                  states are also handled by the frontend.
                </p>

              </div>
            </section>


            {/* =================================================
                DATABASE & DATA
                ================================================= */}

            <section
              className="platform-detail"
              aria-labelledby="platform-data-heading"
            >
              <div className="platform-section-heading">

                <p>
                  Database &amp; Data
                </p>

                <h2 id="platform-data-heading">
                  Persisting Project Information With EF Core
                </h2>

                <p className="platform-section-heading__description">
                  Project information is persisted in SQL Server,
                  with Entity Framework Core providing the
                  application data-access layer and migrations
                  maintaining the evolving database schema.
                </p>

              </div>


              <div className="platform-data-flow">

                <div className="platform-data-node">

                  <span>
                    Model
                  </span>

                  <strong>
                    Project.cs
                  </strong>

                  <p>
                    Defines the project information represented
                    within the backend application.
                  </p>

                </div>

                <span
                  className="platform-data-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-data-node">

                  <span>
                    Context
                  </span>

                  <strong>
                    PortfolioDbContext
                  </strong>

                  <p>
                    Connects application models with the
                    persistence layer.
                  </p>

                </div>

                <span
                  className="platform-data-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-data-node">

                  <span>
                    ORM
                  </span>

                  <strong>
                    EF Core
                  </strong>

                  <p>
                    Translates application data operations into
                    database interactions.
                  </p>

                </div>

                <span
                  className="platform-data-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-data-node">

                  <span>
                    Database
                  </span>

                  <strong>
                    SQL Server
                  </strong>

                  <p>
                    Stores the persistent project records used by
                    the application.
                  </p>

                </div>

              </div>


              <div className="platform-technical-grid">

                <article className="platform-technical-card">

                  <span className="platform-technical-card__label">
                    Data Model
                  </span>

                  <h3>
                    Project Entity
                  </h3>

                  <p>
                    Project records contain information such as
                    title, category, summary, description, role,
                    status, and featured-project state.
                  </p>

                </article>


                <article className="platform-technical-card">

                  <span className="platform-technical-card__label">
                    Persistence
                  </span>

                  <h3>
                    SQL Server
                  </h3>

                  <p>
                    The relational database provides persistent
                    storage independent of the React user
                    interface.
                  </p>

                </article>


                <article className="platform-technical-card">

                  <span className="platform-technical-card__label">
                    Schema Management
                  </span>

                  <h3>
                    EF Core Migrations
                  </h3>

                  <p>
                    Database migrations record schema evolution
                    and seed the initial portfolio project data in
                    a repeatable manner.
                  </p>

                </article>

              </div>


              <div className="platform-migrations">

                <span className="platform-migrations__label">
                  Database Evolution
                </span>

                <div className="platform-migrations__flow">

                  <span>
                    InitialCreate
                  </span>

                  <i aria-hidden="true">
                    →
                  </i>

                  <span>
                    ExpandProjectModel
                  </span>

                  <i aria-hidden="true">
                    →
                  </i>

                  <span>
                    SeedInitialProjects
                  </span>

                </div>

              </div>
            </section>


            {/* =================================================
                GIT & GITHUB
                ================================================= */}

            <section
              className="platform-detail"
              aria-labelledby="platform-git-heading"
            >
              <div className="platform-section-heading">

                <p>
                  Git &amp; GitHub
                </p>

                <h2 id="platform-git-heading">
                  Maintaining a Controlled Development History
                </h2>

                <p className="platform-section-heading__description">
                  Source control is used as part of the delivery
                  process rather than only as a final storage
                  location. Changes are reviewed, grouped into
                  meaningful commits, and maintained in a Git
                  repository that supports deployment and future
                  development.
                </p>

              </div>


              <div className="platform-git-layout">

                <div className="platform-git-flow">

                  <div className="platform-git-step">

                    <span>
                      01
                    </span>

                    <strong>
                      Implement
                    </strong>

                    <p>
                      Make a focused application or project
                      change.
                    </p>

                  </div>

                  <span
                    className="platform-git-connector"
                    aria-hidden="true"
                  >
                    →
                  </span>


                  <div className="platform-git-step">

                    <span>
                      02
                    </span>

                    <strong>
                      Review
                    </strong>

                    <p>
                      Inspect working-tree changes before
                      committing.
                    </p>

                  </div>

                  <span
                    className="platform-git-connector"
                    aria-hidden="true"
                  >
                    →
                  </span>


                  <div className="platform-git-step">

                    <span>
                      03
                    </span>

                    <strong>
                      Stage
                    </strong>

                    <p>
                      Select the intended files and changes for the
                      commit.
                    </p>

                  </div>

                  <span
                    className="platform-git-connector"
                    aria-hidden="true"
                  >
                    →
                  </span>


                  <div className="platform-git-step">

                    <span>
                      04
                    </span>

                    <strong>
                      Commit
                    </strong>

                    <p>
                      Record the change with a meaningful
                      description.
                    </p>

                  </div>

                  <span
                    className="platform-git-connector"
                    aria-hidden="true"
                  >
                    →
                  </span>


                  <div className="platform-git-step">

                    <span>
                      05
                    </span>

                    <strong>
                      Push
                    </strong>

                    <p>
                      Synchronize the repository with GitHub.
                    </p>

                  </div>

                </div>


                <div className="platform-git-callout">

                  <GitBranch
                    size={25}
                    aria-hidden="true"
                  />

                  <div>

                    <span>
                      Source Control
                    </span>

                    <h3>
                      Git + GitHub
                    </h3>

                    <p>
                      Version control provides traceability across
                      application changes and creates the source
                      foundation for production deployment.
                    </p>

                  </div>

                </div>

              </div>
            </section>


            {/* =================================================
                QUALITY & ACCESSIBILITY
                ================================================= */}

            <section
              className="platform-detail"
              aria-labelledby="platform-quality-heading"
            >
              <div className="platform-section-heading">

                <p>
                  Quality &amp; Accessibility
                </p>

                <h2 id="platform-quality-heading">
                  Building Quality Into the User Experience
                </h2>

                <p className="platform-section-heading__description">
                  Quality and accessibility are treated as part of
                  delivery rather than as final-stage checks. The
                  application is reviewed across functionality,
                  responsive behavior, usability, semantic
                  structure, keyboard interaction, and
                  accessibility requirements before release.
                </p>

              </div>


              <div className="platform-quality-grid">

                <article className="platform-quality-card">

                  <span>
                    Responsive
                  </span>

                  <h3>
                    Responsive Layout
                  </h3>

                  <p>
                    Pages and components are reviewed across
                    desktop and narrow viewports to verify reflow,
                    readability, spacing, and the absence of
                    unnecessary horizontal scrolling.
                  </p>

                </article>


                <article className="platform-quality-card">

                  <span>
                    Structure
                  </span>

                  <h3>
                    Semantic HTML
                  </h3>

                  <p>
                    Headings, landmarks, navigation, links,
                    buttons, and other interface elements use
                    appropriate semantic structure wherever
                    possible.
                  </p>

                </article>


                <article className="platform-quality-card">

                  <span>
                    Keyboard
                  </span>

                  <h3>
                    Keyboard Access
                  </h3>

                  <p>
                    Interactive elements are designed for keyboard
                    use with visible focus states and meaningful
                    interaction order.
                  </p>

                </article>


                <article className="platform-quality-card">

                  <span>
                    Content
                  </span>

                  <h3>
                    Accessible Content
                  </h3>

                  <p>
                    Labels, link purpose, alternative text,
                    content hierarchy, and contrast are considered
                    as part of interface and content review.
                  </p>

                </article>


                <article className="platform-quality-card">

                  <span>
                    Behavior
                  </span>

                  <h3>
                    Reduced Motion
                  </h3>

                  <p>
                    Motion-sensitive behavior such as smooth
                    scrolling respects the user's reduced-motion
                    preference where applicable.
                  </p>

                </article>


                <article className="platform-quality-card">

                  <span>
                    Application
                  </span>

                  <h3>
                    Loading &amp; Error Handling
                  </h3>

                  <p>
                    API-driven content includes explicit loading,
                    error, and empty states so application behavior
                    remains understandable when data is
                    unavailable.
                  </p>

                </article>

              </div>


              <div className="platform-validation">

                <span className="platform-validation__label">
                  Validation Approach
                </span>

                <h3>
                  Automated Checks + Manual Verification
                </h3>

                <div className="platform-validation__tools">

                  <span>
                    axe
                  </span>

                  <span>
                    WAVE
                  </span>

                  <span>
                    Lighthouse
                  </span>

                  <span>
                    Accessibility Insights
                  </span>

                  <span>
                    Keyboard Testing
                  </span>

                  <span>
                    NVDA
                  </span>

                </div>

                <p>
                  Automated tools support issue detection, while
                  manual keyboard, screen-reader, zoom, reflow,
                  and visual checks provide additional validation
                  that cannot be established through automated
                  testing alone.
                </p>

              </div>
            </section>


            {/* =================================================
                AI-ASSISTED DELIVERY
                ================================================= */}

            <section
              className="platform-detail"
              aria-labelledby="platform-ai-heading"
            >
              <div className="platform-section-heading">

                <p>
                  AI-Assisted Delivery
                </p>

                <h2 id="platform-ai-heading">
                  Using Generative AI as a Delivery Accelerator
                </h2>

                <p className="platform-section-heading__description">
                  Generative AI is used throughout the project as
                  a working assistant to accelerate analysis,
                  documentation, technical learning,
                  implementation support, troubleshooting, and
                  review while project ownership and validation
                  remain human-led.
                </p>

              </div>


              <div className="platform-ai-grid">

                <article className="platform-ai-card">

                  <span>
                    01
                  </span>

                  <h3>
                    Requirements Refinement
                  </h3>

                  <p>
                    Support clarification, organization, and
                    refinement of requirements, scope, delivery
                    priorities, and acceptance considerations.
                  </p>

                </article>


                <article className="platform-ai-card">

                  <span>
                    02
                  </span>

                  <h3>
                    Project Documentation
                  </h3>

                  <p>
                    Assist with structuring project-management
                    documents, technical notes, checklists,
                    case-study content, and delivery evidence.
                  </p>

                </article>


                <article className="platform-ai-card">

                  <span>
                    03
                  </span>

                  <h3>
                    Solution Exploration
                  </h3>

                  <p>
                    Explore architecture options, implementation
                    approaches, technical concepts, dependencies,
                    and tradeoffs before making implementation
                    decisions.
                  </p>

                </article>


                <article className="platform-ai-card">

                  <span>
                    04
                  </span>

                  <h3>
                    Development Assistance
                  </h3>

                  <p>
                    Support implementation by explaining code,
                    proposing changes, identifying integration
                    steps, and helping develop frontend and backend
                    capabilities.
                  </p>

                </article>


                <article className="platform-ai-card">

                  <span>
                    05
                  </span>

                  <h3>
                    Troubleshooting
                  </h3>

                  <p>
                    Assist with investigating errors,
                    understanding application behavior, and
                    identifying potential corrections during
                    development.
                  </p>

                </article>


                <article className="platform-ai-card">

                  <span>
                    06
                  </span>

                  <h3>
                    Review &amp; Improvement
                  </h3>

                  <p>
                    Support review of usability, accessibility,
                    consistency, technical implementation, project
                    documentation, and recruiter-facing
                    presentation.
                  </p>

                </article>

              </div>


              <div className="platform-ai-callout">

                <div>

                  <span>
                    Human-Led Delivery
                  </span>

                  <h3>
                    AI Supported the Work — It Did Not Own the
                    Project
                  </h3>

                </div>

                <p>
                  I remained responsible for project decisions,
                  hands-on implementation, review, testing,
                  validation, and overall delivery ownership. AI
                  was used as an accelerator and learning aid
                  rather than as a substitute for understanding
                  the solution.
                </p>

              </div>
            </section>


            {/* =================================================
                DEPLOYMENT
                ================================================= */}

            <section
              className="platform-detail"
              aria-labelledby="platform-deployment-heading"
            >
              <div className="platform-section-heading">

                <p>
                  Deployment
                </p>

                <h2 id="platform-deployment-heading">
                  Preparing the Application for Azure
                </h2>

                <p className="platform-section-heading__description">
                  The production architecture separates the
                  frontend, backend API, and database while
                  retaining the same logical application
                  boundaries used during local development.
                  Production deployment is part of the current
                  release plan.
                </p>

              </div>


              <div className="platform-cloud-flow">

                <div className="platform-cloud-node">

                  <span>
                    User
                  </span>

                  <strong>
                    Recruiter Browser
                  </strong>

                  <p>
                    Accesses the published portfolio over HTTPS.
                  </p>

                </div>

                <span
                  className="platform-cloud-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-cloud-node">

                  <span>
                    Frontend
                  </span>

                  <strong>
                    Azure Static Web Apps
                  </strong>

                  <p>
                    Hosts the React and TypeScript frontend.
                  </p>

                </div>

                <span
                  className="platform-cloud-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-cloud-node">

                  <span>
                    Backend
                  </span>

                  <strong>
                    Azure App Service
                  </strong>

                  <p>
                    Hosts the ASP.NET Core Web API.
                  </p>

                </div>

                <span
                  className="platform-cloud-connector"
                  aria-hidden="true"
                >
                  →
                </span>


                <div className="platform-cloud-node">

                  <span>
                    Data
                  </span>

                  <strong>
                    Azure SQL Database
                  </strong>

                  <p>
                    Provides managed production data persistence.
                  </p>

                </div>

              </div>


              <div className="platform-deployment-grid">

                <article className="platform-deployment-card">

                  <span>
                    Source
                  </span>

                  <h3>
                    GitHub Repository
                  </h3>

                  <p>
                    Maintains the application source used as the
                    basis for controlled production deployment.
                  </p>

                </article>


                <article className="platform-deployment-card">

                  <span>
                    Configuration
                  </span>

                  <h3>
                    Production Settings
                  </h3>

                  <p>
                    Environment-specific API endpoints, database
                    connection settings, and other production
                    configuration are kept separate from local
                    development settings.
                  </p>

                </article>


                <article className="platform-deployment-card">

                  <span>
                    Database
                  </span>

                  <h3>
                    EF Core Migrations
                  </h3>

                  <p>
                    Database migrations provide a controlled
                    mechanism for establishing the required
                    production schema.
                  </p>

                </article>


                <article className="platform-deployment-card">

                  <span>
                    Validation
                  </span>

                  <h3>
                    Production Smoke Testing
                  </h3>

                  <p>
                    Core routes, API connectivity, project data,
                    responsive behavior, console errors, and
                    accessibility are checked after deployment.
                  </p>

                </article>

              </div>


              <div className="platform-deployment-status">

                <span>
                  Current Deployment Status
                </span>

                <strong>
                  Planned / In Progress
                </strong>

                <p>
                  The Azure production architecture and deployment
                  sequence are defined. Production deployment and
                  post-deployment validation remain part of the
                  current release activities.
                </p>

              </div>
            </section>


            {/* =================================================
                CURRENT STATUS & OUTCOMES
                ================================================= */}

            <section
              className="platform-detail"
              aria-labelledby="platform-status-heading"
            >
              <div className="platform-section-heading">

                <p>
                  Current Status &amp; Outcomes
                </p>

                <h2 id="platform-status-heading">
                  From Project Concept to Working Application
                </h2>

                <p className="platform-section-heading__description">
                  The project has progressed beyond planning into
                  a working full-stack application. Core
                  architecture, project data integration,
                  recruiter-facing pages, case-study content,
                  responsive behavior, and reusable interface
                  patterns are established, with final quality
                  checks and production deployment remaining.
                </p>

              </div>


              <div className="platform-status-summary">

                <div>

                  <span>
                    Project Status
                  </span>

                  <strong>
                    In Progress
                  </strong>

                </div>

                <p>
                  Core application development is substantially
                  established. Remaining work focuses on
                  completing recruiter-facing content, final
                  validation, source-control cleanup, Azure
                  deployment, and production smoke testing.
                </p>

              </div>


              <div className="platform-progress-grid">

                <article className="platform-progress-card">

                  <span>
                    01
                  </span>

                  <h3>
                    Architecture Established
                  </h3>

                  <p>
                    A modular React, ASP.NET Core, EF Core, and
                    SQL Server architecture provides the technical
                    foundation for the application.
                  </p>

                </article>


                <article className="platform-progress-card">

                  <span>
                    02
                  </span>

                  <h3>
                    Full-Stack Integration Working
                  </h3>

                  <p>
                    Project data flows from SQL Server through EF
                    Core and the ASP.NET Core API to the React
                    application.
                  </p>

                </article>


                <article className="platform-progress-card">

                  <span>
                    03
                  </span>

                  <h3>
                    Recruiter Experience Developed
                  </h3>

                  <p>
                    Home, About, Projects, and detailed case-study
                    experiences have been developed around a
                    consistent professional interface.
                  </p>

                </article>


                <article className="platform-progress-card">

                  <span>
                    04
                  </span>

                  <h3>
                    Responsive Behavior Established
                  </h3>

                  <p>
                    Major pages and interface patterns have been
                    reviewed across desktop and narrow viewport
                    conditions.
                  </p>

                </article>


                <article className="platform-progress-card">

                  <span>
                    05
                  </span>

                  <h3>
                    Project Evidence Integrated
                  </h3>

                  <p>
                    Case studies connect project-management
                    practices with architecture, implementation,
                    quality, and delivery evidence.
                  </p>

                </article>


                <article className="platform-progress-card">

                  <span>
                    06
                  </span>

                  <h3>
                    Release Preparation Underway
                  </h3>

                  <p>
                    Final accessibility verification, Git cleanup,
                    production configuration, Azure deployment,
                    and smoke testing remain part of the release
                    path.
                  </p>

                </article>

              </div>
            </section>


            {/* =================================================
                TECHNICAL EVIDENCE
                ================================================= */}

            <section
              className="platform-detail platform-detail--last"
              aria-labelledby="platform-evidence-heading"
            >
              <div className="platform-section-heading">

                <p>
                  Technical Evidence
                </p>

                <h2 id="platform-evidence-heading">
                  Evidence Behind the Case Study
                </h2>

                <p className="platform-section-heading__description">
                  The case study is supported by working
                  application components and delivery artifacts
                  rather than by narrative alone, providing
                  evidence of both project-management thinking and
                  practical technical implementation.
                </p>

              </div>


              <div className="platform-evidence-grid">

                <article className="platform-evidence-card">

                  <span>
                    Application
                  </span>

                  <h3>
                    Working Portfolio
                  </h3>

                  <p>
                    A functioning React interface containing
                    recruiter-facing pages, reusable components,
                    routing, responsive layouts, and case studies.
                  </p>

                </article>


                <article className="platform-evidence-card">

                  <span>
                    Integration
                  </span>

                  <h3>
                    Working REST API
                  </h3>

                  <p>
                    ASP.NET Core endpoints provide project
                    information to the frontend through structured
                    JSON responses.
                  </p>

                </article>


                <article className="platform-evidence-card">

                  <span>
                    Data
                  </span>

                  <h3>
                    SQL Server Integration
                  </h3>

                  <p>
                    Project records are persisted through EF Core
                    and SQL Server rather than existing solely as
                    static frontend content.
                  </p>

                </article>


                <article className="platform-evidence-card">

                  <span>
                    Source Control
                  </span>

                  <h3>
                    Git / GitHub History
                  </h3>

                  <p>
                    Repository history provides traceability across
                    technical implementation and iterative project
                    development.
                  </p>

                </article>


                <article className="platform-evidence-card">

                  <span>
                    Documentation
                  </span>

                  <h3>
                    Architecture &amp; Project Artifacts
                  </h3>

                  <p>
                    Project documentation records architecture
                    decisions, delivery planning, implementation
                    concepts, and project-management practices.
                  </p>

                </article>


                <article className="platform-evidence-card">

                  <span>
                    Release
                  </span>

                  <h3>
                    Production Deployment
                  </h3>

                  <p>
                    Azure deployment and production validation will
                    provide the final operational evidence for the
                    V1 release.
                  </p>

                </article>

              </div>


              <div className="platform-evidence-callout">

                <div>

                  <span>
                    End-to-End Ownership
                  </span>

                  <h3>
                    Plan → Build → Integrate → Validate → Deploy
                  </h3>

                </div>

                <p>
                  The portfolio platform demonstrates my ability
                  to connect project-management practices with
                  practical understanding of how a modern software
                  solution is structured, developed, integrated,
                  tested, controlled, and prepared for production.
                </p>

              </div>
            </section>

          </div>
        </section>

      </div>

    </main>
  )
}