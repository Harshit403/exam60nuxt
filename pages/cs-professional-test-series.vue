<template>
  <div>
    <!-- Promo Banner -->
    <div class="promo-banner">
      <div class="container">
        <div class="promo-content">
          <span>Limited Time: Use code <strong>MISSIONCS</strong> for exclusive discount on CS Professional Test Series!</span>
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
            Trusted by 20,000 Students Community
          </div>
          <h1>Best <span class="highlight">CS Professional Test Series</span> for ICSI Exam</h1>
          <p class="hero-subtitle">
            Prepare with India's #1 CS Professional Test Series designed by All India Rankers. 
            Comprehensive mock tests for all 7 papers with fastest evaluation in 24-48 hours.
          </p>
          <div class="hero-actions">
            <a href="#plans" class="btn btn-primary btn-lg">View Plans</a>
            <a href="#features" class="btn btn-white btn-lg">Why Choose Us</a>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-value">20,000+</span>
              <span class="stat-label">Students Community</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">300+</span>
              <span class="stat-label">Mock Tests</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">24-48h</span>
              <span class="stat-label">Evaluation</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">AIR 8 & 9</span>
              <span class="stat-label">Rankers</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plans Section -->
    <section class="section plans-section" id="plans">
      <div class="container">
        <div class="section-header">
          <h2>CS Professional Test Series Plans</h2>
          <p>Choose the perfect plan for your CS Professional preparation</p>
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
            <h4>Pricing Options</h4>
            <div class="pricing-grid">
              <div class="pricing-item">
                <span class="price">₹{{ plan.id === 'chapterwise' ? 849 : plan.id === 'unitwise' ? 499 : 149 }}</span>
                <span class="price-label">Per Subject</span>
              </div>
              <div class="pricing-item">
                <span class="price">₹{{ getModulePrice(plan.id, 'module1') }}</span>
                <span class="price-label">Module 1 (4 Papers)</span>
              </div>
              <div class="pricing-item">
                <span class="price">₹{{ getModulePrice(plan.id, 'module2') }}</span>
                <span class="price-label">Module 2 (3 Papers)</span>
              </div>
              <div class="pricing-item total">
                <span class="price">₹{{ getModulePrice(plan.id, 'module1') + getModulePrice(plan.id, 'module2') }}</span>
                <span class="price-label">Both Modules</span>
              </div>
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
          <h2>Why Our CS Professional Test Series is #1?</h2>
          <p>Advanced preparation for CS Professional exam</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3>Case Study Based</h3>
            <p>Real case studies and practical scenarios for advanced learning.</p>
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
            <h3>AIR Mentorship</h3>
            <p>Live sessions by All India Rankers for advanced strategy guidance.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3>Double Evaluation</h3>
            <p>Rigorous double-layer evaluation for accurate feedback.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Content Section -->
    <section class="section content-section">
      <div class="container">
        <div class="content-grid">
          <div class="content-card">
            <h2>Best CS Professional Test Series for ICSI Exams</h2>
            <p>Welcome to the most comprehensive CS Professional Test Series designed specifically for students preparing for the Company Secretary Professional Programme conducted by ICSI. Our test series covers all 7 papers across 3 modules, ensuring complete preparation for your CS Professional exams.</p>
            <p>CS Professional is the highest level of the Company Secretary course and requires advanced preparation with focus on case studies, practical applications, and strategic thinking. Our test series is specially designed to help you master these advanced concepts and clear your exams in the first attempt.</p>
            <p>What makes our CS Professional Test Series stand out is the quality of questions designed by All India Rankers who have themselves cleared CS Professional exams with top positions. They understand exactly what ICSI expects and design questions that match the exam pattern perfectly.</p>
          </div>
          <div class="content-card">
            <h3>Chapterwise, Unitwise & Full Syllabus Tests</h3>
            <p>Our CS Professional Test Series offers three comprehensive plans to suit every student's preparation needs:</p>
            <ul>
              <li><strong>Chapterwise Plan:</strong> Complete chapter-wise tests for all 7 papers. This plan includes detailed coverage of every topic with tests after each chapter, helping you build strong conceptual understanding. Perfect for students who want thorough preparation across the entire syllabus.</li>
              <li><strong>Unitwise Plan:</strong> Unit-wise tests that group related chapters together. This approach helps in integrated learning and better retention of concepts. Ideal for students who have completed their initial reading and want to test their understanding.</li>
              <li><strong>Full Syllabus Plan:</strong> Comprehensive full-length mock tests that simulate the actual exam environment. These tests help you assess your overall preparation and build exam stamina.</li>
            </ul>
          </div>
          <div class="content-card">
            <h3>All 7 Papers Covered</h3>
            <p>Our CS Professional Test Series covers all 7 papers across 2 modules:</p>
            <ul>
              <li><strong>Module 1:</strong> Advanced Corporate Laws (Paper 1), Secretarial Audit (Paper 2), Corporate Restructuring (Paper 3), Insolvency Law (Paper 4)</li>
              <li><strong>Module 2:</strong> Financial Treasury (Paper 5), Ethics (Paper 6), Economic Laws (Paper 7)</li>
            </ul>
            <p>Each paper is covered in depth with topic-wise tests, making sure you don't miss any important concept that could appear in your exam.</p>
          </div>
          <div class="content-card">
            <h3>Case Study Based Questions</h3>
            <p>CS Professional exams are known for their case study based questions that test your practical knowledge and analytical skills. Our test series includes numerous case studies that are designed to simulate the kind of questions asked in actual ICSI exams. These case studies help you develop the skill to analyze complex scenarios and provide practical solutions.</p>
            <p>Our All India Rankers have curated these case studies based on their own exam experience and current industry practices, giving you the best possible practice material for your CS Professional preparation.</p>
          </div>
          <div class="content-card">
            <h3>Fastest Evaluation with Detailed Feedback</h3>
            <p>We understand the importance of timely feedback in exam preparation. That's why we provide the fastest evaluation in the industry - your answer sheets are evaluated and uploaded within 24-48 working hours of submission. This quick turnaround helps you identify your weaknesses and improve faster.</p>
            <p>Every evaluated answer comes with detailed feedback, improvement tips, and model answers. Our evaluators are qualified CS professionals and previous year rankers who provide constructive feedback that helps you write better answers.</p>
          </div>
          <div class="content-card">
            <h3>Live Mentorship by AIRs</h3>
            <p>Our CS Professional Test Series includes live mentorship sessions with All India Rankers who have cleared CS Professional exams with top positions. These sessions provide valuable insights on exam preparation strategy, time management, answer writing techniques, and how to handle case study questions.</p>
            <p>Weekly mentorship in the Chapterwise plan and monthly mentorship in the Unitwise plan ensures you stay on track with your preparation and get all your doubts cleared from experts who have been through the same journey.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Subject Cards Section -->
    <section class="section subjects-section">
      <div class="container">
        <div class="section-header">
          <h2>CS Professional Test Series - All 3 Modules Covered</h2>
          <p>Comprehensive test series for CS Professional exam</p>
        </div>
        
        <div class="subjects-grid">
          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Module 1: ESG & Drafting</h3>
            <p>Environmental Social Governance, Drafting Pleadings & Appearances</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>

          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
            </div>
            <h3>Module 2: Compliance & CSR</h3>
            <p>Compliance Management Audit, CSR and Sustainability</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>

          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3>Module 3: Finance & Restructuring</h3>
            <p>Strategic Management, Corporate Finance, Valuation, IBC</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO Content Section -->
    <section class="section seo-section">
      <div class="container">
        <div class="section-header">
          <h2>Best CS Professional Test Series - Complete Guide</h2>
          <p>Everything you need to know about CS Professional exam preparation</p>
        </div>

        <div class="seo-grid">
          <div class="seo-card">
            <h3>Why CS Professional Test Series is Essential for Your Career?</h3>
            <p>The CS Professional Programme is the final level of the Company Secretary course conducted by ICSI. Our comprehensive CS Professional Test Series is designed to help you clear all three modules in your very first attempt.</p>
            <p>CS Professional exam tests advanced knowledge in corporate laws, governance, compliance, finance, and strategic management. With test papers designed by All India Rankers who have cleared these exams with top ranks, we ensure you're getting the best possible preparation.</p>
            <p>Our CS Professional Test Series includes Chapterwise Test Series, Unitwise Test Series, and Full Syllabus Test Series. Each test is crafted with case-based unseen questions that exactly mimic the real ICSI exam environment.</p>
          </div>

          <div class="seo-card">
            <h3>CS Professional Module 1 - ESG & Drafting</h3>
            <p>Module 1 of CS Professional consists of papers that focus on advanced legal drafting and governance concepts:</p>
            <p><strong>Paper 1 - Environmental Social and Governance (ESG):</strong> This paper covers sustainability, corporate governance, ESG reporting, and stakeholder engagement. Our test series includes detailed case studies on ESG practices.</p>
            <p><strong>Paper 2 - Drafting Pleadings and Appearances:</strong> This practical paper covers legal drafting, court appearances, and advocacy skills. Students learn how to draft various legal documents and represent clients effectively.</p>
          </div>

          <div class="seo-card">
            <h3>CS Professional Module 2 - Compliance & CSR</h3>
            <p>Module 2 focuses on compliance management and corporate social responsibility:</p>
            <p><strong>Paper 3 - Compliance Management Audit and Due Diligence:</strong> Covers corporate compliance, internal audits, due diligence processes, and regulatory compliance. Our test series includes practical scenarios on compliance frameworks.</p>
            <p><strong>Paper 4 - Corporate Social Responsibility and Sustainability:</strong> This paper covers CSR activities, sustainability reporting, and corporate sustainability practices. Questions on Companies Act provisions and sustainable business practices are covered in detail.</p>
          </div>

          <div class="seo-card">
            <h3>CS Professional Module 3 - Finance & Restructuring</h3>
            <p>Module 3 is the most challenging module focusing on finance and corporate restructuring:</p>
            <p><strong>Paper 5 - Strategic Management and Corporate Finance:</strong> Covers strategic planning, corporate finance decisions, mergers and acquisitions, and financial planning. Our test series includes case studies on real corporate scenarios.</p>
            <p><strong>Paper 6 - Corporate Restructuring Valuation and Insolvency:</strong> This advanced paper covers corporate restructuring, valuation methods, and Insolvency and Bankruptcy Code (IBC). Detailed questions on IBC procedures, insolvency resolution, and liquidation are included.</p>
          </div>

          <div class="seo-card">
            <h3>Our CS Professional Test Series Features</h3>
            <ul>
              <li><strong>Case Study Based Tests:</strong> Real corporate scenarios for practical understanding</li>
              <li><strong>Chapterwise Tests:</strong> Complete coverage with tests for each chapter</li>
              <li><strong>Unitwise Tests:</strong> Focused tests for each unit</li>
              <li><strong>Full Syllabus Mocks:</strong> Complete mock tests simulating exam conditions</li>
              <li><strong>Expert Evaluation:</strong> Detailed evaluation by qualified CS professionals</li>
              <li><strong>AIR Mentorship:</strong> Live sessions by All India Rankers</li>
              <li><strong>24-48 Hours Evaluation:</strong> Fastest evaluation in the industry</li>
            </ul>
          </div>

          <div class="seo-card">
            <h3>Why Choose Our CS Professional Test Series?</h3>
            <p>With numerous CS Professional test series available, here's why we stand out:</p>
            <p><strong>Designed by AIRs:</strong> Our test series is prepared by All India Rankers who have cleared CS Professional exams with top ranks.</p>
            <p><strong>ICSI Pattern Based:</strong> All test papers are designed exactly as per the latest ICSI exam pattern and marking scheme.</p>
            <p><strong>Proven Results:</strong> Our track record includes producing All India Rankers and helping thousands of students clear CS Professional exams.</p>
            <p><strong>Expert Support:</strong> Call us at +91 8929592998 for more information.</p>
          </div>

          <div class="seo-card">
            <h3>Our Students' Success - AIR 8 & AIR 9</h3>
            <p>At CS Test Series, we take pride in our students' achievements:</p>
            <p>We've produced multiple All India Rankers in every CS Professional attempt. Our recent successes include AIR 8 and AIR 9. These rankers attribute their success to our structured approach, quality test papers, and personalized guidance.</p>
            <p>Our data shows that students who consistently practice with our CS Professional Test Series perform exceptionally well in the main ICSI exams. Many students achieve exemptions in multiple papers.</p>
          </div>

          <div class="seo-card">
            <h3>Tips to Clear CS Professional in First Attempt</h3>
            <p><strong>Start Early:</strong> Begin your preparation at least 6-8 months before the exam. CS Professional requires advanced understanding.</p>
            <p><strong>Focus on Concepts:</strong> CS Professional tests your understanding of complex corporate laws and financial concepts. Focus on practical applications.</p>
            <p><strong>Practice Case Studies:</strong> Regular practice with case-based questions helps improve analytical skills.</p>
            <p><strong>Take Mock Tests:</strong> Attempt full-length mock tests under exam conditions to build stamina.</p>
            <p><strong>Analyze Performance:</strong> After each test, analyze your mistakes and work on weak areas.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Asked Questions - CS Professional Test Series</h2>
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
          <h2>Ready to Clear CS Professional Exam?</h2>
          <p>Join India's #1 CS Professional Test Series today and achieve your dream of becoming a qualified Company Secretary</p>
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

