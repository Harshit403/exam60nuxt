<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CS Test Series",
        "url": "https://exam60.online",
        "logo": "https://exam60.online/logo.png",
        "description": "India's #1 CS test series for ICSI exams. Best CS Executive & Professional test series by AIRs with fastest evaluation.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8929592998",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://facebook.com/mission.cs",
          "https://instagram.com/missiom.cs"
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "CS Test Series",
        "image": "https://exam60.online/logo.png",
        "url": "https://exam60.online",
        "telephone": "+91-8929592998",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "India"
        },
        "openingHours": "Mo-Fr 09:00-18:00",
        "priceRange": "₹₹₹"
      })
    },
      {
        type: 'text/javascript',
        innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXXXXX');"
      }
  ]
})
</script>
