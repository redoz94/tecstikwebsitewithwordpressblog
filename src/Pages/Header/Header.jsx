import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import tecStikLogo from "../images/tecStikLogo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const expertiseRef = useRef(null);

  // Sticky navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
        setExpertiseOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (expertiseRef.current && !expertiseRef.current.contains(e.target)) {
        setExpertiseOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setExpertiseOpen(false);
  };

  return (
    <header className={`ts-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="ts-container">

        {/* LOGO */}
        <Link to="/" onClick={closeAll}>
          <img src={tecStikLogo} className="scrolling_img" alt="TecStik" />
        </Link>

        {/* BURGER */}
        <button
          className={`ts-burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* OVERLAY */}
        {menuOpen && <div className="ts-overlay" onClick={closeAll} />}

        {/* MOBILE NAV */}
       <nav
  className={`ts-drawer ${menuOpen ? "open" : ""}`}
  role="navigation"
  aria-label="Mobile menu"
>
  {/* Drawer Header */}
  <div className="ts-drawer-header">
    <span className="ts-drawer-title">Menu</span>
    <button
      className="ts-drawer-close"
      onClick={closeAll}
      aria-label="Close menu"
    >
      ✕
    </button>
  </div>

          <ul className="ts-nav-list">

            <li><NavLink to="/" onClick={closeAll}>Home</NavLink></li>
            <li><NavLink to="/Tecstik-Meet" onClick={closeAll}>Meet TecStik</NavLink></li>

            {/* EXPERTISE */}
            <li ref={expertiseRef} className={`ts-dropdown ${expertiseOpen ? "open" : ""}`}>
              <button onClick={() => setExpertiseOpen(!expertiseOpen)}>
                Our Expertise ▾
              </button>

              {expertiseOpen && (
                <div className="ts-dropdown-menu">
                  <NavLink to="/TecStik-Blockchain" onClick={closeAll}>Blockchain</NavLink>
                  <NavLink to="/TecStik-WebDevelopment" onClick={closeAll}>Web Development</NavLink>
                  <NavLink to="/TecStik-MobileApp" onClick={closeAll}>Mobile Apps</NavLink>
                  <NavLink to="/TecStik-Cloud" onClick={closeAll}>Cloud</NavLink>
                </div>
              )}
            </li>

            <li><NavLink to="/TecStik-Product" onClick={closeAll}>Products</NavLink></li>
            <li><NavLink to="/TecStik-Portfolio" onClick={closeAll}>Portfolio</NavLink></li>
            <li><NavLink to="/TecStik-Blog" onClick={closeAll}>Blog</NavLink></li>
            <li><NavLink to="/TecStik-Careers" onClick={closeAll}>Careers</NavLink></li>
            <li><NavLink to="/TecStik-Contact" onClick={closeAll}>Contact</NavLink></li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
