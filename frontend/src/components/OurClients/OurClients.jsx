import React, { useEffect, useRef } from 'react';
import './OurClients.css';

const clients = [
  { title: 'E-RETAIL', subtitle: 'Taking our steps in boosting online sales for retailers worldwide.', image: './public/client3.jpg', logoText: 'E-RETAIL' },
  { title: 'SOCIAL MEDIA', subtitle: 'Crafting our social campaigns tailored for the European market.', image: './public/client1.jpg', logoText: 'SOCIAL MEDIA' },
  { title: 'MOBILITY', subtitle: 'Our journey in building brand awareness across diverse markets.', image: './public/client2.jpg', logoText: 'MOBILITY' },
  { title: 'FASHION', subtitle: 'Exploring premium retail & creative seasonal storytelling for the first time.', image: './public/client 5.jpg', logoText: 'FASHION' },
  { title: 'WEBSITE', subtitle: 'Designing our websites with engaging seasonal storytelling.', image: './public/client7.jpg', logoText: 'WEBSITE' },
  { title: 'SEO', subtitle: 'Taking our steps in helping brands grow through SEO storytelling.', image: './public/client8.jpg', logoText: 'SEO' }
];

export default function OurClients() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('animate');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section className="ocl-text-left" ref={sectionRef}>
      <div className="ocl-info">
        <h2><span>OUR<br/></span>CLIENTS</h2>
        <p>
          We’re excited to begin our journey and look forward to building trust with our customers.
          Explore our very first projects and see what we’re working on
        </p>
      </div>
      <div className="ocl-grid">
        {clients.map((c, i) => (
          <div className="ocl-card" key={i}>
            <div className="ocl-img-wrap">
              <img src={c.image} alt={c.logoText} />
              <div className="ocl-logo-overlay">{c.logoText}</div>
            </div>
            <h4>{c.title}</h4>
            <p>{c.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
