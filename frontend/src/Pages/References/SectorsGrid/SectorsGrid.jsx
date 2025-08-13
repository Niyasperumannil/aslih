import React from 'react';
import './SectorsGrid.css';

// Fresh startup-friendly sectors (10 items)
const sectors = [
  { name: 'E‑Commerce', image: '/sector1.jpg' },
  { name: 'Local Businesses', image: '/sector2.jpg' },
  { name: 'Creative & Design', image: '/sector3.jpg' },
  { name: 'Technology & Startups', image: '/sector4.jpg' },
  { name: 'Food & Beverages', image: '/sector5.jpg' },
  { name: 'Education & Training', image: '/sector6.jpg' },
  { name: 'Social Media & Marketing', image: '/sector7.jpg' },
  { name: 'Events & Entertainment', image: '/sector8.jpg' },
  { name: 'Travel & Tourism', image: '/sector9.jpg' },
  { name: 'Health & Wellness', image: '/sector1.jpg' },
];

const SectorsGrid = () => {
  return (
    <div className="sectors-grid">
      {sectors.map((sector, index) => (
        <div
          key={index}
          className="sector-card"
          style={{ backgroundImage: `url(${sector.image})` }}
        >
          <div className="sector-overlay">
            <h3>{sector.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectorsGrid;
