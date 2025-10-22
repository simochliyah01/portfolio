import { FaUsers, FaLightbulb, FaBullseye, FaRegHeart } from "react-icons/fa";
import "./About.css";

export default function About(){
  const strengths = [
    {
      icon: <FaUsers size={26} />,
      title: "Teamwork",
      text: "Collaborative and communicative",
    },
    {
      icon: <FaLightbulb size={26} />,
      title: "Problem Solving",
      text: "Analytical and creative thinking",
    },
    {
      icon: <FaBullseye size={26} />,
      title: "Goal-Oriented",
      text: "Focused on delivering results",
    },
    {
      icon: <FaRegHeart size={26} />,
      title: "Curiosity",
      text: "Always learning and growing",
    },
  ];

  return (
    <section className="about">
      <div className="container">
        <h1 className="about-title">About Me</h1>

        <div className="about-body">
          <p>
          I'm a junior Full Stack Web Developer passionate about creating modern, efficient, and high-performance web applications.
My journey in web development began during my studies at ISTA Taza, where I specialized in Full Stack Web Development. I’m currently pursuing a Professional Bachelor’s Degree in Software Engineering at the Faculty of Sciences, Ibn Tofail University, Kenitra, focusing on Frontend and Backend Development.
          </p>
          <p>
          I have solid experience with React.js, Laravel, and MySQL, and I'm skilled in using Azure DevOps for setting up and managing CI/CD pipelines.
          Through my academic projects and internship experiences, I've developed complete web solutions with authentication systems, dynamic dashboards, and automated report generation.
          </p>
          <p>
          I'm a curious, autonomous, and detail-oriented developer who enjoys collaborating in Agile teams, solving real-world problems, and continuously learning new technologies to improve code quality and deployment efficiency.
          </p>
        </div>

        <h2 className="about-subtitle">Key Strengths</h2>

        <div className="strengths">
          {strengths.map((s, i) => (
            <div className="card" key={i}>
              <div className="icon">{s.icon}</div>
              <div className="card-title">{s.title}</div>
              <div className="card-text">{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
