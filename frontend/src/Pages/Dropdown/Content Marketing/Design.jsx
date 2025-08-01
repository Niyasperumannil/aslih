import './Design.css';
import React, { useState } from 'react';
// import Home from '../../components/Home/Home.jsx';
// import VerticalHeader from '../../components/VerticalHeader/VerticalHeader';
// import Footer from '../../components/Footer/Footer.jsx';
import Home from '../../../components/Home/Home'
import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader';
import Footer from '../../../components/Footer/Footer'
const faqData = [
  {
    question: 'What tools do you use for CRO?',
    answer:
      'We have a powerful suite of CRO tools that help us measure and evaluate the performance of your site...',
  },
  {
    question: 'What is a CRO audit?',
    answer:
      'A CRO audit is a thorough examination of your website’s current metrics and performance...',
  },
  {
    question: 'What is A/B (split) testing?',
    answer:
      'A/B testing, or split testing as it is often called, is the process of comparing two or more versions...',
  },
  {
    question: 'What is A/B (split) testing?',
    answer:
      'A/B testing, or split testing as it is often called, is the process of comparing two or more versions...',
  },
  {
    question: 'What is A/B (split) testing?',
    answer:
      'A/B testing, or split testing as it is often called, is the process of comparing two or more versions...',
  },
  {
    question: 'What is A/B (split) testing?',
    answer:
      'A/B testing, or split testing as it is often called, is the process of comparing two or more versions...',
  },
  {
    question: 'What is A/B (split) testing?',
    answer:
      'A/B testing, or split testing as it is often called, is the process of comparing two or more versions...',
  },
];

