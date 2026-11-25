
export default function Expertise() {
  const skills = ['React', 'Node.js', 'Express', 'Tailwind CSS', 'PHP', 'MySQL', 'PHPMyAdmin', 'Git', 'Vercel', 'Python'];
  const pillars = [
    ['Design premium', 'Interfaces élégantes, hiérarchie claire et qualité perçue dans chaque interaction.'],
    ['Expérience produit', 'Navigation fluide et parcours pensés pour aider le visiteur à passer à l’action.'],
    ['Code maintenable', 'Architecture propre, composants modulaires et performance dès les premières lignes.'],
  ];

  return (
    <section id="expertise" className="expertise-section px-6 py-24">
      <div className="section-shell reveal">
        <div className="section-heading">
          <p className="section-kicker">Compétences clés</p>
          <h3>Mon <span>expertise</span></h3>
          <p>Design moderne, développement front-end et architecture back-end réunis pour livrer des projets fiables.</p>
        </div>

        <div className="expertise-grid">
          <div className="approach-panel">
            <p className="panel-kicker">Approche</p>
            <h4>Je transforme l’idée en expérience premium.</h4>
            <div className="pillar-list">
              {pillars.map(([title, description], index) => (
                <div key={title} className="pillar">
                  <span>0{index + 1}</span>
                  <div><p>{title}</p><small>{description}</small></div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill} className="skill-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{skill}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
