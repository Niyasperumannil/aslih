import React, { useEffect, useRef } from 'react';
import './Styles.css';

export default function WhoWeAreSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="who-we-are-section">
      <div className="background-image" aria-hidden="true" />

      <div className="text-panel">
        <div className="label">WHO WE ARE</div>
        <h2>Transform uncertain into undeniable.</h2>
        <p className="body-text">
          Power is the digital marketing firm that operates at the intersection of data, technology,
          and human intelligence to make profit predictable. In today’s hyper-competitive,
          often volatile marketplace, average results just won’t cut it.
        </p>
        <a
          href="https://wa.me/1234567890?text=Hi%20there!%20I%20would%20love%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-action">
            Accelerate your business <span className="btn-arrow">→</span>
          </button>
        </a>
      </div>
    </section>
  );
}
