<template>
  <div>
    <!-- Promo Banner -->
    <div class="promo-banner">
      <div class="container">
        <div class="promo-content">
          <span>Limited Time: Use code <strong>MISSIONCS</strong> for exclusive discount on CS Executive Test Series!</span>
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
            Trusted by 20,000+ CS Students community
          </div>
          <h1>Best <span class="highlight">CS Executive Test Series</span> for ICSI Exams</h1>
          <p class="hero-subtitle">
            Prepare with India's #1 CS Executive Test Series designed by All India Rankers. 
            Comprehensive chapterwise, unitwise & full syllabus tests with fastest evaluation in 24-48 hours.
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
              <span class="stat-value">500+</span>
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

    <!-- Plans Section - Moved below stats -->
    <section class="section plans-section" id="plans">
      <div class="container">
        <div class="section-header">
          <h2>CS Executive Test Series Plans</h2>
          <p>Choose the perfect plan for your CS Executive preparation</p>
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

          <div class="module-box">
            <h4>Pricing Options</h4>
            <div class="pricing-grid">
              <div class="pricing-item">
                <span class="paper-name">Per Subject</span>
                <span class="price">₹{{ plan.id === 'chapterwise' ? 849 : plan.id === 'unitwise' ? 499 : 149 }}</span>
              </div>
              <div class="pricing-item">
                <span class="paper-name">Module 1 (4 Papers)</span>
                <span class="price">₹{{ getModulePrice(plan.id, 'module1') }}</span>
              </div>
              <div class="pricing-item">
                <span class="paper-name">Module 2 (3 Papers)</span>
                <span class="price">₹{{ getModulePrice(plan.id, 'module2') }}</span>
              </div>
              <div class="pricing-item total">
                <span class="paper-name">Both Modules</span>
                <span class="price">₹{{ getModulePrice(plan.id, 'module1') + getModulePrice(plan.id, 'module2') }}</span>
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
          <h2>Why Our CS Executive Test Series is #1?</h2>
          <p>Comprehensive preparation for CS Executive Module 1 & Module 2</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3>Chapterwise Tests</h3>
            <p>Complete chapter coverage with 20-40 marks per chapter test. Covers all topics in CS Executive syllabus.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3>Fastest Evaluation</h3>
            <p>Get your answer sheets evaluated within 24-48 working hours. Quick feedback for rapid improvement.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>AIR Mentorship</h3>
            <p>Weekly live sessions by All India Rankers. Get strategy guidance and expert tips for CS Executive exams.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3>Double Evaluation</h3>
            <p>Rigorous double-layer evaluation process ensuring accurate marks and detailed feedback.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Subject Cards Section -->
    <section class="section subjects-section">
      <div class="container">
        <div class="section-header">
          <h2>CS Executive Test Series - All 7 Papers Covered</h2>
          <p>Comprehensive test series for Module 1 and Module 2</p>
        </div>
        
        <div class="subjects-grid">
          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <h3>Paper 1: Jurisprudence, Interpretation & General Laws</h3>
            <p>Interpretation of statutes, legal concepts, constitutional law, civil & criminal law</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>

          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h3>Paper 2: Company Law & Practice</h3>
            <p>Companies Act 2013, corporate governance, compliance, meetings, dividends</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>

          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3>Paper 3: Setting Up of Business, Industrial & Labour Laws</h3>
            <p>Business setup, industrial laws, labour regulations, FEMA, RBI guidelines</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>

          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3>Paper 4: Corporate Accounting & Financial Management</h3>
            <p>Accounting standards, financial statements, ratio analysis, capital budgeting</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>

          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <h3>Paper 5: Capital Market & Securities Laws</h3>
            <p>SEBI regulations, securities market, mutual funds, derivative trading</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>

          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <h3>Paper 6: Economic, Commercial & IP Laws</h3>
            <p>Competition law, intellectual property, international trade, e-commerce</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>

          <div class="subject-card">
            <div class="subject-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" x2="23" y1="10" y2="10"/></svg>
            </div>
            <h3>Paper 7: Tax Laws & Practice</h3>
            <p>Income tax, GST, customs duty, international taxation</p>
            <a href="https://missioncstestseries.com/login" class="subject-link">View Test Series →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO Content Section -->
    <section class="section seo-section">
      <div class="container">
        <div class="section-header">
          <h2>Best CS Executive Test Series - Complete Guide</h2>
          <p>Everything you need to know about CS Executive exam preparation</p>
        </div>

        <div class="seo-grid">
          <!-- Card 1 -->
          <div class="seo-card">
            <h3>Why CS Executive Test Series is Essential for Your Success?</h3>
            <p>The CS Executive examination conducted by ICSI is one of the most prestigious professional exams in India. Our comprehensive CS Executive Test Series is designed to help you clear both Module 1 and Module 2 in your very first attempt. With test papers designed by All India Rankers who have themselves cleared these exams with top ranks, we ensure you're getting the best possible preparation.</p>
            <p>Our CS Executive Test Series includes Chapterwise Test Series, Unitwise Test Series, and Full Syllabus Test Series. Each test is crafted with case-based unseen questions that exactly mimic the real ICSI exam environment. The difference between scores in our test series and actual ICSI exam results is often just 4-5 marks, proving our test series accurately predicts your performance.</p>
            <p>Weekly mentorship sessions by AIRs provide valuable insights into exam preparation strategies, time management techniques, and answer presentation skills. Students get the opportunity to interact directly with AIRs who have cleared the exams and understand what it takes to succeed.</p>
          </div>

          <!-- Card 2 -->
          <div class="seo-card">
            <h3>CS Executive Module 1 Test Series - Complete Coverage</h3>
            <p>Module 1 of CS Executive consists of four papers that form the foundation of company secretarial practice:</p>
            <p><strong>Paper 1 - Jurisprudence, Interpretation & General Laws:</strong> This foundational paper covers interpretation of statutes, constitutional law, civil law, criminal law, and general principles of law. Our test series includes detailed questions on legal concepts and their practical applications.</p>
            <p><strong>Paper 2 - Company Law & Practice:</strong> Covering the entire Companies Act 2013, this paper requires thorough understanding of corporate governance, compliance requirements, board meetings, and shareholder matters. Our test series includes case studies on real corporate scenarios.</p>
            <p><strong>Paper 3 - Setting Up of Business, Industrial & Labour Laws:</strong> This paper covers various aspects of starting and operating a business in India, including industrial laws, labour regulations, FEMA, and RBI guidelines.</p>
            <p><strong>Paper 4 - Corporate Accounting & Financial Management:</strong> A challenging paper covering accounting standards (AS 1-29), financial statements, ratio analysis, working capital management, and capital budgeting. Our test series includes numerical problems with step-by-step solutions.</p>
          </div>

          <!-- Card 3 -->
          <div class="seo-card">
            <h3>CS Executive Module 2 Test Series - Advanced Preparation</h3>
            <p>Module 2 focuses on advanced corporate laws and practical applications:</p>
            <p><strong>Paper 5 - Capital Market & Securities Laws:</strong> Covers SEBI regulations, securities market operations, primary and secondary markets, derivative trading, mutual fund regulations, and investor protection. Our test series includes questions on recent SEBI amendments and market scenarios.</p>
            <p><strong>Paper 6 - Economic, Commercial & IP Laws:</strong> This paper covers competition law, intellectual property rights, international trade laws, and e-commerce regulations. Perfect for understanding the commercial aspects of corporate governance.</p>
            <p><strong>Paper 7 - Tax Laws & Practice:</strong> A comprehensive paper covering Income Tax Act, Goods and Services Tax (GST), customs duty, and international taxation. Our test series includes practical case studies on tax planning and compliance.</p>
          </div>

          <!-- Card 4 -->
          <div class="seo-card">
            <h3>Our CS Executive Test Series Features</h3>
            <ul>
              <li><strong>Chapterwise Tests:</strong> One test for each chapter covering 20-40 marks plus one full syllabus test of 100 marks</li>
              <li><strong>Unitwise Tests:</strong> Four unit-wise tests covering 20-40 marks each plus one full syllabus test</li>
              <li><strong>Full Syllabus Tests:</strong> Comprehensive mock tests simulating actual exam conditions</li>
              <li><strong>Weekly Mentorship:</strong> Live sessions by All India Rankers providing strategy guidance</li>
              <li><strong>Fastest Evaluation:</strong> Answer sheets evaluated and uploaded within 24-48 working hours</li>
              <li><strong>Detailed Feedback:</strong> Point-wise evaluation with suggestions for improvement</li>
              <li><strong>Model Answers:</strong> Ideal answers for every question to understand marking pattern</li>
            </ul>
          </div>

          <!-- Card 5 -->
          <div class="seo-card">
            <h3>Our Students' Success - AIR 8 & AIR 9</h3>
            <p>At CS Test Series, we take pride in our students' achievements. Our track record speaks for itself:</p>
            <p>We've produced multiple All India Rankers in every CS Executive attempt. Our recent successes include AIR 8 and AIR 9. These rankers attribute their success to our structured approach, quality test papers, and personalized guidance.</p>
            <p>Our data shows that students who consistently practice with our CS Executive Test Series perform exceptionally well in the main ICSI exams. The difference between their scores in our test series and the actual ICSI examination is remarkably small - often just 4-5 marks.</p>
            <p>Many of our students have achieved exemptions in multiple papers, including challenging papers like Corporate Accounting and Financial Management and Tax Laws. This success rate is a testament to the quality and effectiveness of our CS Executive Test Series.</p>
          </div>

          <!-- Card 6 -->
          <div class="seo-card">
            <h3>Why Choose Our CS Executive Test Series?</h3>
            <p>With numerous CS Executive test series available in the market, here's why we stand out:</p>
            <p><strong>Designed by AIRs:</strong> Our test series is prepared by All India Rankers who have cleared CS Executive exams with top ranks. They understand exactly what it takes to score high in ICSI exams.</p>
            <p><strong>ICSI Pattern Based:</strong> All test papers are designed exactly as per the latest ICSI exam pattern and marking scheme. We regularly update our question bank to reflect any changes in the exam pattern.</p>
            <p><strong>Proven Results:</strong> Our track record includes producing All India Rankers and helping thousands of students clear their CS Executive exams.</p>
            <p><strong>Expert Support:</strong> Our team of experienced CS professionals and faculty are always available to help you with any doubts or queries. Call us at +91 8929592998 for immediate assistance.</p>
          </div>

          <!-- Card 7 -->
          <div class="seo-card">
            <h3>How Our Evaluation Process Helps You Score Better?</h3>
            <p>Our evaluation process is rigorous and thorough, designed to give you accurate feedback on your performance:</p>
            <p>Every answer is evaluated by qualified CS professionals and All India Rankers who understand the marking scheme and evaluation criteria. We provide detailed feedback on every answer, highlighting areas where students lost marks and suggesting improvements.</p>
            <p>The double-layer strict evaluation ensures that students get accurate assessment of their performance and understand exactly how to improve their scores. This process has helped thousands of students achieve exemptions and high marks in their CS Executive examinations.</p>
            <p>Our evaluation aligns perfectly with ICSI marking scheme. The 4-5 marks difference between our test scores and actual exam results proves the accuracy of our evaluation process.</p>
          </div>

          <!-- Card 8 -->
          <div class="seo-card">
            <h3>Tips to Clear CS Executive in First Attempt</h3>
            <p>Here are some expert tips from our All India Rankers to help you clear CS Executive exams:</p>
            <p><strong>Start Early:</strong> Begin your preparation at least 6 months before the exam. Cover all topics systematically and leave time for revision.</p>
            <p><strong>Focus on Understanding:</strong> CS exams test your understanding of concepts, not just rote learning. Focus on understanding the practical applications of legal provisions.</p>
            <p><strong>Practice Answer Writing:</strong> Regular practice with our test series helps you improve answer writing skills. Pay attention to presentation, structure, and use of legal terminology.</p>
            <p><strong>Take Mock Tests:</strong> Attempt full-length mock tests under exam conditions to build stamina and time management skills.</p>
            <p><strong>Analyze Your Performance:</strong> After each test, analyze your mistakes and work on weak areas. Our detailed evaluation helps you identify exactly where to improve.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Asked Questions - CS Executive Test Series</h2>
          <p>Get answers to common questions about our CS Executive test series</p>
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
          <h2>Ready to Clear CS Executive Exam?</h2>
          <p>Join India's #1 CS Executive Test Series today and achieve your dream of becoming a Company Secretary</p>
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
    features: [
      'Chapterwise Tests (All 7 Papers)',
      'Full Syllabus Mock Tests',
      'Weekly Live Mentorship by AIRs',
      'Detailed Evaluation (24-48 hours)',
      'Model Answers & Solutions',
      'Performance Analytics',
      'Validity:Till Exams Months'
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
      'Model Answers & Solutions',
      'Performance Analytics',
      'Validity: Till Next Attempt'
    ]
  },
  {
    id: 'fullsyllabus',
    name: 'Full Syllabus',
    description: 'Full mock tests for exam simulation',
    features: [
      'Full Syllabus Mock Tests',
      'Detailed Evaluation (24-48 hours)',
      'Model Answers & Solutions',
      'Basic Performance Tracking',
      'Validity: 4 Months'
    ]
  }
])

