export const useDomain = () => {
  if (import.meta.server) {
    const siteUrl = useRequestHeader('x-site-url')
    return siteUrl || 'https://exam60.online'
  }
  if (import.meta.client) {
    return window.location.origin
  }
  return 'https://exam60.online'
}
