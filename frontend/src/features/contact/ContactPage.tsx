import {
  ArrowRight,
  BriefcaseBusiness,
  ExternalLink,
  Mail,
  Send,
} from 'lucide-react'

import {
  useState,
  type FormEvent,
} from 'react'

import { PageSideDecoration } from '../../shared/components/PageSideDecoration'

import { sendContactMessage } from './api'

import './ContactPage.css'

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const [successMessage, setSuccessMessage] =
    useState<string | null>(null)

  const [errorMessage, setErrorMessage] =
    useState<string | null>(null)


  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    setSuccessMessage(null)
    setErrorMessage(null)
    setIsSubmitting(true)

    const form = event.currentTarget

    const formData = new FormData(form)

    try {
      const response =
        await sendContactMessage({
          name: String(
            formData.get('name') ?? '',
          ).trim(),

          company: String(
            formData.get('company') ?? '',
          ).trim(),

          email: String(
            formData.get('email') ?? '',
          ).trim(),

          message: String(
            formData.get('message') ?? '',
          ).trim(),
        })

      setSuccessMessage(response.message)

      form.reset()
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your message.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <main className="contact-page">
      <PageSideDecoration />

      <div className="contact-page__content">

        {/* =====================================================
            HERO
            ===================================================== */}

        <section
          className="contact-hero"
          aria-labelledby="contact-heading"
        >
          <div className="contact-section__inner">

            <p className="contact-eyebrow">
              LET&apos;S CONNECT
            </p>

            <h1 id="contact-heading">
              Let&apos;s Discuss Your
              <span> Next Project.</span>
            </h1>

            <p className="contact-hero__lead">
              Recruiting for a Technical Project Manager
              or Scrum Master opportunity? I&apos;d be
              happy to connect and discuss how my project
              leadership, delivery experience, and
              technical understanding could support your
              team.
            </p>

          </div>
        </section>


        {/* =====================================================
            CONTACT AREA
            ===================================================== */}

        <section
          className="contact-main"
          aria-labelledby="contact-form-heading"
        >
          <div className="contact-section__inner">

            <div className="contact-layout">

              {/* ===============================================
                  LEFT — CONTEXT
                  =============================================== */}

              <div className="contact-intro">

                <p className="contact-section-label">
                  OPPORTUNITIES
                </p>

                <h2>
                  Open to Technical Project Manager /
                  Scrum Master Opportunities
                </h2>

                <p className="contact-intro__text">
                  I&apos;m interested in opportunities
                  where I can combine structured project
                  management, Agile delivery, stakeholder
                  coordination, team leadership, and
                  practical technical understanding to
                  support successful IT project delivery.
                </p>


                <div className="contact-opportunity-card">

                  <span className="contact-opportunity-card__icon">
                    <BriefcaseBusiness
                      size={22}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  <div>

                    <span className="contact-opportunity-card__label">
                      ROLE FOCUS
                    </span>

                    <strong>
                      Technical Project Manager /
                      Scrum Master
                    </strong>

                    <p>
                      IT project delivery, Agile
                      coordination, stakeholder management,
                      governance, quality, risk management,
                      and technical delivery coordination.
                    </p>

                  </div>

                </div>


                {/* =============================================
                    LINKEDIN
                    ============================================= */}

                <div className="contact-linkedin">

                  <span className="contact-linkedin__icon">
                    <ExternalLink
                      size={21}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  <div>

                    <span className="contact-linkedin__label">
                      PROFESSIONAL PROFILE
                    </span>

                    <strong>
                      Connect on LinkedIn
                    </strong>

                    <p>
                      View my professional background and
                      connect with me directly on LinkedIn.
                    </p>

                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-linkedin__link"
                    >
                      Connect on LinkedIn

                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                      />
                    </a>

                  </div>

                </div>

              </div>


              {/* ===============================================
                  RIGHT — CONTACT FORM
                  =============================================== */}

              <div className="contact-form-card">

                <div className="contact-form-card__header">

                  <span className="contact-form-card__icon">
                    <Mail
                      size={22}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  <div>

                    <p className="contact-section-label">
                      GET IN TOUCH
                    </p>

                    <h2 id="contact-form-heading">
                      Send a Message
                    </h2>

                  </div>

                </div>


                <p className="contact-form-card__intro">
                  Complete the form below to send a
                  message through the portfolio
                  application.
                </p>


                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  <div className="contact-form__field">

                    <label htmlFor="contact-name">
                      Name
                      <span aria-hidden="true">
                        {' '}*
                      </span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      required
                    />

                  </div>


                  <div className="contact-form__field">

                    <label htmlFor="contact-company">
                      Company / Organization
                      <span aria-hidden="true">
                        {' '}*
                      </span>
                    </label>

                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      maxLength={150}
                      required
                    />

                  </div>


                  <div className="contact-form__field">

                    <label htmlFor="contact-email">
                      Email
                      <span aria-hidden="true">
                        {' '}*
                      </span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      required
                    />

                  </div>


                  <div className="contact-form__field">

                    <label htmlFor="contact-message">
                      Message
                      <span aria-hidden="true">
                        {' '}*
                      </span>
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      maxLength={5000}
                      required
                    />

                  </div>


                  <button
                    type="submit"
                    className="contact-form__submit"
                    disabled={isSubmitting}
                  >
                    <Send
                      size={17}
                      strokeWidth={2.1}
                      aria-hidden="true"
                    />

                    {isSubmitting
                      ? 'Sending...'
                      : 'Send Message'}
                  </button>


                  <p className="contact-form__note">
                    All fields are required.
                  </p>


                  <div
                    className="contact-form__feedback"
                    aria-live="polite"
                  >
                    {successMessage && (
                      <p className="contact-form__success">
                        {successMessage}
                      </p>
                    )}

                    {errorMessage && (
                      <p
                        className="contact-form__error"
                        role="alert"
                      >
                        {errorMessage}
                      </p>
                    )}
                  </div>

                </form>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            CLOSING
            ===================================================== */}

        <section
          className="contact-closing"
          aria-labelledby="contact-closing-heading"
        >
          <div className="contact-section__inner">

            <div className="contact-closing__panel">

              <div>

                <p className="contact-section-label">
                  PROJECT DELIVERY
                </p>

                <h2 id="contact-closing-heading">
                  Plan. Coordinate. Deliver.
                </h2>

              </div>

              <p>
                I&apos;m looking to bring my leadership
                experience, structured project-management
                approach, Agile practices, and practical
                technical understanding into a Technical
                Project Manager or Scrum Master role.
              </p>

            </div>

          </div>
        </section>

      </div>

    </main>
  )
}