const faqs = ref([
  {
    question: "What is included in CS Executive Test Series?",
    answer: "Our CS Executive Test Series includes chapterwise, unitwise, and full syllabus tests for all 7 papers (4 in Module 1 and 3 in Module 2). Each test comes with detailed evaluation, model answers, and mentorship sessions by AIRs."
  },
  {
    question: "How long does evaluation take?",
    answer: "We provide the fastest evaluation in the industry. Your answer sheets are evaluated and uploaded within 24-48 working hours of submission."
  },
  {
    question: "Are the tests based on latest ICSI syllabus?",
    answer: "Yes, all our test papers are regularly updated as per the latest ICSI syllabus and exam pattern. We ensure complete coverage of all topics in both Module 1 and Module 2."
  },
  {
    question: "Do you provide mentorship by All India Rankers?",
    answer: "Yes, our Chapterwise and Unitwise plans include live mentorship sessions by All India Rankers who have cleared CS Executive exams with top ranks."
  },
  {
    question: "What is the success rate of your test series?",
    answer: "Our students have consistently performed well in CS Executive exams. We've produced multiple AIRs including AIR 8 and AIR 9. Many students achieve exemptions in multiple papers."
  },
  {
    question: "How is the evaluation done?",
    answer: "Our evaluation follows the exact ICSI marking scheme. Qualified CS professionals and AIRs evaluate each answer with detailed feedback, highlighting areas for improvement."
  },
  {
    question: "Can I access tests on mobile?",
    answer: "Yes, our platform is fully mobile-friendly. You can access all test series, submit answers, and view evaluations on any device."
  },
  {
    question: "What is the validity period?",
    answer: "Validity depends on your plan: Chapterwise (12 months), Unitwise (8 months), Full Syllabus (4 months). You can attempt tests any number of times during this period."
  },
  {
    question: "What is the difference between Module 1 and Module 2?",
    answer: "Module 1 consists of 4 papers focusing on foundational concepts. Module 2 consists of 3 papers covering advanced topics like capital markets, tax laws, and commercial laws."
  },
  {
    question: "How many tests are there in each plan?",
    answer: "Chapterwise plan includes tests for each chapter plus full syllabus tests. Unitwise plan includes unit-wise tests plus full syllabus tests. Full Syllabus plan includes comprehensive mock tests only."
  }
])

