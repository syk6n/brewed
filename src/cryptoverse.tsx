import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CryptoVerse from './pages/CryptoVerse';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CryptoVerse />
  </StrictMode>
);