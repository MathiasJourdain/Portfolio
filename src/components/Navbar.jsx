import { Link } from 'react-router-dom'; // <-- Indispensable pour naviguer vers la nouvelle page

export default function Navbar({ onLogoClick }) {
  return (
    <nav className="site-nav sticky top-0 z-50">
      <h1
        onClick={onLogoClick}
        className="brand-mark cursor-pointer select-none"
        title="Clique moi 5 fois..."
      >
        Dev.Créatif
      </h1>
      <ul className="nav-links">
        <li>
          <a href="/#projets" className="inline-block transition-all duration-300 hover:text-blue-400 hover:-translate-y-1 transform">
            Projets
          </a>
        </li>
        <li>
          <a href="/#expertise" className="inline-block transition-all duration-300 hover:text-blue-400 hover:-translate-y-1 transform">
            Expertise
          </a>
        </li>
        <li>
          <Link to="/parcours" className="inline-block transition-all duration-300 hover:text-blue-400 hover:-translate-y-1 transform">
            Parcours
          </Link>
        </li>
        <li>
          <Link to="/challenge" className="inline-block transition-all duration-300 hover:text-blue-400 hover:-translate-y-1 transform">
            Lab
          </Link>
        </li>
        <li>
          <a href="/#contact" className="inline-block transition-all duration-300 hover:text-blue-400 hover:-translate-y-1 transform">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}