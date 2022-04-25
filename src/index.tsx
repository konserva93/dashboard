import './index.css';
import App from './App';
import FontStyles from './fontStyles';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>,
);
