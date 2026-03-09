<template>
  <div>
    <!-- Promo Banner -->
    <div class="promo-banner">
      <div class="container">
        <div class="promo-content">
          <span>Limited Time: Use code <strong>MISSIONCS</strong> for exclusive discount on CSEET Test Series!</span>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            Trusted by 20,000+ CS Students Community
          </div>
          <h1>Best <span class="highlight">CSEET Test Series</span> for ICSI Exam</h1>
          <p class="hero-subtitle">
            Prepare with India's #1 CSEET Test Series designed by All India Rankers. 
            Comprehensive mock tests with fastest evaluation in 24-48 hours.
          </p>
          <div class="hero-actions">
            <a href="#plans" class="btn btn-primary btn-lg">View Plans</a>
            <a href="#features" class="btn btn-white btn-lg">Why Choose Us</a>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-value">20,000+</span>
              <span class="stat-label">Students</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">150+</span>
              <span class="stat-label">Mock Tests</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">24-48h</span>
              <span class="stat-label">Evaluation</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">99%</span>
              <span class="stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plans Section -->
    <section class="section plans-section" id="plans">
      <div class="container">
        <div class="section-header">
          <h2>CSEET Test Series Plans</h2>
          <p>Choose the perfect plan for your CSEET preparation</p>
        </div>

        <div class="plans-tabs">
          <button v-for="plan in plans" :key="plan.id" class="plan-tab" :class="{ active: activePlan === plan.id }" @click="activePlan = plan.id">
            {{ plan.name }}
          </button>
        </div>

        <div class="plan-content" v-for="plan in plans" :key="plan.id + '-content'" v-show="activePlan === plan.id">
          <div class="plan-header">
            <h3>{{ plan.name }} Plan</h3>
            <p>{{ plan.description }}</p>
          </div>
          
          <div class="plan-features">
            <h4>What's Included:</h4>
            <ul>
              <li v-for="(feature, i) in plan.features" :key="i">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="pricing-box">
            <div class="pricing-item">
              <span class="price">₹{{ plan.price }}</span>
              <span class="price-label">One Time Payment</span>
            </div>
          </div>

          <div class="plan-cta">
            <a href="https://missioncstestseries.com/login" class="btn btn-primary btn-lg">Enroll Now</a>
            <a href="https://missioncstestseries.com/cstestseriesschedule" class="btn btn-outline" target="_blank">Download Schedule</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features-section" id="features">
      <div class="container">
        <div class="section-header">
          <h2>Why Our CSEET Test Series is #1?</h2>
          <p>Complete preparation for CSEET exam</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3>Chapterwise Tests</h3>
            <p>Complete chapter coverage with test for each topic in CSEET syllabus.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3>Fastest Evaluation</h3>
            <p>Get your answer sheets evaluated within 24-48 working hours.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Expert Faculty</h3>
            <p>Learn from experienced faculty and successful CSEET qualifiers.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3>Video Solutions</h3>
            <p>Detailed video explanations for better understanding of concepts.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Subject Cards Section -->
    <section class="section subjects-section">
      <div class="container">
        <div class="section-header">
          <h2>CSEET Test Series - All 4 Papers Covered</h2>
          <p>Comprehensive test series for CSEET exam</p>
        </div>
        
        <div class="subjects-grid">
          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>
            </div>
            <h3>Paper 1: Business Communication</h3>
            <p>English grammar, vocabulary, letter writing, essay writing, precis</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>

          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3>Paper 2: Economics and Statistics</h3>
            <p>Microeconomics, macroeconomics, statistical methods, data interpretation</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>

          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h3>Paper 3: Corporate Laws</h3>
            <p>Companies Act 2013, FEMA, SEBI regulations, corporate governance</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>

          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" x2="23" y1="10" y2="10"/></svg>
            </div>
            <h3>Paper 4: Quantitative Aptitude</h3>
            <p>Arithmetic, algebra, geometry, data interpretation, number series</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO Content Section -->
    <section class="section seo-section">
      <div class="container">
        <div class="section-header">
          <h2>Best CSEET Test Series - Complete Guide</h2>
          <p>Everything you need to know about CSEET exam preparation</p>
        </div>

        <div class="seo-grid">
          <div class="seo-card">
            <h3>Why CSEET Test Series is Essential for Your CS Journey?</h3>
            <p>The Company Secretary Executive Entrance Test (CSEET) is the gateway to the prestigious CS Executive Programme conducted by ICSI. Our comprehensive CSEET Test Series is designed to help you clear this entrance exam in your very first attempt.</p>
            <p>CSEET is conducted twice a year and tests students on four crucial papers: Business Communication, Economics and Statistics, Corporate Laws, and Quantitative Aptitude. Each paper carries 100 marks, and students need to secure minimum qualifying marks to pass.</p>
            <p>Our CSEET Test Series includes Chapterwise Test Series, Unitwise Test Series, and Full Syllabus Test Series. Each test is crafted to exactly mimic the real ICSI exam environment. The difference between scores in our test series and actual CSEET results is often just 4-5 marks, proving our test series accurately predicts your performance.</p>
          </div>

          <div class="seo-card">
            <h3>CSEET Paper 1 - Business Communication</h3>
            <p>Business Communication is a crucial paper that tests students on their English language skills, grammar, vocabulary, and business writing abilities. This paper carries 100 marks and requires excellent written communication skills.</p>
            <p>Our CSEET Test Series for Business Communication includes extensive practice questions on letter writing (formal and informal), essay writing, precis writing, comprehension passages, and grammar exercises. Students also get access to video solutions that explain the nuances of business communication.</p>
            <p>Key topics covered include: Business letters, Official letters, Circulars, Notices, Minutes, Press releases, Essay writing on current business topics, Grammar and vocabulary, Comprehension passages.</p>
          </div>

          <div class="seo-card">
            <h3>CSEET Paper 2 - Economics and Statistics</h3>
            <p>Economics and Statistics is another important paper that covers microeconomics, macroeconomics, and statistical methods. This paper tests analytical skills and understanding of economic concepts.</p>
            <p>Our test series includes questions on demand and supply analysis, national income, monetary policy, fiscal policy, measures of central tendency, correlation, regression, and probability. Detailed explanations and video solutions help students understand complex economic concepts.</p>
            <p>Key topics covered include: Theory of demand and supply, Production function, Cost concepts, National income accounting, Money and banking, Government budget, Measures of central tendency, Correlation and regression, Index numbers.</p>
          </div>

          <div class="seo-card">
            <h3>CSEET Paper 3 - Corporate Laws</h3>
            <p>Corporate Laws paper covers the Companies Act 2013, FEMA, SEBI regulations, and other corporate laws. This is a challenging paper that requires thorough understanding of legal provisions.</p>
            <p>Our test series includes case-based questions that test students' knowledge of corporate laws and their ability to apply legal principles to real-world scenarios. Questions on board meetings, shareholder meetings, corporate governance, and regulatory compliance are covered in detail.</p>
            <p>Key topics covered include: Companies Act 2013 provisions, Memorandum and Articles of Association, Board meetings and procedures, Shareholder meetings, Corporate governance, FEMA regulations, SEBI guidelines, Insider trading.</p>
          </div>

          <div class="seo-card">
            <h3>CSEET Paper 4 - Quantitative Aptitude</h3>
            <p>Quantitative Aptitude tests students on mathematical and numerical skills. This paper requires strong calculation skills and the ability to solve complex problems quickly and accurately.</p>
            <p>Our test series covers all important topics including arithmetic, algebra, geometry, trigonometry, and data interpretation. We provide step-by-step solutions and video explanations that help students develop problem-solving skills.</p>
            <p>Key topics covered include: Number systems, HCF and LCM, Average, Ratio and proportion, Percentage, Profit and loss, Time and work, Time and distance, Mensuration, Data interpretation, Quadratic equations.</p>
          </div>

          <div class="seo-card">
            <h3>Why Choose Our CSEET Test Series?</h3>
            <p>With numerous CSEET test series available, here's why we stand out:</p>
            <ul>
              <li><strong>Designed by Experts:</strong> Our test series is prepared by experienced faculty and CSEET qualifiers who understand the exam pattern.</li>
              <li><strong>Comprehensive Coverage:</strong> We cover all four papers with chapterwise, unitwise, and full syllabus tests.</li>
              <li><strong>Fastest Evaluation:</strong> Get your answer sheets evaluated within 24-48 working hours.</li>
              <li><strong>Video Solutions:</strong> Detailed video explanations for better understanding.</li>
              <li><strong>Proven Results:</strong> 99% satisfaction rate with thousands of successful students.</li>
            </ul>
            <p>Call us at +91 8929592998 for more information about our CSEET Test Series.</p>
          </div>

          <div class="seo-card">
            <h3>Tips to Clear CSEET in First Attempt</h3>
            <p>Here are some expert tips to help you clear CSEET:</p>
            <p><strong>Start Early:</strong> Begin your preparation at least 4-6 months before the exam. Cover all topics systematically.</p>
            <p><strong>Focus on Basics:</strong> CSEET tests your foundational knowledge. Focus on understanding concepts rather than rote learning.</p>
            <p><strong>Practice Regularly:</strong> Regular practice with our test series helps improve speed and accuracy.</p>
            <p><strong>Take Mock Tests:</strong> Attempt full-length mock tests under exam conditions to build stamina.</p>
            <p><strong>Revise Thoroughly:</strong> Allocate last month for revision of all topics.</p>
          </div>

          <div class="seo-card">
            <h3>Our Students' Success Stories</h3>
            <p>At CS Test Series, we take pride in our students' achievements. Thousands of students have cleared CSEET with our test series.</p>
            <p>Our 99% satisfaction rate speaks for itself. Students who consistently practice with our CSEET Test Series perform exceptionally well in the actual exam. The rigorous practice through our mock tests helps build confidence and exam temperament.</p>
            <p>Join thousands of successful students who have achieved their dream of becoming Company Secretaries. Start your CSEET preparation with CS Test Series today!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Asked Questions - CSEET Test Series</h2>
        </div>

        <div class="faq-grid">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index" :class="{ active: activeFaq === index }">
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ faq.question }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="faq-answer" v-show="activeFaq === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="cta-bg"></div>
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Clear CSEET Exam?</h2>
          <p>Join India's #1 CSEET Test Series today and start your journey to become a Company Secretary</p>
          <div class="cta-contact">
            <span>Call us: <a href="tel:+918929592998">+91 8929592998</a></span>
          </div>
          <div class="cta-actions">
            <a href="https://missioncstestseries.com/login" class="btn btn-white btn-lg">Enroll Now</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const activePlan = ref('chapterwise')
