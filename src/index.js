import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

import './scss/main.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
