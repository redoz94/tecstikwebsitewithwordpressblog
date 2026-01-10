import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./NewHome.css";

import BlockcIcon from "../images/BlockcIcon.png";
import reactlogo from "../images/reactlogo.png";
import bordaLabtop from "../images/bordaLabtop.png";
import kuber from "../images/kuber.png";
import blockchain from "./blockchain.png";

import HomeCard from "../HomeCard/HomeCard";

const NewHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";
  const [currentPage, setCurrentPage] = useState("Home"); // Set the current page name



  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setCurrentPage("Home"); // Update the current page on component mount
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);

  return (
    <div id="NewHome">
      <Header currentPage={currentPage} />
<section className="ts-section">
  <div className="ts-container ts-hero">
    <div className="ts-hero-left">
      <p className="ts-eyebrow">TecStik Technologies</p>

      <h1 className="ts-h1">
        Propelling your Business Growth
      </h1>

      <Link to="/Tecstik-Meet" className="ts-primary-btn">
        Meet TecStik
      </Link>
    </div>

    <div className="ts-hero-right">
      <img
        src={bordaLabtop}
        alt="TecStik Platform"
      />
    </div>
  </div>
</section>

      <section className="sponsor section_images">
        <div className="column">
          <div className="container-fluid">
            <div className="row justify-content-center" id="cardlogo">
              <div className="col-6 col-md-2 col-sm-6">
                <img
                  src={BlockcIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-anchor=".intro"
                  className="aos-init aos-animate"
                />
              </div>

              <div className="col-6 col-md-2 col-sm-6">
                <img
                  src={reactlogo}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="750"
                  data-aos-anchor=".intro"
                  className="aos-init aos-animate"
                />
              </div>
              <div className="col-6 col-md-2 col-sm-6">
                <img
                  src={blockchain}
                  alt="blockchain"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  data-aos-anchor=".intro"
                  className="aos-init aos-animate"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section id="ser" className="ser">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h3 className="text-center">Technologies we use:</h3>
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
      <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <div
              className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <img
                src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/features-3.png"
                alt="logo"
                className="img-fluid"
              />
            </div>

            <div
              className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="content d-flex flex-column justify-content-center">

                <div className="row" style={{ width: '100%', position: "relative", left: "175px", textAlign: "center", display: "flex" }}>

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

                <div className="row center_45" id="countNum" style={{ width: '100%' }}>
                  <div className="col-md-6 d-md-flex align-items-md-stretch" style={{ textAlign: 'center' }}>
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

                  <div className="col-md-6 d-md-flex align-items-md-stretch" style={{ textAlign: 'center' }}>
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NewHome;
