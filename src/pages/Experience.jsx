import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Experience.css";

const experiences = [
    {
      title: "Web Developer Intern",
      company: "Provincial Council of Taza",
      date: "April – May 2025",
      location: "Taza, Morocco",
      points: [
        "Contributed to the development of a web application using Angular and .NET technologies",
        "Configured and managed CI/CD pipelines on Azure DevOps for automated deployment",
        "Worked within an Agile team for coding, testing, integration, and deployment tasks",
        "Ensured the application's maintainability and performance during project delivery",
      ],
      tags: ["Angular", ".NET", "Azure DevOps", "CI/CD", "Agile"],
    },
    {
      title: "Final Year Project – Full Stack Developer",
      company: "ISTA Taza",
      date: "March – June 2025",
      location: "Taza, Morocco",
      points: [
        "Developed a full-stack web application for IT equipment management",
        "Built the frontend using React.js and the backend using Laravel with MySQL database",
        "Implemented secure authentication and a dynamic statistical dashboard",
        "Created complete modules for managing equipment, failures, repairs, staff, and facilities",
        "Integrated automatic generation of personalized reports",
      ],
      tags: ["React.js", "Laravel", "MySQL", "Full Stack", "Authentication", "Dashboard"],
    },
  ];
  

function ExperienceCard({ exp }) {
  return (
    <div className="exp-card">
      <h3 className="exp-title">{exp.title}</h3>
      <div className="exp-company">{exp.company}</div>

      <div className="exp-meta">
        <span><FaCalendarAlt /> {exp.date}</span>
        <span><FaMapMarkerAlt /> {exp.location}</span>
      </div>

      <ul className="exp-points">
        {exp.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <div className="exp-tags">
        {exp.tags.map((t, i) => (
          <span key={i} className="exp-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <h1 className="exp-heading">Experience</h1>
        <p className="exp-sub">Professional journey and key projects</p>

        <div className="exp-list">
          {experiences.map((e, i) => (
            <ExperienceCard key={i} exp={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
