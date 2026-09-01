import React from "react";
 

export default function About() {
  const skills = [
    {
      name: "React",
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(120 12 12)"
          />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      level: 85,
      icon: <span className="text-icon ts-icon">TS</span>,
    },
    {
      name: "JavaScript",
      level: 90,
      icon: <span className="text-icon js-icon">JS</span>,
    },
    {
      name: "Node.js",
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2.5 20.2 7v10L12 21.5 3.8 17V7L12 2.5Z" />
          <path d="M8.3 9.2c1-.7 2.2-1 3.5-1 1.7 0 3.1.5 4 1.4" />
          <path d="M7.6 14.9c1 .7 2.2 1 3.5 1 1.7 0 3.1-.5 4-1.4" />
        </svg>
      ),
    },
    {
      name: "Express.js",
      level: 85,
      icon: <span className="text-icon express-icon">Ex</span>,
    },
    {
      name: "Git",
      level: 80,
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M20.7 11.1 12.9 3.3a1.8 1.8 0 0 0-2.5 0L8.7 5l2.1 2.1a2 2 0 0 1 2.5 2.5l2 2a2 2 0 1 1-1.2 1.2l-2-2v5.2a2 2 0 1 1-1.6 0V10.8a2 2 0 0 1-.9-3.4L7.7 5.8l-4.4 4.4a1.8 1.8 0 0 0 0 2.5l7.8 7.8a1.8 1.8 0 0 0 2.5 0l7.1-7.1a1.8 1.8 0 0 0 0-2.3Z" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      level: 80,
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2c-1.5 3.1-5.4 5.3-5.4 10.1 0 4.1 2.2 7 5.4 9.9 3.2-2.9 5.4-5.8 5.4-9.9C17.4 7.3 13.5 5.1 12 2Z" />
          <path d="M12 8v13" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 12c1.3-3.5 3.5-5.2 6.5-5.2 4.5 0 4.2 4.2 7.5 4.2 1 0 1.7-.3 2-.8-1.3 3.5-3.5 5.2-6.5 5.2-4.5 0-4.2-4.2-7.5-4.2-1 0-1.7.3-2 .8Z" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      level: 85,
      icon: <span className="text-icon next-icon">N</span>,
    },
  ];

  const experiences = [
    {
      date: "2023 - Present",
      title: "Full Stack Developer",
      company: "Freelance",
      description:
        "Building web applications for clients worldwide using modern technologies like React, Node.js, and MongoDB.",
    },
    {
      date: "2022 - 2023",
      title: "Frontend Developer",
      company: "Creative Agency",
      description:
        "Developed interactive user interfaces and collaborated with designers to bring ideas to life.",
    },
    {
      date: "2021 - 2022",
      title: "Junior Developer",
      company: "Tech Solutions",
      description:
        "Worked on various web projects and learned best practices in software development.",
    },
  ];

  return (
    <main className="about-page">

      {/* ================= ABOUT ================= */}
      <section className="about-section about-intro">
        <div className="about-container">
          <div className="about-grid">

            <div className="about-description">
              <span className="section-label">About Me</span>

              <h1>
                I'm Abdelbasset, <span>Full Stack Developer</span>
              </h1>

              <p>
                I help businesses and individuals build high-quality web
                applications that are fast, scalable, and visually appealing.
              </p>

              <p>
                With a strong background in both front-end and back-end
                development, I love turning ideas into real products.
              </p>

              <button className="about-button">
                More About Me
                <span>→</span>
              </button>
            </div>

            <div className="personal-info">

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="3.5" />
                    <path d="M4 21c.8-4.3 3.5-6.5 8-6.5s7.2 2.2 8 6.5" />
                  </svg>
                </div>

                <div>
                  <span>Name</span>
                  <strong>Abdelbasset El Hajiri</strong>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </div>

                <div>
                  <span>Email</span>
                  <strong>elhajiriabdelbasset2020@gmail.com</strong>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s7-6.2 7-12A7 7 0 0 0 5 9c0 5.8 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.2" />
                  </svg>
                </div>

                <div>
                  <span>Location</span>
                  <strong>Casablanca, Morocco</strong>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>

                <div>
                  <span>Availability</span>
                  <strong>Available for freelance</strong>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section className="about-section skills-section">
        <div className="about-container">

          <div className="section-heading">
            <span className="section-label">Skills</span>
            <h2>Technologies I Work With</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill.name}>

                <div className="skill-top">

                  <div className="skill-name">

                    <div className="skill-icon">
                      {skill.icon}
                    </div>

                    <span>{skill.name}</span>
                  </div>

                  <span className="skill-percentage">
                    {skill.level}%
                  </span>

                </div>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="about-section experience-section">
        <div className="about-container">

          <div className="section-heading">
            <span className="section-label">Experience</span>
            <h2>Work Experience</h2>
          </div>

          <div className="experience-list">

            {experiences.map((experience, index) => (
              <div className="experience-item" key={index}>

                <div className="experience-date">
                  <span>{experience.date}</span>
                </div>

                <div className="experience-marker">
                  <span />
                </div>

                <div className="experience-content">
                  <h3>{experience.title}</h3>

                  <span className="experience-company">
                    {experience.company}
                  </span>

                  <p>{experience.description}</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section className="about-section contact-section">
        <div className="about-container">

          <div className="contact-grid">

            <div className="contact-info">

              <div className="section-heading">
                <span className="section-label">Contact</span>

                <h2>Let's Work Together</h2>

                <p>
                  Have a project in mind or want to collaborate?
                  <br />
                  Feel free to reach out.
                </p>
              </div>

              <div className="contact-details">

                <div className="contact-detail">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </div>

                  <span>elhajiriabdelbasset2020.com</span>
                </div>

                <div className="contact-detail">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M6.5 3.5h3l1.5 4-2.2 1.8a14 14 0 0 0 5.9 5.9l1.8-2.2 4 1.5v3c0 1-1 1.8-2 1.8C11 19.3 4.7 13 4.7 5.5c0-1 .8-2 1.8-2Z" />
                    </svg>
                  </div>

                  <span>+212 7 00 59 29 87</span>
                </div>

                <div className="contact-detail">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 21s7-6.2 7-12A7 7 0 0 0 5 9c0 5.8 7 12 7 12Z" />
                      <circle cx="12" cy="9" r="2.2" />
                    </svg>
                  </div>

                  <span>Casablanca, Morocco</span>
                </div>

              </div>
            </div>


            <form className="contact-form">

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                />
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  aria-label="Your Message"
                  rows="5"
                />
              </div>

              <button type="submit" className="send-button">
                <span>Send Message</span>

                <svg viewBox="0 0 24 24">
                  <path d="m4 4 17 8-17 8 3-8-3-8Z" />
                  <path d="M7 12h14" />
                </svg>
              </button>

            </form>

          </div>

        </div>
      </section>

      <style>
        {`
        /* =========================================================
   ABOUT PAGE
   ========================================================= */

.about-page {
  --about-bg: #020811;
  --about-bg-soft: #050d18;
  --about-border: rgba(255, 255, 255, 0.07);

  --about-text: #f4f3f8;
  --about-text-soft: #9295a3;
  --about-text-muted: #686c7a;

  --about-purple: #7c2cff;
  --about-purple-light: #b54cff;
  --about-purple-dark: #5319d8;

  width: 100%;
  min-height: 100vh;

  background:
    radial-gradient(
      circle at 50% -10%,
      rgba(100, 35, 210, 0.08),
      transparent 35%
    ),
    var(--about-bg);

  color: var(--about-text);

  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  overflow-x: hidden;
}


/* =========================================================
   COMMON
   ========================================================= */

.about-page *,
.about-page *::before,
.about-page *::after {
  box-sizing: border-box;
}

.about-container {
  width: min(100% - 140px, 1120px);
  margin: 0 auto;
}

.about-section {
  position: relative;
  border-bottom: 1px solid var(--about-border);
}

.section-label {
  display: inline-block;

  margin-bottom: 18px;

  color: #9745ff;

  font-size: 14px;
  font-weight: 600;

  letter-spacing: 0.2px;
}

.section-heading {
  margin-bottom: 38px;
}

.section-heading h2 {
  margin: 0;

  color: var(--about-text);

  font-size: 29px;
  line-height: 1.2;
  font-weight: 650;

  letter-spacing: -0.7px;
}


/* =========================================================
   ABOUT INTRO
   ========================================================= */

.about-intro {
  padding: 76px 0 68px;
}

.about-grid {
  display: grid;

  grid-template-columns:
    minmax(0, 1.45fr)
    minmax(300px, 0.9fr);

  gap: 70px;

  align-items: center;
}


/* LEFT */

.about-description {
  min-width: 0;
}

.about-description h1 {
  margin: 0 0 25px;

  max-width: 650px;

  color: #f5f4f8;

  font-size: clamp(29px, 3vw, 37px);
  line-height: 1.2;

  font-weight: 700;

  letter-spacing: -1.2px;
}

.about-description h1 span {
  color: inherit;
}

.about-description p {
  max-width: 640px;

  margin: 0 0 20px;

  color: #8e929f;

  font-size: 15px;
  line-height: 1.85;
}

.about-description p:last-of-type {
  margin-bottom: 28px;
}


/* BUTTON */

.about-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  min-height: 42px;

  padding: 0 19px;

  border: 0;
  border-radius: 7px;

  color: white;

  background:
    linear-gradient(
      100deg,
      #5b21ff 0%,
      #8e35ff 55%,
      #b647f2 100%
    );

  box-shadow:
    0 8px 28px rgba(105, 37, 255, 0.18);

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.about-button:hover {
  transform: translateY(-2px);

  box-shadow:
    0 12px 32px rgba(105, 37, 255, 0.3);
}

.about-button span {
  font-size: 16px;

  transition: transform 0.2s ease;
}

.about-button:hover span {
  transform: translateX(3px);
}


/* =========================================================
   PERSONAL INFO
   ========================================================= */

.personal-info {
  position: relative;

  display: flex;
  flex-direction: column;

  gap: 24px;

  padding-left: 38px;
}

.personal-info::before {
  content: "";

  position: absolute;

  left: 0;
  top: 0;
  bottom: 0;

  width: 1px;

  background:
    linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.12) 10%,
      rgba(255, 255, 255, 0.12) 90%,
      transparent
    );
}

.info-item {
  display: flex;
  align-items: center;

  gap: 17px;
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 31px;
  height: 31px;

  flex: 0 0 31px;
}

.info-icon svg {
  width: 27px;
  height: 27px;

  fill: none;

  stroke: #9a36ff;

  stroke-width: 1.5;

  stroke-linecap: round;
  stroke-linejoin: round;
}

.info-item > div:last-child {
  display: flex;
  flex-direction: column;

  gap: 4px;

  min-width: 0;
}

.info-item span {
  color: #8b8e9a;

  font-size: 13px;
  font-weight: 500;
}

.info-item strong {
  color: #bfc0c9;

  font-size: 13px;
  font-weight: 500;

  overflow-wrap: anywhere;
}


/* =========================================================
   SKILLS
   ========================================================= */

.skills-section {
  padding: 32px 0 45px;
}

.skills-section .section-heading {
  margin-bottom: 32px;
}

.skills-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  column-gap: 50px;
  row-gap: 25px;
}

.skill-item {
  min-width: 0;
}

.skill-top {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 10px;

  margin-bottom: 9px;
}

.skill-name {
  display: flex;
  align-items: center;

  min-width: 0;

  gap: 12px;
}

.skill-name > span:last-child {
  color: #c6c7cf;

  font-size: 13px;
  font-weight: 500;

  white-space: nowrap;
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 29px;
  height: 29px;

  flex: 0 0 29px;
}

.skill-icon svg {
  width: 26px;
  height: 26px;

  fill: none;

  stroke: currentColor;

  stroke-width: 1.8;

  stroke-linecap: round;
  stroke-linejoin: round;
}

.skill-item:nth-child(1) .skill-icon {
  color: #00c8dc;
}

.skill-item:nth-child(4) .skill-icon {
  color: #32c71d;
}

.skill-item:nth-child(6) .skill-icon {
  color: #e9382d;
}

.skill-item:nth-child(7) .skill-icon {
  color: #00b944;
}

.skill-item:nth-child(8) .skill-icon {
  color: #19c6e8;
}

.text-icon {
  width: 29px;
  height: 29px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2px;

  font-size: 14px;
  font-weight: 800;
}

.ts-icon {
  color: #fff;
  background: #1677c8;
}

.js-icon {
  color: #171717;
  background: #f5dc00;
}

.express-icon {
  color: #ddd;
  background: rgba(255, 255, 255, 0.04);
}

.next-icon {
  color: #fff;
  background: #050505;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 50%;

  font-size: 12px;
}

.skill-percentage {
  flex-shrink: 0;

  color: #b9bbc4;

  font-size: 12px;
}

.skill-bar {
  width: 100%;
  height: 3px;

  overflow: hidden;

  border-radius: 20px;

  background: rgba(255, 255, 255, 0.08);
}

.skill-progress {
  height: 100%;

  border-radius: inherit;

  background:
    linear-gradient(
      90deg,
      #7228ff,
      #c346ff
    );

  box-shadow:
    0 0 8px rgba(153, 55, 255, 0.25);
}


/* =========================================================
   EXPERIENCE
   ========================================================= */

.experience-section {
  padding: 38px 0 62px;
}

.experience-section .section-heading {
  margin-bottom: 38px;
}

.experience-list {
  position: relative;
}

.experience-item {
  display: grid;

  grid-template-columns: 155px 30px minmax(0, 1fr);

  min-height: 115px;
}

.experience-item:last-child {
  min-height: auto;
}

.experience-date {
  padding-top: 2px;

  color: #b5b6bf;

  font-size: 13px;
  font-weight: 500;
}

.experience-marker {
  position: relative;

  display: flex;
  justify-content: center;

  width: 30px;
}

.experience-marker::after {
  content: "";

  position: absolute;

  top: 17px;
  bottom: -17px;

  left: 50%;

  width: 1px;

  transform: translateX(-50%);

  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.14),
      rgba(255, 255, 255, 0.04)
    );
}

.experience-item:last-child
.experience-marker::after {
  display: none;
}

.experience-marker span {
  position: relative;
  z-index: 2;

  width: 10px;
  height: 10px;

  margin-top: 1px;

  border-radius: 50%;

  background: #a938ff;

  box-shadow:
    0 0 0 5px rgba(150, 49, 255, 0.1),
    0 0 13px rgba(160, 50, 255, 0.7);
}

.experience-content {
  padding-left: 22px;

  padding-bottom: 28px;
}

.experience-content h3 {
  margin: 0 0 5px;

  color: #e9e8ed;

  font-size: 14px;
  font-weight: 600;
}

.experience-company {
  display: block;

  margin-bottom: 5px;

  color: #8440e8;

  font-size: 12px;
  font-weight: 500;
}

.experience-content p {
  max-width: 610px;

  margin: 0;

  color: #7f838f;

  font-size: 12px;
  line-height: 1.7;
}


/* =========================================================
   CONTACT
   ========================================================= */

.contact-section {
  padding: 34px 0 42px;

  border-bottom: 0;
}

.contact-grid {
  display: grid;

  grid-template-columns: minmax(0, 0.9fr) minmax(380px, 1fr);

  gap: 75px;

  align-items: start;
}

.contact-info .section-heading {
  margin-bottom: 26px;
}

.contact-info .section-heading h2 {
  margin-bottom: 25px;

  font-size: 27px;
}

.contact-info .section-heading p {
  margin: 0;

  color: #838692;

  font-size: 12px;
  line-height: 1.7;
}

.contact-details {
  display: flex;
  flex-direction: column;

  gap: 19px;
}

.contact-detail {
  display: flex;
  align-items: center;

  gap: 14px;

  color: #9c9eaa;

  font-size: 12px;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;

  flex: 0 0 25px;
}

.contact-icon svg {
  width: 21px;
  height: 21px;

  fill: none;

  stroke: #9d3cff;

  stroke-width: 1.6;

  stroke-linecap: round;
  stroke-linejoin: round;
}


/* =========================================================
   CONTACT FORM
   ========================================================= */

.contact-form {
  display: flex;
  flex-direction: column;

  gap: 8px;

  padding-top: 1px;
}

.form-group {
  width: 100%;
}

.form-group input,
.form-group textarea {
  width: 100%;

  border: 1px solid rgba(255, 255, 255, 0.07);

  outline: none;

  border-radius: 6px;

  color: #e5e4ea;

  background:
    rgba(255, 255, 255, 0.018);

  font-family: inherit;
  font-size: 12px;

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.form-group input {
  height: 43px;

  padding: 0 16px;
}

.form-group textarea {
  min-height: 91px;

  padding: 13px 16px;

  resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #6c707c;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: rgba(150, 52, 255, 0.55);

  background: rgba(255, 255, 255, 0.025);

  box-shadow:
    0 0 0 3px rgba(123, 38, 255, 0.06);
}


/* SEND */

.send-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 45px;

  margin-top: 0;

  gap: 9px;

  border: 0;
  border-radius: 6px;

  color: white;

  background:
    linear-gradient(
      100deg,
      #5922ff,
      #8f34ff 55%,
      #b846ed
    );

  box-shadow:
    0 7px 22px rgba(105, 35, 255, 0.18);

  font-family: inherit;
  font-size: 12px;
  font-weight: 600;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.send-button:hover {
  transform: translateY(-2px);

  box-shadow:
    0 11px 28px rgba(105, 35, 255, 0.28);
}

.send-button svg {
  width: 15px;
  height: 15px;

  fill: none;

  stroke: currentColor;

  stroke-width: 1.6;

  stroke-linecap: round;
  stroke-linejoin: round;
}


/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 900px) {

  .about-container {
    width: min(100% - 60px, 760px);
  }

  .about-grid {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .personal-info {
    padding-left: 0;

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 22px 35px;
  }

  .personal-info::before {
    display: none;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);

    column-gap: 40px;
  }

  .contact-grid {
    grid-template-columns: 1fr;

    gap: 40px;
  }

  .contact-form {
    max-width: 100%;
  }
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 600px) {

  .about-container {
    width: min(100% - 34px, 500px);
  }

  .about-intro {
    padding: 48px 0 45px;
  }

  .section-label {
    margin-bottom: 13px;

    font-size: 12px;
  }

  .about-description h1 {
    margin-bottom: 20px;

    font-size: 28px;

    letter-spacing: -0.8px;
  }

  .about-description p {
    font-size: 13px;

    line-height: 1.75;
  }

  .about-button {
    min-height: 40px;

    padding: 0 16px;

    font-size: 12px;
  }


  /* PERSONAL */

  .personal-info {
    display: flex;

    flex-direction: column;

    gap: 19px;
  }

  .info-item {
    gap: 13px;
  }

  .info-item span,
  .info-item strong {
    font-size: 12px;
  }


  /* SKILLS */

  .skills-section {
    padding: 30px 0 38px;
  }

  .section-heading {
    margin-bottom: 27px;
  }

  .section-heading h2 {
    font-size: 24px;
  }

  .skills-grid {
    grid-template-columns: 1fr;

    row-gap: 20px;
  }


  /* EXPERIENCE */

  .experience-section {
    padding: 32px 0 45px;
  }

  .experience-item {
    grid-template-columns: 100px 22px minmax(0, 1fr);

    min-height: 135px;
  }

  .experience-date {
    font-size: 11px;

    line-height: 1.5;
  }

  .experience-marker {
    width: 22px;
  }

  .experience-content {
    padding-left: 12px;

    padding-bottom: 27px;
  }

  .experience-content h3 {
    font-size: 13px;
  }

  .experience-company {
    font-size: 11px;
  }

  .experience-content p {
    font-size: 11px;

    line-height: 1.65;
  }


  /* CONTACT */

  .contact-section {
    padding: 30px 0 35px;
  }

  .contact-grid {
    gap: 34px;
  }

  .contact-info .section-heading h2 {
    font-size: 24px;
  }

  .contact-info .section-heading p {
    font-size: 11px;
  }

  .contact-detail {
    font-size: 11px;
  }

  .form-group input {
    height: 42px;
  }

  .form-group textarea {
    min-height: 105px;
  }
}


/* =========================================================
   SMALL PHONES
   ========================================================= */

@media (max-width: 380px) {

  .about-container {
    width: calc(100% - 26px);
  }

  .about-description h1 {
    font-size: 25px;
  }

  .experience-item {
    grid-template-columns: 84px 20px minmax(0, 1fr);
  }

  .experience-content {
    padding-left: 9px;
  }

  .experience-content p {
    font-size: 10.5px;
  }
}`}
      </style>

    </main>
  );
}