import React from 'react';
import './Email.css'; 
import { useEffect, useRef, useState } from 'react';
// import Home from '../../components/Home/Home.jsx';
// import VerticalHeader from '../../components/VerticalHeader/VerticalHeader';
// import Footer from '../../components/Footer/Footer.jsx';
import Home from '../../../components/Home/Home'
import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader';
import Footer from '../../../components/Footer/Footer'


const StrategicPage = () => {
  const [ctaVisible, setCtaVisible] = useState(false);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
          observer.unobserve(entry.target); // Animate once
        }
      },
      { threshold: 0.2 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
    {/* <Home />
              <VerticalHeader /> */}
               <Home />
                    
                        <VerticalHeader />
      <div className="strategic-section">
        {/* === LEFT CONTENT === */}
        <div className="strategic-content">
          <button className="strategic-tag">INFLUENCER SERVICES</button>
          <h1 className="strategic-heading">
            Top-Rated Influencer Marketing Agency
          </h1>
          <p className="strategic-description">
            We connect brands with authentic voices to create real impact,
            expand reach, and drive engagement through powerful influencer
            partnerships.
          </p>
            <a
  href="https://wa.me/1234567890?text=Hi%20there!%20I%20would%20love%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
>
          <button className="strategic-button">
            Talk to an Influencer Expert <span className="arrow">→</span>
          </button></a>
        </div>

        {/* === RIGHT IMAGE === */}
        <div className="strategic-image-container">
          <img
            src="/sub-4.jpg"
            alt="Influencer Marketing"
            className="strategic-image"
          />
        </div>
      </div>
      <div className="strategic-title">
        <span className="strategic-first-title">Think bigger.</span>
        <span className="strategic-second-title">
          Lead with{' '}
          <span style={{ color: '#7756ff' }}>strategic influence.</span>
        </span>
      </div>

      {/* --- FIRST SECTION --- */}
      <div className="second-page-strategic">
        <div className="strategic-left">
          <button className="strategic-approach-button">OUR APPROACH</button>
        </div>
        <div className="strategic-right">
          <h2 className="strategic-heading">
            The most common reason brands struggle to grow?
          </h2>
          <p className="strategic-paragraph">
            They didn’t understand the way that their product produces
            differentiated value...
          </p>
          <ul className="strategic-list">
            <li>The larger market and the lay of the land</li>
            <li>Who their customer was and what problems they have</li>
            <li>How to communicate in a way that’s impactful</li>
          </ul>
        </div>
      </div>

      {/* --- SECOND SECTION --- */}
      <div className="strategic-framework-section">
        <div className="strategic-left">
          <button className="strategic-approach-button">OUR FRAMEWORK</button>
        </div>
        <div className="strategic-right">
          <h2 className="strategic-heading">
            Your comprehensive, data-backed go to market strategy
          </h2>
          <p className="strategic-paragraph">
            If you’re selling the same thing in the same way as a half dozen
            other competitors, you have very little chance of being successful.
            Or if you’re selling to Selena Gomez and your customer is actually
            Dolly Parton, you’re going to burn a ton of cash on ineffective
            marketing.
          </p>
          <p className="strategic-paragraph">
            That’s where a fully fledged, comprehensive, data-backed go to
            market strategy comes in.
          </p>
          <ul className="strategic-list">
            <li>
              <strong>A Deep Business Audit</strong>
              <p>
                We’ll plug your financials, customer file, and marketing data
                into nova Intelligence, our proprietary technology platform. Our
                expert growth analysts will diagnose your biggest pain points,
                assess your unit economics, compare your LTV:CAC ratio to what’s
                healthy, and quickly map out the biggest needle mover metrics.
              </p>
            </li>
            <li>
              <strong>Customer Insights + Persona</strong>
              <p>
                From there we’ll compare who you think your customer is to what
                it actually is. This isn’t just some subjective alliterative
                persona either, it’s actually baked in verified deterministic
                data based on their past purchase behavior, media consumption,
                and psychographics.
              </p>
            </li>
            <li>
              <strong>Market Research</strong>
              <p>
                What are your competitors doing? What’s the overall size of the
                business opportunity (revenue size and total addressable
                market). Is it mature and commoditized? Is it emerging and
                requires category education as well as product education? We’ll
                include the watch outs and the low hanging fruit.
              </p>
            </li>
            <li>
              <strong>Media Plan</strong>
              <p>
                Knowing your customer, your market, and your unit economics tees
                up how to properly spend your marketing dollars. Where to
                invest, when, how much, and by what channel and tactic to
                generate the best return on your investment.
              </p>
            </li>
          </ul>
          <p className="strategic-framework-about">
            And those are just the big categories. Depending on what we find
            during our appraisal process, we very well much identify areas of
            improvement around your technology stack, your processes and
            procedures, customer reviews or sentiment, internal management, or
            how you’re measuring your marketing ROI.
          </p>
          <p className="strategic-framework-about">
            Get the benefit of working with a “big 4” holding company without
            having to pay millions of dollars. And we’re biased, but we think
            our product is just as good (if not better).
          </p>
        </div>
      </div>
      <div
        className={`strategic-cta ${ctaVisible ? 'fade-in' : ''}`}
        ref={ctaRef}
      >
        <h2 className="strategic-cta-heading">
          Ready to be <span>undeniable?</span>
        </h2>
        <p className="strategic-cta-text">
          For brands and enterprise companies that demand digital marketing
          strategies with proven impact, Power is ready to be your partner in
          business growth.
        </p>
        <button className="strategic-cta-button">
          Get in touch <span>↗</span>
        </button>
      </div>
      {/* <Footer /> */}
            <Footer />
      
    </>
  );
};

export default StrategicPage;
