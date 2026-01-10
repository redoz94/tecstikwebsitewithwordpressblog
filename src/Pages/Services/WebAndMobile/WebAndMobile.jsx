import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./webAndMobile.css";
import code from '../../images/code.jpeg'
import webBanner from '../../images/webBanner.jpeg'
import laptop from './laptop.png'


const WebAndMobile = () => {

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

  return (
    <div>
      <Header />

      <section className="banner_container">
        <div id="banner_9_image"></div>
        {/* <img src={laptop} alt="logo" class="background-image" /> */}
        <div class="overlay"></div>
        <div class="banner-text">
          Web Development
        </div>
      </section>

      <section id="webabout">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 content" id="dollarText">
              <h2 className="text_center">Web Development</h2>
              <p id="dollarText" className="text_justify">
                To produce a website for  the World Wide Web (WWW), you need a team of Savvy Web Developers.
                A business host’s software on the WWW to provide its stakeholders with global access. The Web
                Development Team at TecStik works with you and builds elegant web solutions representing
                Important Fintech for business owners. With our Web Development teams using technologies
                of The MERN Stack, MongoDB, Express.js, React.js, Node.js, MEAN Stack, HTML, and CSS, your
                Business’s Online Fintech will be a modern representation of Your FInance Operations, on
                The Web.
              </p>
            </div>

            <div class="col-lg-6 ">
              <img
                id="webevelopmentImage"
                src={code}
                alt="Code"
                height={280}
              />
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default WebAndMobile;
