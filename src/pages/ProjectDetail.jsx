import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Projet introuvable 😕</h2>
        <Link to="/" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">Retourner à l'accueil</Link>
      </div>
    );
  }

  const projectLinks = project.links || (project.link && project.link !== '#' ? [{ label: 'Voir le projet en direct', url: project.link }] : []);

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
        
        <Link 
          to="/" 
          className="group inline-flex items-center gap-3 px-5 py-2.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all duration-300 mb-12 backdrop-blur-md"
        >
          <span className="transform transition-transform duration-300 group-hover:-translate-x-1">←</span>
          Retour au portfolio
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 py-2 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-400/90 font-medium max-w-3xl leading-relaxed">
            {project.shortDesc}
          </p>
        </header>

        {/* NOUVEAU BLOC IMAGE : C'est ici que l'image est injectée */}
        {project.imageUrl && (
          <div className="mb-16 w-full rounded-[2rem] overflow-hidden border border-slate-700/50 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative group">
            {/* Overlay subtil qui disparaît au survol pour donner un effet interactif */}
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={project.imageUrl} 
              alt={`Aperçu du projet ${project.title}`} 
              className="w-full max-h-[600px] object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}

        {/* La suite du code reste exactement la même... */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 p-8 md:p-10 rounded-[2rem]">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <span className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                À propos du projet
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                {project.fullDesc}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 p-8 rounded-[2rem]">
              <h3 className="text-sm font-bold mb-6 text-slate-400 uppercase tracking-widest">Stack Technique</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, index) => (
                  <span key={index} className="text-sm font-medium text-blue-200 bg-blue-950/50 px-4 py-2 rounded-xl border border-blue-900/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 p-8 rounded-[2rem]">
              <h3 className="text-sm font-bold mb-6 text-slate-400 uppercase tracking-widest">Fonctionnalités clés</h3>
              <ul className="space-y-4">
                {project.features.map((feat, index) => (
                  <li key={index} className="flex items-start gap-4 text-slate-300">
                    <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {projectLinks.map((projectLink) => (
              <a 
                key={projectLink.url}
                href={projectLink.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full py-4 mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-2xl font-bold text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transform hover:-translate-y-1"
              >
                {projectLink.label}
                <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}