import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,

  app: {
    head: {
      title: 'Rusu Răzvan - Web Developer & Designer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Web developer and designer portfolio showcasing projects, freelance work, and skills.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#07090E' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://rusu.me/' },
        { property: 'og:title', content: 'Rusu Răzvan - Web Developer & Designer' },
        { property: 'og:description', content: 'Web developer and designer portfolio showcasing projects, freelance work, and skills.' },
        { property: 'og:image', content: 'https://rusu.me/og-image.jpg' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://rusu.me/' },
        { name: 'twitter:title', content: 'Rusu Răzvan - Web Developer & Designer' },
        { name: 'twitter:description', content: 'Web developer and designer portfolio showcasing projects, freelance work, and skills.' },
        { name: 'twitter:image', content: 'https://rusu.me/og-image.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://rusu.me/' }
      ]
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      cssMinify: true,
      minify: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('vue') || id.includes('vue-router')) {
                return;
              }
              return 'vendor';
            }
          }
        }
      }
    }
  },

  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },

  // Performance and SEO modules
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-schema-org',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  // Module configurations
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  // Sitemap configuration
  sitemap: {
    autoLastmod: true,
  },

  // Robots.txt configuration
  robots: {
    disallow: [],
    sitemap: 'https://rusu.me/sitemap.xml',
  },

  // Site configuration for SEO
  site: {
    url: 'https://rusu.me',
    name: 'Rusu Răzvan - Portfolio',
    description: 'Web developer and designer portfolio showcasing projects, freelance work, and skills.',
    defaultLocale: 'en',
  },

  // Nitro server configuration for better performance
  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      routes: ['/']
    },
  },

  // Build optimization
  build: {
    transpile: [],
  },
})