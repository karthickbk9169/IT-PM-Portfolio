import {
  BriefcaseBusiness,
  Code2,
  Clock3,
  LayoutDashboard,
  Search,
  Bell,
  UserCircle2,
  FileText,
  UserRound,
  Gift,
  CheckCircle2,
  HelpCircle,
  CalendarDays,
  HeartPulse,
  UsersRound,
  Mail,
  ArrowRight,
} from 'lucide-react'
import type { Project } from '../../projects/types'
import { Link } from 'react-router-dom'
import './FeaturedProject.css'

type FeaturedProjectProps = {
  project?: Project
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  if (!project) {
    return null
  }

  return (
    <section
      className="featured-project-section"
      aria-labelledby="featured-project-heading"
    >
      <div className="featured-project-section__inner">
        <div className="featured-project-section__content">
          <p className="featured-project-section__eyebrow">
            Featured Project
          </p>

          <h2 id="featured-project-heading">
            {project.title}
          </h2>

          <p className="featured-project-section__summary">
            {project.summary}
          </p>

          <div
            className="featured-project-section__tags"
            aria-label="Project details"
          >
            <span>
              <BriefcaseBusiness size={15} aria-hidden="true" />
              {project.category}
            </span>

            <span>
              <Code2 size={15} aria-hidden="true" />
              Technical Project
            </span>

            <span>
              <Clock3 size={15} aria-hidden="true" />
              {project.status}
            </span>
          </div>

          <Link
            className="featured-project-section__link"
            to="/projects"
            aria-label={`View project details for ${project.title}`}
          >
            View Project Details
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div
          className="featured-project-visual"
          aria-label="PeopleFirst employee self-service portal preview"
        >
          <div className="portal-preview__topbar">
            <div className="portal-preview__brand">
              <span className="portal-preview__brand-mark">
                <LayoutDashboard size={14} aria-hidden="true" />
              </span>
              <strong>PeopleFirst</strong>
            </div>

            <div className="portal-preview__top-actions">
              <Search size={15} aria-hidden="true" />
              <Bell size={15} aria-hidden="true" />
              <UserCircle2 size={16} aria-hidden="true" />
            </div>
          </div>

          <div className="portal-preview__body">
            <aside className="portal-preview__sidebar">
              <div className="portal-preview__nav-item is-active">
                <LayoutDashboard size={14} aria-hidden="true" />
                <span>Dashboard</span>
              </div>

              <div className="portal-preview__nav-item">
                <Search size={14} aria-hidden="true" />
                <span>Requests</span>
              </div>

              <div className="portal-preview__nav-item">
                <UserRound size={14} aria-hidden="true" />
                <span>My Profile</span>
              </div>

              <div className="portal-preview__nav-item">
                <Gift size={14} aria-hidden="true" />
                <span>Benefits</span>
              </div>

              <div className="portal-preview__nav-item">
                <CheckCircle2 size={14} aria-hidden="true" />
                <span>Approvals</span>
              </div>

              <div className="portal-preview__nav-item">
                <HelpCircle size={14} aria-hidden="true" />
                <span>Help & Support</span>
              </div>
            </aside>

            <div className="portal-preview__main">
              <div className="portal-preview__welcome">
                <div>
                  <strong>Welcome back, Employee</strong>
                  <span>How can we help you today?</span>
                </div>

                <div className="portal-preview__quick-actions">
                  <button type="button">
                    <FileText size={13} aria-hidden="true" />
                    New Request
                  </button>

                  <button type="button">
                    <HeartPulse size={13} aria-hidden="true" />
                    View Benefits
                  </button>
                </div>
              </div>

              <div className="portal-preview__content-grid">
                <div className="portal-preview__left">
                  <section className="portal-preview__panel">
                    <div className="portal-preview__panel-heading">
                      <strong>My Requests</strong>
                    </div>

                    <div className="portal-preview__stats">
                      <div>
                        <span>In Progress</span>
                        <strong>2</strong>
                      </div>

                      <div>
                        <span>Completed</span>
                        <strong>8</strong>
                      </div>

                      <div>
                        <span>Pending</span>
                        <strong>1</strong>
                      </div>
                    </div>
                  </section>

                  <section className="portal-preview__panel">
                    <div className="portal-preview__panel-heading">
                      <strong>Approvals</strong>
                    </div>

                    <div className="portal-preview__approval">
                      <div className="portal-preview__approval-person">
                        <span className="portal-preview__avatar">
                          <UserRound size={14} aria-hidden="true" />
                        </span>

                        <div>
                          <strong>Leave Request</strong>
                          <span>John Doe</span>
                        </div>
                      </div>

                      <div className="portal-preview__approval-actions">
                        <button type="button">Approve</button>
                        <button type="button">Reject</button>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="portal-preview__right">
                  <section className="portal-preview__panel">
                    <div className="portal-preview__panel-heading">
                      <strong>Quick Actions</strong>
                    </div>

                    <div className="portal-preview__mini-actions">
                      <div>
                        <CalendarDays size={13} aria-hidden="true" />
                        <span>Leave Request</span>
                      </div>

                      <div>
                        <UsersRound size={13} aria-hidden="true" />
                        <span>Profile Update</span>
                      </div>
                    </div>
                  </section>

                  <section className="portal-preview__panel">
                    <div className="portal-preview__panel-heading">
                      <strong>Announcements</strong>
                    </div>

                    <div className="portal-preview__announcement">
                      <strong>System Maintenance</strong>
                      <span>Scheduled maintenance notice</span>
                    </div>
                  </section>

                  <section className="portal-preview__panel">
                    <div className="portal-preview__panel-heading">
                      <strong>Popular Services</strong>
                    </div>

                    <div className="portal-preview__services">
                      <span>
                        <Mail size={12} aria-hidden="true" />
                        Leave Requests
                      </span>

                      <span>
                        <UserRound size={12} aria-hidden="true" />
                        Profile Update
                      </span>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}