const activeFaq = ref(0)

const plans = ref([
  {
    id: 'chapterwise',
    name: 'Chapterwise',
    description: 'Complete coverage with chapter tests + full syllabus mocks',
    price: 899,
    features: [
      'Chapterwise Tests (All 4 Papers)',
      'Full Syllabus Mock Tests',
      'Video Solutions',
      'Detailed Evaluation (24-48 hours)',
      'Model Answers',
      'Performance Analytics',
      'Validity: 12 Months'
    ]
  },
  {
    id: 'unitwise',
    name: 'Unitwise',
    description: 'Unit-wise tests for focused preparation',
    price: 499,
    features: [
      'Unitwise Tests (All 4 Papers)',
      'Full Syllabus Mock Tests',
      'Video Solutions',
      'Detailed Evaluation (24-48 hours)',
      'Model Answers',
      'Validity: 8 Months'
    ]
  },
  {
    id: 'fullsyllabus',
    name: 'Full Syllabus',
    description: 'Full mock tests for exam simulation',
    price: 149,
    features: [
      'Full Syllabus Mock Tests',
      'Basic Evaluation',
      'Model Answers',
      'Validity: 4 Months'
    ]
  }
])

const faqs = ref([
  {
    question: "What is CSEET?",
    answer: "CSEET (Company Secretary Executive Entrance Test) is the entrance exam conducted by ICSI for admission to the CS Executive Programme. It tests students on Business Communication, Economics & Statistics, Corporate Laws, and Quantitative Aptitude."
  },
  {
    question: "What is included in CSEET Test Series?",
    answer: "Our CSEET Test Series includes chapterwise, unitwise, and full syllabus tests for all 4 papers. Each test comes with detailed evaluation, video solutions, and model answers."
  },
  {
    question: "How long does evaluation take?",
    answer: "We provide the fastest evaluation in the industry. Your answer sheets are evaluated and uploaded within 24-48 working hours."
  },
  {
    question: "Are the tests based on latest ICSI syllabus?",
    answer: "Yes, all our test papers are regularly updated as per the latest ICSI syllabus and exam pattern."
  },
  {
    question: "What is the satisfaction rate?",
    answer: "Our students have a 99% satisfaction rate in CSEET exam. Thousands of students have cleared CSEET with our test series."
  },
  {
    question: "Can I access tests on mobile?",
    answer: "Yes, our platform is fully mobile-friendly. You can access all test series, submit answers, and view evaluations on any device."
  }
])

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? -1 : index
}

