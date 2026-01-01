import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
// import logo from "../Images/logo2.png";
import tecStikLogo from "../images/tecStikLogo.png";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
// import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import { RiArrowDropDownLine } from "react-icons/ri";


const Header = ({ currentPage }) => {
  console.log("currentPage====>", currentPage)
  const [isOpen, setIsOpen] = useState(false);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navItemColor, setnavItemColor] = useState("#fff");

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check if the user has scrolled at least 20 pixels
      const hasScrolled = scrollPosition > 100;

      setIsScrolled(hasScrolled);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const listenScrollEvent = () => {
    // window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
    // window.scrollY > 10 ? setnavColor("#fff") : setnavColor("#fff");
    window.scrollY > 10 ? setnavItemColor("#012049") : setnavItemColor("#fff");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  useEffect(() => {
    ReactGA.event({
      category: "Test",
      action: "Scroll",
      label: "lable",
    });
  }, []);
  console.log(window.location.pathname.slice(1));

  return (
    <div>
      <Helmet>
        <title>
          {window.location.pathname.slice(1) === ""
            ? "TecStik-Home"
            : window.location.pathname.slice(1)}
        </title>
      </Helmet>
      <header style={{ position: "relative", zIndex: "999" }}>
        <div
          className={`Navbar ${isScrolled ? 'scrolled' : ''} ${currentPage === 'Home' ? 'myHomeNav' : ''}`}
          // className="Navbar"
          // style={{ color: currentPage === 'Home' ? 'myHomeNav' : 'transparent' }}
          // className={`Navbar ${isScrolled ? 'scrolled' : ''}`}
          id="nav"
        >
          <span className="nav-logo" id="nav-logo">
            <Link to="/#">
              <img src={tecStikLogo} className="scrolling_img" />
            </Link>
          </span>
          {/* <span id="logotext"><Link to="/" id="textColor">TecStik</Link></span> */}

          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/#">Home</Link>
            <Link to="/Tecstik-Meet">Meet TecStik</Link>

            <div className="dropdown">
              <div id="services" className="nav-items" style={{display:'flex',alignItems:"center"}}>
                Our Expertise
                <RiArrowDropDownLine style={{fontSize:'25px'}}/>

                {/* <img
                  src="https://icon-library.com/images/dropdown-menu-icon/dropdown-menu-icon-12.jpg"
                  height={20}
                /> */}
              </div>

              <div className="dropdown-content">
                <Row>
                  <Col span={12}>
                    {" "}
                    <Link to="/TecStik-Blockchain">Blockchain Development</Link>
                  </Col>

                  <Col span={12}>
                    <Link to="/TecStik-mobileApp">
                      {" "}
                      Mobile App Development{" "}
                    </Link>
                  </Col>
                </Row>

                <Row>
                  <Col span={12}>
                    <Link to="/TecStik-WebDevelopment">Web Development</Link>
                  </Col>
                  {/* <Col span={12}>
                    {" "}
                    <Link to="/GraphicDesigning">Graphic Designing</Link>
                  </Col> */}
                  <Col span={12}>
                    {" "}
                    <Link to="/TecStik-Cloud">Cloud Computing</Link>
                  </Col>
                </Row>
              </div>
            </div>

            <HashLink to="/TecStik-Product">Products</HashLink>
            <HashLink to="/TecStik-Portfolio">Portfolio</HashLink>
            <HashLink to="/TecStik-Blog">Blog</HashLink>
            <HashLink to="/TecStik-Careers">Careers</HashLink>
            <HashLink to="/TecStik-Contact">Contact</HashLink>
            <HashLink to="/Privacy"></HashLink>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
