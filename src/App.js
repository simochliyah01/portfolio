import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


import ProjectDemo from "./pages/LiveDemo";
import LiveDemoProject2 from "./pages/LiveDemoProject2";

import "./index.css";
import "./App.css";

function OnePage() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const pathToId = {
      "/": "#top",
      "/about": "#about",
      "/skills": "#skills",
      "/experience": "#experience",
      "/education": "#education",
      "/projects": "#projects",
      "/contact": "#contact",
    };
    const target = hash || pathToId[pathname] || "#top";
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname, hash]);

  return (
    <>
      <section id="top"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<OnePage />} />
        <Route path="/about" element={<OnePage />} />
        <Route path="/skills" element={<OnePage />} />
        <Route path="/experience" element={<OnePage />} />
        <Route path="/education" element={<OnePage />} />
        <Route path="/projects" element={<OnePage />} />
        <Route path="/contact" element={<OnePage />} />

        
        <Route
          path="/demo/it-equipment"
          element={
            <ProjectDemo
              title="IT Equipment Management System"
              videoFile="/maquette/video.mp4"
            />
          }
        />
        <Route path="/demo/provincial-app" element={<LiveDemoProject2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
