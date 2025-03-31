import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.scss';
import {
  FaInstagram,
  FaPinterestP,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTiktok
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <Link to="/" className="footer-logo-link">
              <img src="/logo.png" alt="Logo" className="footer-logo-image" />
            </Link>
            <p className="footer-slogan">Vintage • Upcycled • Design</p>
          </div>

          <div className="footer-sections">
            <div className="footer-section">
              <h4 className="footer-heading">Entdecken</h4>
              <ul className="footer-links">
                <li><Link to="/shop/vintage">Vintage-Schätze</Link></li>
                <li><Link to="/shop/upcycled">Upcycling-Produkte</Link></li>
                <li><Link to="/shop/designer">Designer-Kollektionen</Link></li>
                <li><Link to="/shop/limited">Limitierte Editionen</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Informationen</h4>
              <ul className="footer-links">
                <li><Link to="/about">Über uns</Link></li>
                <li><Link to="/sustainability">Nachhaltigkeit</Link></li>
                <li><Link to="/stories">Produktgeschichten</Link></li>
                <li><Link to="/faq">Häufige Fragen</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Service</h4>
              <ul className="footer-links">
                <li><Link to="/shipping">Versand & Lieferung</Link></li>
                <li><Link to="/returns">Rückgabe & Erstattung</Link></li>
                <li><Link to="/care">Pflegehinweise</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
              </ul>
            </div>

            <div className="footer-section contact-section">
              <h4 className="footer-heading">Kontakt</h4>
              <ul className="contact-info">
                <li>
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:hello@retroy.de">hello@retroy.de</a>
                </li>
                <li>
                  <FaPhone className="contact-icon" />
                  <a href="tel:+4912345678">+49 123 456 78</a>
                </li>
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <address>Vintage Straße 42, 10115 Berlin</address>
                </li>
              </ul>

              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                  <FaTiktok />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Pinterest">
                  <FaPinterestP />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <Link to="/terms">AGB</Link>
            <Link to="/privacy">Datenschutz</Link>
            <Link to="/imprint">Impressum</Link>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Retroy. Alle Rechte vorbehalten.</p>
        </div>
      </div>

      <div className="footer-decorative-line"></div>
    </footer>
  );
}

export default Footer;
