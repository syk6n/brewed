import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MemeCoin from './pages/MemeCoin';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemeCoin />
  </StrictMode>
);