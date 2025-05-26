// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import markdoc from '@astrojs/markdoc';

import sitemap from '@astrojs/sitemap';



import tailwindcss from '@tailwindcss/vite';



// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});