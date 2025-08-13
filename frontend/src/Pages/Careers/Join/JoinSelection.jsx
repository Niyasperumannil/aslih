import React from 'react';
import './JoinSelection.css';

const cards = [
  {
    img: '/join2.jpg',
    title: 'OUR TALENTS',
    subtitle: 'Join our Multicultural Ingenuity™.',
    link: '/talents'
  },
  {
    img: '/join3.jpg',
    title: 'OUR VALUES',
    subtitle: 'Discover the values we share at Datawords.',
    link: '/values'
  }
];

export default function JoinUsSection() {
  return (
    <section className="join-us-section">
      <h1 className="join-us-heading">
        <span className="purple">JOIN</span><br />
        <span className="dark">US</span>
      </h1>
      <div className="join-us-grid">
        {cards.map((card, idx) => (
          <a href={card.link} key={idx} className="join-us-card">
            <div className="image-wrapper">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="card-text">
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
