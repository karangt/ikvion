// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://karangt.github.io',
  base: '/ikvion/',
  vite: {
    plugins: [tailwindcss()]
  }
});
