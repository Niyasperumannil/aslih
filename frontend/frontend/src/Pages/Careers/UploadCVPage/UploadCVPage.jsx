import React, { useState } from 'react';
import './UploadCVPage.css';

export default function ContactWhatsApp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);

  const handleClick = () => {
    if (!name || !email || !phone || !file) {
      alert('Please fill all fields and attach your CV.');
      return;
    }

    const yourWhatsApp = '9778340818'; // without '+' or spaces
    const message = encodeURIComponent(
      `Hello, my name is ${name}. My email is ${email}, phone is ${phone}. I am interested in digital marketing careers. Please find my CV attached.`
    );
    const url = `https://wa.me/${yourWhatsApp}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="upload-wa-grid">
      {/* Text Card */}
      <div className="upload-text-section form-card">
        <h2>Grow Your Career in Digital Marketing</h2>
        <p>
          Share your Name, Email, Phone, and CV. After you click submit, WhatsApp will open with
          your details pre-filled—just attach your CV manually before sending!
        </p>
        <h3>Why Choose a Career in Digital Marketing?</h3>
        <ul>
          <li><strong>High industry growth:</strong> Digital ad spend is booming globally.</li>
          <li><strong>Strong job outlook:</strong> Marketing roles are expanding fast.</li>
          <li><strong>Freelance earning potential:</strong> Top roles often pay 6 figures.</li>
          <li><strong>Diverse roles:</strong> Choose SEO, content, analytics, social media, and more.</li>
          <li><strong>Remote opportunities:</strong> Many roles allow flexible or remote work.</li>
          <li><strong>Transferable skills:</strong> Get better at creativity, data, and communication.</li>
        </ul>
        <p>Ready to begin? Fill out the form on the right, and let's get started!</p>
      </div>

      {/* Form Card */}
      <div className="upload-input-section form-card">
        <div className="floating">
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder=" "
            required
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="floating">
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder=" "
            required
          />
          <label htmlFor="email">Email Address</label>
        </div>

        <div className="floating">
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder=" "
            required
          />
          <label htmlFor="phone">Phone Number (with country code)</label>
        </div>

        <label className="file-label">Attach CV (PDF / DOC)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={e => setFile(e.target.files[0])}
          required
        />

        <button onClick={handleClick}>Submit via WhatsApp</button>
      </div>
    </div>
  );
}
