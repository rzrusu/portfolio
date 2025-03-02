import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },

  modules: ['@nuxt/fonts'],
})