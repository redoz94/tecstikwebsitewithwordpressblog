import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import tecStikLogo from "../images/tecStikLogo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // mobile drawer
  const [expertiseOpen, setExpertiseOpen] = useState(false); // dropdown
  const [scrolled, setScrolled] = useState(false);

  const expertiseRef = useRef(null);
  const drawerRef = useRef(null);

  // ✅ delay timer so dropdown doesn't close while moving mouse
  const closeTimerRef = useRef(null);

  const isDesktop = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 992;
  };

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
    closeTimerRef.current = setTimeout(() => {
      setExpertiseOpen(false);
    }, 200);
  };

  // Sticky shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 992) {
        setMenuOpen(false);
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

  // ESC closes drawer + dropdown
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  // Common nav items (desktop + mobile)
  const NavItems = ({ onNavigate }) => (
    <>
      <li>
        <NavLink
          to="/"
          onClick={onNavigate}
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          Home
        </NavLink>
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

      {/* ✅ EXPERTISE (hover stays open + delay) */}
      <li
        ref={expertiseRef}
        className={`ts-dropdown ${expertiseOpen ? "open" : ""}`}
        onMouseEnter={() => {
          if (isDesktop()) openExpertise();
        }}
        onMouseLeave={() => {
          if (isDesktop()) closeExpertiseDelayed();
        }}
      >
        <button
          type="button"
          className="ts-dropdown-trigger"
          onClick={() => {
            // Only click-toggle on mobile
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
          onMouseEnter={() => {
            if (isDesktop()) openExpertise();
          }}
          onMouseLeave={() => {
            if (isDesktop()) closeExpertiseDelayed();
          }}
        >
          <NavLink
            to="../Pages/Services/Blockchain/Blockchain.jsx"
            onClick={() => {
              setExpertiseOpen(false);
              if (onNavigate) onNavigate();
            }}
            role="menuitem"
          >
            Blockchain
          </NavLink>

          <NavLink
            to="/TecStik-WebDevelopment"
            onClick={() => {
              setExpertiseOpen(false);
              if (onNavigate) onNavigate();
            }}
            role="menuitem"
          >
            Web Development
          </NavLink>

          <NavLink
            to="/TecStik-MobileApp"
            onClick={() => {
              setExpertiseOpen(false);
              if (onNavigate) onNavigate();
            }}
            role="menuitem"
          >
            Mobile Apps
          </NavLink>

          <NavLink
            to="/TecStik-Cloud"
            onClick={() => {
              setExpertiseOpen(false);
              if (onNavigate) onNavigate();
            }}
            role="menuitem"
          >
            Cloud
          </NavLink>
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
        <NavLink
          to="/TecStik-Blog"
          onClick={onNavigate}
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          Blog
        </NavLink>
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
    <header className={`ts-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="ts-container ts-header-inner">
        {/* LOGO */}
        <Link to="/" onClick={closeAll} className="ts-brand" aria-label="TecStik Home">
          <img src={tecStikLogo} className="ts-logo" alt="TecStik" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="ts-desktop-nav" aria-label="Primary">
          <ul className="ts-desktop-list">
            <NavItems onNavigate={null} />
          </ul>
        </nav>

        {/* BURGER */}
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

        {/* OVERLAY */}
        <div className={`ts-overlay ${menuOpen ? "open" : ""}`} onClick={closeAll} aria-hidden={!menuOpen} />

        {/* MOBILE DRAWER */}
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
