import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import MissionSection from '../MissionSection/MissionSection';
import Styles from '../Styles/Styles'
import OurClients from '../OurClients/OurClients'
import NewsSection from '../NewsSection/NewsSection';
import StatsSection from '../StatsSection/StatsSection';
import ClientLogos from '../ClientLogos/ClientLogos';
import ReadySection from '../ReadySection/ReadySection';
import Footer from '../Footer/Footer';
import VerticalHeader from '../VerticalHeader/VerticalHeader';
export default function Header() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const didIntro = useRef(false);
  const [introClass, setIntroClass] = useState('drop-intro');

  const navItems = [
    { label: 'ABOUT US', link: 'about' },
    { label: 'SERVICES', hasDropdown: true },
    { label: 'REFERENCES', link: 'references' },
    { label: 'CAREERS', link: 'careers' },
    { label: 'CONTACT US', link: 'contactus' },
  ];

  const serviceItems = [
    { label: 'ContentMarketing', link: 'ContentMarketing' },
    { label: 'Cro', link: 'Cro' },
    { label: 'Email', link: 'Email' },
    { label: 'Influencer', link: 'Influencer' },
    { label: 'SEO', link: 'SEO' },
    { label: 'Starging', link: 'Starging' },
    { label: 'CreativeStrategy', link: 'CreativeStrategy' },
   



  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (didIntro.current) setIntroClass('');
    didIntro.current = true;
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="lds-roller">
          {Array.from({ length: 8 }).map((_, i) => <div key={i} />)}
        </div>
      </div>
    );
  }

  return (
    <>
      <header className={`dw-header app-header animated-header ${introClass}`}>
       <div className="dw-container"> 
  <a href="/">
    <img src="dexo.jpg" alt="Logo" className="dw-logo" />
  </a>

  <nav className={`dw-nav ${menuOpen ? 'open' : ''}`}>
    {navItems.map((item) =>
      item.hasDropdown ? (
        <div key="services" className="dropdown-wrapper">
          <button className="btn btn- fw-medium text-dark px-3 py-2 d-flex align-items-center gap-1">
            SERVICES
            <svg
              className="dw-caret"
              xmlns="http://www.w3.org/2000/sv"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 11.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
              />
            </svg>
          </button>

          <div className="dropdown-menu">
            {serviceItems.map((svc) => (
              <a href={svc.link} className="dropdown-item" key={svc.label}>
                {/* <img src="/ad." alt={svc.label} /> */}
                <span>{svc.label}</span>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <a key={item.label} href={item.link} className="dw-nav-item">
          {item.label} <span className="dw-caret" />
        </a>
      )
    )}
  </nav>

  <button
    className="dw-menu-toggle"
    onClick={() => setMenuOpen((prev) => !prev)}
    aria-label="Toggle menu"
  >
    ☰
  </button>
</div>

      </header>
       <VerticalHeader />
      <header className="dw-hero">
        <div className="dw-video-wrapper">
          <video className="dw-video" src="/header.mp4" autoPlay muted loop playsInline />
        </div>

        <div className="dw-hero-content">
          <h1>WE CONNECT BRANDS<br />TO THE WORLD</h1>
          <p className="subtext">Powered by Human & AI</p>
        </div>
      </header>

      <a
        href="https://wa.me/9072257276"
        className="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <MissionSection />
      <Styles />
            <ClientLogos />

      <OurClients />
      <NewsSection />
      <StatsSection />
      <ReadySection />
      <Footer />
    </>
  );
}
