import React from 'react';
import './MissionSection.css';

export default function MissionSection() {
  return (
    <section className="mission-section">
      <div className="mission-content">
        <h2>
          OUR<br />
          <span className="highlight">MISSION</span>
        </h2>

        <p>
          Thanks to AI and Human Intelligence, we accelerate the performance of
          international brands by making their content locally relevant{' '}
        </p>

        <div className="tagline">
          <span className="tag">ANY</span>
          <span className="highlighted-tag">TIME</span>
          <span className="tag">WHERE DEVICE CULTURE</span>
        </div>

        <button className="btn-primary">FIND OUT MORE</button>
      </div>

      <div className="mission-graphic">
        <svg viewBox="0 0 400 400" aria-hidden="true">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4B0082" />
              <stop offset="100%" stopColor="#D633FF" />
            </linearGradient>
          </defs>
          <path
            d="
              M50,50
              h300 a50,50 0 0 1 50,50
              v50 a50,50 0 0 1 -50,50
              h-250 a50,50 0 0 0 -50,50
              v50 a50,50 0 0 0 50,50
              h300
            "
            fill="none"
            stroke="url(#grad)"
            strokeWidth="4"
          />
        </svg>
      </div>
    </section>
  );
}
