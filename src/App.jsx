// App.jsx 

import { useState, useEffect } from "react"

// -----------------------------------------------------------------------
// LINKS DATA
const links = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/tavleen-kaur-9009992a2/",
    description: "Connect with me professionally.",
    icon: "linkedin",
  },
  {
    title: "GitHub",
    url: "https://github.com/tavleenk77",
    description: "Projects, experiments, and code.",
    icon: "github",
  },
  {
    title: "Resume",
    url: "/Tavleen-resume.pdf", 
    description: "View my experience and background.",
    icon: "resume",
  },
  {
    title: "Email",
    url: "mailto:tavleenk77@gmail.com",
    description: "Let's connect.",
    icon: "email",
  },
  {
    title: "Smart Parrot Training Assistant",
    url: "https://github.com/tavleenk77/Parrot-Trainer",
    description: "AI-powered personalized parrot training routines and behavioral recommendations.",
    icon: "parrot",
  },
]

// -----------------------------------------------------------------------
// "CURRENTLY" DATA
const currently = [
  { emoji: "🦜", text: "Teaching my birds new tricks" },
  { emoji: "✈️", text: "Planning my next trip" },
  { emoji: "💻", text: "Building AI projects" },
]

// -----------------------------------------------------------------------
// ICONS
function getIcon(name) {
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C20.4 8.65 21 11 21 14.3V21h-4v-5.9c0-1.4 0-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21H9z" />
      </svg>
    )
  }
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.480-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
      </svg>
    )
  }
  if (name === "resume") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h8M8 9h2" />
      </svg>
    )
  }
  if (name === "email") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    )
  }
  // Default icon (used for the parrot project link): a small feather/spark.
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <path d="M16 8 2 22M17.5 15H9" />
    </svg>
  )
}

function App() {
  // ---------------------------------------------------------------------
  // DARK / LIGHT MODE STATE
  const [isDark, setIsDark] = useState(() => {
    // Try to read the previously saved theme ("dark" or "light").
    const savedTheme = localStorage.getItem("theme")
    return savedTheme === "dark"
  })

  // ---------------------------------------------------------------------
  // APPLY THE THEME

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  // Simple function that flips the theme when the toggle button is clicked.
  function toggleTheme() {
    setIsDark(!isDark)
  }

  return (
    // The "fade-in" class gives the whole page a gentle entrance animation.
    <main className="page fade-in">
      {/* ----------------------------------------------------------------
          DECORATIVE PIXEL FEATHERS (background easter eggs)

      {/* THEME TOGGLE BUTTON
          aria-label tells screen readers what the button does. */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark and light mode">
        {/* Show a different label depending on the current mode. */}
        {isDark ? "☀ Light mode" : "☾ Dark mode"}
      </button>

      {/* PROFILE SECTION — the centerpiece of the page. */}
      <section className="profile">
        <div className="profile-img-wrap">
          {/* Clear placeholder for a real photo of me holding one of my birds.
              Replace /profile-placeholder.png with the real photo later. */}
          <img className="profile-img" src="/tavleen-birds.jpg" alt="Tavleen Kaur holding one of her birds" />
          {/* A tiny white cockatiel perched on the LEFT edge of the
              profile photo, facing right toward the photo. */}
          <img className="pixel-bird pixel-bird--perch" src="/pixel-cockatiel-white.png" alt="" aria-hidden="true" />
        </div>

        {/* The name header, with a small green-cheek conure beside it. */}
        <div className="name-row">
          <h1 className="profile-name">Tavleen Kaur</h1>
          <img className="pixel-bird pixel-bird--name" src="/pixel-conure.png" alt="" aria-hidden="true" />
        </div>

        <p className="profile-bio">
          {
            "Hi everyone! 🦜\nWelcome to my little corner of the internet. I'm Tavleen, a tech student, traveler, AI enthusiast, and proud bird mom to a cockatiel and a green-cheek conure. This page is where I share my projects, experiences, and a few things I'm excited about."
          }
        </p>
      </section>

      {/* A row of tiny pixel feathers used as a gentle section divider. */}
      <div className="feather-divider" aria-hidden="true">
        <img className="pixel-feather" src="/pixel-feather.png" alt="" />
        <img className="pixel-feather" src="/pixel-feather.png" alt="" />
        <img className="pixel-feather" src="/pixel-feather.png" alt="" />
      </div>

      {/* LINKS SECTION
          The "key" prop helps React keep track of each item in the list. */}
      <section className="links" aria-label="My links">
        {links.map((link) => (
          <a
            key={link.title}
            className="link-card"
            href={link.url}
            // Open external links (anything starting with "http")
            // in a new tab, safely.
target={link.url !== "#" ? "_blank" : undefined}
rel={link.url !== "#" ? "noopener noreferrer" : undefined}          >
            {/* Small icon on the left for quick visual recognition. */}
            <span className="link-icon">{getIcon(link.icon)}</span>
            <span className="link-text">
              <span className="link-title">{link.title}</span>
              <span className="link-desc">{link.description}</span>
            </span>
          </a>
        ))}
      </section>

      {/* A second feather divider before the "Currently" section. */}
      <div className="feather-divider" aria-hidden="true">
        <img className="pixel-feather" src="/pixel-feather.png" alt="" />
        <img className="pixel-feather" src="/pixel-feather.png" alt="" />
        <img className="pixel-feather" src="/pixel-feather.png" alt="" />
      </div>

      {/* CURRENTLY SECTION
          I render the "currently" array with .map(). */}
      <section className="currently" aria-label="What I'm currently up to">
        <div className="currently-card">
          <h2 className="currently-title">Currently</h2>
          <ul className="currently-list">
            {currently.map((item) => (
              <li key={item.text} className="currently-item">
                <span className="currently-emoji" aria-hidden="true">
                  {item.emoji}
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>{"Built by Tavleen Kaur (with help from two very opinionated birds 🦜)"}</p>
      </footer>
    </main>
  )
}

export default App
