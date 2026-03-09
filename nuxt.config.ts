export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt', '@nuxtjs/seo'],

  site: {
    url: 'https://exam60.online',
    name: 'CS Test Series - Best ICSI Exam Preparation',
    description: "India's No.1 CS Test Series for ICSI exams. Best CS Executive Test Series & CS Professional Test Series designed by AIRs.",
    defaultLocale: 'en',
  },

  sitemap: {
    sources: [],
  },

  robots: {
    sitemap: 'https://exam60.online/sitemap.xml',
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
        { property: 'og:url', content: 'https://exam60.online' },
        { property: 'og:site_name', content: 'CS TEST SERIES' },
        { property: 'og:image', content: 'https://exam60.online/logo.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'CS TEST SERIES' },
        { name: 'twitter:description', content: 'India\'s #1 CS Test Series for ICSI exams. Designed by AIRs with fastest evaluation.' },
        { name: 'twitter:image', content: 'https://exam60.online/logo.png' },
        { name: 'theme-color', content: '#1e3a8a' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://exam60.online' }
      ]
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/cseet-test-series': { prerender: true },
    '/cs-executive-test-series': { prerender: true },
    '/cs-professional-test-series': { prerender: true },
    '/reviews': { prerender: true },
    '/seo-content': { prerender: true },
    '/about': { prerender: true },
    '/cs-test-series': { prerender: true },
    '/best-cs-test-series': { prerender: true },
    '/cstestseries': { prerender: true },
    '/cseettestaeries': { prerender: true },
    '/csexecutivetestseries': { prerender: true },
    '/csprofessionaltestserseries': { prerender: true },
    '/downloads': { prerender: true },
    '/subjects/company-law': { prerender: true },
    '/subjects/tax-laws': { prerender: true },
    '/subjects/corporate-accounting': { prerender: true }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/cseet-test-series', '/cs-executive-test-series', '/cs-professional-test-series', '/reviews', '/seo-content', '/about', '/cs-test-series', '/best-cs-test-series', '/cstestseries', '/cseettestaeries', '/csexecutivetestseries', '/csprofessionaltestserseries', '/downloads', '/subjects/company-law', '/subjects/tax-laws', '/subjects/corporate-accounting', '/sitemap.xml', '/robots.txt']
    },
    compressPublicAssets: true
  },

  experimental: {
    payloadExtraction: true
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
