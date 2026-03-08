<template>
  <div>
    <section class="subject-hero">
      <div class="container">
        <h1>Corporate Accounting Test Series</h1>
        <p>Best CS Executive Corporate Accounting Test Series - Chapterwise, Unitwise & Full Syllabus</p>
        <NuxtLink to="/cs-executive-test-series" class="btn btn-white btn-lg">View Plans</NuxtLink>
      </div>
    </section>

    <section class="section subject-content">
      <div class="container">
        <div class="content-card">
          <h2>Corporate Accounting Test Series for CS Executive</h2>
          <p>Our Corporate Accounting test series is designed specifically for CS Executive Module 1 Paper 4 - Corporate Accounting and Financial Management. The test series covers accounting standards, financial statements, ratio analysis, and financial management concepts.</p>
          
          <h3>Why Choose Our Corporate Accounting Test Series?</h3>
          <ul>
            <li>Comprehensive coverage of Accounting Standards</li>
            <li>Numerical problems with step-by-step solutions</li>
            <li>Case study based questions as per latest ICSI pattern</li>
            <li>Detailed evaluation within 24-48 working hours</li>
            <li>Designed by AIRs who have cleared CS exams with top ranks</li>
          </ul>

          <h3>What Our Test Series Covers</h3>
          <ul>
            <li>Accounting Standards (AS 1 to AS 29)</li>
            <li>Financial Statements Preparation</li>
            <li>Company Final Accounts</li>
            <li>Cash Flow and Fund Flow Analysis</li>
            <li>Ratio Analysis</li>
            <li>Working Capital Management</li>
            <li>Capital Budgeting</li>
            <li>Cost of Capital and Leverage</li>
          </ul>

          <h3>Our Students' Success</h3>
          <p>Our students have consistently performed well in Corporate Accounting paper. Many have secured exemptions and high marks. The difference between our test series scores and actual ICSI exam scores is often just 4-5 marks.</p>

          <div class="cta-box">
            <h3>Start Your Corporate Accounting Preparation Today</h3>
            <p>Join thousands of students who cleared Corporate Accounting with our test series. Call +91 8929592998 for more details.</p>
            <NuxtLink to="/cs-executive-test-series" class="btn btn-primary">View Plans</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Corporate Accounting Test Series - CS Executive Module 1 | CS Test Series',
  description: 'Best Corporate Accounting test series for CS Executive. Chapterwise, unitwise & full syllabus tests. Covers AS, Financial Statements, Ratio Analysis. Designed by AIRs.',
  ogTitle: 'Corporate Accounting Test Series - CS Executive',
  ogDescription: 'Best Corporate Accounting test series for CS Executive. Prepare with India\'s #1 CS test series designed by AIRs.',
  ogUrl: 'https://cstestseries.in/subjects/corporate-accounting',
  twitterCard: 'summary_large_image',
  keywords: 'corporate accounting test series, cs executive corporate accounting test series, accounting standards test series, financial management test series cs, icsi corporate accounting test series'
});

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Corporate Accounting Test Series - CS Executive",
        "description": "Best Corporate Accounting Test Series for CS Executive Module 1. Chapterwise, unitwise & full syllabus tests covering Accounting Standards and Financial Statements.",
        "brand": {
          "@type": "Brand",
          "name": "CS Test Series"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "180"
        },
        "offers": {
          "@type": "Offer",
          "price": "2499",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "url": "https://cstestseries.in/cs-executive-test-series"
        },
        "sku": "CS-EXEC-CORPACC"
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Corporate Accounting for CS Executive",
        "description": "Comprehensive Corporate Accounting test series covering Accounting Standards, Financial Statements, and Ratio Analysis for CS Executive preparation.",
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
            "name": "What topics are covered in Corporate Accounting Test Series?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Corporate Accounting Test Series covers Accounting Standards (AS), Indian Accounting Standards (Ind AS), Financial Statements, Ratio Analysis, and Cash Flow Analysis."
            }
          },
          {
            "@type": "Question",
            "name": "Are practical numerical problems included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we include numerous practical numerical problems and case studies to help you practice accounting concepts thoroughly."
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
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
  padding: 2rem;
  border-radius: 0.75rem;
  margin-top: 2rem;
  text-align: center;
}

.cta-box h3 {
  margin-top: 0;
  color: #4338ca;
}

.cta-box p {
  color: #3730a3;
  margin-bottom: 1rem;
}
</style>
