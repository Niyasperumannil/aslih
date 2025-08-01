import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <p className="breadcrumb">
        Home &gt; About us &gt; <strong>Our sectors of operation</strong>
      </p>

      <div className="hero-banner">
        <div className="hero-content">
          <h1>MAKE THE DIFFERENCE</h1>
          <p>with our Multicultural Ingenuity<sup>™</sup> !</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
