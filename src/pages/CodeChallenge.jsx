import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const starterHtml = `<div class="card">
  <p class="badge">Défi 1</p>
  <h1>Ma première carte</h1>
  <p>Essaie de changer ce texte ou d'ajouter une idée.</p>
  <button>Clique ici</button>
</div>`

const starterCss = `.card {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
  padding: 24px;
  border-radius: 20px;
  max-width: 360px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
}

.badge {
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.75rem;
  opacity: 0.85;
}

button {
  margin-top: 12px;
  border: none;
  border-radius: 999px;
  padding: 10px 16px;
  background: white;
  color: #111827;
  font-weight: 700;
  cursor: pointer;
}

.card.is-animated {
  transform: scale(1.04);
  box-shadow: 0 25px 55px rgba(37, 99, 235, 0.35);
}`

const starterJs = `document.querySelector('button').addEventListener('click', () => {
  document.querySelector('.card').classList.toggle('is-animated');
});`

const beginnerPresets = {
  simple: {
    html: `<div class="card">
  <p class="badge">Défi 1</p>
  <h1>Bonjour !</h1>
  <p>Ma toute première carte web.</p>
  <button>Essayer</button>
</div>`,
    css: `.card {
  font-family: Arial, sans-serif;
  background: #111827;
  color: white;
  padding: 24px;
  border-radius: 16px;
  max-width: 300px;
}

button {
  margin-top: 12px;
  border: none;
  border-radius: 999px;
  padding: 10px 14px;
  background: #38bdf8;
  color: white;
  font-weight: 700;
}`,
    js: `// Tu peux laisser ce code tel quel pour l'instant.
document.querySelector('button').addEventListener('click', () => {
  document.querySelector('.card').style.border = '2px solid #38bdf8';
});`
  },
  color: {
    html: `<div class="card">
  <p class="badge">Édition 2</p>
  <h1>Une carte plus colorée</h1>
  <p>J'aime les couleurs vives !</p>
  <button>Voir la couleur</button>
</div>`,
    css: `.card {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: white;
  padding: 24px;
  border-radius: 20px;
  max-width: 320px;
}

button {
  margin-top: 12px;
  border: none;
  border-radius: 999px;
  padding: 10px 16px;
  background: white;
  color: #111827;
  font-weight: 700;
}`,
    js: `document.querySelector('button').addEventListener('click', () => {
  document.querySelector('.card').style.transform = 'rotate(2deg)';
});`
  },
  animation: {
    html: `<div class="card">
  <p class="badge">Édition 3</p>
  <h1>Un peu d'animation</h1>
  <p>Voici une carte qui réagit.</p>
  <button>Activer</button>
</div>`,
    css: `.card {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #0f766e, #2563eb);
  color: white;
  padding: 24px;
  border-radius: 20px;
  max-width: 320px;
  transition: transform 0.3s ease;
}

button {
  margin-top: 12px;
  border: none;
  border-radius: 999px;
  padding: 10px 16px;
  background: #f8fafc;
  color: #0f172a;
  font-weight: 700;
  cursor: pointer;
}

.card.is-animated {
  transform: scale(1.05);
}`,
    js: `document.querySelector('button').addEventListener('click', () => {
  document.querySelector('.card').classList.toggle('is-animated');
});`
  }
}

export default function CodeChallenge() {
  const [html, setHtml] = useState(starterHtml)
  const [css, setCss] = useState(starterCss)
  const [js, setJs] = useState(starterJs)
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const documentContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `

    setSrcDoc(documentContent)
  }, [html, css, js])

  const resetCode = () => {
    setHtml(starterHtml)
    setCss(starterCss)
    setJs(starterJs)
  }

  const applyPreset = (preset) => {
    setHtml(beginnerPresets[preset].html)
    setCss(beginnerPresets[preset].css)
    setJs(beginnerPresets[preset].js)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Mini challenge créatif
            </p>
            <h1 className="text-4xl font-black text-white md:text-5xl">
              Essaie un peu de code sans te compliquer la vie
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-400">
              Tu n’as pas besoin de tout comprendre d’un coup. Commence par changer un mot, une couleur, ou un bouton : c’est déjà du progrès.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={resetCode}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 font-medium text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
            >
              Revenir au départ
            </button>
            <Link
              to="/"
              className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 font-medium text-white transition hover:scale-[1.02]"
            >
              ← Retour à l’accueil
            </Link>
          </div>
        </div>

        <div className="mb-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Par où commencer ?</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>• Change un mot dans le HTML pour voir le résultat tout de suite.</li>
                <li>• Modifie une couleur dans le CSS pour rendre la carte plus jolie.</li>
                <li>• Clique sur un bouton pour tester une petite animation en JavaScript.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => applyPreset('simple')} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
                Départ simple
              </button>
              <button onClick={() => applyPreset('color')} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-amber-400 hover:text-amber-300">
                Ajouter des couleurs
              </button>
              <button onClick={() => applyPreset('animation')} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300">
                Tester une animation
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/40">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">HTML</h2>
                <span className="text-sm text-slate-400">Le contenu visible</span>
              </div>
              <textarea
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                className="min-h-[180px] w-full rounded-xl border border-slate-800 bg-slate-950/70 p-4 font-mono text-sm text-slate-200 outline-none ring-0"
              />
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/40">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">CSS</h2>
                <span className="text-sm text-slate-400">Le style et la couleur</span>
              </div>
              <textarea
                value={css}
                onChange={(e) => setCss(e.target.value)}
                className="min-h-[220px] w-full rounded-xl border border-slate-800 bg-slate-950/70 p-4 font-mono text-sm text-slate-200 outline-none ring-0"
              />
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/40">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">JavaScript</h2>
                <span className="text-sm text-slate-400">L’interaction</span>
              </div>
              <textarea
                value={js}
                onChange={(e) => setJs(e.target.value)}
                className="min-h-[160px] w-full rounded-xl border border-slate-800 bg-slate-950/70 p-4 font-mono text-sm text-slate-200 outline-none ring-0"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-2xl shadow-slate-950/40">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Aperçu en direct</h2>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                Live preview
              </span>
            </div>

            <iframe
              title="code-preview"
              srcDoc={srcDoc}
              sandbox="allow-scripts"
              className="h-[640px] w-full rounded-2xl border border-slate-800 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
