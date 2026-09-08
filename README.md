# IT Project Management Portfolio

A deployed Technical Project Management portfolio demonstrating end-to-end software delivery, project governance, Agile execution, technical coordination, quality management, accessibility, and stakeholder-focused delivery.

This portfolio combines a live full-stack web application with a simulated enterprise IT project to demonstrate both project-management capability and practical technical understanding.

**V1 Status:** Deployed  
**Live Portfolio:** https://it-pm-portfolio-frontend.onrender.com

---

## Portfolio Overview

The portfolio includes:

- A professional portfolio website built with React and TypeScript
- An ASP.NET Core backend API
- Project case studies
- Project-management artifacts
- Agile / Scrum delivery practices
- Risk, issue, quality, and governance documentation
- Accessibility testing using axe and WAVE
- Contact-form integration with backend services
- Production deployment using Render

The portfolio contains two distinct project areas:

1. **PeopleFirst Employee Self-Service Portal** — a simulated enterprise IT project used to demonstrate Technical Project Management and Scrum practices.
2. **IT Project Management Portfolio Platform** — the real full-stack application used to present the portfolio and its project evidence.

---

## Featured Project — PeopleFirst

**PeopleFirst** is a simulated Employee Experience Platform / Employee Self-Service Portal.

The project demonstrates the planning and delivery of an enterprise application replacing manual Excel- and email-based processes with a structured digital solution.

### Project Scope

The solution includes:

- Employee self-service
- Manager approvals
- HR administration
- Reporting
- Notifications
- Role-based access
- Auditability
- Enterprise integrations

### Delivery Approach

The project uses a **hybrid delivery model** combining predictive project governance with iterative Scrum-based software delivery.

**Project duration:** August 2026 – January 2027  
**Approved budget:** $420,000  
**Current status:** In Progress

---

## Technical Project Manager Responsibilities

The portfolio demonstrates practical TPM activities including:

- Project initiation and planning
- Requirements coordination
- Scope management
- Schedule management
- Risk and issue management
- Dependency tracking
- Stakeholder communication
- Agile / Scrum facilitation
- Quality management
- Defect management
- Technical coordination
- Environment and integration readiness
- Accessibility testing
- Project documentation and governance

The Technical Project Manager also acts as the **Scrum Master** for the simulated PeopleFirst project.

---

## Project Artifacts

The portfolio includes downloadable project-management artifacts such as:

- Project Management Plan
- Quality Management Plan
- Business Analysis Document
- Requirements Register
- Risk Register
- Stakeholder Register
- Communications Management Plan
- Assumptions Log
- Dependencies Log
- Integrated Project Schedule

These artifacts demonstrate practical project-management documentation used throughout the simulated project lifecycle.

The Portfolio Platform also includes technical and delivery artifacts documenting the development of the portfolio application itself.

---

## Portfolio Platform

The **IT Project Management Portfolio Platform** is the real application developed to present the portfolio, case studies, project artifacts, and professional profile.

Unlike the simulated PeopleFirst project, the Portfolio Platform represents an implemented software-delivery project covering application design, frontend and backend development, API integration, source control, accessibility validation, production configuration, deployment, and release preparation.

**V1 Status:** Deployed

### V1 Capabilities

- Responsive portfolio website
- Project and case-study presentation
- Project artifact library
- ASP.NET Core Projects API
- React-to-API integration
- Contact-form API and email delivery
- Production CORS configuration
- Accessibility testing
- Dockerized backend deployment
- Production frontend and backend hosting

---

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- HTML5
- CSS3

### Backend

- ASP.NET Core (.NET 10)
- C#
- REST API
- Entity Framework Core
- SQL Server (local development)
- EF Core InMemory database (production V1)
- Resend email integration

### Development & Delivery

- Visual Studio Code
- Git
- GitHub
- Docker
- Render
- Agile / Scrum
- Accessibility testing with axe DevTools and WAVE

---

## Application Architecture

The application follows a component-based frontend architecture with a REST API backend.

```text
Browser
   |
   v
React / TypeScript Frontend
   |
   | HTTPS / JSON
   v
ASP.NET Core REST API
   |
   v
Entity Framework Core
   |
   +-------------------------+
   |                         |
   v                         v
SQL Server              EF Core InMemory
(Local Development)     (Production V1)
```

The contact workflow follows a separate backend integration path:

```text
Contact Form
   |
   v
React Frontend
   |
   | POST /api/contact
   v
ASP.NET Core API
   |
   v
Resend Email Service
   |
   v
Portfolio Contact Email
```

---

## Production Deployment

Portfolio V1 is deployed using **Render**.

### Frontend

The React/Vite frontend is deployed as a Render Static Site.

**Live application:**  
https://it-pm-portfolio-frontend.onrender.com

### Backend

The ASP.NET Core API is deployed as a Docker-based Render Web Service.

**Production API:**  
https://it-pm-portfolio.onrender.com

### Production Configuration

The V1 deployment includes:

- Dockerized ASP.NET Core backend
- Render-hosted frontend and backend
- Production environment configuration
- Production CORS policy
- Environment-based API configuration
- EF Core InMemory database for fixed portfolio project data
- Resend integration for contact-form email delivery

SQL Server remains the database used for local development.

---

## Accessibility

Accessibility was considered throughout the portfolio implementation.

Automated testing included:

- axe DevTools
- WAVE

The portfolio was reviewed for issues including:

- Color contrast
- Semantic structure
- Accessible navigation
- Form accessibility
- Document accessibility

Automated accessibility tools form part of the validation process and do not by themselves establish complete WCAG conformance.

---

## V1 Release

Portfolio Platform **V1 is deployed and operational**.

The V1 release includes:

- Completed frontend implementation
- Working ASP.NET Core backend
- Projects API integration
- Working production contact form
- Project artifact presentation
- Accessibility validation
- Git/GitHub source control
- Docker production configuration
- Render frontend deployment
- Render backend deployment
- Production smoke testing

Further enhancements can be developed as future versions without changing the V1 release baseline.

---

## Repository

This repository contains the source code and supporting implementation for the IT Project Management Portfolio Platform.

The project demonstrates the combination of:

**Project Management → Agile Delivery → Technical Coordination → Software Implementation → Quality Validation → Production Deployment**

---

## Author

**Karthick BK**

Technical Project Management / Scrum-focused portfolio demonstrating project leadership, structured delivery practices, and practical technical understanding.
