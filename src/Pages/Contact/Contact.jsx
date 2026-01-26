import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Contact.css";
import map from "../images/map.PNG";
// import axios from "axios"; // ✅ no longer needed for mailto
import { ToastContainer, toast } from "react-toastify";
import { Spin } from "antd";

// const CONTACT_API = "https://sign-api-boiler-plate.vercel.app/tecstikSndmail"; // ✅ no longer needed

const Contact = () => {
  // keep your existing loading behavior (true = show button, false = show spinner)
  const [loading, setLoading] = useState(true);

  const firstname = useRef(null);
  const firstEmail = useRef(null);
  const firstSubject = useRef(null);
  const firstMessage = useRef(null);

  function maplink() {
    window.open("https://goo.gl/maps/GX3euzu28RpAkaPy6", "_blank");
  }

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [searchParams]);

  function SndEmail(event) {
    event.preventDefault();

    const userName = firstname.current?.value?.trim();
    const userEmail = firstEmail.current?.value?.trim();
    const userSubject = firstSubject.current?.value?.trim();
    const userText = firstMessage.current?.value?.trim();

    if (!userName || !userEmail || !userSubject || !userText) {
      toast.error("Please fill in all fields.");
      return;
    }

    // show spinner briefly (same UI pattern)
    setLoading(false);

    const to = "info@tecstik.com";

    // Build prefilled email body (plain text)
    const bodyLines = [
      "New message from TecStik website contact form:",
      "",
      `Name: ${userName}`,
      `Email: ${userEmail}`,
      "",
      "Message:",
      userText,
      "",
    ];

    const subject = userSubject;
    const body = bodyLines.join("\n");

    // IMPORTANT: Use encodeURIComponent to prevent breaking the mailto URL
    const mailtoHref = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.location.href = mailtoHref;

    toast.info("Opening your email app…", {
      position: "top-right",
      autoClose: 2500,
      theme: "light",
    });

    // Optional: reset form fields (kept similar to your previous reset)
    if (firstname.current) firstname.current.value = "";
    if (firstEmail.current) firstEmail.current.value = "";
    if (firstSubject.current) firstSubject.current.value = "";
    if (firstMessage.current) firstMessage.current.value = "";

    // Restore button
    setLoading(true);
  }

  return (
    <div>
      <Header />
      <ToastContainer />

      <section className="banner_container">
        <div id="banner_6_image"></div>

        <div className="overlay"></div>
        <div className="banner-text">Contact Us</div>
      </section>

      <br />
      <br />

      <div id="CareersForm" className="Careers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text_center">
              <h3>Let’s work together</h3>
              <p>Thank you for being so awesome and thinking about us.</p>

              <div className="mb-3n">
                <h3>Send Us an Email</h3>
                <p>
                  <a href="mailto:info@tecstik.com" className="text-black">
                    info@tecstik.com
                  </a>{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box mb-4">
                <i className="bx bx-envelope"></i>
                <h3>Send Us an Email</h3>
                <p>
                  <a href="mailto:info@tecstik.com" className="text-black">
                    info@tecstik.com
                  </a>{" "}
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
            <div className="col-lg-6 ">
              <img
                title="myFrame"
                src={map}
                id="locationMap"
                className="mb-4 mb-lg-0"
                referrerPolicy="no-referrer-when-downgrade"
                frameBorder="0"
                onClick={maplink}
                alt="TecStik location map"
              />
              <br />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                id="googleMapbtn"
                onClick={maplink}
              >
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
                    placeholder="Subject"
                    required
                    ref={firstSubject}
                  />
                </div>

                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="How can we help you today?"
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

              {/* Optional fallback:
                  <p style={{ marginTop: 10 }}>
                    If the form doesn’t work, email us directly:{" "}
                    <a href="mailto:info@tecstik.com">info@tecstik.com</a>
                  </p>
              */}
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
