// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rusu.me',
  integrations: [
    icon(),
    sitemap({
      // Same language codes as the pages' hreflang links
      i18n: { defaultLocale: 'en', locales: { en: 'en', ro: 'ro' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
