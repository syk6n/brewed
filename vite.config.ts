import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        works: './works/index.html',
        cryptoverse: './projects/cryptoverse/index.html',
        artistry: './projects/artistry/index.html',
        wanderlust: './projects/wanderlust/index.html'
      }
    }
  }
});