const getModulePrice = (planId, module) => {
  const prices = {
    chapterwise: { 'module1': 3196, 'module2': 2396 },
    unitwise: { 'module1': 1996, 'module2': 1497 },
    fullsyllabus: { 'module1': 476, 'module2': 357 }
  }
  return prices[planId]?.[module] || 0
}

const plans = ref([
  {
    id: 'chapterwise',
    name: 'Chapterwise',
    description: 'Complete coverage with chapter tests + full syllabus mocks',
    features: [
      'Chapterwise Tests (All 7 Papers)',
      'Full Syllabus Mock Tests',
      'Weekly Live Mentorship by AIRs',
      'Detailed Evaluation (24-48 hours)',
      'Case Study Based Questions',
      'Model Answers',
      'Validity: 12 Months'
    ]
  },
  {
    id: 'unitwise',
    name: 'Unitwise',
    description: 'Unit-wise tests for focused preparation',
    features: [
      'Unitwise Tests (All 7 Papers)',
      'Full Syllabus Mock Tests',
      'Monthly Live Mentorship by AIRs',
      'Detailed Evaluation (24-48 hours)',
      'Case Study Based Questions',
      'Validity: 8 Months'
    ]
  },
  {
    id: 'fullsyllabus',
    name: 'Full Syllabus',
    description: 'Full mock tests for exam simulation',
    features: [
      'Full Syllabus Mock Tests',
      'Detailed Evaluation (24-48 hours)',
      'Model Answers',
      'Validity: 4 Months'
    ]
  }
])

