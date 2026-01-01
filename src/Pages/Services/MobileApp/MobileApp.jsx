import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./MobileApp.css";
import mobileapp from '../../images/mobileapp.png';
import ioosdev from '../../images/ioosdev.png';
import topImage from './top.png';
import mobileImage from '../../images/mobileImage.jpg';
import HybirdMobile from '../../images/HybirdMobile.jpg';


const MobileApp = () => {

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
        <div id="banner_8_image"></div>
        {/* <img src={topImage} alt="logo" class="background-image" /> */}
        <div class="overlay"></div>
        <div class="banner-text" style={{fontSize:'2.3rem'}}>
          Mobile App Development
        </div>
      </section>


      <br />


      <section id="MobileAppContain">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 content" id="MobileContainText">
              <h2 className="text_center">Smartphone App Development</h2>
              <p id="MobileContainText" className="para">
                By building Smartphone App Versions of Convenient Fintech Software you can use on the go,
                TecStik offers companies with Enhanced Ease. Combining Hybrid and Native Mobile App Development
                Frameworks, TecStik rally's seasoned professionals to develop Mobile Apps using Ideal Mobile App
                Development Frameworks. Let TecStik developers’s sharp expertise and practiced experience, ease
                your flow of business with Smartphone Technology.
              </p>
            </div>

            <div class="col-lg-6">
              <img
                id="MobileAppImage"
                src={mobileapp}
                // src="https://en.bitcoinwiki.org/upload/en/images/e/e8/Blockchain1.jpg"
                alt=""
                height={280}
                className="img"
              />
            </div>
          </div>
        </div>
      </section>


      <br />
      <br />
      <br />
      <section class="features" id="featuresTop">
        <div class="container">

          {/* <div class="section-title">
            <h2 className="text-center">Full Stack</h2>
            <p className="text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div> */}

          <div class="row" data-aos="fade-up">
            <div class="col-md-5">
              <img
                className="img"
                id="mobileImageRadiuse"
                src={ioosdev}
                // src="https://en.bitcoinwiki.org/upload/en/images/e/e8/Blockchain1.jpg"
                alt=""
                height={280}
              />
            </div>
            <div class="col-md-7 pt-4">
              <h3 className="text_center">IOS App Development.</h3>
              <p class="fst-italic para">
                Using Xcode and Coding in Swift (IOS programming language), our IOS app development extraordinaires use
                native programming to produce Fintech for your company’s eager workers. Your team can conveniently perform
                all of their Fintech responsibilities with much ease, using their IPhones when it comes to IOS apps.
              </p>
              {/* <ul>
                <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              </ul> */}
            </div>
          </div>

          <div class="row" data-aos="fade-up">
            <div class="col-md-5 order-1 order-md-2">
              <img
                id="mobileImageRadiuse"
                src={mobileImage}
                // src="https://en.bitcoinwiki.org/upload/en/images/e/e8/Blockchain1.jpg"
                alt=""
                className="img"
                height={280} />
            </div>
            <div class="col-md-7 pt-5 order-2 order-md-1">
              <h3 className="text_center">Andriod App Development.</h3>
              <p class="fst-italic para">
                The Android App Development Team at TecStik ensures that your requirements are met for users of  the Android Mobile OS.
                Well-versed in the Kotlin and Java programming languages, the Android App Development Crew at TecStik makes certain that
                users of your apps experience convenient user-design and useful functionality to go about their assigned business
                processes.

              </p>

            </div>
          </div>

          <div class="row" data-aos="fade-up">
            <div class="col-md-5">
              <img
                id="mobileImageRadiuse"
                src={HybirdMobile}
                // src="https://en.bitcoinwiki.org/upload/en/images/e/e8/Blockchain1.jpg"
                alt=""
                className="img"
                height={280}
                width={450}
              />
            </div>
            <div class="col-md-7 pt-4">
              <h3 className="text_center">Hybrid Mobile Apps.</h3>
              <p class="fst-italic para">
                Here at TecStik our team uses React Native to create Mobile FIntech Solutions that seamlessly
                blend into both IOS and Android Mobile Operating Systems. By creating a Mobile App with similar
                methods of code: it becomes easy for you to run the app when you decide that your Mobile Apps
                should run on both major Mobile OS’s.
              </p>
              {/* <ul>
                <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              </ul> */}
            </div>
          </div>

        </div>
      </section>
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MobileApp;
