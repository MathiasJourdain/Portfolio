import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  return (
    <section id="projets" className="section-shell projects-section px-6">
      <div className="section-heading reveal">
        <p className="section-kicker">Portfolio sélectionné</p>
        <h3>Mes <span>réalisations</span></h3>
        <p>Une sélection de produits digitaux conçus pour être clairs, utiles et mémorables.</p>
      </div>

      <div className="projects-grid reveal">
        {projectsData.map((project, index) => (
          <Link key={project.id} to={`/projet/${project.id}`} className="project-card">
            <div className="project-image">
              <img src={project.imageUrl} alt="" loading="lazy" />
              <span className="project-number">0{index + 1}</span>
            </div>
            <div className="project-content">
              <div className="project-meta">
                <span>Projet web</span>
                <span>2024—2026</span>
              </div>
              <h4>{project.title}</h4>
              <p>{project.shortDesc}</p>
              <div className="project-tags">
                {project.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="project-link">Voir l’étude <span aria-hidden="true">↗</span></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
