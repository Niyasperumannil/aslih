// ReadySection.jsx
import React from 'react';
import './ReadySection.css';

const ReadySection = () => (
  <section className="ready-section">
    <div className="ready-content">
      <h1 className="ready-heading">
        Ready to be <span className="highlight">undeniable</span>
      </h1>
      <p className="ready-description">
        For brands and enterprise companies that demand digital marketing strategies
        with proven impact, Power is ready to be your partner in business growth.
      </p>
      <a
        href="https://wa.me/1234567890?text=Hi%20there!%20I%20would%20love%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="ready-button"
      >
        Get in touch <span className="arrow">↗</span>
      </a>
    </div>
  </section>
);

export default ReadySection;
