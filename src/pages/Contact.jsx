// src/pages/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const SERVICE_ID = "service_zdguoo6";
const TEMPLATE_ID = "template_qwvkpnb";
const PUBLIC_KEY  = "Th6F5CiUx-CuUlQLq";

export default function Contact(){
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Sending..." });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus({ type: "ok", msg: "Thank you!" });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({ type: "err", msg: "error , please try again" });
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-sub">Let's discuss your next project or opportunity</p>

        <div className="contact-grid">
          {/* FORM */}
          <div className="card form-card">
            <form ref={formRef} onSubmit={onSubmit}>
              <label>Name</label>
              <input name="name" type="text" placeholder="Your name" required />

              <label>Email</label>
              <input name="email" type="email" placeholder="your@email.com" required />

              <label>Message</label>
              <textarea name="message" rows="4" placeholder="Write your message..." required />

              {/* tstamp bach yban f email */}
              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <button type="submit" className="btn-primary" disabled={status.type === "loading"}>
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>

              {/* fallback mailto */}
              <a className="mailto" href="mailto:simochliyah800@gmail.com?subject=Portfolio%20Inquiry">
                or send via email client
              </a>

              {status.msg && <div className={`status ${status.type}`}>{status.msg}</div>}
            </form>
          </div>

          {/* SIDE INFO (t9der tbddl l-ma3loumat) */}
          <div className="side">
            <div className="card info-card">
              <h3>Contact Information</h3>
              <div className="info-row"><FaEnvelope /> simochliyah800@gmail.com</div>
              <div className="info-row"><FaPhone /> +212 720013868</div>
              <div className="info-row"><FaMapMarkerAlt /> Taza, Morocco</div>
            </div>

            <div className="card socials-card">
              <h3>Connect With Me</h3>
              <div className="socials">
                <a href="https://github.com/simochliyah01" target="_blank" rel="noreferrer"><FaGithub size={20}/></a>
                <a href="https://www.linkedin.com/in/mohamed-chliyah-a0bb2a36a/" target="_blank" rel="noreferrer"><FaLinkedin size={20}/></a>
              </div>
            </div>

            <div className="card note-card">
              <p>I'm open to new opportunities and collaborations. Reach out anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
