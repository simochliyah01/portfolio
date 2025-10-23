import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  // State bach nt7akmou f l'affichage dyal les liens f mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Fach ndirou goHome, nseddou l'menu ila kan m7louh
    setIsMenuOpen(false);
  };

  // Function bach n7ellou/nseddou l'menu f click 3la l'icône
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="nav-wrap">
      <div className="container nav">
        {/* Logo MC → kayrje3 l home w kaylsed l'menu */}
        <button className="logo" onClick={goHome} aria-label="Go Home">
          <span>MC</span>
        </button>

        {/* Bouton dyal l'menu (hamburger icon) kayban ghir f mobile */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        {/* L'links - Zidna class "open" bach ytsed l'menu fach ncliquiw 3la chi lien */}
        <nav className={`links ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
          <NavLink to="/experience" onClick={() => setIsMenuOpen(false)}>Experience</NavLink>
          <NavLink to="/education" onClick={() => setIsMenuOpen(false)}>Education</NavLink>
          <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}