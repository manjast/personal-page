import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://stefanmanja.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', { path: 'sr', codes: ['sr-Cyrl', 'sr-Cyrl-RS'] }],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/sent/'),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          sr: 'sr-Cyrl',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
