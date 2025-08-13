import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-image">
          <img src='/pexels-canvastudio-3194519.jpg' alt="Profile of Jie Gao" />
        </div>
        <div className="testimonial-content">
          {/* <span className="quote-mark">“</span> */}
          <p className="testimonial-text">
            No great man lives in vain. The history of the world is but the biography of great men
            power your digital   platforms  24/7 within 4 hours worldwide, whatever the culture.
            
          </p>
          <p className="testimonial-name">Thomas Carlyle,</p>
          <p className="testimonial-title"> Scottish historian and author of On Heroes</p>
          <p className="testimonial-title"> Hero-Worship</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
