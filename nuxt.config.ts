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
    url: '',
    name: 'CS TEST SERIES',
    description: "India's No.1 CS Test Series for ICSI exams. Best CS Executive Test Series & CS Professional Test Series designed by AIRs.",
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
      title: 'CS TEST SERIES',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'India\'s #1 CS Test Series for ICSI exams. Best CS Executive Test Series & CS Professional Test Series designed by AIRs. Fastest evaluation in 24-48 hours. Join 50,000+ students.' },
        { name: 'keywords', content: 'CS test series, cs executive test series, cs professional test series, icsi exams, cseet test series, best cs test series' },
        { name: 'author', content: 'CS TEST SERIES' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'CS TEST SERIES' },
        { property: 'og:description', content: 'India\'s #1 CS Test Series for ICSI exams. CS Executive & Professional test papers designed by AIRs.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'CS TEST SERIES' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'CS TEST SERIES' },
        { name: 'twitter:description', content: 'India\'s #1 CS Test Series for ICSI exams. Designed by AIRs with fastest evaluation.' },
        { name: 'theme-color', content: '#1e3a8a' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
