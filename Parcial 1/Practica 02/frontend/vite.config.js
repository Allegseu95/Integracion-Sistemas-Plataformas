import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
      exclude: ['node_modules/**'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
