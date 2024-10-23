import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from 'react-dom/client' for React 18
import App from './App'; // Import the main App component
import './index.css'; // Import your global CSS styles

// Create a root to render your application
const root = createRoot(document.getElementById('root')); 

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