const faqs = ref([
  {
    question: "What is CS Professional Programme?",
    answer: "CS Professional is the final level of the Company Secretary course conducted by ICSI. It consists of 3 modules with 7 papers covering advanced topics in corporate laws, governance, compliance, finance, and strategic management."
  },
  {
    question: "What is included in CS Professional Test Series?",
    answer: "Our CS Professional Test Series includes chapterwise, unitwise, and full syllabus tests for all 7 papers across 3 modules. Each test comes with detailed evaluation, case-based questions, and mentorship sessions."
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
    question: "What is the success rate?",
    answer: "Our students have consistently performed well. We've produced multiple AIRs including AIR 8 and AIR 9. Many students achieve exemptions in multiple papers."
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
  title: 'CS Professional Test Series 2026 - Chapterwise, Unitwise & Full Syllabus | CS Test Series',
  description: "India's #1 CS Professional Test Series. Chapterwise from Rs 849, Unitwise from Rs 499, Full Syllabus from Rs 149. All 7 papers across 2 modules. Designed by AIRs with fastest 24-48 hour evaluation.",
  ogTitle: 'Best CS Professional Test Series - Clear in First Attempt',
  ogDescription: "India's #1 CS Professional Test Series. Chapterwise Rs 849, Unitwise Rs 499, Full Syllabus Rs 149. All 7 papers covered.",
  ogUrl: 'https://cstestseries.in/cs-professional-test-series',
  twitterCard: 'summary_large_image',
  keywords: 'cs professional test series, cs professional test series 2026, cs professional mock test, cs professional online test, cs professional chapterwise test series, icsi cs professional test series, best cs professional test series, cs professional test series price'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "CS Professional Test Series",
        "description": "CS Professional Test Series - Chapterwise Rs 849, Unitwise Rs 499, Full Syllabus Rs 149. All 7 papers across 2 modules with fastest 24-48 hour evaluation.",
        "brand": { "@type": "Brand", "name": "CS Test Series" },
        "sku": "CS-PROF-TESTSERIES",
        "offers": {
          "@type": "Offer",
          "price": "849",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "url": "https://cstestseries.in/cs-professional-test-series"
        },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "3000", "bestRating": "5" }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "CS Professional Test Series",
        "description": "CS Professional Test Series - Chapterwise at Rs 849, Unitwise at Rs 499, Full Syllabus at Rs 149. Covers all 7 papers across 2 modules.",
        "provider": { "@type": "Organization", "name": "CS Test Series", "url": "https://cstestseries.in" },
        "offers": { "@type": "Offer", "price": "849", "priceCurrency": "INR" }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "What is included in CS Professional Test Series?", "acceptedAnswer": {"@type": "Answer", "text": "Our CS Professional Test Series includes chapterwise, unitwise, and full syllabus tests for all 7 papers across 3 modules. Each test includes case study questions."}},
          {"@type": "Question", "name": "How long does evaluation take?", "acceptedAnswer": {"@type": "Answer", "text": "We provide the fastest evaluation in 24-48 working hours."}},
          {"@type": "Question", "name": "Are case studies included?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, our test series includes advanced case study based questions that match the actual CS Professional exam pattern."}}
        ]
      })
    }
  ]
})
</script>

