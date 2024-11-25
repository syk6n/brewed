import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Artistry from './pages/Artistry';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Artistry />
  </StrictMode>
);