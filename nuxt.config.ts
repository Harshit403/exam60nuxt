export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt', '@nuxtjs/seo'],

  runtimeConfig: {
    public: {
      site: ''
    }
  },

  site: {
    url: 'https://exam60.online',
    name: 'CS Test Series for CS Executive and CS Professional',
    description: 'India\'s leading CS test series for ICSI exams. CS Executive & Professional test series by AIRs. 24-48h evaluation. Join 20,000+ students.',
    defaultLocale: 'en',
  },

  sitemap: {
    sources: [],
  },

  robots: {
    sitemap: '/sitemap.xml',
  },

  linkChecker: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'CS Test Series for CS Executive & CS Professional - ICSI Exams',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'India\'s leading CS test series for ICSI exams. Best CS Executive & Professional test series by AIRs. Fastest evaluation in 24-48 hours. Join 20,000+ students.' },
        { name: 'keywords', content: 'CS test series, cs executive test series, cs professional test series, icsi exams, cseet test series, best cs test series' },
        { name: 'author', content: 'CS Test Series' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'CS Test Series for CS Executive & CS Professional - ICSI Exams' },
        { property: 'og:description', content: 'India\'s leading CS test series for ICSI exams. Best CS Executive & Professional test series by AIRs. Fastest evaluation in 24-48 hours.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'CS Test Series' },
        { property: 'og:url', content: 'https://exam60.online' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'CS Test Series for CS Executive & CS Professional - ICSI Exams' },
        { name: 'twitter:description', content: 'India\'s leading CS test series for ICSI exams. Best CS Executive & Professional test series by AIRs. Fastest evaluation in 24-48 hours.' },
        { name: 'theme-color', content: '#1e3a8a' }
      ],
      link: [
        { rel: 'canonical', href: 'https://exam60.online' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX', async: true, defer: true }
      ]
    }
  },

  routeRules: {
    '/**': { isr: 3600 }
  },

  nitro: {
    compressPublicAssets: true
  },

  experimental: {
    payloadExtraction: false
  },

  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
})
