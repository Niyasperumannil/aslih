import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo"> 
          <img src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/asics_pdm.png" alt="Datawords Logo" className="footer-logo" />
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
             <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaInstagram />
          </a>
             <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
