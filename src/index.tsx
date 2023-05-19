import React from 'react';
import ReactDOM from 'react-dom/client';
import LangSelecta from './LangSelecta';
import reportWebVitals from './reportWebVitals';

const langs = [
  { code: 'ar', flag: '🇹🇳', name: 'اَلْعَرَبِيَّةُ' },
  { code: 'es', flag: '🇵🇪', name: 'Castellano' },
  { code: 'it', flag: '🇨🇭', name: 'Italiano' },
  { code: 'en', flag: '🇨🇦', name: 'English' },
  { code: 'fr', flag: '🇨🇦', name: 'Français' },
  { code: 'de', flag: '🇦🇹', name: 'Deutsch' },
  { code: 'hi', flag: '🇮🇳', name: 'हिन्दी' },
  { code: 'id', flag: '🇮🇩', name: 'Bahasa Indonesia' },
  { code: 'ja', flag: '🇯🇵', name: '日本語' },
  { code: 'pt', flag: '🇹🇱', name: 'Português' },
  { code: 'ru', flag: '🇧🇾', name: 'Русский' },
  { code: 'th', flag: '🇹🇭', name: 'ภาษาไทย' },
  { code: 'tr', flag: '🇹🇷', name: 'Türkçe' },
  { code: 'zh', flag: '🇸🇬', name: '中文' },
];

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
