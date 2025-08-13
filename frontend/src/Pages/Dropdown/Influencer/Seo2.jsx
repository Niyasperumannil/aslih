import './Seo2.css';
import React, { useState } from 'react';
// import Home from '../../';
// import VerticalHeader from '../../components/VerticalHeader/VerticalHeader';
// import Footer from '../../components/Footer/Footer.jsx';
import Home from '../../../components/Home/Home'
import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader';
import Footer from '../../../components/Footer/Footer'

const faqData = [
  {
    question: 'What is creative strategy?',
    answer:
      'A creative strategy defines how your brand will communicate your message to your audience in unique, impactful ways that drive results.',
  },
  {
    question: 'Why work with a creative strategy agency?',
    answer:
      'A creative strategy agency aligns your messaging, visuals, and campaigns to ensure they resonate with your audience and achieve your business goals.',
  },
  {
    question: 'What services do you provide?',
    answer:
      'We develop brand positioning, campaign concepts, content themes, messaging frameworks, and creative directions that guide all your marketing efforts.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'We track key metrics like engagement, reach, conversions, and brand sentiment to ensure your creative strategy delivers measurable impact.',
  },
];

const CreativeStrategy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    {/* <Home />
              <VerticalHeader /> */}
               <Home />
                    
                        <VerticalHeader />
      <div className="creativeStrategy-section">
        <div className="creativeStrategy-content">
          <button className="creativeStrategy-tag">CREATIVE SERVICES</button>
          <h1 className="creativeStrategy-heading">
            Leading Creative Strategy Agency
          </h1>
          <p className="creativeStrategy-description">
            We craft innovative, research-backed strategies that help your brand
            stand out, connect deeply with your audience, and achieve lasting
            impact.
          </p>
          <a
  href="https://wa.me/1234567890?text=Hi%20there!%20I%20would%20love%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
>
  <button class="cro-button">
    Talk To An Expert <span class="arrow">→</span>
  </button>
</a>

        </div>

        <div className="creativeStrategy-image-container">
          <img
            src="/sub-5.jpg"
            alt="Creative Strategy"
            className="creativeStrategy-image"
          />
        </div>
      </div>

      <div className="creativeStrategy-title">
        <span className="first-title">Inspire. Connect. Convert.</span>
        <span className="second-title">
          Drive growth with{' '}
          <span style={{ color: '#7756ff' }}>strategic creativity.</span>{' '}
        </span>
      </div>

      <div className="creativeStrategy-second">
        <div className="creativeStrategy-second-content-left">
          <button>PARTNER WITH EXPERTS</button>
          <h2>Why choose a creative strategy agency?</h2>
        </div>
        <div className="creativeStrategy-second-content-right">
          <span>
            A strong creative strategy makes your brand memorable and your
            message clear across every channel.
          </span>
          <span>
            Work with a team that blends research, insights, and big ideas into
            campaigns that perform.
          </span>

          <button>Start Your Strategy</button>
        </div>
      </div>

      <div className="creativeStrategy-second-boxes">
        <div className="first-creativeStrategy-box">
          <div className="logo-boxes">
            <img src="/service-icon.webp" alt="Brand Identity" />
          </div>
          <div className="box-contents">
            <p>Clarify Identity</p>
            <p>
              Define your unique brand voice, values, and positioning for
              lasting impact.
            </p>
          </div>
        </div>
        <div className="first-creativeStrategy-box">
          <div className="logo-boxes">
            <img
              src="/Capabilities_FullService_100.webp"
              alt="Audience Connection"
            />
          </div>
          <div className="box-contents">
            <p>Connect with Audience</p>
            <p>
              Craft campaigns that speak directly to what your audience cares
              about most.
            </p>
          </div>
        </div>
        <div className="first-creativeStrategy-box">
          <div className="logo-boxes">
            <img src="/Services_AmazonMarketing_100.webp" alt="Impact Campaigns" />
          </div>
          <div className="box-contents">
            <p>Launch Impactful Campaigns</p>
            <p>
              Turn strategy into action with ideas that inspire engagement and
              results.
            </p>
          </div>
        </div>
      </div>

      <div className="creativeStrategy-third">
        <div className="button">OUR APPROACH</div>
        <div className="creativeStrategy-service-contents">
          <h2>How we develop strategies that drive results:</h2>
          <span>
            Our team combines research, insights, and creativity to craft
            strategies that shape perceptions and move people to action.
          </span>
        </div>
      </div>

      <div className="creativeStrategy-steps">
        <div className="steps">
          <h2>Discover</h2>
          <p>
            We dig deep into your brand, audience, and market to uncover key
            insights.
          </p>
        </div>
        <div className="steps">
          <h2>Define</h2>
          <p>
            We establish clear messaging frameworks and campaign themes aligned
            to your goals.
          </p>
        </div>
        <div className="steps">
          <h2>Develop</h2>
          <p>
            Our strategists and creatives build concepts that bring your vision
            to life.
          </p>
        </div>
        <div className="steps">
          <h2>Deliver</h2>
          <p>
            We launch, track, and optimize your strategy for measurable success.
          </p>
        </div>
      </div>

      <div className="creativeStrategy-forth-page">
        <div className="forth-left">
          <button className="tag-button">WHY STRATEGY</button>
          <h2>
            Our creative strategy services boost awareness, engagement, and
            loyalty.
          </h2>
          <button className="cta-button">Get a Free Consultation →</button>
        </div>

        <div className="forth-right">
          <h3>
            From brand discovery to campaign execution, we handle it all to
            position your brand for growth.
          </h3>
          <h3>
            Partner with us to ensure your creative direction is clear,
            consistent, and impactful.
          </h3>
        </div>
      </div>

      <div className="creativeStrategy-fifth-page">
        <div className="creativeStrategy-fifth-left">
          <button className="creativeStrategy-tag-button">LEARN MORE</button>
          <h2>Learn more about our creative approach.</h2>
          <p>
            Find answers to your questions about how we develop and implement
            high-performing creative strategies.
          </p>
        </div>

        <div className="creativeStrategy-fifth-right">
          {faqData.map((faq, index) => (
            <div
              className={`creativeStrategy-faq-item ${
                activeIndex === index ? 'active' : ''
              }`}
              key={index}
            >
              <div
                className="creativeStrategy-faq-question"
                onClick={() => handleToggle(index)}
              >
                <h4>{faq.question}</h4>
                <span className="arrow">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="creativeStrategy-faq-answer">
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

export default CreativeStrategy;
