export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: ['@pinia/nuxt'],
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'Best CS Test Series - CS Executive & Professional | Mission CS',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'India\'s #1 CS Test Series for ICSI exams. Best CS Executive Test Series & CS Professional Test Series designed by AIRs. Fastest evaluation in 24-48 hours. Join 50,000+ students.' },
        { name: 'keywords', content: 'CS test series, cs executive test series, cs professional test series, icsi exams, cseet test series, best cs test series' },
        { name: 'author', content: 'Mission CS Test Series' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Best CS Test Series - CS Executive & Professional | Mission CS' },
        { property: 'og:description', content: 'India\'s #1 CS Test Series for ICSI exams. CS Executive & Professional test papers designed by AIRs.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://missioncstestseries.com' },
        { property: 'og:site_name', content: 'Mission CS Test Series' },
        { property: 'og:image', content: 'https://missioncstestseries.com/logo.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Best CS Test Series - CS Executive & Professional | Mission CS' },
        { name: 'twitter:description', content: 'India\'s #1 CS Test Series for ICSI exams. Designed by AIRs with fastest evaluation.' },
        { name: 'twitter:image', content: 'https://missioncstestseries.com/logo.png' },
        { name: 'theme-color', content: '#1e3a8a' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://missioncstestseries.com' },
        { rel: 'preconnect', href: 'https://missioncstestseries.com' }
      ]
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/cseet-test-series': { prerender: true },
    '/cs-executive-test-series': { prerender: true },
    '/cs-professional-test-series': { prerender: true },
    '/reviews': { prerender: true },
    '/seo-content': { prerender: true }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/cseet-test-series', '/cs-executive-test-series', '/cs-professional-test-series', '/reviews', '/seo-content', '/sitemap.xml', '/robots.txt']
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
