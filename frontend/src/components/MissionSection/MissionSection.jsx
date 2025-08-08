import React, { useEffect, useRef, useState } from 'react';
import './MissionSection.css';

export default function MissionSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mission-section ${isVisible ? 'animate' : ''}`}
    >
      <div className="mission-content">
        <h2>
          OUR<br />
          <span className="highlight">MISSION</span>
        </h2>

        <p>
          Thanks to AI and Human Intelligence, we accelerate the performance of
          international brands by making their content locally relevant.
        </p>

        <div className="tagline">
          <span className="tag">ANY</span>
          <span className="highlighted-tag">TIME</span>
          <span className="tag">WHERE DEVICE CULTURE</span>
        </div>

        <button
          className="btn-primary"
          onClick={() => {
            window.open('https://wa.me/9778340818', '_blank');
          }}
        >
          FIND OUT MORE
        </button>
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
