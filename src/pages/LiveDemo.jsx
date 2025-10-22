// src/pages/LiveDemo.jsx
import { useState } from "react";
import { FaPlay, FaImages, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { shotNames, demoVideo } from "../data/itEquipmentDemo";
import "./LiveDemo.css";


const makeUrl = (name, ext = "jpg") => encodeURI(`/maquette/${name}.${ext}`);

export default function LiveDemo() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [i, setI] = useState(0);

 
  const [extMap, setExtMap] = useState({}); 

  const prev = () => setI((x) => (x - 1 + shotNames.length) % shotNames.length);
  const next = () => setI((x) => (x + 1) % shotNames.length);

  const currentName = shotNames[i];
  const currentExt = extMap[currentName] || "jpg";
  const currentSrc = makeUrl(currentName, currentExt);

  const handleImgError = (name) => {
    setExtMap((m) => {
      // إذا كان أصلاً png ماندير والو (باش ماندوزوش ف loop)
      if (m[name] === "png") return m;
      return { ...m, [name]: "png" };
    });
  };

  return (
    <section className="ld">
      <div className="ld-wrap">
        <h1 className="ld-title">IT Equipment Management System — Live Demo</h1>
        <p className="ld-sub">Choose how you want to explore the project</p>

        <div className="ld-cards">
          <button className="ld-card" onClick={() => setVideoOpen(true)}>
            <FaPlay /> <span>Watch Presentation Video</span>
            <small>Full walkthrough of features & workflow</small>
          </button>

          <button className="ld-card" onClick={() => { setGalleryOpen(true); setI(0); }}>
            <FaImages /> <span>Browse Screenshots</span>
            <small>Open the album and navigate</small>
          </button>
        </div>
      </div>

      {/* Video */}
      {videoOpen && (
        <div className="ld-modal" role="dialog" aria-modal="true">
          <button className="ld-close" onClick={() => setVideoOpen(false)} aria-label="Close"><FaTimes/></button>
          <div className="ld-video">
            <video src={demoVideo} controls playsInline />
          </div>
        </div>
      )}

      {/* Gallery / Lightbox */}
      {galleryOpen && (
        <div className="ld-modal" role="dialog" aria-modal="true">
          <button className="ld-close" onClick={() => setGalleryOpen(false)} aria-label="Close"><FaTimes/></button>

          <button className="ld-nav left" onClick={prev} aria-label="Prev"><FaChevronLeft/></button>

          <figure className="ld-figure">
            <img
              className="ld-img"
              src={currentSrc}
              alt={currentName}
              onError={() => handleImgError(currentName)} // ⭐ fallback png
            />
            <figcaption className="ld-cap">
              {currentName} — {i + 1}/{shotNames.length}
            </figcaption>
          </figure>

          <button className="ld-nav right" onClick={next} aria-label="Next"><FaChevronRight/></button>
        </div>
      )}
    </section>
  );
}
