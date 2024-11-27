import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Wanderlust from './pages/Wanderlust';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wanderlust />
  </StrictMode>
);