import React from "react";
import "./Expertise.css";

const Expertise = () => {
  return (
    <div className="expertise-section">
      <h1 className="highlight">
        OUR <br /> EXPERTISE
      </h1>
    <p className="subheading">
  As a fresh and passionate company, we combine creativity, technology, and cultural understanding 
  to deliver solutions that work <strong>AnyTime, AnyWhere, Any Device, Any Culture (ATAWADAC)*</strong>.
</p>

      <div className="expertise-icons">
        <div className="expertise-item">
          <img
            src="https://datawords.com/wp-content/uploads/2023/06/multiple-intelligence-1.png"
            alt="Digital Expertise Icon"
          />
          <h3>Digital Expertise</h3>
          <p>
            Bringing together skills in technology, design, content creation, and digital strategy
            to help your brand grow online from day one.
          </p>
        </div>

        <div className="ampersand">&</div>

        <div className="expertise-item">
          <img
            src="https://datawords.com/wp-content/uploads/2023/06/multiple-intelligence-1-1.png"
            alt="Cultural Adaptation Icon"
          />
          <h3>Cultural Adaptation</h3>
          <p>
            Crafting content and experiences that connect with diverse audiences while keeping
            authenticity at the heart of every message.
          </p>
        </div>

        <div className="ampersand">&</div>

        <div className="expertise-item">
          <img
            src="https://datawords.com/wp-content/uploads/2023/06/multiple-intelligence-1-2.png"
            alt="Delivery Ingenuity Icon"
          />
          <h3>Delivery Ingenuity</h3>
          <p>
            Using smart processes, creativity, and collaboration to turn ideas into impactful
            results quickly and effectively.
          </p>
        </div>
      </div>

      <p className="bottom-text">
        As a fresh and growing company, we call this our{" "}
        <strong>Multicultural Ingenuity™</strong> — a mindset blending technology, creativity, and
        cultural awareness.
      </p>

      <p className="footnote">*AnyTime, AnyWhere, Any Device, Any Culture.</p>
    </div>
  );
};

export default Expertise;
