import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//! This is SPECIFIC REACT18 Syntax!
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )