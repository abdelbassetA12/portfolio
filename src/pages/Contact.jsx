 
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = "elhajiriabdelbasset2020@gmail.com";
  const phone = "+212700592987";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const subject = encodeURIComponent(
      formData.subject || `Contact message from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    try {
      window.location.href = mailtoUrl;

      setStatus({
        type: "success",
        message:
          "Your email application should open with your message ready to send. Please send it from your email application.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Unable to open your email application. Please contact me directly by email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      id: "email",
      label: "Email Address",
      value: email,
      description: "For projects, questions and collaborations",
      href: `mailto:${email}`,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      ),
    },
    {
      id: "phone",
      label: "Phone / WhatsApp",
      value: phone,
      description: "Let's discuss your next project",
      href: "https://wa.me/212700592987",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.2A8.4 8.4 0 1 1 21 11.5Z" />
          <path d="M8.5 8.5c.5 2.4 2.6 4.5 5 5l1.2-1.2 2 1c-.2 1.2-1 1.8-2.2 1.8-3.6-.5-6.6-3.5-7.1-7.1 0-1.2.6-2 1.8-2.2l1 2-1.7.7Z" />
        </svg>
      ),
    },
    {
      id: "location",
      label: "Location",
      value: "Casablanca, Morocco",
      description: "Available for remote projects worldwide",
      href: "https://maps.google.com/?q=Casablanca,Morocco",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
    },
  ];

  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive and high-performance websites built around your goals.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M3 9h18M7 6.5h.01M10 6.5h.01M9 13l-2 2 2 2M15 13l2 2-2 2" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Full Stack Applications",
      description:
        "Complete web applications with secure APIs, databases and polished interfaces.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="2" />
          <rect x="14" y="3" width="7" height="7" rx="2" />
          <rect x="3" y="14" width="7" height="7" rx="2" />
          <rect x="14" y="14" width="7" height="7" rx="2" />
          <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "UI & Responsive Design",
      description:
        "Clean interfaces, thoughtful layouts and seamless experiences across devices.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M3 9h18M9 9v12M6 6h.01M9 6h.01M12 6h.01" />
        </svg>
      ),
    },
  ];

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-hero-content">
            <div className="contact-eyebrow">
              <span className="contact-eyebrow-dot" />
              CONTACT
            </div>

            <h1>
              Let's build something
              <br />
              <span>extraordinary.</span>
            </h1>

            <p>
              Have an idea, a project, or an opportunity in mind? I'd love
              to hear about it. Tell me what you're working on, and let's
              turn your vision into something real.
            </p>

            <a href="#contact-form" className="contact-primary-button">
              Start a conversation
              <span aria-hidden="true">↗</span>
            </a>

            <div className="contact-hero-note">
              <span className="contact-status-dot" />
              Open to freelance projects and collaborations
            </div>
          </div>

          <div className="contact-hero-visual" aria-hidden="true">
            <div className="contact-orbit contact-orbit-one" />
            <div className="contact-orbit contact-orbit-two" />

            <div className="contact-visual-glow" />

            <div className="contact-visual-card">
              <div className="contact-visual-card-top">
                <span className="contact-window-dot" />
                <span className="contact-window-dot" />
                <span className="contact-window-dot" />
                <span className="contact-card-caption">NEW PROJECT</span>
              </div>

              <div className="contact-code">
                <span className="contact-code-muted">01</span>
                <span>
                  <b>const</b> idea = <i>"Your vision"</i>;
                </span>

                <span className="contact-code-muted">02</span>
                <span>
                  <b>const</b> solution = <em>"Our work"</em>;
                </span>

                <span className="contact-code-muted">03</span>
                <span className="contact-code-result">
                  build(idea, solution);
                </span>
              </div>

              <div className="contact-visual-footer">
                <span className="contact-visual-footer-icon">✦</span>
                <div>
                  <strong>Let's make it happen.</strong>
                  <span>Ideas become experiences.</span>
                </div>
              </div>
            </div>

            <div className="contact-floating-symbol contact-symbol-one">
              {"</>"}
            </div>

            <div className="contact-floating-symbol contact-symbol-two">
              ✳
            </div>
          </div>
        </div>

        <div className="contact-hero-bottom">
          <span>HAVE A PROJECT IN MIND?</span>
          <span className="contact-hero-line" />
          <span>LET'S TALK</span>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details-section">
        <div className="contact-container">
          <div className="contact-section-heading">
            <span className="contact-section-label">GET IN TOUCH</span>
            <h2>
              Find the right way
              <br />
              <span>to reach me.</span>
            </h2>
            <p>
              Whether you have a clear brief or just an initial idea, the
              first step is a conversation.
            </p>
          </div>

          <div className="contact-methods-grid">
            {contactMethods.map((method) => (
              <a
                className="contact-method-card"
                href={method.href}
                key={method.id}
                target={method.id === "location" || method.id === "phone" ? "_blank" : undefined}
                rel={method.id === "location" || method.id === "phone" ? "noreferrer" : undefined}
              >
                <div className="contact-method-top">
                  <div className="contact-method-icon">{method.icon}</div>
                  <span className="contact-method-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <span className="contact-method-label">{method.label}</span>
                <strong className="contact-method-value">{method.value}</strong>
                <p>{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section" id="contact-form">
        <div className="contact-container">
          <div className="contact-form-layout">
            <div className="contact-form-intro">
              <span className="contact-section-label">YOUR NEXT BIG IDEA</span>

              <h2>
                Tell me about
                <br />
                <span>your project.</span>
              </h2>

              <p>
                Share a few details below. I'll have a better understanding
                of what you need and how I can help.
              </p>

              <div className="contact-form-promise">
                <div className="contact-promise-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <div>
                  <strong>Direct communication</strong>
                  <span>Your message is prepared for your email application.</span>
                </div>
              </div>

              <div className="contact-form-decoration">
                <span>GOOD IDEAS START WITH A CONVERSATION.</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-heading">
                <span className="contact-form-step">01 / CONTACT DETAILS</span>
                <h3>Let's get to know you.</h3>
              </div>

              <div className="contact-input-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">What is this about?</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Website, collaboration, freelance..."
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={150}
                />
              </div>

              <div className="contact-field">
                <div className="contact-message-label">
                  <label htmlFor="contact-message">Tell me about your project</label>
                  <span>Be as detailed as you like</span>
                </div>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="I'd like to build a website that..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={5000}
                />
              </div>

              {status.message && (
                <div
                  className={`contact-form-status contact-status-${status.type}`}
                  role="status"
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="contact-submit-button"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Preparing email..." : "Send your message"}</span>
                <span className="contact-submit-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>

              <p className="contact-form-disclaimer">
                This form opens your email application. Your message is not
                sent automatically by this website.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="contact-services-section">
        <div className="contact-container">
          <div className="contact-services-heading">
            <div>
              <span className="contact-section-label">HOW I CAN HELP</span>
              <h2>
                Let's create something
                <br />
                <span>worth remembering.</span>
              </h2>
            </div>

            <p>
              From the first concept to the final product, I focus on
              building useful, polished and reliable digital experiences.
            </p>
          </div>

          <div className="contact-services-grid">
            {services.map((service) => (
              <article className="contact-service-card" key={service.number}>
                <div className="contact-service-top">
                  <span>{service.number}</span>
                  <div className="contact-service-icon">{service.icon}</div>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#contact-form" aria-label={`Discuss ${service.title}`}>
                  Discuss your project <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-final-section">
        <div className="contact-container">
          <div className="contact-final-card">
            <div className="contact-final-content">
              <span className="contact-section-label">ONE MESSAGE CAN START IT ALL</span>
              <h2>
                Have something
                <br />
                <span>in mind?</span>
              </h2>
              <p>
                Let's talk about your goals and find the right solution
                for your next project.
              </p>

              <a href="#contact-form" className="contact-primary-button">
                Let's work together
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact-final-decoration" aria-hidden="true">
              <div className="contact-final-ring contact-ring-one" />
              <div className="contact-final-ring contact-ring-two" />
              <div className="contact-final-ring contact-ring-three" />
              <span>✳</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          --ct-bg: #020811;
          --ct-panel: #070d18;
          --ct-panel-light: #0b1220;
          --ct-border: rgba(255, 255, 255, 0.075);
          --ct-text: #f5f3fa;
          --ct-muted: #9195a5;
          --ct-soft: #b9bbc8;
          --ct-purple: #8c35ff;
          --ct-purple-light: #bf55ff;

          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: var(--ct-bg);
          color: var(--ct-text);
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          isolation: isolate;
        }

        .contact-page *,
        .contact-page *::before,
        .contact-page *::after {
          box-sizing: border-box;
        }

        .contact-page a {
          color: inherit;
          text-decoration: none;
        }

        .contact-page button,
        .contact-page input,
        .contact-page textarea {
          font: inherit;
        }

        .contact-container {
          width: min(1120px, calc(100% - 80px));
          margin-inline: auto;
        }

        .contact-hero {
          position: relative;
          min-height: 555px;
          padding: 95px 0 70px;
          border-bottom: 1px solid var(--ct-border);
          background:
            radial-gradient(ellipse at 75% 35%, rgba(105, 32, 219, .13), transparent 36%),
            radial-gradient(ellipse at 15% 0%, rgba(46, 83, 190, .08), transparent 36%);
        }

        .contact-hero > .contact-container {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(340px, .9fr);
          gap: 45px;
          align-items: center;
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
        }

        .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
          color: #c18aff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .contact-eyebrow-dot,
        .contact-status-dot {
          width: 8px;
          height: 8px;
          flex: 0 0 8px;
          border-radius: 50%;
          background: #a649ff;
          box-shadow: 0 0 14px rgba(166, 73, 255, .65);
        }

        .contact-hero h1 {
          margin: 0;
          color: #f7f5fb;
          font-size: clamp(38px, 4.5vw, 60px);
          line-height: 1.12;
          font-weight: 750;
          letter-spacing: -2.7px;
        }

        .contact-hero h1 span,
        .contact-section-heading h2 span,
        .contact-form-intro h2 span,
        .contact-services-heading h2 span,
        .contact-final-content h2 span {
          color: #b34dff;
          background: linear-gradient(100deg, #8a42ff, #d16bff);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-hero-content > p {
          max-width: 490px;
          margin: 24px 0 27px;
          color: var(--ct-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .contact-primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 23px;
          min-height: 47px;
          padding: 0 20px;
          border: 1px solid rgba(255, 255, 255, .12);
          border-radius: 7px;
          color: white !important;
          background: linear-gradient(105deg, #6426e9, #9636ed 70%, #ad48e9);
          box-shadow: 0 9px 28px rgba(110, 40, 235, .2);
          font-size: 12px;
          font-weight: 650;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .contact-primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(110, 40, 235, .32);
        }

        .contact-primary-button > span {
          font-size: 17px;
          transition: transform .2s ease;
        }

        .contact-primary-button:hover > span {
          transform: translate(2px, -2px);
        }

        .contact-hero-note {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 27px;
          color: #9b9eac;
          font-size: 11px;
        }

        .contact-status-dot {
          background: #53d69b;
          box-shadow: 0 0 12px rgba(83, 214, 155, .35);
        }

        /* Hero visual */

        .contact-hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 330px;
          isolation: isolate;
        }

        .contact-visual-glow {
          position: absolute;
          z-index: -1;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: rgba(117, 38, 255, .14);
          filter: blur(55px);
        }

        .contact-orbit {
          position: absolute;
          width: 325px;
          height: 325px;
          border: 1px solid rgba(175, 106, 255, .12);
          border-radius: 50%;
        }

        .contact-orbit-two {
          width: 255px;
          height: 255px;
          border-style: dashed;
          border-color: rgba(175, 106, 255, .1);
        }

        .contact-visual-card {
          position: relative;
          z-index: 1;
          width: min(100%, 360px);
          overflow: hidden;
          border: 1px solid rgba(196, 160, 255, .2);
          border-radius: 14px;
          background: linear-gradient(145deg, rgba(17, 21, 39, .97), rgba(6, 11, 23, .97));
          box-shadow: 0 25px 90px rgba(0, 0, 0, .3), 0 0 50px rgba(119, 48, 234, .07);
          transform: rotate(-2deg);
          transition: transform .3s ease;
        }

        .contact-visual-card:hover {
          transform: rotate(0) translateY(-4px);
        }

        .contact-visual-card-top {
          display: flex;
          align-items: center;
          gap: 6px;
          height: 43px;
          padding: 0 15px;
          border-bottom: 1px solid var(--ct-border);
        }

        .contact-window-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #7542a9;
        }

        .contact-window-dot:nth-child(2) {
          background: #b35de2;
        }

        .contact-window-dot:nth-child(3) {
          background: #514477;
        }

        .contact-card-caption {
          margin-left: auto;
          color: #777c91;
          font-size: 8px;
          letter-spacing: 1.6px;
        }

        .contact-code {
          display: grid;
          grid-template-columns: 24px minmax(0, 1fr);
          gap: 18px 12px;
          padding: 30px 22px 32px;
          font-family: "SFMono-Regular", Consolas, monospace;
          font-size: clamp(10px, 1.1vw, 12px);
          line-height: 1.7;
        }

        .contact-code-muted {
          color: #51556a;
        }

        .contact-code b {
          color: #b78aff;
          font-weight: 500;
        }

        .contact-code i {
          color: #75d7bc;
          font-style: normal;
        }

        .contact-code em {
          color: #f1a1e6;
          font-style: normal;
        }

        .contact-code-result {
          grid-column: 2;
          color: #d3b4ff;
        }

        .contact-visual-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 17px 21px;
          border-top: 1px solid var(--ct-border);
          background: rgba(255, 255, 255, .018);
        }

        .contact-visual-footer-icon {
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border: 1px solid rgba(174, 91, 255, .22);
          border-radius: 9px;
          color: #c37bff;
          background: rgba(145, 59, 255, .1);
        }

        .contact-visual-footer > div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .contact-visual-footer strong {
          color: #ece8f5;
          font-size: 11px;
        }

        .contact-visual-footer > div > span {
          color: #7e8295;
          font-size: 10px;
        }

        .contact-floating-symbol {
          position: absolute;
          z-index: 2;
          display: grid;
          place-items: center;
          border: 1px solid rgba(193, 145, 255, .2);
          border-radius: 12px;
          color: #c69aff;
          background: rgba(16, 13, 35, .92);
          box-shadow: 0 10px 35px rgba(0, 0, 0, .2);
        }

        .contact-symbol-one {
          top: 30px;
          right: 2px;
          width: 55px;
          height: 48px;
          font-family: monospace;
          font-size: 17px;
          transform: rotate(8deg);
        }

        .contact-symbol-two {
          bottom: 22px;
          left: 0;
          width: 43px;
          height: 43px;
          font-size: 22px;
          transform: rotate(-12deg);
        }

        .contact-hero-bottom {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 16px max(40px, calc((100% - 1120px) / 2));
          border-top: 1px solid rgba(255, 255, 255, .04);
          color: #696e80;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .contact-hero-line {
          width: 50px;
          height: 1px;
          background: linear-gradient(90deg, #7635dc, transparent);
        }

        /* Section headings */

        .contact-section-label {
          display: inline-block;
          margin-bottom: 15px;
          color: #a35aff;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 2px;
        }

        .contact-section-heading h2,
        .contact-form-intro h2,
        .contact-services-heading h2,
        .contact-final-content h2 {
          margin: 0;
          font-size: clamp(30px, 3vw, 40px);
          line-height: 1.2;
          letter-spacing: -1.4px;
          font-weight: 720;
        }

        .contact-section-heading > p,
        .contact-form-intro > p,
        .contact-services-heading > p {
          max-width: 450px;
          margin: 18px 0 0;
          color: var(--ct-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        /* Contact cards */

        .contact-details-section {
          padding: 83px 0 90px;
          border-bottom: 1px solid var(--ct-border);
        }

        .contact-section-heading {
          margin-bottom: 35px;
        }

        .contact-methods-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .contact-method-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 205px;
          padding: 23px;
          border: 1px solid var(--ct-border);
          border-radius: 11px;
          background: linear-gradient(145deg, rgba(255,255,255,.025), rgba(255,255,255,.008));
          transition: transform .22s ease, border-color .22s ease, background .22s ease;
        }

        .contact-method-card:hover {
          transform: translateY(-5px);
          border-color: rgba(155, 80, 255, .35);
          background: linear-gradient(145deg, rgba(130, 57, 255, .07), rgba(255,255,255,.012));
        }

        .contact-method-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .contact-method-icon,
        .contact-service-icon {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(165, 90, 255, .2);
          border-radius: 10px;
          color: #b66aff;
          background: rgba(127, 47, 237, .09);
        }

        .contact-method-icon svg,
        .contact-service-icon svg {
          width: 21px;
          height: 21px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .contact-method-arrow {
          color: #74788b;
          font-size: 17px;
          transition: color .2s ease, transform .2s ease;
        }

        .contact-method-card:hover .contact-method-arrow {
          color: #c58aff;
          transform: translate(2px, -2px);
        }

        .contact-method-label {
          margin-bottom: 8px;
          color: #8e92a3;
          font-size: 11px;
        }

        .contact-method-value {
          overflow-wrap: anywhere;
          color: #f0edf7;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.6;
        }

        .contact-method-card > p {
          margin: 9px 0 0;
          color: #74798b;
          font-size: 10px;
          line-height: 1.7;
        }

        /* Form layout */

        .contact-form-section {
          padding: 90px 0;
          border-bottom: 1px solid var(--ct-border);
          background: radial-gradient(ellipse at 13% 35%, rgba(100, 39, 209, .07), transparent 35%);
          scroll-margin-top: 30px;
        }

        .contact-form-layout {
          display: grid;
          grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);
          gap: 75px;
          align-items: start;
        }

        .contact-form-intro {
          position: relative;
          min-width: 0;
          padding-top: 8px;
        }

        .contact-form-intro > p {
          max-width: 360px;
        }

        .contact-form-promise {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          margin-top: 32px;
          padding: 17px;
          border: 1px solid var(--ct-border);
          border-radius: 9px;
          background: rgba(255, 255, 255, .015);
        }

        .contact-promise-icon {
          display: grid;
          place-items: center;
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          border-radius: 8px;
          color: #ae6cff;
          background: rgba(141, 56, 244, .11);
        }

        .contact-promise-icon svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .contact-form-promise > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-form-promise strong {
          color: #dcd8e7;
          font-size: 11px;
        }

        .contact-form-promise span {
          color: #85899b;
          font-size: 10px;
          line-height: 1.7;
        }

        .contact-form-decoration {
          margin-top: 65px;
          color: #555a6d;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
          min-width: 0;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, .085);
          border-radius: 13px;
          background: linear-gradient(145deg, rgba(13, 20, 34, .9), rgba(6, 12, 23, .95));
          box-shadow: 0 24px 70px rgba(0, 0, 0, .13);
        }

        .contact-form-heading {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--ct-border);
        }

        .contact-form-step {
          color: #a76aff;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.7px;
        }

        .contact-form-heading h3 {
          margin: 0;
          color: #f0edf7;
          font-size: 21px;
          font-weight: 650;
          letter-spacing: -.4px;
        }

        .contact-input-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
          min-width: 0;
        }

        .contact-field label {
          color: #d1cedc;
          font-size: 11px;
          font-weight: 550;
        }

        .contact-field input,
        .contact-field textarea {
          width: 100%;
          min-width: 0;
          border: 1px solid rgba(255, 255, 255, .085);
          border-radius: 7px;
          outline: none;
          color: #f0edf8;
          background: rgba(255, 255, 255, .022);
          font-size: 12px;
          transition: border-color .2s ease, background .2s ease, box-shadow .2s ease;
        }

        .contact-field input {
          height: 45px;
          padding: 0 13px;
        }

        .contact-field textarea {
          min-height: 145px;
          padding: 14px;
          resize: vertical;
          line-height: 1.7;
        }

        .contact-field input::placeholder,
        .contact-field textarea::placeholder {
          color: #606678;
        }

        .contact-field input:focus,
        .contact-field textarea:focus {
          border-color: rgba(167, 92, 255, .65);
          background: rgba(142, 62, 245, .035);
          box-shadow: 0 0 0 3px rgba(142, 62, 245, .08);
        }

        .contact-message-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .contact-message-label > span {
          color: #777b8d;
          font-size: 9px;
        }

        .contact-submit-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          min-height: 49px;
          padding: 0 17px;
          border: 0;
          border-radius: 7px;
          color: #fff;
          background: linear-gradient(100deg, #6226e9, #9439f0 70%, #b14be9);
          box-shadow: 0 8px 25px rgba(115, 40, 225, .15);
          font-size: 12px;
          font-weight: 650;
          cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease;
        }

        .contact-submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(115, 40, 225, .27);
        }

        .contact-submit-button:disabled {
          opacity: .65;
          cursor: wait;
        }

        .contact-submit-arrow {
          font-size: 18px;
        }

        .contact-form-disclaimer {
          margin: -11px 0 0;
          color: #73788b;
          font-size: 10px;
          line-height: 1.7;
        }

        .contact-form-status {
          padding: 12px 14px;
          border: 1px solid rgba(83, 214, 155, .2);
          border-radius: 7px;
          color: #a4e9c8;
          background: rgba(83, 214, 155, .06);
          font-size: 11px;
          line-height: 1.7;
        }

        .contact-status-error {
          border-color: rgba(255, 103, 120, .25);
          color: #ffb2bd;
          background: rgba(255, 103, 120, .06);
        }

        /* Services */

        .contact-services-section {
          padding: 83px 0 88px;
          border-bottom: 1px solid var(--ct-border);
        }

        .contact-services-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 35px;
          margin-bottom: 36px;
        }

        .contact-services-heading > p {
          max-width: 365px;
          margin: 0 0 3px;
        }

        .contact-services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .contact-service-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 235px;
          padding: 23px;
          border: 1px solid var(--ct-border);
          border-radius: 11px;
          background: rgba(255, 255, 255, .014);
          transition: transform .2s ease, border-color .2s ease, background .2s ease;
        }

        .contact-service-card:hover {
          transform: translateY(-4px);
          border-color: rgba(150, 77, 255, .27);
          background: rgba(127, 47, 237, .035);
        }

        .contact-service-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 26px;
        }

        .contact-service-top > span {
          color: #767b8e;
          font-family: monospace;
          font-size: 11px;
        }

        .contact-service-icon {
          width: 39px;
          height: 39px;
        }

        .contact-service-card h3 {
          margin: 0 0 10px;
          color: #e8e5ef;
          font-size: 14px;
          font-weight: 650;
          line-height: 1.5;
        }

        .contact-service-card > p {
          flex: 1;
          margin: 0 0 22px;
          color: #85899a;
          font-size: 11px;
          line-height: 1.8;
        }

        .contact-service-card > a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-top: 14px;
          border-top: 1px solid var(--ct-border);
          color: #b77aff;
          font-size: 10px;
          font-weight: 600;
        }

        .contact-service-card > a span {
          font-size: 15px;
        }

        /* Final CTA */

        .contact-final-section {
          padding: 75px 0 85px;
        }

        .contact-final-card {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 300px;
          overflow: hidden;
          padding: 45px 55px;
          border: 1px solid rgba(165, 101, 255, .2);
          border-radius: 14px;
          background:
            radial-gradient(ellipse at 80% 50%, rgba(133, 47, 234, .2), transparent 40%),
            linear-gradient(120deg, #0b1020, #100d22 65%, #100b20);
        }

        .contact-final-content {
          position: relative;
          z-index: 2;
          max-width: 470px;
        }

        .contact-final-content h2 {
          font-size: clamp(32px, 4vw, 44px);
        }

        .contact-final-content > p {
          max-width: 410px;
          margin: 15px 0 22px;
          color: #9994ab;
          font-size: 12px;
          line-height: 1.8;
        }

        .contact-final-decoration {
          position: absolute;
          top: 50%;
          right: 5%;
          width: 300px;
          height: 300px;
          transform: translateY(-50%);
        }

        .contact-final-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(182, 120, 255, .2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .contact-ring-one {
          width: 140px;
          height: 140px;
          box-shadow: 0 0 70px rgba(129, 52, 240, .1);
        }

        .contact-ring-two {
          width: 220px;
          height: 220px;
          border-style: dashed;
          border-color: rgba(182, 120, 255, .15);
        }

        .contact-ring-three {
          width: 295px;
          height: 295px;
          border-color: rgba(182, 120, 255, .1);
        }

        .contact-final-decoration > span {
          position: absolute;
          top: 50%;
          left: 50%;
          display: grid;
          place-items: center;
          width: 75px;
          height: 75px;
          border: 1px solid rgba(190, 137, 255, .35);
          border-radius: 23px;
          color: #e0c3ff;
          background: linear-gradient(145deg, rgba(140, 61, 237, .35), rgba(51, 24, 87, .65));
          box-shadow: 0 0 55px rgba(139, 55, 241, .18);
          font-size: 33px;
          transform: translate(-50%, -50%) rotate(-10deg);
        }

        /* Tablet */

        @media (max-width: 900px) {
          .contact-container {
            width: min(100% - 52px, 760px);
          }

          .contact-hero {
            padding-top: 75px;
          }

          .contact-hero > .contact-container {
            grid-template-columns: minmax(0, 1fr) minmax(270px, .8fr);
            gap: 25px;
          }

          .contact-hero h1 {
            font-size: clamp(34px, 5vw, 47px);
            letter-spacing: -1.8px;
          }

          .contact-hero-visual {
            min-height: 290px;
          }

          .contact-orbit {
            width: 260px;
            height: 260px;
          }

          .contact-orbit-two {
            width: 205px;
            height: 205px;
          }

          .contact-visual-card {
            width: 100%;
          }

          .contact-code {
            padding-inline: 15px;
            gap: 14px 8px;
          }

          .contact-form-layout {
            grid-template-columns: minmax(0, .75fr) minmax(0, 1.25fr);
            gap: 28px;
          }

          .contact-form {
            padding: 23px;
          }

          .contact-methods-grid,
          .contact-services-grid {
            gap: 12px;
          }

          .contact-method-card,
          .contact-service-card {
            padding: 17px;
          }

          .contact-method-value {
            font-size: 12px;
          }

          .contact-final-decoration {
            right: -5%;
            opacity: .75;
          }
        }

        /* Mobile */

        @media (max-width: 650px) {
          .contact-container {
            width: calc(100% - 36px);
          }

          .contact-hero {
            min-height: auto;
            padding: 57px 0 75px;
          }

          .contact-hero > .contact-container {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
          }

          .contact-eyebrow {
            margin-bottom: 19px;
            font-size: 10px;
          }

          .contact-hero h1 {
            font-size: clamp(35px, 9vw, 47px);
            letter-spacing: -1.8px;
          }

          .contact-hero-content > p {
            margin: 19px 0 23px;
            font-size: 13px;
            line-height: 1.85;
          }

          .contact-primary-button {
            min-height: 44px;
            gap: 17px;
            padding-inline: 16px;
            font-size: 11px;
          }

          .contact-hero-note {
            align-items: flex-start;
            font-size: 10px;
            line-height: 1.7;
          }

          .contact-hero-visual {
            min-height: 300px;
            margin-top: 5px;
          }

          .contact-visual-card {
            width: min(88%, 360px);
          }

          .contact-code {
            padding: 25px 18px;
            font-size: 11px;
          }

          .contact-symbol-one {
            right: 0;
          }

          .contact-symbol-two {
            left: 0;
          }

          .contact-hero-bottom {
            gap: 10px;
            padding: 13px 18px;
            font-size: 7px;
            letter-spacing: 1.1px;
          }

          .contact-hero-line {
            width: 25px;
          }

          .contact-details-section,
          .contact-services-section {
            padding: 57px 0;
          }

          .contact-section-heading {
            margin-bottom: 26px;
          }

          .contact-section-heading h2,
          .contact-form-intro h2,
          .contact-services-heading h2 {
            font-size: 31px;
            letter-spacing: -1px;
          }

          .contact-section-heading > p,
          .contact-form-intro > p,
          .contact-services-heading > p {
            font-size: 12px;
          }

          .contact-methods-grid,
          .contact-services-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }

          .contact-method-card {
            min-height: auto;
            padding: 19px;
          }

          .contact-method-top {
            margin-bottom: 17px;
          }

          .contact-method-value {
            font-size: 13px;
          }

          .contact-form-section {
            padding: 58px 0;
          }

          .contact-form-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 32px;
          }

          .contact-form-intro {
            padding-top: 0;
          }

          .contact-form-promise {
            margin-top: 22px;
          }

          .contact-form-decoration {
            display: none;
          }

          .contact-form {
            gap: 19px;
            padding: 20px 16px;
            border-radius: 10px;
          }

          .contact-form-heading h3 {
            font-size: 19px;
          }

          .contact-input-row {
            grid-template-columns: minmax(0, 1fr);
            gap: 19px;
          }

          .contact-field input {
            height: 46px;
          }

          .contact-field textarea {
            min-height: 135px;
          }

          .contact-message-label {
            align-items: flex-start;
            flex-direction: column;
            gap: 5px;
          }

          .contact-submit-button {
            min-height: 48px;
          }

          .contact-service-card {
            min-height: 205px;
            padding: 20px;
          }

          .contact-service-top {
            margin-bottom: 20px;
          }

          .contact-final-section {
            padding: 45px 0 55px;
          }

          .contact-final-card {
            min-height: 320px;
            padding: 32px 23px;
            align-items: flex-start;
          }

          .contact-final-content {
            max-width: 100%;
          }

          .contact-final-content h2 {
            font-size: 34px;
            letter-spacing: -1.1px;
          }

          .contact-final-content > p {
            max-width: 300px;
            font-size: 11px;
          }

          .contact-final-decoration {
            top: auto;
            right: -100px;
            bottom: -145px;
            width: 230px;
            height: 230px;
            transform: none;
            opacity: .5;
          }

          .contact-ring-one {
            width: 100px;
            height: 100px;
          }

          .contact-ring-two {
            width: 170px;
            height: 170px;
          }

          .contact-ring-three {
            width: 230px;
            height: 230px;
          }

          .contact-final-decoration > span {
            width: 55px;
            height: 55px;
            border-radius: 17px;
            font-size: 25px;
          }
        }

        @media (max-width: 360px) {
          .contact-container {
            width: calc(100% - 26px);
          }

          .contact-hero h1 {
            font-size: 32px;
            letter-spacing: -1.4px;
          }

          .contact-hero-visual {
            min-height: 260px;
          }

          .contact-visual-card {
            width: 92%;
          }

          .contact-code {
            padding: 22px 12px;
            font-size: 10px;
          }

          .contact-method-card {
            padding: 16px;
          }

          .contact-form {
            padding: 17px 12px;
          }

          .contact-form-heading h3 {
            font-size: 17px;
          }

          .contact-final-card {
            padding-inline: 18px;
          }
        }

        /* Accessibility */

        @media (prefers-reduced-motion: reduce) {
          .contact-page *,
          .contact-page *::before,
          .contact-page *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
 