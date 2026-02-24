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
  const currentTab = searchParams.get("tab") || "0"; // kept for compatibility
  const [currentPage, setCurrentPage] = useState("Home");

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setCurrentPage("Home");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [searchParams]);

  return (
    <div id="NewHome" className="ts-home">
      <Header currentPage={currentPage} />

      {/* HERO */}
      <section className="ts-hero2">
        <div className="ts-hero2-bg" />
        <div className="ts-container ts-hero2-inner">
          <div className="ts-hero2-left">
           

            <h1 className="ts-hero2-title">
              Accelerate Your B2B SaaS Growth
              <br />
              Engine.
            </h1>

            <p className="ts-hero2-sub">
              Helping SaaS companies drive visibility, leads, and revenue with strategic
              content, research intelligence, and conversion-first campaigns.
            </p>

            <div className="ts-hero2-cta">
              <Link 
              onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("counts")?.scrollIntoView({ behavior: "smooth" });
                }}className="ts-btn ts-btn-primary">
                Get a Free Strategy Consultation
              </Link>

              <a
                href="#counts"
                className="ts-btn ts-btn-ghost"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("counts")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Strategy Call
              </a>
            </div>

            <div className="ts-hero2-micro">
              <div className="ts-pill">Product-led content</div>
              <div className="ts-pill">SaaS SEO systems</div>
              <div className="ts-pill">Research hub comparisons</div>
              <div className="ts-pill">Demand gen</div>
            </div>
          </div>

          <div className="ts-hero2-right">
            <div className="ts-hero2-frame">
              <img className="ts-hero2-image" src={bordaLabtop} alt="TecStik dashboard" />
            </div>

            {/* Floating “icons” (purely visual) */}
            <div className="ts-float ts-float-1">G</div>
            <div className="ts-float ts-float-2">✦</div>
            <div className="ts-float ts-float-3">⟡</div>
            <div className="ts-float ts-float-4">⚡</div>
          </div>
        </div>
      </section>

      {/* TRUST + RESEARCH HUB PREVIEW */}
      <section className="ts-trust">
        <div className="ts-container">
          <h3 className="ts-section-title">Trusted By Modern SaaS Companies</h3>

          <div className="ts-trust-row">
            <img className="ts-trust-logo" src={BlockcIcon} alt="logo 1" />
            <img className="ts-trust-logo" src={reactlogo} alt="logo 2" />
            <img className="ts-trust-logo" src={blockchain} alt="logo 3" />
          </div>

          <div className="ts-hub">
            <div className="ts-hub-search">
              <div className="ts-hub-searchbar">
                <span className="ts-hub-search-icon">🔎</span>
                {/* UI-only input; does NOT change functionality */}
                <input
                  className="ts-hub-input"
                  placeholder="Search software, categories or keywords"
                  aria-label="Search software"
                />
                <Link to="/research-hub" className="ts-btn ts-btn-primary ts-btn-small">
                  Search
                </Link>
              </div>

              <div className="ts-hub-chips">
                <button className="ts-chip" type="button">
                  CRM
                </button>
                <button className="ts-chip" type="button">
                  Marketing
                </button>
                <button className="ts-chip" type="button">
                  Analytics
                </button>
                <button className="ts-chip" type="button">
                  Finance
                </button>
              </div>
            </div>

            <div className="ts-hub-cards">
              <div className="ts-hub-card">
                <div className="ts-hub-card-top">
                  <h4>HubSpot vs Salesforce</h4>
                  <div className="ts-stars">★★★★★</div>
                </div>
                <p className="ts-hub-card-sub">
                  Compare features, pricing, pros &amp; cons.
                </p>
                <Link to="/research-hub" className="ts-btn ts-btn-ghost ts-btn-small">
                  View Comparison
                </Link>
              </div>

              <div className="ts-hub-card">
                <div className="ts-hub-card-top">
                  <h4>Stripe vs Chargebee</h4>
                  <div className="ts-stars">★★★★★</div>
                </div>
                <p className="ts-hub-card-sub">
                  Billing + payments: which fits your SaaS stack?
                </p>
                <Link to="/research-hub" className="ts-btn ts-btn-ghost ts-btn-small">
                  View Comparison
                </Link>
              </div>

              <div className="ts-hub-card">
                <div className="ts-hub-card-top">
                  <h4>Best Product Analytics Tools</h4>
                  <div className="ts-hub-tags">mixpanel • amplitude • heap</div>
                </div>
                <p className="ts-hub-card-sub">
                  Shortlists, reviews and implementation tips.
                </p>
                <Link to="/research-hub" className="ts-btn ts-btn-ghost ts-btn-small">
                  View Comparison
                </Link>
              </div>
            </div>

            <div className="ts-hub-bottom">
              <Link to="/research-hub" className="ts-btn ts-btn-primary">
                Explore Full Research Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES (matches screenshot structure) */}
      <section className="ts-services">
        <div className="ts-container">
          <h3 className="ts-section-title">Our Core Services To Scale Your SaaS Business</h3>

          <div className="ts-service-grid">
            <div className="ts-service-card">
              <div className="ts-service-ic">📘</div>
              <h4>Product-Led Content</h4>
              <p>
                We create comparison and alternative pages that drive organic traffic,
                clicks, and conversions.
              </p>
              <Link to="/services" className="ts-link">
                Learn More →
              </Link>
            </div>

            <div className="ts-service-card">
              <div className="ts-service-ic">📈</div>
              <h4>SaaS SEO Systems</h4>
              <p>
                Scalable SEO and content strategies to rank for high-intent SaaS keywords
                and grow traffic.
              </p>
              <Link to="/services" className="ts-link">
                Learn More →
              </Link>
            </div>

            <div className="ts-service-card">
              <div className="ts-service-ic">🔎</div>
              <h4>Research &amp; Analysis</h4>
              <p>
                In-depth market research and software intelligence to guide SaaS growth
                decisions.
              </p>
              <Link to="/research-hub" className="ts-link">
                Learn More →
              </Link>
            </div>

            <div className="ts-service-card">
              <div className="ts-service-ic">🧲</div>
              <h4>Demand Generation</h4>
              <p>
                Lead magnets, funnels, and comparison-led research to convert high-quality
                SaaS leads.
              </p>
              <Link to="/contact" className="ts-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEEP YOUR EXISTING “TECH WE USE” + HomeCard (no functional changes) */}
      <section id="ser" className="ser">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h4 className="text-center">Technologies we use:</h4>
            <p></p>
          </div>
        </div>
      </section>

      <br />
      <br />

      <HomeCard />

      <br />
      <br />
      <br />

      {/* KEEP YOUR EXISTING CONTACT + COUNTS SECTION */}
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
                    <div className="count-box ">
                      <i className="bi bi-clock"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="18"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        18+
                      </span>
                      <p className="home">
                        <strong>Years of experience</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row center_45" id="countNum" style={{ width: "100%" }}>
                  <div
                    className="col-md-6 d-md-flex align-items-md-stretch"
                    style={{ textAlign: "center" }}
                  >
                    <div className="count-box">
                      <i className="bi bi-emoji-smile"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="84"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        56+
                      </span>
                      <p className="home">
                        <strong>Happy Clients</strong>
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-6 d-md-flex align-items-md-stretch"
                    style={{ textAlign: "center" }}
                  >
                    <div className="count-box">
                      <i className="bi bi-journal-richtext"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="85"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        56+
                      </span>
                      <p className="home">
                        <strong>Projects</strong>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <br />

      <Footer />
    </div>
  );
};

