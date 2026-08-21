import React from 'react';

export default function Expertise() {
  const skills = [
    "React", "Node.js", "Express", "Tailwind CSS",
    "PHP", "MySQL", "PHPMyAdmin", "Git",
    "Vercel", "Python"
  ];

  const pillars = [
    {
      title: 'Design premium',
      description: 'Interfaces élégantes, hiérarchie claire et sensation de qualité perçue dans chaque interaction.'
    },
    {
      title: 'Expérience produit',
      description: 'Navigation fluide, storytelling fort et parcours orientés conversion pour les visiteurs comme pour les clients.'
    },
    {
      title: 'Code maintainable',
      description: 'Architecture propre, composants modulaires et performance pensée dès la première ligne.'
    },
  ];

  return (
    <section id="expertise" className="py-24 px-6 xl:px-0">
      <div className="glass-card border border-white/10 backdrop-blur-xl p-10 md:p-12 rounded-[2rem] max-w-6xl mx-auto shadow-[0_30px_100px_rgba(15,23,42,0.2)]">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80 mb-4">Compétences clés</p>
          <h3 className="text-4xl font-extrabold">Mon <span className="text-blue-400">Expertise</span></h3>
          <p className="text-slate-400 max-w-3xl mx-auto mt-4 leading-relaxed">
            Je combine design moderne, performance front-end et architecture back-end pour livrer des projets fiables et élégants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8 items-start">
          <div className="feature-panel rounded-[1.6rem] border border-slate-700/80 bg-slate-900/70 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Approche</p>
            <h4 className="mt-4 text-2xl font-bold text-white">Je transforme l’idée en expérience premium.</h4>
            <div className="mt-6 space-y-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-slate-700/60 bg-slate-950/60 p-4">
                  <p className="text-base font-semibold text-slate-100">{pillar.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-700 bg-slate-900/70 p-5 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_20px_40px_rgba(34,211,238,0.12)]"
              >
                <span className="text-slate-100 font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}