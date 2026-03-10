export const useDomain = () => {
  const config = useRuntimeConfig()
  return config.public.site as string || 'https://exam60.online'
}