/** ✅ Contact form component (mailto) — unchanged functionality */
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

    const body = [
      `Name: ${name.trim()}`,
      `Email: ${fromEmail.trim()}`,
      "",
      "What do you want to build together?",
      message.trim(),
      "",
    ].join("\n");

    const mailtoHref = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoHref;

    setStatus({ type: "success", text: "Opening your email app…" });
    setName("");
    setFromEmail("");
    setMessage("");
    setSending(false);
  };

  return (
    <div className="ts-home-contact">
      <h3 className="ts-home-contact-title">Contact TecStik</h3>
      <p className="ts-home-contact-sub">
        Send a message to <strong>TecStik</strong>
      </p>

      <form className="ts-home-contact-form" onSubmit={onSubmit}>
        <label className="ts-home-label">
          Your Name
          <input
            className="ts-home-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g, John Appleseed"
          />
        </label>

        <label className="ts-home-label">
          Your Email
          <input
            className="ts-home-input"
            type="email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            placeholder="e.g, you@example.com"
          />
        </label>

        <label className="ts-home-label">
          Message
          <textarea
            className="ts-home-textarea"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe what you need help with…"
          />
        </label>

        <button className="ts-home-submit" type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>

        {status.text ? (
          <div className={`ts-home-status ${status.type}`}>{status.text}</div>
        ) : null}
      </form>
    </div>
  );
}

export default NewHome;
