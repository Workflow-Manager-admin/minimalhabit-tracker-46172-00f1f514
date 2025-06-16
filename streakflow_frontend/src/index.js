import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// If any code tries to use PUBLIC_URL, reference process.env.PUBLIC_URL instead.
// (No usage here, but this edit is to clarify/prepare for correct environment usage)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
