import './Strging.css';
import React, { useState } from 'react';
import Home from '../../../components/Home/Home'
import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader';
import Footer from '../../../components/Footer/Footer'


const faqData = [
  {
    question: 'What’s an SEO audit?',
    answer:
      'An SEO audit is a crucial step in the Power Digital methodology. Our team will conduct a comprehensive review of your entire SEO setup both on and off-site to develop a deep understanding of your current strategy. Specific elements of evaluation include current metadata, backlinks, content, technical setup, and keywords. We will then use these findings to develop a robust strategic plan that will help increase your ranking on search engines and start driving more traffic directly to your website.',
  },
  {
    question: 'How long does SEO take?',
    answer:
      'Unfortunately, SEO does not usually show an immediate impact. It takes time for search engines to update your site’s relevancy and begin ranking it higher. Typically, you should begin to see results about 3 to 6 months after updates are made. That seems like a long time, but throughout that time period, you will notice increasingly positive changes in your metrics.',
  },
  {
    question: 'What are SEO keywords?',
    answer:
      'Simply put, SEO keywords are words or phrases that describe the content of your site and what it is about. Search engines, like Google, then use that information to determine if the content is relevant to a particular search query and how the page should rank in those searches. In essence, keywords are what gives a web page its search ranking. And as a result, they are what help people find your website.',
  },
  {
    question: 'What are SEO backlinks?',
    answer:
      'A backlink is also known as an inbound or incoming link and is created when another external website links to your site. Such links are particularly valuable for SEO because it helps to build a positive reputation for your website and its content. This is because the backlink acts as a signal to search engines that others find the content of your website to be valuable and credible. When many different sites link back to the same webpage or website, it allows search engines to infer that the content is worth linking to, and therefore also worth ranking higher on a search results page.',
  },
];

