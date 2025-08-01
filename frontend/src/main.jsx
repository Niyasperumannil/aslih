// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// Fontsource for self-hosted Poppins font
import '@fontsource/poppins';         // Default weight 400
import '@fontsource/poppins/600.css';  // Optional: add weight 600
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // includes Popper

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
