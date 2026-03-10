export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()
  
  nuxtApp.hook('app:mounted', () => {
    const siteUrl = window.location.origin
    const siteConfig = useSiteConfig()
    
    if (siteConfig.url !== siteUrl) {
      siteConfig.url = siteUrl
    }
  })
})
