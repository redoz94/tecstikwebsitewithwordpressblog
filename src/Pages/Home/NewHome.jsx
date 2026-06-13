import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./NewHome.css";

import BlockcIcon from "../images/BlockcIcon.png";
import reactlogo from "../images/reactlogo.png";
import bordaLabtop from "../images/bordaLabtop.png";
import blockchain from "./blockchain.png";

import HomeCard from "../HomeCard/HomeCard";

const NewHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    setCurrentPage("Home");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [searchParams]);

  return (
    <div id="NewHome" className="ts-home">
      <Header currentPage={currentPage} />

      {/* ── HERO ── white bg, left text, right image */}
      <section className="ts-hero">
        <div className="ts-hero-inner">
          {/* Left: eyebrow + headline + CTA */}
          <div className="ts-hero-left">
            <p className="ts-hero-eyebrow">TecStik Technologies</p>
            <h1 className="ts-hero-title">Propelling Business Growth</h1>
            <Link to="/Tecstik-Meet" className="ts-hero-btn">
              Meet TecStik
            </Link>
          </div>

          {/* Right: laptop image — floats up into header area */}
          <div className="ts-hero-right">
            <img
              src={bordaLabtop}
              alt="TecStik Platform"
              className="ts-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── LOGO STRIP ── three logos centered on grey band */}
      <section className="ts-logos">
        <div className="ts-logos-inner">
          <img src={BlockcIcon} alt="BlockcIcon" className="ts-logo-img" />
          <img src={reactlogo} alt="React" className="ts-logo-img" />
          <img src={blockchain} alt="Blockchain" className="ts-logo-img" />
        </div>
      </section>

      {/* ── TECH WE USE + HomeCard ── */}
      <section className="ts-tech-section">
        <div className="ts-tech-heading">
          <h4>Technologies we use:</h4>
        </div>
        <HomeCard />
      </section>

      {/* ── CONTACT + COUNTS ── */}
      <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <div
              className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <HomeContactForm />
            </div>

            <div
              className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="content d-flex flex-column justify-content-center">
                <div
                  className="row"
                  style={{
                    width: "100%",
                    position: "relative",
                    left: "175px",
                    textAlign: "center",
                    display: "flex",
                  }}
                >
                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-clock"></i>
                      <span className="purecounter">18+</span>
                      <p className="home"><strong>Years of experience</strong></p>
                    </div>
                  </div>
                </div>

                <div className="row center_45" id="countNum" style={{ width: "100%" }}>
                  <div className="col-md-6 d-md-flex align-items-md-stretch" style={{ textAlign: "center" }}>
                    <div className="count-box">
                      <i className="bi bi-emoji-smile"></i>
                      <span className="purecounter">56+</span>
                      <p className="home"><strong>Happy Clients</strong></p>
                    </div>
                  </div>
                  <div className="col-md-6 d-md-flex align-items-md-stretch" style={{ textAlign: "center" }}>
                    <div className="count-box">
                      <i className="bi bi-journal-richtext"></i>
                      <span className="purecounter">56+</span>
                      <p className="home"><strong>Projects</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

function HomeContactForm() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !fromEmail.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }
    setSending(true);
    setStatus({ type: "", text: "" });
    const to = "info@tecstik.com";
    const subject = "New message from TecStik website";
    const body = [`Name: ${name.trim()}`, `Email: ${fromEmail.trim()}`, "", "What do you want to build together?", message.trim(), ""].join("\n");
    window.location.href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ type: "success", text: "Opening your email app…" });
    setName(""); setFromEmail(""); setMessage("");
    setSending(false);
  };

  return (
    <div className="ts-home-contact">
      <h3 className="ts-home-contact-title">Contact TecStik</h3>
      <p className="ts-home-contact-sub">Send a message to <strong>TecStik</strong></p>
      <form className="ts-home-contact-form" onSubmit={onSubmit}>
        <label className="ts-home-label">Your Name
          <input className="ts-home-input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g, John Appleseed" />
        </label>
        <label className="ts-home-label">Your Email
          <input className="ts-home-input" type="email" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} placeholder="e.g, you@example.com" />
        </label>
        <label className="ts-home-label">Message
          <textarea className="ts-home-textarea" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Describe what you need help with…" />
        </label>
        <button className="ts-home-submit" type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>
        {status.text && <div className={`ts-home-status ${status.type}`}>{status.text}</div>}
      </form>
    </div>
  );
}

export default NewHome;
