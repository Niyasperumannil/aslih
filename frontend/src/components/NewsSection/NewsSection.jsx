import React from "react";
import "./NewsSection.css";

const newsItems = [
  {
    id: 1,
    image: "public/news1.jpg",
    tag: "case",
    title: "Taking our  steps in localising luxury content for every culture"
  },
  {
    id: 2,
    image: "public/news2.jpg",
    tag: "case",
    title: "Our  experience in building and managing multicultural e-commerce platforms"
  },
  {
    id: 3,
    image: "public/news3.jpg",
    tag: "case",
    title: "Starting  journey in growing organic traffic across different cultures"
  },
  {
    id: 4,
    image: "public/news4.jpg",
    tag: "case",
    title: "Creating  first culturally-aware social media promotions"
  }
];


export default function NewsSection() {
  // Duplicate items for seamless scrolling
  const marqueeItems = [...newsItems, ...newsItems];

  return (
    <section className="news-section">
      <div className="news-header">
        <h2><span>OUR</span> NEWS</h2>
      </div>
      <div className="news-marquee-wrapper">
        <div className="news-grid marquee-scroll">
          {marqueeItems.map((item, idx) => {
            const isLong = item.title.length > 40;
            return (
              <div className="news-card" key={`${item.id}-${idx}`}>
                <div
                  className="news-img"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="news-content">
                  <div className="news-tag">{item.tag}</div>
                  <h3 className={`news-title ${isLong ? "marquee" : ""}`}>
                    <span>{item.title}</span>
                    {isLong && <span>{item.title}</span>}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
