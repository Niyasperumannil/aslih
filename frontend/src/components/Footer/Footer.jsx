import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-text">
  <span className="letter-purple">D</span>
  <span className="letter-purple">E</span>
  <span className="letter-split">X</span>
  <span className="letter-purple">O</span>
</div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#cookies">Cookie management</a>
          <a href="#personal-data">Personal data management</a>
          <a href="#legal">Legal notice</a>
        </div>
        <div className="footer-socials">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/9072257276" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-copy">
        &copy; {currentYear} DEXOINOVATION. All Rights Reserved.
      </div>
    </footer>
  );
}
