// WhoWeAreSection.jsx
import React from 'react';
import './Styles.css';

export default function WhoWeAreSection() {
  return (
    <section className="who-we-are-section">
      <div className="background-image" aria-hidden="true" />

      <div className="info-card">
      
      </div>

      <div className="text-panel">
        <div className="label">WHO WE ARE</div>
        <h2>Transform uncertain into undeniable.</h2>
        <p className="body-text">
          Power is the digital marketing firm that operates at the intersection of data, technology,
          and human intelligence to make profit predictable. In today’s hyper‑competitive,
          often volatile marketplace, average results just won’t cut it.
        </p>
        <button className="btn-action">
          Accelerate your business <span className="btn-arrow">→</span>
        </button>
      </div>
    </section>
  );
}
