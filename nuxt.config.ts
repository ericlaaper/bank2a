// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-11-21',
  devtools: { enabled: false },
  pages: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
    'nuxt-og-image',
    '@nuxtjs/seo',
    '@nuxt/icon',
  ],
  site: {
    url: 'https://bankapp3.netlify.app/',
    name: 'ZUID OOST Bank',
  },
  seo: {
    meta: {
      description: 'This is a demo of Nuxt SEO showcasing all of the modules.',
      themeColor: [
        { content: '#18181b', media: '(prefers-color-scheme: dark)' },
        { content: 'white', media: '(prefers-color-scheme: light)' },
      ],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
});
