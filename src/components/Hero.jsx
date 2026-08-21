import React, { useState } from 'react';

export default function Hero({ konamiUnlocked, turboMode }) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const tags = ['Interfaces web', 'React & JavaScript', 'Performance', 'Approche produit'];

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <main
      id="accueil"
      onMouseMove={handleMouseMove}
      className="hero-section relative flex items-center min-h-[calc(100vh-78px)] px-6 py-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <div
          className="spotlight"
          style={{
            transform: `translate(${pointer.x * 120}px, ${pointer.y * 120}px)`,
          }}
        />
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto w-full transition-all duration-500 ${konamiUnlocked ? 'opacity-20' : 'opacity-100'}`}>
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="live-badge mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <span className="status-dot" />
              Portfolio 2026 · Disponible
            </div>
            <p className="eyebrow">Développeur web · créatif · orienté résultats</p>
            <h2 className="hero-title animate-fade-in-up">
              Je transforme les idées en <span>expériences digitales utiles.</span>
            </h2>
            <p className="hero-description animate-fade-in-up delay-150">
              Conception d’interfaces claires, développement front-end soigné et solutions pensées pour être comprises, utilisées et mémorisées.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#projets" className="button-primary">
                Découvrir mes projets <span aria-hidden="true">↗</span>
              </a>
              <a href="#contact" className="button-secondary">
                Échangeons sur votre projet
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              {tags.map((tag) => <span key={tag} className="floating-tag">{tag}</span>)}
            </div>
          </div>

          <div className="hero-proof">
            <div className="proof-window">
              <div className="window-bar"><span /><span /><span /><small>portfolio / aperçu</small></div>
              <div className="window-content">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">01 / approche</p>
                <p className="mt-5 text-2xl font-semibold text-white">Design précis.<br /><em>Code durable.</em></p>
                <div className="proof-line"><span style={{ width: '82%' }} /></div>
                <div className="proof-stats"><div><strong>10</strong><small>projets</small></div><div><strong>5+</strong><small>ans d’évolution</small></div></div>
              </div>
            </div>
            <p className="proof-caption">Une présence digitale qui donne envie d’aller plus loin.</p>
          </div>
        </div>
      </div>

      {/* Easter Egg 1 : Mode Launch Control */}
      {turboMode && (
        <div className="fixed bottom-10 animate-bounce bg-red-600/20 border border-red-500 px-6 py-3 rounded-full text-red-400 font-bold text-xl flex items-center gap-3 backdrop-blur-sm z-50 shadow-[0_0_30px_rgba(220,38,38,0.4)]">
          🏎️ Launch Control DSG7 Activé ! Mode Turbo engagé.
        </div>
      )}

      {/* Easter Egg 2 : Mode Konami */}
      {konamiUnlocked && (
        <div className="fixed inset-0 pointer-events-none flex flex-col items-center justify-center z-40">
           <div className="w-full h-full absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/40 to-transparent"></div>
           <p className="text-green-400 text-5xl font-bold animate-pulse drop-shadow-[0_0_20px_rgba(74,222,128,0.8)]">
             Accès Développeur Autorisé 👾
           </p>
           <p className="text-green-500/70 mt-4 text-xl">Vous avez trouvé le passage secret.</p>
        </div>
      )}
    </main>
  );
}