const Cro = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <Home />
      
          <VerticalHeader />
          
      <div className="cro-section">
        {/* Content */}
        <div className="cro-content">
          <button className="cro-tag">GROWTH MARKETING</button>
          <h1 className="cro-heading">
            Conversion rate optimization agency specialized in making customers
            stay, care, click, and convert.
          </h1>
          <p className="cro-description">
            Unlock the potential of your website with tailored Conversion Rate
            Optimization strategies. Our data-driven approach focuses on
            continuous testing and refinement to improve user experience,
            increase engagement, and drive conversions. Let us help you turn
            visitors into loyal customers.
          </p>
          <button className="cro-button">
            Get a Proposal <span className="arrow">→</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="cro-image-container">
          <img src="/public/CRO.webp" alt="CRO" className="cro-image" />
        </div>
      </div>
      <div className="cro-title">
        <span className="first-title">Don’t settle for ordinary.</span>
        <span className="second-title">
          Partner with <span style={{ color: '#7756ff' }}>extraordinary.</span>{' '}
        </span>
      </div>

      <div className="cro-second">
        <div className="cro-second-content-left">
          <button>WORK WITH POWER</button>
          <h2>
            All your hard-earned traffic is wasted effort if it doesn't convert.
          </h2>
        </div>
        <div className="cro-second-content-right">
          <span>
            ROI doesn’t come from paid ads, social media, or SEO services. It
            comes from making the sale.
          </span>
          <span>
            If there’s a chasm between your traffic and conversion numbers, CRO
            closes it. That’s why Power Digital makes CRO a top priority in your
            overall marketing strategy – even if it’s not within scope.
          </span>
          <span>
            From landing page copy to call-to-actions, we craft a smooth and
            persuasive customer experience that stops leads from leaking out of
            your funnel.
          </span>
          <button>Get in Touch</button>
        </div>
      </div>
      <div className="cro-second-boxes">
        <div className="first-cro-box">
          <div className="logo-boxes">
            <img src="public/Services_AmazonMarketing_100.webp" alt="" />
          </div>
          <div className="box-contents">
            <p>Eliminate Customer Apathy</p>
            <p>
              Turn passive interest into active engagement. With strategic CRO,
              we transform lukewarm leads into enthusiastic customers who are
              eager to take the next step. Every interaction is optimized to
              capture attention, sustain interest, and drive conversions,
              ensuring that no opportunity is wasted.
            </p>
          </div>
        </div>
        <div className="first-cro-box">
          <div className="logo-boxes">
            <img src="public/service-icon.webp" alt="" />
          </div>
          <div className="box-contents">
            <p>Eliminate Customer Apathy</p>
            <p>
              Turn passive interest into active engagement. With strategic CRO,
              we transform lukewarm leads into enthusiastic customers who are
              eager to take the next step. Every interaction is optimized to
              capture attention, sustain interest, and drive conversions,
              ensuring that no opportunity is wasted.
            </p>
          </div>
        </div>
        <div className="first-cro-box">
          <div className="logo-boxes">
            <img src="public/Capabilities_FullService_100.webp" alt="" />
          </div>
          <div className="box-contents">
            <p>Eliminate Customer Apathy</p>
            <p>
              Turn passive interest into active engagement. With strategic CRO,
              we transform lukewarm leads into enthusiastic customers who are
              eager to take the next step. Every interaction is optimized to
              capture attention, sustain interest, and drive conversions,
              ensuring that no opportunity is wasted.
            </p>
          </div>
        </div>
      </div>
      <div className="third-cro">
        <div className="button">OUR CRO SEVICES</div>
        <div className="service-contents">
          <h2>
            Obliterate the divide between traffic and revenue with CRO processes
            proven to work.
          </h2>
          <span>
            Our approach to CRO takes your entire sales funnel into
            consideration and doesn’t stop until you see significant ROI.
          </span>
        </div>
      </div>
      <div className="service-steps">
        <div className="steps">
          <h2>01 Analysis</h2>
          <p>
            Before a contract is ever signed, we pop the hood on your business
            with a detailed audit. You get an in-depth report on what’s working,
            what’s not, and what opportunities we’ve found for serious growth.
          </p>
        </div>
        <div className="steps">
          <h2>02 Strategy</h2>
          <p>
            <span>
              After we’ve painted a picture of current obstacles and missed
              opportunities, we craft a roadmap of solutions to reach your
              goals.
            </span>
            Your strategy is customized across digital marketing channels for a
            full, holistic approach.
          </p>
        </div>
        <div className="steps">
          <h2>03 Execution</h2>
          <p>
            Now it’s time to buckle in and start executing. We design and
            develop all strategies to ensure they are tailored to meet your
            goals. You’ll be kept up to speed on our progress as well as results
            during monthly, weekly, and day-to-day meetings and check-ins.
          </p>
        </div>
        <div className="steps">
          <h2>Implementation & Results</h2>
          <p>
            The first foundational changes, informed by detailed analysis, set
            the stage for future A/B testing. While you enjoy the increased cash
            flow, we tweak and test, analyze the results, implement the winning
            variant, and repeat the process for continuous incremental growth.
          </p>
        </div>
      </div>

      <div className="forth-page-cro">
        <div className="forth-left">
          <button className="tag-button">WHY POWER</button>
          <h2>
            Get an in-depth audit of your site’s performance and user
            experience.
          </h2>
          <button className="cta-button">Get a free marketing audit →</button>
        </div>

        <div className="forth-right">
          <h3>What you’ll receive:</h3>
          <ul>
            <li>
              <strong style={{ fontSize: '24px' }}>
                User Journey Analysis
              </strong>
              <br />
              Identify drop-offs and understand where and why they occur in your
              conversion funnel to improve the user journey and boost conversion
              rates.
            </li>
            <li>
              <strong style={{ fontSize: '24px' }}>Scroll Percentage</strong>
              <br />
              Measure website visitor interest through scroll depth.
            </li>
            <li>
              <strong style={{ fontSize: '24px' }}>CTAs and Forms</strong>
              <br />
              Ensure leads aren’t quitting before they start.
            </li>
            <li>
              <strong style={{ fontSize: '24px' }}>Messaging</strong>
              <br />
              See whether your copy makes leads care or click off.
            </li>
            <li>
              <strong style={{ fontSize: '24px' }}>Mobile Optimization</strong>
              <br />
              Because most of your customers see your site on their phones.
            </li>
            <li>
              <strong style={{ fontSize: '24px' }}>
                Layout and Navigation
              </strong>
              <br />
              Ensure your site isn’t a confusing maze to customers.
            </li>
          </ul>
        </div>
      </div>

      <div className="fifth-page">
        <div className="fifth-left">
          <button className="tag-button">LEARN MORE</button>
          <h2>Learn more about CRO.</h2>
          <p>
            Dive into the world of CRO and discover how our tailored strategies
            can bridge the gap between traffic and revenue. Learn about the
            tools, processes, and expertise we bring to the table, all designed
            to transform your website into a conversion powerhouse.
          </p>
        </div>

        <div className="fifth-right">
          {faqData.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
            >
              <div className="faq-question" onClick={() => handleToggle(index)}>
                <h4>{faq.question}</h4>
                <span className="arrow">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cro;
