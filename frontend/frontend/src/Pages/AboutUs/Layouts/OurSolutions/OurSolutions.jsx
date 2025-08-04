// OurSolutions.jsx
import React from 'react';
import './OurSolutions.css';

const solutions = [
  { logo: "🌍", title: "Creative Branding" },
  { logo: "💻", title: "Website & App Design" },
  { logo: "📈", title: "Digital Marketing" },
  { logo: "📱", title: "Social Media Strategy" },
  { logo: "🛒", title: "E-Commerce Setup" },
];

const OurSolutions = () => {
  return (
   <section className="solutions-section">
  <h2>
    <span className="highlight">OUR</span> SOLUTIONS
  </h2>
  <p className="solutions-description">
    As a fresh and ambitious startup, we create smart, adaptable, and creative
    solutions to help businesses <strong>grow and connect</strong> with their
    audience in meaningful ways.
  </p>

  <div className="solutions-grid">
    {solutions.map((solution, index) => (
      <div className="solution-card" key={index}>
        <div className="solution-logo">{solution.logo}</div>
        <div className="solution-title">{solution.title}</div>
        <div className="arrow">→</div>
      </div>
    ))}
  </div>
</section>

  );
};

export default OurSolutions;