<style scoped>
/* Promo Banner */
.promo-banner { background: #f1f5f9; padding: 0.75rem 0; margin-top: 70px; border-bottom: 1px solid #e2e8f0; }
.promo-content { text-align: center; color: #475569; font-weight: 500; }

/* Hero Section */
.hero-section { position: relative; padding: 6rem 0 4rem; overflow: hidden; }
.hero-bg { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, #1e293b 0%, #334155 100%); z-index: -2; }
.hero-bg::before { content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
.hero-content { text-align: center; color: white; }
.hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.1); }
.badge-dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
.hero-content h1 { font-size: 3rem; font-weight: 800; margin-bottom: 1rem; line-height: 1.2; }
.highlight { color: #34d399; }
.hero-subtitle { font-size: 1.125rem; opacity: 0.85; margin-bottom: 2rem; max-width: 700px; margin-left: auto; margin-right: auto; }
.hero-actions { display: flex; gap: 1rem; justify-content: center; margin-bottom: 3rem; flex-wrap: wrap; }
.hero-stats { display: flex; justify-content: center; align-items: center; gap: 2rem; flex-wrap: wrap; }
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
.subjects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
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

/* Content Section */
.content-section { background: #f8fafc; }
.content-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
.content-card { background: white; padding: 2rem; border-radius: 0.75rem; border: 1px solid #e2e8f0; }
.content-card h2 { font-size: 1.5rem; color: #1e293b; margin-bottom: 1rem; }
.content-card h3 { font-size: 1.125rem; color: #1e293b; margin-bottom: 0.75rem; }
.content-card p { font-size: 0.9375rem; color: #64748b; line-height: 1.7; margin-bottom: 1rem; }
.content-card ul { list-style: none; margin-top: 1rem; }
.content-card ul li { font-size: 0.875rem; color: #475569; line-height: 1.6; margin-bottom: 0.75rem; padding-left: 1.25rem; position: relative; }
.content-card ul li::before { content: "•"; position: absolute; left: 0; color: #1e293b; }
.content-card ul li strong { color: #1e293b; }

/* Pricing Box */
.pricing-box { background: #f1f5f9; padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0; }
.pricing-box h4 { font-size: 1rem; color: #1e293b; margin-bottom: 1rem; text-align: center; }
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.pricing-item { text-align: center; padding: 1rem; background: white; border-radius: 0.5rem; border: 1px solid #e2e8f0; }
.pricing-item.total { background: #1e293b; border-color: #1e293b; }
.pricing-item.total .price, .pricing-item.total .price-label { color: white; }
.pricing-item .price { display: block; font-size: 1.5rem; font-weight: 700; color: #1e293b; }
.pricing-item .price-label { display: block; font-size: 0.75rem; color: #64748b; margin-top: 0.25rem; }

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
@media (max-width: 1024px) { .features-grid, .subjects-grid, .content-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) { 
  .hero-content h1 { font-size: 2rem; } 
  .features-grid, .subjects-grid, .content-grid { grid-template-columns: 1fr; }
  .plan-features ul { grid-template-columns: 1fr; }
  .hero-stats { gap: 1rem; }
  .stat-divider { display: none; }
  .pricing-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
