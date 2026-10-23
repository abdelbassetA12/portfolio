
import React from "react";
import "./SocialMediaBar.css";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/YOUR_USERNAME/",
    color: "#E4405F",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="social-icon-fill" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/YOUR_USERNAME",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.3c-.8-.1-1.6-.2-2.4-.2-2.8 0-4.7 1.7-4.7 4.8v1.9H7V13h2.7v8h3.8Z"
          className="social-icon-fill"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/YOUR_USERNAME/",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 9v10M5 5.5v.1M10 19V9h4v1.5c.7-1.1 1.7-1.7 3.1-1.7 2.5 0 3.9 1.6 3.9 4.5V19h-4v-5.1c0-1.4-.5-2.2-1.7-2.2-1.3 0-1.3 1.3-1.3 2.4V19h-4Z"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/YOUR_USERNAME",
    color: "#FFFFFF",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          className="social-icon-fill"
          d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@YOUR_CHANNEL",
    color: "#FF0033",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          className="social-icon-fill"
          d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7a31 31 0 0 0-.5 5 31 31 0 0 0 .5 5 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17a31 31 0 0 0 .5-5 31 31 0 0 0-.5-5ZM9.7 15.5v-7l6 3.5-6 3.5Z"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/212700592987",
    color: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7a8.5 8.5 0 1 1 16.3-3.8Z" />
        <path d="M8.5 8.2c.3-.6.6-.6.9-.6h.5c.2 0 .4.1.5.5l.7 1.7c.1.3 0 .5-.2.7l-.5.6c-.2.2-.2.4 0 .6.7 1.2 1.7 2.1 3 2.6.3.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.1l1.7.8c.3.2.4.3.4.5 0 .3-.2 1.1-.8 1.6-.5.5-1.3.7-2 .5-1.1-.3-2.5-.8-4.1-2.2-1.4-1.3-2.3-2.9-2.6-4-.2-.8.1-1.5.4-2.1Z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@YOUR_USERNAME",
    color: "#25F4EE",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15 3v11.1a4.1 4.1 0 1 1-3.5-4.1M15 3c.5 2.8 2.2 4.4 5 4.8" />
      </svg>
    ),
  },
];

export default function SocialMediaBar() {
  return (
    <aside className="social-bar" aria-label="Social media links">
      <div className="social-bar-inner">
        <div className="social-bar-brand">
          <span className="social-status-dot" />
          <span className="social-bar-label">LET'S CONNECT</span>
        </div>

        <div className="social-bar-links">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              className="social-bar-link"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              style={{ "--social-color": social.color }}
            >
              {social.icon}
              <span className="social-tooltip">{social.name}</span>
            </a>
          ))}
        </div>

        <a
          className="social-bar-contact"
          href="mailto:elhajiriabdelbasset2020@gmail.com"
          aria-label="Contact me by email"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16v12H4z" />
            <path d="m4 7 8 6 8-6" />
          </svg>
          <span>Contact me</span>
          <span className="social-contact-arrow">↗</span>
        </a>
      </div>
    </aside>
  );
}
