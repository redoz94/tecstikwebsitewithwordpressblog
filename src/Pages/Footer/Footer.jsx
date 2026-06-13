import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import privacyPdf from "./PrivacyPolicy.pdf";
import "./Footer.css";

export default function Footer() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [searchParams]);

  return (
    <footer className="ts-footer">

      {/* ── Purple social strip ── */}
      <div className="ts-footer-social">
        <span className="ts-footer-social-label">Find us online :</span>
        <a href="https://www.facebook.com/profile.php?id=100087185961853" target="_blank" rel="noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/Tec_Stik" target="_blank" rel="noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/company/tecstik/about/?viewAsMember=true" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* ── Main 4-column body ── */}
      <div className="ts-footer-body">
        <div className="ts-footer-grid">

          {/* Col 1 — TecStik */}
          <div className="ts-footer-col">
            <h6 className="ts-footer-heading ts-footer-heading--underline">TecStik</h6>
            <p className="ts-footer-text">
              Ignite your business &amp; personal life with cutting-edge fintech
              apps available on popular app stores. Experience tailored solutions
              for growth too.
            </p>
          </div>

          {/* Col 2 — Products */}
          <div className="ts-footer-col">
            <h6 className="ts-footer-heading">PRODUCTS</h6>
            <ul className="ts-footer-list">
              <li><Link to="/TecStik-Product">KollectIt</Link></li>
              <li><Link to="/TecStik-Product">Ijma</Link></li>
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="ts-footer-col">
            <h6 className="ts-footer-heading">SERVICES</h6>
            <ul className="ts-footer-list">
              <li><Link to="/TecStik-Blockchain">Blockchain Development</Link></li>
              <li><Link to="/TecStik-WebDevelopment">Web Development</Link></li>
              <li><Link to="/TecStik-mobileApp">Mobile Apps Development</Link></li>
              <li><Link to="/TecStik-Cloud">Cloud Computing</Link></li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="ts-footer-col">
            <h6 className="ts-footer-heading">CONTACT</h6>
            <ul className="ts-footer-contact-list">
              <li>
                <i className="fas fa-home"></i>
                <span>Business Centre, II Chundrigar Road</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@tecstik.com">info@tecstik.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+92-21 33541438</span>
              </li>
              <li>
                <i className="bi bi-whatsapp"></i>
                <span>WhatsApp: +92 335 2070555</span>
              </li>
            </ul>
            <a href={privacyPdf} target="_blank" rel="noopener noreferrer" className="ts-footer-privacy">
              Privacy Policy
            </a>
          </div>

        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="ts-footer-copy">
        © 2022 Copyright : TecStik.com
      </div>

    </footer>
  );
}
