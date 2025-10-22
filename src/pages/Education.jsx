import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import "./Education.css";

const schools = [
    {
      title: "Professional Bachelor's Degree",
      badge: "(In Progress)",
      subtitle: "Software Engineering – Frontend & Backend Development",
      org: "Faculty of Sciences, Ibn Tofail University, Kenitra",
      date: "2025 – Present",
      note: "",
    },
    {
      title: "Specialized Technician Diploma",
      subtitle: "Digital Development – Full Stack Web Option",
      org: "ISTA Taza",
      date: "June 2025",
      note: "",
    },
    {
      title: "Baccalaureate",
      subtitle: "Physical Sciences",
      org: "Lycée Ibn El Yassmine, Taza",
      date: "June 2023",
      note: "",
    },
  ];
  

function EduCard({ item }) {
  return (
    <div className="edu-card">
      <div className="edu-icon">
        <FaGraduationCap size={22} />
      </div>

      <div className="edu-content">
        <h3 className="edu-title">
          {item.title} {item.badge && <span className="edu-badge">{item.badge}</span>}
        </h3>

        {item.subtitle && <div className="edu-sub">{item.subtitle}</div>}
        {item.org && <div className="edu-org">{item.org}</div>}

        <div className="edu-meta">
          <span><FaCalendarAlt /> {item.date}</span>
        </div>

        {item.note && <p className="edu-note">{item.note}</p>}
      </div>
    </div>
  );
}

export default function Education(){
  return (
    <section className="education">
      <div className="container">
        <h1 className="edu-heading">Education</h1>
        <p className="edu-subtitle">Academic background and qualifications</p>

        <div className="edu-list">
          {schools.map((s, i) => (
            <EduCard key={i} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
