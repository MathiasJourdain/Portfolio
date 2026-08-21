import React from 'react';
import { Link } from 'react-router-dom';

export default function Parcours() {
  // Tableau de tes expériences pour faciliter l'ajout de futures étapes
  const experiences = [
    {
      id: 1,
      period: "Novembre 2025 - 2027 (En cours)",
      role: "Chargé de développement digital en alternance",
      entity: "La Fabrique en Pratique (Calais)",
      description: "Conception et développement d'outils numériques. Finalisation du logiciel de gestion 'Visiteurs' et création de simulateurs interactifs pour la découverte de différents corps de métiers.",
      tech: ["React", "Node.js", "PHP", "Tailwind CSS"]
    },
    {
      id: 2,
      period: "Depuis septembre 2025 (En cours)",
      role: "Master MBA développeur Fullstack ",
      entity: "Formation en Alternance",
      description: "Spécialisation dans l'architecture web moderne, le déploiement d'applications complexes et la gestion de projets digitaux de A à Z.",
      tech: ["Architecture Logicielle", "Gestion de projet", "Base de données"]
    },
    {
      id: 3,
      period: "2024 - 2025",
      role: "Développeur Web en alternance",
      entity: "Groupe Kardol  (Lille)",
      description: "Refonte du site web de l'entreprise. Participation à la conception et à la mise en production du site.",
      tech: ["PHP", "Node.js", "Express", "WordPress"]
    },
    {
      id: 4,
      period: "2023 - 2025",
      role: "BUT Informatique ",
      entity: "IUT du Littoral Côte d'Opale (Calais)",
      description: "Apprentissage des bonnes pratiques de développement et de la gestion de projet, de droit et de management.",
      tech: ["HTML/CSS", "JavaScript", "PHP", "Python"]
    },
    {
      id: 5,
      period: "2020 - 2023",
        role: "Bac Général",
        entity: "Lycée Pierre de Coubertin (Calais)",
        description: "Bac Général avec option Numérique et Histoire Géopolitique.",
        tech: ["NSI", "HGGSP"]
    },
    
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        
        {/* En-tête avec bouton retour */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Mon Parcours
            </h1>
            <p className="text-slate-400 text-lg">L'évolution de mon profil technique et professionnel.</p>
          </div>
          <Link to="/" className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-blue-400 rounded-lg font-medium transition-colors border border-slate-700">
            ← Retour à l'accueil
          </Link>
        </div>

        {/* Frise chronologique (Timeline) */}
        <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              
              {/* Le point sur la ligne */}
              <div className="absolute w-6 h-6 bg-slate-900 border-4 border-blue-500 rounded-full -left-[13px] top-1 group-hover:bg-blue-500 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              
              {/* Contenu de l'étape */}
              <div className="bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all hover:shadow-lg">
                <span className="inline-block px-3 py-1 bg-slate-950 text-blue-400 text-sm font-bold rounded-full mb-4 border border-slate-800">
                  {exp.period}
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg font-medium text-indigo-300 mb-4">{exp.entity}</h4>
                
                <p className="text-slate-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tags des technologies ou compétences */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono text-slate-300 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}