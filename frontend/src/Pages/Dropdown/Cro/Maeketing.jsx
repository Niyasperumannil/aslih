import './Maeketing.css';
import React, { useState } from 'react';
// import Home from '../../components/Home/Home.jsx';
// import VerticalHeader from '../../components/VerticalHeader/VerticalHeader';
// import Footer from '../../components/Footer/Footer.jsx';
import Home from '../../../components/Home/Home'
import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader';
import Footer from '../../../components/Footer/Footer'


const faqData = [
  {
    question: 'What is influencer marketing?',
    answer:
      'Influencer marketing connects brands with trusted creators who have established audiences. By leveraging influencers’ reach and credibility, brands can promote products or services authentically to targeted communities.',
  },
  {
    question: 'Why work with an influencer agency?',
    answer:
      'An influencer marketing agency handles everything from strategy and creator sourcing to campaign management and analytics. This ensures your collaborations are impactful, on-brand, and deliver measurable ROI.',
  },
  {
    question: 'How do you find the right influencers?',
    answer:
      'We use advanced tools and our extensive network to match your brand with influencers whose audience, values, and content style align perfectly with your goals.',
  },
  {
    question: 'How is success measured?',
    answer:
      'We measure success through clear KPIs like engagement rates, reach, conversions, and content performance to ensure your campaigns deliver real, trackable results.',
  },
];

const Influencer = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
{/* <Home />
          <VerticalHeader />       */}
           <Home />
                
                    <VerticalHeader />
          <div className="influencer-section">
        <div className="influencer-content">
          <button className="influencer-tag">INFLUENCER SERVICES</button>
          <h1 className="influencer-heading">
            Top-Rated Influencer Marketing Agency
          </h1>
          <p className="influencer-description">
            We connect brands with authentic voices to create real impact,
            expand reach, and drive engagement through powerful influencer
            partnerships.
          </p>
           <a
  href="https://wa.me/1234567890?text=Hi%20there!%20I%20would%20love%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
>
          <button className="influencer-button">
            Talk to an Influencer Expert <span className="arrow">→</span>
          </button></a>
        </div>

        <div className="influencer-image-container">
          <img
            src="public/sub-3.jpg"
            alt="Influencer Marketing"
            className="influencer-image"
          />
        </div>
      </div>

      <div className="influencer-title">
        <span className="first-title">Stop blending in.</span>
        <span className="second-title">
          Collaborate with <span style={{ color: '#7756ff' }}>influence.</span>{' '}
        </span>
      </div>

      <div className="influencer-second">
        <div className="influencer-second-content-left">
          <button>WORK WITH CREATORS</button>
          <h2>Why partner with an influencer marketing agency?</h2>
        </div>
        <div className="influencer-second-content-right">
          <span>
            Cutting through the noise online takes authentic voices and engaged
            communities.
          </span>
          <span>
            Partner with an agency that knows how to build relationships and
            deliver results.
          </span>

          <button>Get Started</button>
        </div>
      </div>

      <div className="influencer-second-boxes">
        <div className="first-influencer-box">
          <div className="logo-boxes">
            <img src="public/Capabilities_FullService_100.webp" alt="" />
          </div>
          <div className="box-contents">
            <p>Boost Brand Awareness</p>
            <p>
              Tap into new audiences through trusted voices and authentic
              content that resonates.
            </p>
          </div>
        </div>
        <div className="first-influencer-box">
          <div className="logo-boxes">
            <img src="public/service-icon.webp" alt="" />
          </div>
          <div className="box-contents">
            <p>Drive Engagement</p>
            <p>
              Spark conversations and build community with impactful campaigns
              that connect.
            </p>
          </div>
        </div>
        <div className="first-influencer-box">
          <div className="logo-boxes">
            <img src="public/Services_AmazonMarketing_100.webp" alt="" />
          </div>
          <div className="box-contents">
            <p>Increase Conversions</p>
            <p>
              Convert followers into loyal customers with trusted
              recommendations and strategic collaborations.
            </p>
          </div>
        </div>
      </div>

      <div className="influencer-third">
        <div className="button">OUR APPROACH</div>
        <div className="influencer-service-contents">
          <h2>How we craft campaigns that deliver impact and inspire trust:</h2>
          <span>
            Our data-driven approach combines creativity with insight. We handle
            sourcing, outreach, contracting, content creation, and reporting—so
            you see clear, measurable results every time.
          </span>
        </div>
      </div>

      <div className="influencer-steps">
        <div className="steps">
          <h2>Discover</h2>
          <p>
            We analyze your goals and audience to find influencers who align
            with your brand’s vision and voice.
          </p>
        </div>
        <div className="steps">
          <h2>Strategize</h2>
          <p>
            Our team designs a custom influencer plan with deliverables,
            timelines, and KPIs that drive ROI.
          </p>
        </div>
        <div className="steps">
          <h2>Execute</h2>
          <p>
            We manage every step—briefing, approvals, content production, and
            publishing—so your campaigns run smoothly.
          </p>
        </div>
        <div className="steps">
          <h2>Optimize</h2>
          <p>
            We track, report, and refine campaigns in real-time, ensuring your
            investment brings continuous results.
          </p>
        </div>
      </div>

    

      <div className="influencer-forth-page">
        <div className="forth-left">
          <button className="tag-button">WHY INFLUENCER</button>
          <h2>
            Our end-to-end influencer solutions drive engagement and growth
          </h2>
          <button className="cta-button">Get a Free Strategy Call →</button>
        </div>

        <div className="forth-right">
          <h3>
            We deliver full-service influencer campaigns, from micro to mega
            influencers, ensuring your brand’s story reaches the right audience
            in the right way.
          </h3>
          <h3>
            Our dedicated team builds long-term relationships and manages every
            detail—sourcing, negotiations, briefs, approvals, publishing, and
            performance reporting.
          </h3>
        </div>
      </div>

      <div className="influencer-fifth-page">
        <div className="influencer-fifth-left">
          <button className="influencer-tag-button">LEARN MORE</button>
          <h2>Learn more about influencer marketing.</h2>
          <p>
            Get answers to common questions about how we make influencer
            partnerships work for your brand.
          </p>
        </div>

        <div className="influencer-fifth-right">
          {faqData.map((faq, index) => (
            <div
              className={`influencer-faq-item ${
                activeIndex === index ? 'active' : ''
              }`}
              key={index}
            >
              <div
                className="influencer-faq-question"
                onClick={() => handleToggle(index)}
              >
                <h4>{faq.question}</h4>
                <span className="arrow">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="influencer-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
            <Footer />
      
    </>
  );
};

export default Influencer;