useSeoMeta({
  title: 'CSEET Test Series 2026 - Chapterwise, Unitwise & Full Syllabus | CS Test Series',
  description: "India's No.1 CSEET Test Series for ICSI exam. Chapterwise at Rs 899, Unitwise at Rs 499, Full Syllabus at Rs 149. All 4 papers covered. Fastest evaluation 24-48 hours.",
  ogTitle: 'Best CSEET Test Series - Clear in First Attempt',
  ogDescription: "India's No.1 CSEET Test Series. Chapterwise Rs 899, Unitwise Rs 499, Full Syllabus Rs 149. All 4 papers covered.",
  ogUrl: 'https://exam60.online/cseet-test-series',
  twitterCard: 'summary_large_image',
  keywords: 'cseet test series, cseet test series 2026, cseet mock test, cseet online test, cseet chapterwise test series, icsi cseet test series, best cseet test series, cseet test series price'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://exam60.online/cseet-test-series' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "CSEET Test Series",
        "description": "CSEET Test Series - Chapterwise Rs 899, Unitwise Rs 499, Full Syllabus Rs 149. All 4 papers covered with fastest 24-48 hour evaluation.",
        "brand": { "@type": "Brand", "name": "CS Test Series" },
        "sku": "CSEET-TESTSERIES",
        "offers": {
          "@type": "Offer",
          "price": "899",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "url": "https://exam60.online/cseet-test-series"
        },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "2000", "bestRating": "5" }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "CSEET Test Series",
        "description": "CSEET Test Series - Chapterwise at Rs 899, Unitwise at Rs 499, Full Syllabus at Rs 149.",
        "provider": { "@type": "Organization", "name": "CS Test Series", "url": "https://exam60.online" },
        "offers": { "@type": "Offer", "price": "899", "priceCurrency": "INR" }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "What is included in CSEET Test Series?", "acceptedAnswer": {"@type": "Answer", "text": "Our CSEET Test Series includes chapterwise, unitwise, and full syllabus tests for all 4 papers: Business Communication, Economic & Commercial Laws, Company Accounts, and Quantitative Aptitude."}},
          {"@type": "Question", "name": "How long does evaluation take?", "acceptedAnswer": {"@type": "Answer", "text": "We provide the fastest evaluation in 24-48 working hours."}},
          {"@type": "Question", "name": "Is CSEET mandatory?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, CSEET (Company Secretary Executive Entrance Test) is mandatory for candidates who have passed Class 12 or appear in Class 12 examinations to enroll in CS Executive Programme."}}
        ]
      })
    }
  ]
})
</script>