const getModulePrice = (planId, module) => {
  const prices = {
    chapterwise: { 'module1': 3196, 'module2': 2396 },
    unitwise: { 'module1': 1996, 'module2': 1497 },
    fullsyllabus: { 'module1': 476, 'module2': 357 }
  }
  return prices[planId]?.[module] || 0
}

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? -1 : index
}

useSeoMeta({
  title: 'CS Executive Test Series - Chapterwise, Unitwise & Full Syllabus | CS Test Series',
  description: "India's #1 CS Executive Test Series for ICSI exams. Chapterwise from Rs 849, Unitwise from Rs 499, Full Syllabus from Rs 149. Module 1 at Rs 3196, Module 2 at Rs 2396. Designed by AIRs with fastest evaluation 24-48 hours.",
  ogTitle: 'Best CS Executive Test Series - Clear in First Attempt',
  ogDescription: "India's #1 CS Executive Test Series. Chapterwise at Rs 849, Module 1 at Rs 3196, Module 2 at Rs 2396. Designed by AIRs.",
  ogUrl: 'https://exam60.online/cs-executive-test-series',
  twitterCard: 'summary_large_image',
  keywords: 'cs executive test series, cs executive test series 2026, cs executive mock test, cs executive online test, cs executive chapterwise test series, cs executive unitwise test series, icsi cs executive test series, best cs executive test series, cs executive test series online, cs executive test series price, cs executive test series papers, cs executive test series module 1, cs executive test series module 2, cs executive test series by air'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://exam60.online/cs-executive-test-series' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "CS Executive Test Series",
        "description": "Best CS Executive Test Series with chapterwise, unitwise & full syllabus tests for Module 1 & 2. Designed by AIRs with weekly mentorship and fastest 24-48 hour evaluation.",
        "brand": {
          "@type": "Brand",
          "name": " Mission CS Test Series"
        },
        "sku": "CS-EXEC-TESTSERIES",
        "offers": {
          "@type": "Offer",
          "price": "1699",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "url": "https://exam60.online/cs-executive-test-series"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "5000",
          "bestRating": "5"
        },
        "seller": {
          "@type": "Organization",
          "name": "CS Test Series"
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "CS Executive Test Series",
        "description": "Comprehensive CS Executive Test Series for ICSI exams. Includes chapterwise, unitwise, and full syllabus mock tests for Module 1 & 2.",
        "provider": {
          "@type": "Organization",
          "name": "CS Test Series",
          "url": "https://exam60.online"
        },
        "offers": {
          "@type": "Offer",
          "price": "1699",
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
          {"@type": "Question", "name": "What is included in CS Executive Test Series?", "acceptedAnswer": {"@type": "Answer", "text": "Our CS Executive Test Series includes chapterwise, unitwise, and full syllabus tests for all 7 papers (4 in Module 1 and 3 in Module 2). Each test comes with detailed evaluation, model answers, and mentorship sessions by AIRs."}},
          {"@type": "Question", "name": "How long does evaluation take?", "acceptedAnswer": {"@type": "Answer", "text": "We provide the fastest evaluation in the industry. Your answer sheets are evaluated and uploaded within 24-48 working hours of submission."}},
          {"@type": "Question", "name": "Are the tests based on latest ICSI syllabus?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, all our test papers are regularly updated as per the latest ICSI syllabus and exam pattern."}},
          {"@type": "Question", "name": "Do you provide mentorship by All India Rankers?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, our Chapterwise and Unitwise plans include live mentorship sessions by All India Rankers."}},
          {"@type": "Question", "name": "What is the success rate of your test series?", "acceptedAnswer": {"@type": "Answer", "text": "Our students have consistently performed well. We've produced multiple AIRs including AIR 8 and AIR 9. Many students achieve exemptions in multiple papers."}}
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

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.highlight {
  color: #34d399;
}

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

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.7;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.2);
}

