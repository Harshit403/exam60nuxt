<template>
  <div>
    <section class="subject-hero">
      <div class="container">
        <h1>Company Law Test Series</h1>
        <p>Best CS Executive Company Law Test Series - Chapterwise, Unitwise & Full Syllabus</p>
        <NuxtLink to="/cs-executive-test-series" class="btn btn-white btn-lg">View Plans</NuxtLink>
      </div>
    </section>

    <section class="section subject-content">
      <div class="container">
        <div class="content-card">
          <h2>Company Law Test Series for CS Executive</h2>
          <p>Our Company Law test series is designed specifically for CS Executive Module 1 Paper 2 - Company Law and Practice. The test series covers all topics under the Companies Act, 2013 including incorporation, management, meetings, dividends, accounts, and more.</p>
          
          <h3>Why Choose Our Company Law Test Series?</h3>
          <ul>
            <li>Chapter-wise tests covering each provision of Companies Act, 2013</li>
            <li>Case study based questions as per latest ICSI pattern</li>
            <li>Detailed evaluation within 24-48 working hours</li>
            <li>Model answers for better understanding</li>
            <li>Designed by AIRs who have cleared CS exams with top ranks</li>
          </ul>

          <h3>What Our Test Series Covers</h3>
          <ul>
            <li>Incorporation and Formation of Companies</li>
            <li>Company Management and Administration</li>
            <li>Company Meetings and Resolutions</li>
            <li>Dividends and Profits</li>
            <li>Company Accounts and Audit</li>
            <li>Inspection and Investigation</li>
            <li>Winding Up and Dissolution</li>
            <li>Corporate Governance</li>
          </ul>

          <h3>Our Students' Success</h3>
          <p>Our students have consistently performed well in Company Law paper. Many have secured exemptions and high marks in this paper. The difference between our test series scores and actual ICSI exam scores is often just 4-5 marks, proving the accuracy of our test series.</p>

          <div class="cta-box">
            <h3>Start Your Company Law Preparation Today</h3>
            <p>Join thousands of students who cleared Company Law with our test series. Call +91 8929592998 for more details.</p>
            <NuxtLink to="/cs-executive-test-series" class="btn btn-primary">View Plans</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Company Law Test Series - CS Executive Module 1 | CS Test Series',
  description: 'Best Company Law test series for CS Executive. Chapterwise, unitwise & full syllabus tests. Designed by AIRs with fastest evaluation. Covers Companies Act 2013.',
  ogTitle: 'Company Law Test Series - CS Executive',
  ogDescription: 'Best Company Law test series for CS Executive. Prepare with India\'s #1 CS test series designed by AIRs.',
  ogUrl: 'https://exam60.online/subjects/company-law',
  twitterCard: 'summary_large_image',
  keywords: 'company law test series, cs executive company law test series, company law cs executive, company law test series chapterwise, icsi company law test series, best company law test series'
});

useHead({
  link: [
    { rel: 'canonical', href: 'https://exam60.online/subjects/company-law' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Company Law Test Series - CS Executive",
        "description": "Best Company Law Test Series for CS Executive Module 1. Chapterwise, unitwise & full syllabus tests designed by AIRs with fastest evaluation.",
        "brand": {
          "@type": "Brand",
          "name": "CS Test Series"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "250"
        },
        "offers": {
          "@type": "Offer",
          "price": "2499",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "url": "https://exam60.online/cs-executive-test-series"
        },
        "sku": "CS-EXEC-COMPANYLAW"
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Company Law for CS Executive",
        "description": "Comprehensive Company Law test series covering all topics under Companies Act 2013 for CS Executive preparation.",
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
            "name": "What is included in Company Law Test Series?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Company Law Test Series includes chapter-wise tests, unit tests, and full-length mock tests covering all topics of Companies Act 2013."
            }
          },
          {
            "@type": "Question",
            "name": "Are the test papers designed as per ICSI pattern?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all test papers are designed exactly as per ICSI exam pattern and include case study questions."
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
  background: linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%);
  padding: 2rem;
  border-radius: 0.75rem;
  margin-top: 2rem;
  text-align: center;
}

.cta-box h3 {
  margin-top: 0;
  color: #0f766e;
}

.cta-box p {
  color: #115e59;
  margin-bottom: 1rem;
}
</style>
