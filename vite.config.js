// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/Calculator",
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: import.meta.env.MODE === 'production' ? '/Calculator/' : '/',  // Dynamic base for production (GitHub Pages)
});
