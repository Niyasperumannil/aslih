import { useState } from "react";
import "./StatsSection.css"; // Use the CSS below

export default function FunnyQuizModal({ sel1, sel2, sel3 }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="fs-container">
      <h2 className="fs-animated">😂 The Funniest Digital Marketing Quiz Ever!</h2>

      {/* Trigger Modal */}
      <button className="fs-button" onClick={() => setShowModal(true)}>
        Reveal My Digital Destiny!
      </button>

      {/* Meme-Style Modal */}
      {showModal && (
        <div className="fs-modal-overlay">
          <div className="fs-modal-content">

            {/* Image Grid */}
            <div className="fs-meme-grid">
              <img
                src="https://i.imgflip.com/30b1gx.jpg"
                alt="Meme Left"
                className="fs-meme-img"
              />
              <img
                src="https://i.imgflip.com/3vzej.jpg"
                alt="Meme Right"
                className="fs-meme-img"
              />
            </div>

            <h2>Your Hilarious Result 🤣</h2>
            <p>
              For <strong>{sel1}</strong>, you must <strong>{sel2}</strong> like a boss, and totally own <strong>{sel3}</strong> like a meme lord!
            </p>
            <button className="fs-button" onClick={() => setShowModal(false)}>
              LOL Got It!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
