import React, { useState } from "react";
import "./PersonalHub.css";

const translations = {
  en: {
    brand: "PERSONAL HUB / 2026",
    availability: "Open to freelance projects",
    eyebrow: "Developer · Builder · Creative thinker",
    role: "MERN Stack Developer",
    creator: "Digital Creator",
    headlineStart: "I turn ideas into",
    headlineEm: "digital experiences",
    headlineEnd: "people enjoy using.",
    bio: "I build modern, responsive web applications with a focus on clean interfaces, thoughtful details, and reliable functionality. From the first idea to the final interaction, I care about making every pixel and every line of code count.",
    contactCta: "Have a project in mind? Let's talk.",
    editNote: "A small corner of the internet dedicated to what I build, what I share, and what we could create together.",
    linksHeading: "Find me around the web",
    servicesHeading: "What I can help you build",
    githubSub: "Code, experiments & projects",
    linkedinSub: "Professional profile & connections",
    instagramSub: "Behind the scenes & new work",
    portfolioTitle: "Portfolio / Behance",
    portfolioSub: "Selected work & visual concepts",
    hireTitle: "Hire me",
    hireSub: "Freelance opportunities",
    service1Title: "Web Development",
    service1Desc: "Fast, responsive websites built around your goals.",
    service2Title: "Full-stack Apps",
    service2Desc: "End-to-end products with React, Node & MongoDB.",
    service3Title: "UI Implementation",
    service3Desc: "Clean layouts, polished details and mobile-first design.",
    service4Title: "Improvements",
    service4Desc: "Bug fixes, refinements and existing-site upgrades.",
    emailFooter: "EMAIL",
    backTop: "BACK TO TOP ↑",
    footerNote: "DESIGNED WITH INTENTION."
  },
  ar: {
    brand: "مساحتي الرقمية / 2026",
    availability: "متاح للعمل الحر واستقبال المشاريع",
    eyebrow: "مطور · صانع حلول · مبدع",
    role: "مطور MERN Stack",
    creator: "صانع تجارب رقمية",
    headlineStart: "أحوّل الأفكار إلى",
    headlineEm: "تجارب رقمية",
    headlineEnd: "تستحق أن تُستخدم.",
    bio: "أطوّر تطبيقات ويب عصرية ومتجاوبة، مع التركيز على واجهات واضحة وتفاصيل مدروسة وأداء موثوق. من الفكرة الأولى إلى آخر تفاعل، أهتم بأن يكون لكل بكسل ولكل سطر برمجي قيمة حقيقية.",
    contactCta: "لديك مشروع؟ دعنا نتحدث.",
    editNote: "مساحتي الرقمية التي أشارك فيها أعمالي وأفكاري، وأستكشف من خلالها فرصًا جديدة للتعاون والإبداع.",
    linksHeading: "تجدني على الإنترنت",
    servicesHeading: "كيف يمكنني مساعدتك؟",
    githubSub: "الشيفرات والتجارب والمشاريع",
    linkedinSub: "ملفي المهني وشبكة علاقاتي",
    instagramSub: "كواليس العمل وأحدث المشاريع",
    portfolioTitle: "معرض الأعمال / Behance",
    portfolioSub: "نماذج من أعمالي وأفكاري الإبداعية",
    hireTitle: "تعاقد معي",
    hireSub: "فرص العمل الحر",
    service1Title: "تطوير المواقع",
    service1Desc: "مواقع سريعة ومتجاوبة مصممة وفق أهدافك.",
    service2Title: "تطبيقات متكاملة",
    service2Desc: "تطوير متكامل باستخدام React وNode.js وMongoDB.",
    service3Title: "تنفيذ واجهات المستخدم",
    service3Desc: "واجهات أنيقة وتفاصيل دقيقة وتصميم متوافق مع الهواتف.",
    service4Title: "تحسين المواقع",
    service4Desc: "إصلاح الأخطاء وتطوير المواقع والتطبيقات الموجودة.",
    emailFooter: "البريد الإلكتروني",
    backTop: "العودة إلى الأعلى ↑",
    footerNote: "تصميم بفكرة واهتمام."
  }
};

