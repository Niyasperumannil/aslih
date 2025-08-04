import React from 'react';
import './WhoAreWe.css';

// You would replace this with your actual image path
const bannerImage = './public/aboutus.jpg';

const PageHeader = () => {
  return (
    <div className="page-header-container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/home">Home</a></li>
          <li className="breadcrumb-item"><a href="/about-us">About us</a></li>
          <li className="breadcrumb-item active" aria-current="page">Who are we?</li>
        </ol>
      </nav>
      <div className="banner-image-wrapper">
        <img src={bannerImage} alt="Woman looking thoughtfully against a purple lit background" />
      </div>
    </div>
  );
};

export default PageHeader;