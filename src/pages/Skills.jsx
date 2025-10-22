import "./Skills.css";

const data = [
    {
      title: "Front-End",
      items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      title: "Back-End",
      items: ["Laravel", "PHP", "Node.js", "Python"],
    },
    {
      title: "Databases",
      items: ["MySQL", "MongoDB"],
    },
    {
      title: "DevOps & Tools",
      items: ["Azure DevOps", "Git", "GitHub", "CI/CD Pipelines"],
    },
    {
      title: "Modeling & Design",
      items: ["UML", "Figma", "Canva"],
    },
    {
      title: "Methodologies",
      items: ["Agile"],
    },
    {
      title: "Others",
      items: ["Office 365 (Word, Excel, PowerPoint)"],
    },
  ];
  

function Tag({ label }) {
  return <span className="tag">{label}</span>;
}

function CategoryCard({ title, items }) {
  return (
    <div className="skill-card">
      <h3 className="skill-card-title">{title}</h3>
      <div className="tags-wrap">
        {items.map((t, i) => (
          <Tag key={i} label={t} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h1 className="skills-title">Skills &amp; Technologies</h1>
        <p className="skills-desc">
          A comprehensive toolkit for building modern web applications
        </p>

        <div className="skills-grid">
          {data.map((cat, i) => (
            <CategoryCard key={i} title={cat.title} items={cat.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