export default function PersonalHub() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  const isArabic = lang === "ar";

  const switchLanguage = () => {
    const nextLang = isArabic ? "en" : "ar";
    setLang(nextLang);
    document.title = nextLang === "ar"
      ? "عبدالباسط الهجيري — مطور ويب"
      : "Abdelbasset El Hajiri — Developer";
  };

  return (
    <main className="personal-hub-page" id="top" lang={lang} dir={isArabic ? "rtl" : "ltr"}>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Home">
          <span className="brand-mark">A.</span>
          <span>{t.brand}</span>
        </a>
        <div className="top-actions">
          <div className="availability">
            <span className="dot" />
            <span>{t.availability}</span>
          </div>
          <button className="lang-toggle" type="button" onClick={switchLanguage} aria-label={isArabic ? "التبديل إلى الإنجليزية" : "Switch to Arabic"}>
            {isArabic ? "EN | العربية" : "العربية | EN"}
          </button>
        </div>
      </header>

      <div className="layout">
        <section className="hero">
          <div className="eyebrow">{t.eyebrow}</div>
          <div className="profile-row">
            <div className="avatar-wrap">
              <img className="avatar" src="images/image-pro.png" alt="Profile photo" />
            </div>
            <div>
              <h1 className="name">Abdelbasset<br />El Hajiri<span className="name-dot">.</span></h1>
              <div className="role">
                <span>{t.role}</span><span className="role-accent"> / </span><span>{t.creator}</span>
              </div>
            </div>
          </div>

          <p className="headline">
            <span>{t.headlineStart} </span><em>{t.headlineEm}</em><span> {t.headlineEnd}</span>
          </p>
          <p className="bio">{t.bio}</p>

          <div className="tags">
            <span className="tag"><strong>01</strong> React</span>
            <span className="tag"><strong>02</strong> Node.js</span>
            <span className="tag"><strong>03</strong> Express</span>
            <span className="tag"><strong>04</strong> MongoDB</span>
            <span className="tag"><strong>05</strong> UI / UX</span>
          </div>

          <a className="primary-link" href="mailto:your.email@example.com?subject=Project%20inquiry">
            <span>{t.contactCta}</span><span className="arrow">↗</span>
          </a>
          <p className="edit-note">{t.editNote}</p>
        </section>

        <aside className="side">
          <section className="side-card">
            <div className="section-heading">
              <h2>{t.linksHeading}</h2><span className="section-index">LINKS / 01</span>
            </div>
            <nav className="link-list" aria-label="Personal links">
              <a className="link-item" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <span className="link-icon">⌘</span><span className="link-copy"><span className="link-title">GitHub</span><span className="link-sub">{t.githubSub}</span></span><span className="link-arrow">↗</span>
              </a>
              <a className="link-item" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <span className="link-icon">in</span><span className="link-copy"><span className="link-title">LinkedIn</span><span className="link-sub">{t.linkedinSub}</span></span><span className="link-arrow">↗</span>
              </a>
              <a className="link-item" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <span className="link-icon">◎</span><span className="link-copy"><span className="link-title">Instagram</span><span className="link-sub">{t.instagramSub}</span></span><span className="link-arrow">↗</span>
              </a>
              <a className="link-item" href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
                <span className="link-icon">Bē</span><span className="link-copy"><span className="link-title">{t.portfolioTitle}</span><span className="link-sub">{t.portfolioSub}</span></span><span className="link-arrow">↗</span>
              </a>
              <a className="link-item" href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">
                <span className="link-icon">↗</span><span className="link-copy"><span className="link-title">{t.hireTitle}</span><span className="link-sub">{t.hireSub}</span></span><span className="link-arrow">↗</span>
              </a>
            </nav>
          </section>

          <section className="side-card">
            <div className="section-heading">
              <h2>{t.servicesHeading}</h2><span className="section-index">SERVICES / 02</span>
            </div>
            <div className="services">
              <article className="service"><span className="service-number">01 / WEB</span><h3>{t.service1Title}</h3><p>{t.service1Desc}</p></article>
              <article className="service"><span className="service-number">02 / APP</span><h3>{t.service2Title}</h3><p>{t.service2Desc}</p></article>
              <article className="service"><span className="service-number">03 / UI</span><h3>{t.service3Title}</h3><p>{t.service3Desc}</p></article>
              <article className="service"><span className="service-number">04 / FIX</span><h3>{t.service4Title}</h3><p>{t.service4Desc}</p></article>
            </div>
          </section>
        </aside>
      </div>

      <footer className="bottom">
        <span>© {new Date().getFullYear()} ABDELBASSET EL HAJIRI</span>
        <div className="social-mini">
          <a href="mailto:your.email@example.com">{t.emailFooter}</a>
          <a href="#top">{t.backTop}</a>
        </div>
        <span>{t.footerNote}</span>
      </footer>
    </main>
  );
}
