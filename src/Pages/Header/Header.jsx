import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import tecStikLogo from "../images/tecStikLogo.png";

export default function Header({ currentPage }) {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const expertiseRef = useRef(null);
  const drawerRef = useRef(null);
  const closeTimerRef = useRef(null);

  const isDesktop = () =>
    typeof window !== "undefined" ? window.innerWidth >= 992 : false;

  const closeAll = () => {
    setMenuOpen(false);
    setExpertiseOpen(false);
  };

  const openExpertise = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setExpertiseOpen(true);
  };

  const closeExpertiseDelayed = () => {
    if (!isDesktop()) return;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setExpertiseOpen(false), 220);
  };

  // ✅ Programmatic navigation (keeps SPA routing; avoids server old homepage)
  const go = (path, onNavigate) => {
    setExpertiseOpen(false);
    setMenuOpen(false);
    if (onNavigate) onNavigate();
    navigate(path);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 992) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (expertiseRef.current && !expertiseRef.current.contains(e.target)) {
        setExpertiseOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const isHome = String(currentPage || "").toLowerCase() === "home";

  const NavItems = ({ onNavigate }) => (
    <>
      <li>
        {/* ✅ Home stays inside React Router (always NewHome.jsx via "/" route) */}
        <button type="button" className="ts-nav-home" onClick={() => go("/", onNavigate)}>
          Home
        </button>
      </li>

      <li>
        <NavLink
          to="/Tecstik-Meet"
          onClick={onNavigate}
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          Meet TecStik
        </NavLink>
      </li>

      {/* EXPERTISE */}
      <li
        ref={expertiseRef}
        className={`ts-dropdown ${expertiseOpen ? "open" : ""}`}
        onMouseEnter={() => isDesktop() && openExpertise()}
        onMouseLeave={() => isDesktop() && closeExpertiseDelayed()}
      >
        <button
          type="button"
          className="ts-dropdown-trigger"
          onClick={() => {
            if (!isDesktop()) setExpertiseOpen((v) => !v);
          }}
          aria-haspopup="menu"
          aria-expanded={expertiseOpen}
        >
          Our Expertise <span className="ts-caret" aria-hidden="true">▾</span>
        </button>

        <div
          className="ts-dropdown-menu"
          role="menu"
          aria-label="Our Expertise"
          onMouseEnter={() => isDesktop() && openExpertise()}
          onMouseLeave={() => isDesktop() && closeExpertiseDelayed()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <button type="button" role="menuitem" onClick={() => go("/TecStik-Blockchain", onNavigate)}>
            Blockchain
          </button>

          <button type="button" role="menuitem" onClick={() => go("/TecStik-WebDevelopment", onNavigate)}>
            Web Development
          </button>

          <button type="button" role="menuitem" onClick={() => go("/TecStik-MobileApp", onNavigate)}>
            Mobile Apps
          </button>

          <button type="button" role="menuitem" onClick={() => go("/TecStik-Cloud", onNavigate)}>
            Cloud
          </button>
        </div>
      </li>

      <li>
        <NavLink
          to="/TecStik-Product"
          onClick={onNavigate}
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          Products
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/TecStik-Portfolio"
          onClick={onNavigate}
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          Portfolio
        </NavLink>
      </li>

      <li>
        {/* ✅ Relative URL so it works on localhost AND live domain */}
        <a href="/TecStik-Blog">Blog</a>
      </li>

      <li>
        <NavLink
          to="/TecStik-Careers"
          onClick={onNavigate}
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          Careers
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/TecStik-Contact"
          onClick={onNavigate}
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <header className={`ts-header ${scrolled ? "is-scrolled" : ""} ${isHome ? "is-home" : ""}`}>
      <div className="ts-container ts-header-inner">
        {/* ✅ Logo click also stays inside React Router */}
        <button type="button" className="ts-brand" onClick={() => go("/", closeAll)} aria-label="TecStik Home">
          <img src={tecStikLogo} className="ts-logo" alt="TecStik" />
        </button>

        <nav className="ts-desktop-nav" aria-label="Primary">
          <ul className="ts-desktop-list">
            <NavItems onNavigate={null} />
          </ul>
        </nav>

        <button
          className={`ts-burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="ts-mobile-drawer"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`ts-overlay ${menuOpen ? "open" : ""}`} onClick={closeAll} aria-hidden={!menuOpen} />

        <nav
          id="ts-mobile-drawer"
          ref={drawerRef}
          className={`ts-drawer ${menuOpen ? "open" : ""}`}
          role="navigation"
          aria-label="Mobile menu"
          aria-hidden={!menuOpen}
        >
          <div className="ts-drawer-header">
            <span className="ts-drawer-title">Menu</span>
            <button className="ts-drawer-close" onClick={closeAll} aria-label="Close menu" type="button">
              ✕
            </button>
          </div>

          <ul className="ts-nav-list">
            <NavItems onNavigate={closeAll} />
          </ul>
        </nav>
      </div>
    </header>
  );
}