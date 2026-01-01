import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Contact.css";
import map from "../images/map.PNG";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { message, Spin } from "antd";
import ContactImg from "./ContactUS.jpg";

const Contact = () => {
  const [loading, setloading] = useState(true);
  function maplink() {
    window.open("https://goo.gl/maps/GX3euzu28RpAkaPy6", "_blank");
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);

  //   function emailSnd(doc) {

  // }
  let firstname = useRef();
  let firstEmail = useRef();
  let firstSubject = useRef();
  let firstMessage = useRef();

  function SndEmail(event) {
    event.preventDefault();
    setloading(false);

    let userName = firstname.current.value;
    // let userEmail = firstEmail.current.value;
    let userSubject = firstSubject.current.value;
    let userMessage = `message from this ${firstEmail.current.value} ${firstMessage.current.value}`;

    axios({
      method: "post",
      url: "https://sign-api-boiler-plate.vercel.app/tecstikSndmail",
      data: {
        userName: userName,
        userSubject: userSubject,
        userMessage: userMessage,
      },
    })
      .then((res) => {
        console.log(res);
        toast.success("🦄 Successfully Submit mail!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setloading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Header />
      <ToastContainer />
      <section className="banner_container">
        <div id="banner_6_image"></div>
        {/* <img src={ContactImg} alt="logo" class="background-image" /> */}
        <div class="overlay"></div>
        <div class="banner-text">
          Let's Talk about Fintech
        </div>
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
                  <a href="mailto:info@tecstik.com" class="text-black">
                    info@tecstik.com
                  </a>{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope"></i>
                <h3>Send Us an Email</h3>
                <p>
                  <a href="mailto:info@tecstik.com" class="text-black">
                    info@tecstik.com
                  </a>{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p> +92-21 32442392-93</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 ">
              <img
                title="myFrame"
                src={map}
                id="locationMap"
                // height="200"
                className="mb-4 mb-lg-0"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
                onClick={maplink}
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
              <form onSubmit={SndEmail} role="form" class="email-form">
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
                    placeholder="Message"
                    required
                    ref={firstMessage}
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  {loading ? (
                    <button type="submit" class="btn btn-secondary">
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
