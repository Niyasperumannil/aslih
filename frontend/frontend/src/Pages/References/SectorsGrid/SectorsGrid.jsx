import React from 'react';
import './SectorsGrid.css';

// Fresh startup-friendly sectors (10 items)
const sectors = [
  { name: 'E‑Commerce', image: '/public/sector1.jpg' },
  { name: 'Local Businesses', image: '/public/sector2.jpg' },
  { name: 'Creative & Design', image: '/public/sector3.jpg' },
  { name: 'Technology & Startups', image: '/public/sector4.jpg' },
  { name: 'Food & Beverages', image: '/public/sector5.jpg' },
  { name: 'Education & Training', image: '/public/sector6.jpg' },
  { name: 'Social Media & Marketing', image: '/public/sector7.jpg' },
  { name: 'Events & Entertainment', image: '/public/sector8.jpg' },
  { name: 'Travel & Tourism', image: '/public/sector9.jpg' },
  { name: 'Health & Wellness', image: '/public/sector10.jpg' },
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
