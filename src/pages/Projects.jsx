import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import "./Projects.css";

const projects = [
  {
    title: "IT Equipment Management System",
    desc: "A comprehensive full-stack web application designed to manage and monitor IT equipment within an organization. It enables tracking of devices, failures, repairs, staff assignments, and locations through an intuitive dashboard. The system includes secure authentication, role-based access control, and automated report generation to improve efficiency. Developed using React.js for the frontend, Laravel for the backend, and MySQL for the database.",
    img: "/assets/images/projet1.png",
    tech: ["React.js", "Laravel", "MySQL"],
    code: "https://github.com/simochliyah01/Gestion-Material-",
    demo: "/demo/it-equipment", 
  },
  {
    title: "Provincial Web Application",
    desc: "A modern web application developed for the Provincial Council of Taza using Angular and .NET. Implemented with a CI/CD pipeline on Azure DevOps for automated deployment and testing, ensuring efficient delivery and reliability.",
    img: "/assets/images/projet2.jpg",
    tech: ["Angular", ".NET", "Azure DevOps"],
    code: "https://github.com/simochliyah01",
    demo: "/demo/provincial-app",
  },
];

function ProjectCard({ p }) {
  const isInternalDemo = p.demo.startsWith("/"); 

  return (
    <div className="project-card">
      <div className="project-img">
        <img src={p.img} alt={p.title} loading="lazy" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{p.title}</h3>
        <p className="project-desc">{p.desc}</p>

        <div className="project-tags">
          {p.tech.map((t, i) => (
            <span key={i} className="project-tag">
              {t}
            </span>
          ))}
        </div>

        <div className="project-buttons">
          <a
            href={p.code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaCode /> Code
          </a>

          {isInternalDemo ? (
            <Link to={p.demo} className="btn-primary">
              <FaExternalLinkAlt /> Live Demo
            </Link>
          ) : (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h1 className="projects-title">Featured Projects</h1>
        <p className="projects-sub">
          A selection of my recent work and academic projects
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
