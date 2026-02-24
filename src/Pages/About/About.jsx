import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Header/Header";
import "./About.css";
import AboutSlider from "./About-01-1.png";
import Footer from "../Footer/Footer";
import logo from "./logo3.png";

const About = () => {
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
        <div id="banner_1_image"></div>
        {/* <img src={AboutSlider} alt="logo" class="background-image" /> */}
        <div class="overlay"></div>
        <div class="banner-text" style={{ fontSize: "2rem" }}>
        Driving your Business Growth with Scalable Improvements
        </div>
      </section>

      <section>
        <div className="container" data-aos="fade-up">
          <div className="row" id="cardTextImage">
            <div className="col-lg-6 content" id="dollarText">
              <br />
              <br />
              <br />
              <h2 className="text_center">
                POWERING BUSINESS TECHNOLOGY

              </h2>

              <p className="text_justify">
                <br />
When business strategy and technology execution operate in alignment, organizations scale faster, innovate smarter, and outperform competitors.

As the technology innovation arm of Pacific Financial Services Pvt. Ltd. — a firm operating in international financial markets for over two decades — TecStik brings enterprise-grade engineering, fintech expertise, and product innovation to modern businesses worldwide.

We help companies digitize operations, streamline workflows, and deploy high-performance platforms through:

Cloud Computing Solutions

Blockchain Development

Custom Web Applications

Mobile App Development

Our solutions are built to enhance operational efficiency, strengthen data security, and accelerate digital transformation.

           <br />
           <br />
           Partner with TecStik to modernize your technology infrastructure, unlock workflow automation, and build scalable digital ecosystems that drive long-term business value.     
              </p>
             
            </div>

            <div className="col-lg-6 cardTextImage">
              <img
                id="aboutImage"
                src={logo}
                alt="logo"
              // height={600}
              // width={400}
              />

            </div>
          </div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
