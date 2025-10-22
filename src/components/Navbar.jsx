import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="nav-wrap">
      <div className="container nav">
        {/* Logo MC → kayrje3 l home */}
        <button className="logo" onClick={goHome} aria-label="Go Home">
          <span>MC</span>
        </button>

        <nav className="links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
