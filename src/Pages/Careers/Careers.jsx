import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import map from "../images/map.PNG";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ToastContainer, toast } from "react-toastify";
import { Spin } from "antd";
import "./Careers.css";

const Careers = () => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  const firstname = useRef();
  const firstEmail = useRef();
  const firstSubject = useRef();
  const firstMessage = useRef();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

function SndEmail(event) {
  event.preventDefault();

  const userName = firstname.current?.value?.trim();
  const userEmail = firstEmail.current?.value?.trim();
  const userPosition = firstSubject.current?.value?.trim(); // "Position Applied for"
  const userCoverLetter = firstMessage.current?.value?.trim(); // "Cover Letter+Resumé"

  if (!userName || !userEmail || !userPosition || !userCoverLetter) {
    toast.error("Please fill in all fields.");
    return;
  }

  setLoading(false);

  const to = "info@tecstik.com";

  // Subject line for the drafted email (keep simple + readable)
  const subject = `Career Application: ${userPosition}`;

  // Body with placeholders as subheadings
  const bodyLines = [
    "Your Name",
    userName,
    "",
    "Your Email",
    userEmail,
    "",
    "Position Applied for",
    userPosition,
    "",
    "Cover Letter+Resumé",
    userCoverLetter,
    "",
    "Please attach your résumé file to this email before sending.",
  "",
  ];

  const body = bodyLines.join("\n");

  const mailtoHref = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoHref;

  toast.info("Opening your email app…", {
    position: "top-right",
    autoClose: 2500,
    theme: "light",
  });

  // reset fields
  if (firstname.current) firstname.current.value = "";
  if (firstEmail.current) firstEmail.current.value = "";
  if (firstSubject.current) firstSubject.current.value = "";
  if (firstMessage.current) firstMessage.current.value = "";

  setLoading(true);
}

  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);

  function maplink() {
    window.open("https://goo.gl/maps/GX3euzu28RpAkaPy6", "_blank");
  }

  return (
    <div>
      <Header />
      <ToastContainer />

      <section className="banner_container">
        <div id="banner_5_image"></div>
        <div className="overlay"></div>
        <div className="banner-text">Careers</div>
      </section>

      <br />
      <br />

      <div id="CareersForm" className="Careers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text_center">
              <h3 className="margin">Join The Journey to Innovative Efficiency</h3>

              <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                  <Typography sx={{ width: "38%", flexShrink: 0 }}>FullStack Web Developer:</Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    MERN (MongoDB, Express, React.js, Node.js) and MEAN (MongoDB, Express, Angular, Node.js)
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Those who apply for this position are expected to have demonstrated proficiency in JavaScript,
                    MongoDB, Express, React.js, and Node.js. Candidates should send links to their portfolio that
                    highlight past performance and project outcomes.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                  <Typography sx={{ width: "38%", flexShrink: 0 }}>Full-Stack Content Writers:</Typography>
                  <Typography sx={{ color: "text.secondary" }}>Can you create outstanding pieces of content for Fintech?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Candidates must have experience building customer personas, mapping the customer journey, researching
                    topics, and creating structured content. Familiarity with HubSpot CRM is a plus.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                  <Typography sx={{ width: "38%", flexShrink: 0 }}>React Native Developers:</Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    Support and create high-end smartphone apps for TecStik clients.
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    React Native developers will mentor junior developers, manage team efforts, and build mobile versions
                    of enterprise systems. Strong JavaScript is required.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                  <Typography sx={{ width: "38%", flexShrink: 0 }}>Blockchain Developers:</Typography>
                  <Typography sx={{ color: "text.secondary" }}>Solidity Ethereum developers gather round.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Candidates should have Solidity/Ethereum experience; ideally across DeFi, NFTs, asset tokenization,
                    and DApps with Web3 integrations.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box mb-4">
                <i className="bx bx-envelope"></i>
                <h3>Send Us an Email</h3>
                <p>
                  <a href="mailto:info@tecstik.com" className="text-black">
                    info@tecstik.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box mb-4">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p> +92-21 33541438</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <br />
              <img
                title="Location Map"
                src={map}
                id="locationMap"
                className="mb-4 mb-lg-0"
                referrerPolicy="no-referrer-when-downgrade"
                frameBorder="0"
                alt="TecStik location map"
                onClick={maplink}
                style={{ cursor: "pointer" }}
              />
              <br />
              <br />
              <button type="button" className="btn btn-primary" id="googleMapbtn" onClick={maplink}>
                Open in Google Maps
              </button>
            </div>

            <div className="col-lg-6">
              <form onSubmit={SndEmail} role="form" className="email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                      ref={firstname}
                    />
                  </div>

                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      ref={firstEmail}
                    />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Position Applied for"
                    required
                    ref={firstSubject}
                  />
                </div>

                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Cover Letter+Resumé"
                    required
                    ref={firstMessage}
                  ></textarea>
                </div>

                <div className="text-center" style={{ marginTop: 18 }}>
                  {loading ? (
                    <button type="submit" className="btn btn-secondary">
                      Send Message
                    </button>
                  ) : (
                    <Spin size="large" />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Careers;
