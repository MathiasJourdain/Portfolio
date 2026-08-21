import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Expertise from './components/Expertise'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  const [clickCount, setClickCount] = useState(0)
  const [konamiUnlocked, setKonamiUnlocked] = useState(false)
  const [turboMode, setTurboMode] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)

  const metrics = [
    { value: '5+', label: 'années d’évolution', details: 'Design, code, product et optimisation continue.' },
    { value: '10', label: 'projets visibles', details: 'Sites, landing pages et expériences orientées conversion.' },
    { value: '99%', label: 'focus produit', details: 'Une logique pensée pour la performance et la clarté.' },
  ]

  const handleLogoClick = () => {
    const nextCount = clickCount + 1
    setClickCount(nextCount)

    if (nextCount >= 5) {
      setKonamiUnlocked(true)
      setTurboMode(true)
      setClickCount(0)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 420)
    }

    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    revealElements.forEach((el) => observer.observe(el))
    window.addEventListener('scroll', handleScroll)

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site-shell min-h-screen text-white selection:bg-cyan-300 selection:text-slate-950 overflow-x-hidden">
      <Navbar onLogoClick={handleLogoClick} />
      <Hero turboMode={turboMode} konamiUnlocked={konamiUnlocked} />

      <main className="space-y-24 pb-12">
        <section className="reveal max-w-6xl mx-auto px-6 xl:px-0">
          <div className="grid gap-6 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="metric-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.22)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-violet-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <p className="text-3xl md:text-4xl font-black tracking-tight text-white">{metric.value}</p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-100">{metric.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{metric.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Projects />
        <Expertise />
        <Contact />
      </main>

      <button
        onClick={handleScrollTop}
        className={`scroll-top-btn ${showTopButton ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        aria-label="Remonter en haut"
      >
        ↑
      </button>
    </div>
  )
}
