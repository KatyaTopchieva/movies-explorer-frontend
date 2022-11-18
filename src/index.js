// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App/App.js';
// // import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(

//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,

//   document.getElementById('root')
// );
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App.js';
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);