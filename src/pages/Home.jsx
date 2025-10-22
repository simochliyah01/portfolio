import "./Home.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home(){
  return (
    <section className="section-pad home">
      <div className="container hero">
        <div className="left">
          <p className="hello">Hello, I'm</p>
          <h1 className="name">Mohamed Chliyah</h1>
          <h2 className="role">Full Stack Developer</h2>

          <p className="desc">
          I'm a junior Full Stack Web Developer passionate about creating modern and high-performance web applications.
I have a solid command of front-end and back-end technologies such as React.js, Laravel, and MySQL, as well as DevOps tools and continuous integration pipelines with Azure DevOps.
Autonomous, rigorous, and curious, I easily adapt to Agile teamwork and I'm motivated to contribute to innovative projects.
          </p>

          <div className="cta">
            <Link to="/projects" className="btn primary">View Projects</Link>
            <a
              className="btn ghost"
              href="/assets/cv/CV Mohamed Chliyah.pdf"
              download
            >
              Download CV
            </a>
          </div>

          <div className="socials">
            <a href="https://github.com/simochliyah01" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-chliyah-a0bb2a36a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        <div className="right">
          <div className="avatar-ring">
            <img src="/assets/images/profile.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
