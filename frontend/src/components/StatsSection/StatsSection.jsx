import { useState } from "react";
import "./StatsSection.css";

const QUESTIONS = [
  {
    q: "What does SEO stand for?",
    choices: ["Site Engine Optimisation", "Search Engine Optimization", "Site Efficiency Optimization"],
    correct: 1,
  },
  {
    q: "Which of the following is NOT a type of digital marketing?",
    choices: ["Print advertising", "Social media", "Search Engine Optimisation", "Email marketing"],
    correct: 0,
  },
  {
    q: "What does PPC stand for?",
    choices: ["Pay Per Click", "Programme Placement Code", "Client Pay Campaign"],
    correct: 0,
  },
];

export default function DigitalMarketingQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function handleAnswer(index) {
    if (index === QUESTIONS[current].correct) setScore(s => s + 1);
    if (current < QUESTIONS.length - 1) setCurrent(c => c + 1);
    else setShowResult(true);
  }

  return (
    <div className="dmq-container">
      {!showResult ? (
        <>
          <h2>📊 Digital Marketing Quiz</h2>
          <p className="dmq-question">{QUESTIONS[current].q}</p>
          <div className="dmq-options">
            {QUESTIONS[current].choices.map((c, idx) => (
              <button key={idx} onClick={() => handleAnswer(idx)} className="dmq-option">
                {c}
              </button>
            ))}
          </div>
          <p className="dmq-progress">
            Question {current + 1} of {QUESTIONS.length}
          </p>
        </>
      ) : (
        <div className="dmq-result">
          <h2>Your Score: {score} / {QUESTIONS.length}</h2>
          <p>
            {score === QUESTIONS.length
              ? "🌟 Perfect! You’re a digital marketing pro."
              : score >= QUESTIONS.length / 2
              ? "👍 Good job! You know your basics."
              : "🧠 Keep learning—there’s more to explore."}
          </p>
          <a href="https://wa.me/1234567890?text=Hi%20there!%20I%20would%20love%20to%20know%20more%20about%20your%20services." className="dmq-contact-button">
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}
