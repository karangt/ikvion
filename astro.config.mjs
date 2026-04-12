// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // When pointing ikvion.com to GitHub Pages, change site to 'https://www.ikvion.com' and base to '/'
  site: 'https://www.ikvion.com',
  base: '/ikvion/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
