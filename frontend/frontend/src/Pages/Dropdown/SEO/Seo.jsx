import './Seo.css';
import React, { useState } from 'react';
import Home from '../../../components/Home/Home'
import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader';
import Footer from '../../../components/Footer/Footer'


const faqData = [
  {
    question: 'What is content marketing?',
    answer:
      'Content marketing is a strategic approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action.',
  },
  {
    question: 'Why work with a content marketing agency?',
    answer:
      'A content marketing agency helps you develop a solid strategy, produce high-quality content, and ensure it reaches your target audience effectively — saving you time while delivering measurable results.',
  },
  {
    question: 'What types of content do you create?',
    answer:
      'We craft blog posts, whitepapers, case studies, videos, social content, email campaigns, and more — all tailored to your audience and brand voice.',
  },
  {
    question: 'How do you measure content performance?',
    answer:
      'We track engagement metrics like traffic, conversions, time on page, and lead generation to ensure your content delivers ROI and supports business goals.',
  },
];

const ContentMarketing = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
     <Home />
          
              <VerticalHeader />
      <div className="content-marketing-section">
        <div className="content-marketing-content">
          <button className="content-marketing-tag">CONTENT SERVICES</button>
          <h1 className="content-marketing-heading">
            Leading Content Marketing Agency
          </h1>
          <p className="content-marketing-description">
            We create compelling, data-driven content strategies that help your
            brand build trust, generate leads, and drive growth through valuable
            storytelling.
          </p>
          <button className="content-marketing-button">
            Talk to a Content Expert <span className="arrow">→</span>
          </button>
        </div>

        <div className="content-marketing-image-container">
          <img
            src="public/Content_Marketing.webp"
            alt="Content Marketing"
            className="content-marketing-image"
          />
        </div>
      </div>

      <div className="content-marketing-title">
        <span className="first-title">Stop selling. Start educating.</span>
        <span className="second-title">
          Grow with <span style={{ color: '#7756ff' }}>valuable content.</span>{' '}
        </span>
      </div>

      <div className="content-marketing-second">
        <div className="content-marketing-second-content-left">
          <button>WORK WITH EXPERTS</button>
          <h2>Why choose a content marketing agency?</h2>
        </div>
        <div className="content-marketing-second-content-right">
          <p>
            <span>
              Building authority and trust online requires consistent, quality
              content that resonates with your audience.
            </span>
            <span>
              Partner with a team that understands strategy, storytelling, and
              measurable results.
            </span>
          </p>

          <button>Start Your Strategy</button>
        </div>
      </div>

      <div className="content-marketing-second-boxes">
        <div className="first-content-marketing-box">
          <div className="logo-boxes">
            <img src="public/Content_Visibility.webp" alt="" />
          </div>
          <div className="box-contents">
            <p>Increase Visibility</p>
            <p>
              Get found by your ideal customers with SEO-optimized content that
              ranks and converts.
            </p>
          </div>
        </div>
        <div className="first-content-marketing-box">
          <div className="logo-boxes">
            <img src="public/Content_Engagement.webp" alt="" />
          </div>
          <div className="box-contents">
            <p>Drive Engagement</p>
            <p>
              Publish relevant, valuable content that keeps your audience
              engaged and coming back.
            </p>
          </div>
        </div>
        <div className="first-content-marketing-box">
          <div className="logo-boxes">
            <img src="public/Content_Leads.webp" alt="" />
          </div>
          <div className="box-contents">
            <p>Generate Leads</p>
            <p>
              Turn visitors into leads with content offers, gated assets, and
              nurturing workflows.
            </p>
          </div>
        </div>
      </div>

      <div className="content-marketing-third">
        <div className="button">OUR PROCESS</div>
        <div className="content-marketing-service-contents">
          <h2>How we build content strategies that convert:</h2>
          <span>
            Our team combines creativity and data. From research and planning to
            creation, publishing, and reporting — we handle it all, so you get
            clear, consistent results.
          </span>
        </div>
      </div>

      <div className="content-marketing-steps">
        <div className="steps">
          <h2>Research</h2>
          <p>
            We analyze your audience, competitors, and keywords to uncover
            content opportunities.
          </p>
        </div>
        <div className="steps">
          <h2>Plan</h2>
          <p>
            We map out a clear content calendar and strategy aligned with your
            business goals.
          </p>
        </div>
        <div className="steps">
          <h2>Create</h2>
          <p>
            Our writers and designers produce compelling content that educates,
            informs, and inspires action.
          </p>
        </div>
        <div className="steps">
          <h2>Measure</h2>
          <p>
            We track performance and refine your strategy based on real data and
            results.
          </p>
        </div>
      </div>

      <div className="content-marketing-forth-page">
        <div className="forth-left">
          <button className="tag-button">WHY CONTENT</button>
          <h2>
            Our full-service content marketing drives traffic, engagement, and
            growth.
          </h2>
          <button className="cta-button">Get a Free Strategy Call →</button>
        </div>

        <div className="forth-right">
          <h3>
            We deliver end-to-end content marketing services — from research and
            planning to publishing and promotion.
          </h3>
          <h3>
            Our dedicated team manages every detail to ensure your content
            attracts, engages, and converts your ideal audience.
          </h3>
        </div>
      </div>

      <div className="content-marketing-fifth-page">
        <div className="content-marketing-fifth-left">
          <button className="content-marketing-tag-button">LEARN MORE</button>
          <h2>Learn more about content marketing.</h2>
          <p>
            Get answers to common questions about how we make content marketing
            work for your business.
          </p>
        </div>

        <div className="content-marketing-fifth-right">
          {faqData.map((faq, index) => (
            <div
              className={`content-marketing-faq-item ${
                activeIndex === index ? 'active' : ''
              }`}
              key={index}
            >
              <div
                className="content-marketing-faq-question"
                onClick={() => handleToggle(index)}
              >
                <h4>{faq.question}</h4>
                <span className="arrow">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="content-marketing-faq-answer">
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

export default ContentMarketing;
