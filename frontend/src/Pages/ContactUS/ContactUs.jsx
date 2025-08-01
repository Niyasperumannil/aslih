import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../../components/Home/Home.jsx';
import VerticalHeader from '../../components/VerticalHeader/VerticalHeader.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const DecorativeGraphic = () => (
 <svg width="97" height="404" viewBox="0 0 97 404" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', left: -40, top: '50%', transform: 'translateY(-50%)', height: '80%', zIndex: 0 }}>
    <path d="M141.5 5.00001C141.5 13.2843 134.784 20 126.5 20H96.5C88.2157 20 81.5 26.7157 81.5 35V65C81.5 73.2843 74.7843 80 66.5 80H36.5C28.2157 80 21.5 86.7157 21.5 95V125C21.5 133.284 14.7843 140 6.5 140H-23.5C-31.7843 140 -38.5 146.716 -38.5 155V185C-38.5 193.284 -45.2157 200 -53.5 200H-83.5C-91.7843 200 -98.5 206.716 -98.5 215V245C-98.5 253.284 -105.216 260 -113.5 260H-143.5C-151.784 260 -158.5 266.716 -158.5 275V305C-158.5 313.284 -165.216 320 -173.5 320H-203.5C-211.7843 320 -218.5 326.716 -218.5 335V365C-218.5 373.284 -225.216 380 -233.5 380H-263.5C-271.784 380 -278.5 386.716 -278.5 395V404"
      stroke="url(#paint0_linear)" strokeWidth="10" />
    <defs>
      <linearGradient id="paint0_linear" x1="141.5" y1="5" x2="-296" y2="404" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A600FF" />
        <stop offset="1" stopColor="#4A00E0" />
      </linearGradient>
    </defs>
  </svg>);

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    helpTopic: '',
    source: '',
    comment: '',
    terms: false
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.terms) {
      alert('Please accept the terms.');
      return;
    }

    const message = `
First Name: ${form.firstName}
Last Name: ${form.lastName}
Email: ${form.email}
Company: ${form.company}
Country: ${form.country}
Phone: ${form.phone}
Requirement: ${form.helpTopic}
How you know us: ${form.source}
Comment: ${form.comment}`;
    const encoded = encodeURIComponent(message);
    const phoneNumber = '9778340818'; // Owner's number with country code
    const waUrl = `https://wa.me/${phoneNumber}?text=${encoded}`;
    window.open(waUrl, '_blank');
  };

  return (
    <>
      <Home />
      <VerticalHeader />
      <div className="container py-5 mt-5">
        <div className="row align-items-start">
          {/* Left decorative column */}
          <div className="col-lg-4 position-relative mb-4">
            <DecorativeGraphic />
            <h1 style={{
              fontSize: '4rem',
              fontWeight: 700,
              lineHeight: 1.1,
              background: 'linear-gradient(90deg, #A600FF, #4A00E0)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              position: 'relative',
              zIndex: 1
            }}>CONTACT US</h1>
            <p style={{ fontSize: '1.25rem', color: '#555', marginTop: '1rem', maxWidth: '300px', zIndex: 1 }}>
              Discover the power of multicultural relevance!
            </p>
          </div>

          {/* Form column */}
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="row gx-3 gy-4">
                {['firstName','lastName','email','company'].map((key, idx) => (
                  <div key={idx} className="col-md-6">
                    <label htmlFor={key} className="form-label">
                      {key.replace(/([A-Z])/g,' $1')} *
                    </label>
                    <input
                      id={key}
                      name={key}
                      type={key === 'email' ? 'email' : 'text'}
                      className="form-control border-0 border-bottom"
                      required
                      value={form[key]}
                      onChange={handleChange}
                    />
                  </div>
                ))}

                <div className="col-md-6">
                  <label htmlFor="country" className="form-label">Country *</label>
                  <select id="country" name="country" className="form-select border-0 border-bottom" required value={form.country} onChange={handleChange}>
                    <option value="">Select country</option>
                    <option value="india">🇮🇳 India</option>
                    <option value="usa">🇺🇸 United States</option>
                    <option value="uk">🇬🇧 United Kingdom</option>
                    <option value="france">🇫🇷 France</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">Phone number</label>
                  <input id="phone" name="phone" type="tel" className="form-control border-0 border-bottom" value={form.phone} onChange={handleChange} />
                </div>

                <div className="col-md-6">
                  <label htmlFor="helpTopic" className="form-label">How can we help you? *</label>
                  <select id="helpTopic" name="helpTopic" className="form-select border-0 border-bottom" required value={form.helpTopic} onChange={handleChange}>
                    <option value="">Choose topic</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="source" className="form-label">How do you know about us? *</label>
                  <select id="source" name="source" className="form-select border-0 border-bottom" required value={form.source} onChange={handleChange}>
                    <option value="">Choose option</option>
                    <option value="search">Search Engine</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="comment" className="form-label">Commentaire (optionnel)</label>
                  <textarea id="comment" name="comment" className="form-control border-0 border-bottom" rows="4" value={form.comment} onChange={handleChange} />
                </div>

                <div className="col-12 form-check">
                  <input id="terms" name="terms" type="checkbox" className="form-check-input" checked={form.terms} onChange={handleChange} />
                  <label htmlFor="terms" className="form-check-label">
                    I have read and accept that the data provided may be used for commercial purposes.
                  </label>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn text-white px-4 py-2" style={{
                    background: 'linear-gradient(90deg, #A600FF, #4A00E0)',
                    fontWeight: 600,
                    transition: 'transform 0.2s, boxShadow 0.2s'
                  }}
                    onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'; }}
                    onMouseOut={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                  >
                    Submit via WhatsApp
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
