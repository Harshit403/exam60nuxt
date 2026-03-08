<template>
  <div>
    <section class="subject-hero">
      <div class="container">
        <h1>Tax Laws Test Series</h1>
        <p>Best CS Executive Tax Laws Test Series - Chapterwise, Unitwise & Full Syllabus</p>
        <NuxtLink to="/cs-executive-test-series" class="btn btn-white btn-lg">View Plans</NuxtLink>
      </div>
    </section>

    <section class="section subject-content">
      <div class="container">
        <div class="content-card">
          <h2>Tax Laws Test Series for CS Executive</h2>
          <p>Our Tax Laws test series is designed specifically for CS Executive Module 2 Paper 7 - Tax Laws and Practice. The test series covers Income Tax, GST, and other indirect taxes as per the latest amendments.</p>
          
          <h3>Why Choose Our Tax Laws Test Series?</h3>
          <ul>
            <li>Comprehensive coverage of Income Tax Act and GST</li>
            <li>Case study based questions as per latest ICSI pattern</li>
            <li>Detailed evaluation within 24-48 working hours</li>
            <li>Model answers for better understanding</li>
            <li>Designed by AIRs who have cleared CS exams with top ranks</li>
          </ul>

          <h3>What Our Test Series Covers</h3>
          <ul>
            <li>Income Tax Act - Basic Concepts</li>
            <li>Residential Status and Scope of Income</li>
            <li>Heads of Income</li>
            <li>Income Tax Computation</li>
            <li>Goods and Services Tax (GST)</li>
            <li>GST Input Tax Credit</li>
            <li>GST Returns and Payment</li>
            <li>Tax Planning and Management</li>
          </ul>

          <h3>Our Students' Success</h3>
          <p>Our students have consistently performed well in Tax Laws paper. Many have secured exemptions and high marks. The difference between our test series scores and actual ICSI exam scores is often just 4-5 marks.</p>

          <div class="cta-box">
            <h3>Start Your Tax Laws Preparation Today</h3>
            <p>Join thousands of students who cleared Tax Laws with our test series. Call +91 8929592998 for more details.</p>
            <NuxtLink to="/cs-executive-test-series" class="btn btn-primary">View Plans</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Tax Laws Test Series - CS Executive Module 2 | CS Test Series',
  description: 'Best Tax Laws test series for CS Executive. Chapterwise, unitwise & full syllabus tests. Covers Income Tax & GST. Designed by AIRs with fastest evaluation.',
  ogTitle: 'Tax Laws Test Series - CS Executive',
  ogDescription: 'Best Tax Laws test series for CS Executive. Prepare with India\'s #1 CS test series designed by AIRs.',
  ogUrl: 'https://cstestseries.in/subjects/tax-laws',
  twitterCard: 'summary_large_image',
  keywords: 'tax laws test series, cs executive tax laws test series, income tax test series, gst test series cs, icsi tax laws test series, best tax laws test series'
});

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Tax Laws Test Series - CS Executive",
        "description": "Best Tax Laws Test Series for CS Executive Module 2. Chapterwise, unitwise & full syllabus tests covering Income Tax and GST.",
        "brand": {
          "@type": "Brand",
          "name": "CS Test Series"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "200"
        },
        "offers": {
          "@type": "Offer",
          "price": "2499",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "url": "https://cstestseries.in/cs-executive-test-series"
        },
        "sku": "CS-EXEC-TAXLAWS"
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Tax Laws for CS Executive",
        "description": "Comprehensive Tax Laws test series covering Income Tax, GST, and other indirect taxes for CS Executive preparation.",
        "provider": {
          "@type": "Organization",
          "name": "CS Test Series"
        },
        "offers": {
          "@type": "Offer",
          "price": "2499",
          "priceCurrency": "INR"
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What topics are covered in Tax Laws Test Series?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Tax Laws Test Series covers Income Tax, Goods and Services Tax (GST), and other indirect taxes as per ICSI syllabus."
            }
          },
          {
            "@type": "Question",
            "name": "Are GST and Income Tax both covered?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we cover both Direct Tax (Income Tax) and Indirect Tax (GST) in detail with separate test papers."
            }
          },
          {
            "@type": "Question",
            "name": "How long does evaluation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide the fastest evaluation in 24-48 working hours."
            }
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.subject-hero {
  background: linear-gradient(135deg, #134e4a 0%, #115e59 50%, #0d9488 100%);
  padding: 8rem 0 4rem;
  color: white;
  text-align: center;
}

.subject-hero h1 {
  font-size: 2.75rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.subject-hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.subject-content {
  background: #f8fafc;
}

.content-card {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.content-card h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #0f172a;
}

.content-card h3 {
  font-size: 1.35rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #0f172a;
}

.content-card p {
  color: #475569;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.content-card ul {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.content-card li {
  color: #475569;
  line-height: 1.8;
  margin-bottom: 0.5rem;
}

.cta-box {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 2rem;
  border-radius: 0.75rem;
  margin-top: 2rem;
  text-align: center;
}

.cta-box h3 {
  margin-top: 0;
  color: #92400e;
}

.cta-box p {
  color: #b45309;
  margin-bottom: 1rem;
}
</style>