/* Sections */
.section {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.section-header p {
  font-size: 1.125rem;
  color: #64748b;
}

/* Plans Section */
.plans-section {
  background: #f8fafc;
}

.plans-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.plan-tab {
  padding: 0.875rem 2rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.plan-tab.active {
  background: #1e293b;
  border-color: #1e293b;
  color: white;
}

.plan-content {
  max-width: 700px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
}

.plan-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.plan-header h3 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.plan-header p {
  color: #64748b;
}

.plan-features {
  margin-bottom: 1.5rem;
}

.plan-features h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.plan-features ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.plan-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #475569;
}

.plan-features li svg {
  color: #10b981;
}

.module-box {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
}

.module-box h4 {
  text-align: center;
  margin-bottom: 1rem;
}

.pricing-grid {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.pricing-item {
  text-align: center;
}

.paper-name {
  display: block;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.25rem;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
}

.pricing-item.total {
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.plan-cta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Features */
.features-section {
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.feature-card {
  background: #f8fafc;
  padding: 1.75rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.2s;
}

.feature-card:hover {
  border-color: #1e293b;
}

.feature-icon {
  width: 52px;
  height: 52px;
  margin: 0 auto 1rem;
  background: #e2e8f0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e293b;
}

.feature-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Subjects */
.subjects-section {
  background: #f8fafc;
}

.subjects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.subject-card {
  background: white;
  padding: 1.75rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
}

.subject-card:hover {
  border-color: #1e293b;
  transform: translateY(-2px);
}

.subject-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  border-radius: 0.5rem;
  color: #1e293b;
}

.subject-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.subject-card p {
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.subject-link {
  color: #1e293b;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.875rem;
}

.subject-link:hover {
  text-decoration: underline;
}

/* SEO Section */
.seo-section {
  background: white;
}

.seo-grid {
  display: grid;
  gap: 1.5rem;
}

.seo-card {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.seo-card h3 {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
}

.seo-card p {
  color: #475569;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.seo-card ul {
  list-style: none;
}

.seo-card li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #475569;
}

.seo-card li svg {
  color: #1e293b;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

/* FAQ */
.faq-section {
  background: #f8fafc;
}

.faq-grid {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  cursor: pointer;
  text-align: left;
}

.faq-question svg {
  color: #64748b;
  transition: transform 0.2s;
}

.faq-item.active .faq-question svg {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 1.25rem 1.25rem;
}

.faq-answer p {
  color: #475569;
  line-height: 1.7;
}

/* CTA */
.cta-section {
  position: relative;
  padding: 5rem 0;
}

.cta-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  z-index: -1;
}

.cta-content {
  text-align: center;
  color: white;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  opacity: 0.85;
  margin-bottom: 1.5rem;
}

.cta-contact {
  margin-bottom: 2rem;
}

.cta-contact a {
  color: #34d399;
  font-weight: 600;
  text-decoration: none;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-primary {
  background: #1e293b;
  color: white;
}

.btn-primary:hover {
  background: #0f172a;
}

.btn-white {
  background: white;
  color: #1e293b;
}

.btn-white:hover {
  background: #f1f5f9;
}

.btn-outline {
  background: transparent;
  border: 2px solid #1e293b;
  color: #1e293b;
}

.btn-outline:hover {
  background: #1e293b;
  color: white;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .subjects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .hero-content h1 { font-size: 2rem; }
  .features-grid { grid-template-columns: 1fr; }
  .subjects-grid { grid-template-columns: 1fr; }
  .hero-stats { gap: 1rem; }
  .stat-divider { display: none; }
  .plan-features ul { grid-template-columns: 1fr; }
  .pricing-grid { flex-direction: column; }
}
</style>
