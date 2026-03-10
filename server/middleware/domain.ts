import { setHeader } from 'h3'

export default defineEventHandler((event) => {
  const host = getRequestHost(event) || ''
  const domainMap: Record<string, string> = {
    'exam60.online': 'https://exam60.online',
    'www.exam60.online': 'https://exam60.online',
    'ca60.online': 'https://ca60.online',
    'www.ca60.online': 'https://ca60.online',
    'catimes.eu.org': 'https://catimes.eu.org',
    'www.catimes.eu.org': 'https://catimes.eu.org'
  }

  const domain = domainMap[host] || 'https://exam60.online'
  
  setHeader(event, 'x-site-url', domain)
})
