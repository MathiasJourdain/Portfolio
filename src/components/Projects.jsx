import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import projectPreview from '../../images/TTV.png';

export default function Projects() {
  return (
    <section id="projets" className="relative py-24 px-6 xl:px-0 max-w-7xl mx-auto">
      
      {/* Lueur de fond (Background Glow) pour donner de la profondeur à la section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* En-tête de la section */}
      <div className="mb-16 text-center relative z-10">
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-blue-400 font-bold mb-4 bg-blue-900/30 px-4 py-1.5 rounded-full border border-blue-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Portfolio
        </p>
        <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-100">
          Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">réalisations</span>
        </h3>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Des projets conçus pour mettre en valeur ma capacité à produire des expériences numériques élégantes, fluides et performantes.
        </p>
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {projectsData.map((project) => (
          <Link 
            key={project.id} 
            to={`/projet/${project.id}`}
            className="project-card group relative overflow-hidden transition-all duration-500 flex flex-col h-full"
          >
            {/* Effet de dégradé interne qui apparaît au survol */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Contenu de la carte */}
            {project.id === 'tout-venant' && <img src={projectPreview} alt="Aperçu de l'interface Tout Venant" className="project-preview" />}
            <div className="relative z-10 flex flex-col flex-grow p-7">
              
              <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 font-bold">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                Projet Web
              </div>
              
              <h4 className="text-2xl font-bold mb-4 text-slate-100 group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h4>
              
              <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                {project.shortDesc}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-medium text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/50 group-hover:border-slate-600 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Bouton d'action */}
              <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors mt-auto pt-4 border-t border-slate-800/50 group-hover:border-blue-500/30">
                Explorer le projet 
                <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}