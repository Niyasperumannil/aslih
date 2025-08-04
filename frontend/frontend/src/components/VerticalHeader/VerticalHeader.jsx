import React from 'react';
import './VerticalHeader.css'; // Link to the CSS file

const VerticalHeader = () => {
  return (
    <div className="vertical-header">
      <div className="header-item">EN</div>
      <div className="header-item globe-icon">🌐</div>
      <div className="header-item search-icon">🔍</div>
    </div>
  );
};

export default VerticalHeader;
