import './Development.css';
import React, { useState } from 'react';
// import Home from '../../components/Home/Home.jsx';
// import VerticalHeader from '../../components/VerticalHeader/VerticalHeader';
// import Footer from '../../components/Footer/Footer.jsx';
import Home from '../../../components/Home/Home'
import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader';
import Footer from '../../../components/Footer/Footer'


const faqData = [
  {
    question: 'What is an email audit?',
    answer:
      'The Power Digital email audit is a crucial step in our methodology. Our team will perform a comprehensive review of all your previous campaigns and automation sequences to gain a deeper understanding of your current email marketing strategy. Specific elements of evaluation include a review of your current design and copy, campaign and automation strategies, email marketing tools, and database health. We will then use these findings to develop a robust strategic plan that will help increase the effectiveness of your email marketing campaigns and grow your business. Whether you’re interested in email marketing for small business or for a large firm, we’ll help you secure new leads with targeted email strategies.',
  },
  {
    question: 'What is an ESP (email service provider)?',
    answer:
      'An email service provider (ESP) is a tool that can help you automate your email campaigns. Some of the most popular ESPs are Klaviyo and Hubspot. Each ESP has its own set of pros and cons so it can be difficult to determine which one is the best fit for you. The Power Digital team understands this and is ready to help walk you through your options. Choosing an ESP is crucial to the success of your email marketing campaigns—don’t leave it to chance.',
  },
  {
    question: 'What email service providers do you work with?',
    answer:
      'We will work with any and all ESPs. However, as part of our email marketing services, we will review your current ESP and make recommendations for changes if we think there might be a better fit available. Some of our favorites include Klaviyo, Attentive, Hubspot, and Braze. Each is designed with a different business use-case in mind whether you’re a start-up, medium-sized business, or enterprise company.',
  },
  {
    question: 'What is an automated email?',
    answer:
      'Once upon a time, you had to send emails manually and, unfortunately, some marketers still live in this world. But now you don’t have to thanks to email automation! An automated email is any message automatically sent from your ESP triggered by a user’s action or inaction on your website. For example, you can send an email to a customer who visits your website, fills their cart and starts the checkout process, but does not complete their purchase. The possibilities are endless!',
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

const Email = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
    <Home />
              <VerticalHeader />
      <div className="Email-Sms-section">
        {/* Content */}
        <div className="Email-Sms-content">
          <button className="Email-Sms-tag">GROWTH MARKETING</button>
          <h1 className="Email-Sms-heading">
            Email marketing services to increase sales from your list.
          </h1>
          <p className="Email-Sms-description">
            Get full-service email marketing strategy and implementation that
            consistently and reliably churns out ROI.
          </p>
          <a
  href="https://wa.me/1234567890?text=Hi%20there!%20I%20would%20love%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
>
  <button class="cro-button">
    Get a Proposal <span class="arrow">→</span>
  </button>
</a>

        </div>

        {/* Image Section */}
        <div className="Email-Sms-image-container">
          <img
            src="/sub-2.jpg"
            alt="CRO"
            className="Email-Sms-image"
          />
        </div>
      </div>
      <div className="Email-Sms-title">
        <span className="Email-Sms-first-title">
          Don’t settle for ordinary.
        </span>
        <span className="Email-Sms-second-title">
          Partner with <span style={{ color: '#7756ff' }}>extraordinary.</span>{' '}
        </span>
      </div>

      <div className="Email-Sms-second">
        <div className="Email-Sms-second-content-left">
          <button>WORK WITH POWER</button>
          <h2>
            Send your customers the only marketing emails they'll want to read
          </h2>
        </div>
        <div className="Email-Sms-second-content-right">
          <span>
            Day in, day out, your customers are flogged with marketing emails
            all clawing for their attention. And where do most of them go? To
            the void of “unreads”. Or the trash. But it doesn’t have to be that
            way.
          </span>
          <span>
            If done right, email marketing can pull in an average ROI of 30-40x.
            But “doing it right” is tough.
          </span>
          <span>
            Luckily, you don’t need to know the difference between an “ugh,
            next” email and an “uh – YES” email. Because we do.
          </span>
          <button>Get in Touch</button>
        </div>
      </div>
      <div className="Email-Sms-second-boxes">
        <div className="Email-Sms-first-box">
          <div className="Email-Sms-logo-boxes">
            <img src="/Services_AmazonMarketing_100.webp" alt="" />
          </div>
          <div className="Email-Sms-box-contents">
            <p>Nurture Leads From Warm to Hot</p>
            <p>
              Turn curiosity into commitment with targeted email and SMS that
              engage leads at every stage, transforming interest into loyal
              customers.
            </p>
          </div>
        </div>
        <div className="Email-Sms-first-box">
          <div className="Email-Sms-logo-boxes">
            <img src="/service-icon.webp" alt="" />
          </div>
          <div className="Email-Sms-box-contents">
            <p>Build Trust and Credibility</p>
            <p>
              Every message strengthens your brand’s credibility. Our expertly
              crafted emails and SMS build trust, making your brand recognizable
              and reliable.
            </p>
          </div>
        </div>
        <div className="Email-Sms-first-box">
          <div className="Email-Sms-logo-boxes">
            <img src="/Capabilities_FullService_100.webp" alt="" />
          </div>
          <div className="Email-Sms-box-contents">
            <p>Churn Out Sales Like a Machine</p>
            <p>
              Email and SMS aren’t just communication tools—they’re powerful
              sales engines. Through strategic automation and targeting, we’ll
              transform your channels into reliable, round-the-clock revenue
              drivers.
            </p>
          </div>
        </div>
      </div>
      <div className="Email-Sms-third">
        <div className="Email-Sms-button-primary">
          <button>Our Email & SMS Services</button>
        </div>
        <div className="Email-Sms-service-contents">
          <h2>
            Turn your lackluster lifecycle marketing channels into your biggest
            money maker.
          </h2>
          <span>
            Our approach to email and SMS marketing starts with a deep dive into
            your current efforts. We identify what’s working and what’s not,
            then build a data-driven strategy that’s tailored to your unique
            needs. From segmentation and automation to creative development and
            performance tracking, every step is designed to maximize your ROI
            and keep your audience engaged.
          </span>
        </div>
      </div>
      <div className="Email-Sms-service-steps">
        <div className="Email-Sms-steps">
          <h2>Analysis</h2>
          <p>
            Before a contract is ever signed, we take a look under the hood with
            an analysis of your email & SMS marketing set ups and strategy. You
            get an in-depth report on what’s working, what’s not, and what
            opportunities we’ve found for serious growth.
          </p>
        </div>
        <div className="Email-Sms-steps">
          <h2>Strategy</h2>
          <p>
            <span>
              Next, we continue monitoring your current email efforts while
              cleaning and segmenting your list.
            </span>
            With this information, we’ll build a custom strategy designed to
            grow your list, increase your revenue, and reach your goals.
          </p>
        </div>
        <div className="Email-Sms-steps">
          <h2>Implementation</h2>
          <p>
            Now, we roll up our sleeves and really get to work. Your email
            campaigns are written, designed, and launched according to plan.
          </p>
        </div>
        <div className="Email-Sms-steps">
          <h2>Results, Rinse, Repeat</h2>
          <p>
            Watch the revenue roll in while we continue tweaking, testing, and
            seeing how high we can push your bottom line. Soon you’ll see why
            people say email marketing has the highest ROI of any channel.
          </p>
        </div>
      </div>

      <div className="Email-Sms-forth-page">
        <div className="Email-Sms-forth-left">
          <button className="Email-Sms-tag-button">WHY POWER</button>
          <h2>
            We Deliver Comprehensive, Data-Backed Solutions to Transform Your
            Email & SMS Marketing
          </h2>
          <button className="Email-Sms-cta-button">
            Get a free marketing audit →
          </button>
        </div>

        <div className="Email-Sms-forth-right">
          <h3>
            Choosing Power Digital means choosing a partner that understands the
            nuances of effective email and SMS marketing. Our team provides a
            thorough analysis of your current strategy, identifying
            opportunities for improvement and implementing solutions that drive
            real results. With our data-driven approach and commitment to
            excellence, we’ll help you unlock the full potential of your
            marketing channels.
          </h3>
          <ul>
            <li>
              <strong style={{ fontSize: '24px' }}>
                Marketing automation recommendations
              </strong>
              <br />
              to ensure your automation sequences are driving the highest impact
              for you.
            </li>
            <li>
              <strong style={{ fontSize: '24px' }}>
                Design, code, and copy analysis
              </strong>
              <br />
              to discover where there might be gaps and opportunities within
              your email marketing campaigns.
            </li>
            <li>
              <strong style={{ fontSize: '24px' }}>
                Broadcast Email Recommendations
              </strong>
              <br />
              to help you tap into extremely effective promotional email
              strategies.
            </li>
            <li>
              <strong style={{ fontSize: '24px' }}>Strategy analysis</strong>
              <br />
              to see how your current strategy is performing and how it could be
              better.
            </li>
            <li>
              <strong style={{ fontSize: '24px' }}>
                Deliverability and database health analysis
              </strong>
              <br />
              to see what data needs cleaning up for better performance down the
              road.
            </li>
          </ul>
        </div>
      </div>

      <div className="Email-Sms-fifth-page">
        <div className="Email-Sms-fifth-left">
          <button className="Email-Sms-tag-button">LEARN MORE</button>
          <h2>Learn more about Email Marketing..</h2>
          <p>
            Want to know more about how our email and SMS strategies can boost
            your bottom line? Explore our services and discover how we can help
            you build stronger customer relationships, increase engagement, and
            drive revenue through expertly crafted campaigns.
          </p>
        </div>

        <div className="Email-Sms-fifth-right">
          {faqData.map((faq, index) => (
            <div
              className={`Email-Sms-faq-item ${
                activeIndex === index ? 'active' : ''
              }`}
              key={index}
            >
              <div
                className="Email-Sms-faq-question"
                onClick={() => handleToggle(index)}
              >
                <h4>{faq.question}</h4>
                <span className="Email-Sms-arrow">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="Email-Sms-faq-answer">
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

export default Email;
