import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { 
    port: 3001,
    hmr: true
  },
  define: {
    '__DEV__': process.env.NODE_ENV === 'development'
  }
});