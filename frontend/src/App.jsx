// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import AboutUs from './Pages/AboutUs/AboutUs';
import References from './Pages/References/References';
import Careers from './Pages/Careers/Careers';
import ContactUs from './Pages/ContactUS/ContactUs';
import ContentMarketing from './Pages/Dropdown/Content Marketing/Design';
import CreativeStrategy from './Pages/Dropdown/Creative Stragey/Development';
import Cro from './Pages/Dropdown/Cro/Maeketing';
import Email from './Pages/Dropdown/Email/Email';
import Influencer from './Pages/Dropdown/Influencer/Seo2';
import SEO from './Pages/Dropdown/SEO/Seo';
import Starging from './Pages/Dropdown/Starging/Strging';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      {/* Root route: serves when URL is "/aslih/" */}
      <Route path="/" element={<Header />} />

      {/* Defined content routes */}
      <Route path="/about" element={<AboutUs />} />
      <Route path="/references" element={<References />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/ContentMarketing" element={<ContentMarketing />} />
      <Route path="/Cro" element={<Cro />} />
      <Route path="/Email" element={<Email />} />
      <Route path="/Influencer" element={<Influencer />} />
      <Route path="/SEO" element={<SEO />} />
      <Route path="/Starging" element={<Starging />} />
      <Route path="/CreativeStrategy" element={<CreativeStrategy />} />

      {/* Wildcard fallback: handles any unknown paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
