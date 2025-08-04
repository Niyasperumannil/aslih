import React from 'react';
import './ClientLogos.css';

const logos = [
  { src: 'https://powerdigitalmarketing.com/wp-content/uploads/2024/11/asics_pdm.png', alt: 'Sambazon' },
  { src: 'https://powerdigitalmarketing.com/wp-content/uploads/2024/11/coola_pdm.png', alt: 'Catalina Crunch' },
  { src: 'https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Cymbiotika_pdm.png', alt: 'Alliant International University' },
  { src: 'https://powerdigitalmarketing.com/wp-content/uploads/2024/11/asics_pdm.png', alt: 'Alice + Olivia' },
  { src: 'https://powerdigitalmarketing.com/wp-content/uploads/2024/11/asics_pdm.png', alt: 'TV' },
  { src: 'https://powerdigitalmarketing.com/wp-content/uploads/2024/11/asics_pdm.png', alt: 'Asics' },
  { src: 'https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Cymbiotika_pdm.png', alt: 'Crocs' },
  { src: 'https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Cymbiotika_pdm.png', alt: 'Coola' },
  { src: 'https://powerdigitalmarketing.com/wp-content/uploads/2024/11/coola_pdm.png', alt: 'Cyber' },
];

const ClientLogos = () => {
  return (
    <div className="client-logos-section">
      <h2 className="client-title">
        We’ve helped clients become industry leaders
      </h2>
      <div className="marquee-wrapper">
        <div className="logos-marquee">
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="client-logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
