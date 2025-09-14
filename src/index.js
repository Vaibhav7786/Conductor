/* eslint-disable */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// No ThemeProvider or CSS import needed
const root = createRoot(document.getElementById('root'));
root.render(<App />);