<style scoped>
/* Promo Banner */
.promo-banner {
  background: #f1f5f9;
  padding: 0.75rem 0;
  margin-top: 70px;
  border-bottom: 1px solid #e2e8f0;
}
.promo-content {
  text-align: center;
  color: #475569;
  font-weight: 500;
}

/* Hero Section */
.hero-section {
  position: relative;
  padding: 6rem 0 4rem;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  z-index: -2;
}
.hero-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.hero-content {
  text-align: center;
  color: white;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.1);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255,255,255,0.1);
}
.badge-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
.hero-content h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}
.highlight { color: #34d399; }
.hero-subtitle {
  font-size: 1.125rem;
  opacity: 0.85;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}
.stat-item { text-align: center; }
.stat-value { display: block; font-size: 1.75rem; font-weight: 700; }
.stat-label { font-size: 0.875rem; opacity: 0.7; }
.stat-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.2); }

/* Sections */
.section { padding: 5rem 0; }
.section-header { text-align: center; margin-bottom: 3rem; }
.section-header h2 { font-size: 2.25rem; font-weight: 700; color: #1e293b; margin-bottom: 0.5rem; }
.section-header p { font-size: 1.125rem; color: #64748b; }

/* Plans */
.plans-section { background: #f8fafc; }
.plans-tabs { display: flex; justify-content: center; gap: 1rem; margin: 2rem 0; }
.plan-tab { padding: 0.875rem 2rem; background: white; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
.plan-tab.active { background: #1e293b; border-color: #1e293b; color: white; }
.plan-content { max-width: 600px; margin: 0 auto; background: white; padding: 2rem; border-radius: 1rem; border: 1px solid #e2e8f0; }
.plan-header { text-align: center; margin-bottom: 1.5rem; }
.plan-header h3 { font-size: 1.75rem; margin-bottom: 0.5rem; }
.plan-header p { color: #64748b; }
.plan-features h4 { font-size: 1.1rem; margin-bottom: 1rem; text-align: center; }
.plan-features ul { list-style: none; display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
.plan-features li { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: #475569; }
.plan-features li svg { color: #10b981; }
.pricing-box { text-align: center; margin-bottom: 1.5rem; padding: 1rem; background: #f8fafc; border-radius: 0.5rem; }
.price { font-size: 2rem; font-weight: 700; color: #1e293b; }
.price-label { display: block; font-size: 0.875rem; color: #64748b; }
.plan-cta { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }

/* Features */
.features-section { background: white; }
.features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
.feature-card { background: #f8fafc; padding: 1.75rem; border-radius: 0.75rem; border: 1px solid #e2e8f0; text-align: center; transition: all 0.2s; }
.feature-card:hover { border-color: #1e293b; }
.feature-icon { width: 52px; height: 52px; margin: 0 auto 1rem; background: #e2e8f0; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: #1e293b; }
.feature-card h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; }
.feature-card p { color: #64748b; font-size: 0.9rem; line-height: 1.6; }

/* Subjects */
.subjects-section { background: #f8fafc; }
.subjects-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
.subject-card { background: white; padding: 1.75rem; border-radius: 0.75rem; border: 1px solid #e2e8f0; transition: all 0.3s; }
.subject-card:hover { border-color: #1e293b; transform: translateY(-2px); }
.subject-icon { width: 48px; height: 48px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; background: #f1f5f9; border-radius: 0.5rem; color: #1e293b; }
.subject-card h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; }
.subject-card p { font-size: 0.875rem; color: #64748b; margin-bottom: 1rem; line-height: 1.5; }
.subject-link { color: #1e293b; font-weight: 600; text-decoration: none; font-size: 0.875rem; }
.subject-link:hover { text-decoration: underline; }

/* SEO Section */
.seo-section { background: white; }
.seo-grid { display: grid; gap: 1.5rem; }
.seo-card { background: #f8fafc; padding: 2rem; border-radius: 0.75rem; border: 1px solid #e2e8f0; }
.seo-card h3 { font-size: 1.35rem; font-weight: 700; margin-bottom: 1rem; color: #1e293b; }
.seo-card p { color: #475569; line-height: 1.8; margin-bottom: 1rem; }
.seo-card ul { list-style: none; }
.seo-card li { display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.75rem; color: #475569; }
.seo-card li svg { color: #1e293b; flex-shrink: 0; margin-top: 0.25rem; }

/* FAQ */
.faq-section { background: #f8fafc; }
.faq-grid { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; }
.faq-item { background: white; border-radius: 0.75rem; border: 1px solid #e2e8f0; overflow: hidden; }
.faq-question { width: 100%; padding: 1.25rem; display: flex; justify-content: space-between; align-items: center; background: none; border: none; font-size: 1rem; font-weight: 600; color: #1e293b; cursor: pointer; text-align: left; }
.faq-question svg { color: #64748b; transition: transform 0.2s; }
.faq-item.active .faq-question svg { transform: rotate(180deg); }
.faq-answer { padding: 0 1.25rem 1.25rem; }
.faq-answer p { color: #475569; line-height: 1.7; }

/* CTA */
.cta-section { position: relative; padding: 5rem 0; }
.cta-bg { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, #1e293b 0%, #334155 100%); z-index: -1; }
.cta-content { text-align: center; color: white; }
.cta-content h2 { font-size: 2.5rem; margin-bottom: 1rem; }
.cta-content p { font-size: 1.125rem; opacity: 0.85; margin-bottom: 1.5rem; }
.cta-contact { margin-bottom: 2rem; }
.cta-contact a { color: #34d399; font-weight: 600; text-decoration: none; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.75rem 1.5rem; font-weight: 600; border-radius: 0.5rem; text-decoration: none; cursor: pointer; transition: all 0.2s; border: none; }
.btn-primary { background: #1e293b; color: white; }
.btn-primary:hover { background: #0f172a; }
.btn-white { background: white; color: #1e293b; }
.btn-white:hover { background: #f1f5f9; }
.btn-outline { background: transparent; border: 2px solid #1e293b; color: #1e293b; }
.btn-outline:hover { background: #1e293b; color: white; }
.btn-lg { padding: 1rem 2rem; font-size: 1rem; }

/* Responsive */
@media (max-width: 1024px) {
  .features-grid, .subjects-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .hero-content h1 { font-size: 2rem; }
  .features-grid, .subjects-grid { grid-template-columns: 1fr; }
  .plan-features ul { grid-template-columns: 1fr; }
  .hero-stats { gap: 1rem; }
  .stat-divider { display: none; }
}
</style>
