import React from 'react';
import ReactDOM from 'react-dom/client';
import LangSelecta from './LangSelecta';
import reportWebVitals from './reportWebVitals';

const langs = ['ar', 'es', 'it', 'en', 'fr', 'de', 'hi', 'pt', 'ru', 'zh', 'yi', 'ff'];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LangSelecta langs={langs} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
