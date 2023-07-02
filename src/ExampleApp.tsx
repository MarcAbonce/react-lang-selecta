import { useRef, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import LangSelecta from '.';

const langs = ['ar', 'es', 'it', 'en', 'fr', 'de', 'hi', 'pt', 'ru', 'zh', 'yi', 'ff'];

const Example = () => {
  const ref = useRef<HTMLSelectElement>(null);
  return <LangSelecta
    ref={ref} 
    langs={langs}
    defaultValue='ff'
    style={{ fontSize: '1.5rem' }}
  />;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Example />
  </StrictMode>
);
