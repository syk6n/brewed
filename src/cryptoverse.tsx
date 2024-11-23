import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Cryptoverse from './pages/Cryptoverse';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cryptoverse />
  </StrictMode>
);