import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Works from './pages/Works';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Works />
  </StrictMode>
);