const Seo = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
     <Home />
          
              <VerticalHeader />
      <div className="seo-section">
        {/* Content */}
        <div className="seo-content">
          <button className="seo-tag">SEO SERVICES</button>
          <h1 className="seo-heading">Award-Winning SEO Marketing Agency</h1>
          <p className="seo-description">
            We’ve helped leading and emerging brands scale their traffic and
            revenue organically for over a decade with our experience in seo
            consulting.
          </p>
          <button className="seo-button">
            Talk to an SEO Expert <span className="arrow">→</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="seo-image-container">
          <img src="/seo.webp" alt="SEO" className="seo-image" />
        </div>
      </div>

      <div className="seo-title">
        <span className="first-title">Don’t settle for ordinary.</span>
        <span className="second-title">
          Partner with <span style={{ color: '#7756ff' }}>extraordinary.</span>{' '}
        </span>
      </div>

      <div className="seo-second">
        <div className="seo-second-content-left">
          <button>WORK WITH POWER</button>
          <h2>What is the benefit of hiring an SEO agency?</h2>
        </div>
        <div className="seo-second-content-right">
          <span>
            Standing out online is no easy feat. Climbing in SEO keyword
            rankings in a highly competitive space and changing algorithms
            require a tailored SEO strategy that is unique to your goals and
            industry.
          </span>
          <span>
            In order to compete, you need a proven partner that knows how to
            drive results.
          </span>

          <button>Get in Touch</button>
        </div>
      </div>

      <div className="seo-second-boxes">
        <div className="first-seo-box">
          <div className="logo-boxes">
            <img src="/Services_SEO_100.webp" alt="" />
          </div>
          <div className="box-contents">
            <p>Amplify brand visibility</p>
            <p>
              Establish brand visibility and trust in the market via increased
              organic keyword rankings in the search results
            </p>
          </div>
        </div>
        <div className="first-seo-box">
          <div className="logo-boxes">
            <img src="/service-icon.webp" alt="" />
          </div>
          <div className="box-contents">
            <p>Optimize marketing and design spend</p>
            <p>
              Reduce acquisition costs through full-funnel SEO optimizations
            </p>
          </div>
        </div>
        <div className="first-seo-box">
          <div className="logo-boxes">
            <img src="/Capabilities_FullService_100.webp" alt="" />
          </div>
          <div className="box-contents">
            <p>Grow your audience</p>
            <p>
              Attract new potential customers to your website by increasing
              website traffic and developing relevant quality content they are
              actually searching for (+reading)
            </p>
          </div>
        </div>
      </div>

      <div className="third-seo">
        <div className="button">OUR APPROACH</div>
        <div className="seo-service-contents">
          <h2>
            Here’s how we position your brand for maximum visibility and impact:
          </h2>
          <span>
            Navigating the competitive digital landscape requires precision and
            insight. We leverage cutting-edge technology and machine learning to
            uncover growth opportunities, pinpoint critical gaps, and craft
            strategies that drive measurable results. Our proprietary tools
            continuously learn and adapt, ensuring your SEO efforts stay ahead
            of evolving trends and algorithms.
          </span>
        </div>
      </div>

      <div className="service-steps">
        <div className="steps">
          <h2>Analysis</h2>
          <p>
            Before a contract is ever signed, we dig into your business with a
            detailed nova appraisal. Our SEO agency crafts an in-depth report on
            what’s working in your SEO approach, what’s not, and what
            opportunities we’ve found for profitable revenue growth.
          </p>
        </div>
        <div className="steps">
          <h2>Strategy</h2>
          <p>
            Once the assessment is done, we’ll devise an attack plan based on
            the evaluation of the website structure and a comparative analysis
            of the industry. Our marketing agency’s SEO experience and knowledge
            within your area of specialization form the foundation for this
            approach.
          </p>
        </div>
        <div className="steps">
          <h2>Implementation</h2>
          <p>
            Next, our SEO experts dive into the granular aspects that create a
            solid search engine optimization plan. This requires examining your
            requirements, conducting keyword research and analysis, formulating
            content/optimization, technical adjustments, link building and more.
          </p>
        </div>
        <div className="steps">
          <h2>Results, Rinse, Repeat</h2>
          <p>
            We don’t believe in rinse and repeat. Instead, we continuously
            analyze outcomes, test new strategies, and refine efforts to unlock
            ongoing growth. Watch as qualified traffic climbs and your revenue
            potential expands.
          </p>
        </div>
      </div>

     

      <div className="forth-page-seo">
        <div className="forth-left">
          <button className="tag-button">WHY POWER</button>
          <h2>
            Our holistic SEO strategy goes beyond rankings to drive impactful
            business results
          </h2>
          <button className="cta-button">Get a free Marketing audit →</button>
        </div>

        <div className="forth-right">
          <h3>
            SEO at Power Digital begins with an in-depth audit that examines
            every element of your search engine performance—metadata, backlinks,
            technical SEO, content quality, and more.
          </h3>
          <h3>
            What sets us apart is our dedicated, highly specialized team of
            experts – from Technical SEO experts to on-page and off-page leads.
            This ensures that every aspect of your SEO foundation and Organic
            Search strategy is guided by experts and has been specially tailored
            for your business. We integrate with your broader marketing
            efforts—content, CRO, PR, and paid media marketing—to create a
            comprehensive growth engine that maximizes visibility and revenue.
          </h3>
        </div>
      </div>

      <div className="seo-fifth-page">
        <div className="seo-fifth-left">
          <button className="seo-tag-button">LEARN MORE</button>
          <h2>Learn more about SEO.</h2>
          <p>A quick intro to a complex, ever-changing topic..</p>
        </div>

        <div className="seo-fifth-right">
          {faqData.map((faq, index) => (
            <div
              className={`seo-faq-item ${
                activeIndex === index ? 'active' : ''
              }`}
              key={index}
            >
              <div
                className="seo-faq-question"
                onClick={() => handleToggle(index)}
              >
                <h4>{faq.question}</h4>
                <span className="arrow">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="seo-faq-answer">
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

export default Seo;