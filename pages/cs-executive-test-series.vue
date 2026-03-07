<template>
  <div>
    <!-- Promo Marquee -->
    <div class="promo-marquee">
      <div class="marquee-content">
        <span>Use Code MISSIONCS for Best Price - Limited Period Offer!</span>
        <span>Use Code MISSIONCS for Best Price - Limited Period Offer!</span>
        <span>Use Code MISSIONCS for Best Price - Limited Period Offer!</span>
        <span>Use Code MISSIONCS for Best Price - Limited Period Offer!</span>
        <span>Use Code MISSIONCS for Best Price - Limited Period Offer!</span>
        <span>Use Code MISSIONCS for Best Price - Limited Period Offer!</span>
        <span>Use Code MISSIONCS for Best Price - Limited Period Offer!</span>
        <span>Use Code MISSIONCS for Best Price - Limited Period Offer!</span>
      </div>
    </div>

    <!-- Course Hero -->
    <section class="course-hero executive">
      <div class="container">
        <div class="course-hero-content">
          <h1>CS Executive Test Series</h1>
          <p>Best Test Series for CS Executive Programme | Designed by AIRs</p>
          <NuxtLink to="#plans" class="btn btn-white btn-lg">View Plans</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Plans Section -->
    <section class="section plans-section" id="plans">
      <div class="container">
        <h2 class="section-title">CS Executive Test Series Plans</h2>
        <p class="section-subtitle">Choose your plan</p>

        <div class="plans-tabs">
          <button 
            v-for="plan in plans" 
            :key="plan.id" 
            class="plan-tab"
            :class="{ active: activePlan === plan.id }"
            @click="activePlan = plan.id"
          >
            {{ plan.name }}
          </button>
        </div>

        <div class="plan-content" v-for="plan in plans" :key="plan.id + '-content'" v-show="activePlan === plan.id">
          <div class="plan-header-info">
            <h3>{{ plan.name }} Test Series</h3>
          </div>
          
          <!-- Features Above Subjects -->
          <div class="plan-features-box">
            <h4>{{ plan.name }} Features:</h4>
            <ul>
              <li v-for="(feature, i) in plan.features" :key="i">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- Module 1 -->
          <div class="module-section">
            <h3 class="module-title">Module 1</h3>
            <div class="subjects-grid">
              <div v-for="subject in module1Subjects" :key="subject.id" class="subject-card">
                <div class="subject-header">
                  <span class="subject-paper">{{ subject.paper }}</span>
                  <span class="subject-name">{{ subject.name }}</span>
                </div>
                <div class="subject-pricing">
                  <span class="discount-price">Rs. {{ getModule1Price(plan.id) }}</span>
                </div>
                <a href="https://missioncstestseries.com/login" class="btn btn-primary btn-full">Add to Cart</a>
              </div>
            </div>
            <div class="module-total">
              <span>Module 1 Total: Rs. {{ getModule1Price(plan.id) }}</span>
            </div>
          </div>

          <!-- Module 2 -->
          <div class="module-section">
            <h3 class="module-title">Module 2</h3>
            <div class="subjects-grid">
              <div v-for="subject in module2Subjects" :key="subject.id" class="subject-card">
                <div class="subject-header">
                  <span class="subject-paper">{{ subject.paper }}</span>
                  <span class="subject-name">{{ subject.name }}</span>
                </div>
                <div class="subject-pricing">
                  <span class="discount-price">Rs. {{ getModule2Price(plan.id) }}</span>
                </div>
                <a href="https://missioncstestseries.com/login" class="btn btn-primary btn-full">Add to Cart</a>
              </div>
            </div>
            <div class="module-total">
              <span>Module 2 Total: Rs. {{ getModule2Price(plan.id) }}</span>
            </div>
          </div>

          <div class="plan-actions">
            <a href="https://missioncstestseries.com/cstestseriesschedule" class="btn btn-outline" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download Schedule
            </a>
            <a href="https://missioncstestseries.com/login" class="btn btn-accent btn-lg">
              Buy {{ plan.name }} Plan
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO Content -->
    <section class="section seo-content-section">
      <div class="container">
        <div class="seo-text">
          <h2>Best CS Executive Test Series for ICSI Exams</h2>
          <p>
            Welcome to Mission CS Test Series, India's #1 platform for CS Executive Test Series preparation. Our comprehensive test series is specifically designed for students appearing in the CS Executive examination conducted by ICSI. With test papers designed by All India Rankers who have cleared the exams with top ranks, we ensure thorough preparation across all seven papers of the CS Executive Programme. Our mission is to help every student achieve their dream of becoming a qualified Company Secretary.
          </p>
          <p>
            Our CS Executive Test Series includes Chapterwise Test Series, Unitwise Test Series, and Full Syllabus Test Series. Each test is crafted with case-based unseen questions that mimic the real exam environment. With fastest evaluation in 24-48 working hours, students can quickly learn from their mistakes and improve their scores. The CS Executive exam is a prestigious qualification that opens doors to rewarding careers in corporate governance, company secretarial practice, and leadership roles.
          </p>
          <p>
            Weekly mentorship sessions by AIRs provide strategy guidance and personalized feedback. Our double-layer strict evaluation ensures accurate marking and detailed feedback on every answer. Join thousands of successful students who cleared their CS Executive exams with our test series. Our track record includes producing All India Rankers in every attempt, with recent successes including AIR 8 and AIR 9.
          </p>
          <p>
            The CS Executive Programme is divided into two modules - Module 1 and Module 2. Module 1 covers papers including Jurisprudence Interpretation and General Laws, Company Law and Practice, Setting Up of Business Industrial and Labour Laws, and Corporate Accounting and Financial Management. Module 2 includes Capital Market and Securities Laws, Economic Commercial and Intellectual Property Laws, and Tax Laws and Practice. Our test series covers all these subjects comprehensively.
          </p>
          <p>
            What makes our CS Executive Test Series stand out is the personalized attention we provide to each student. Our team of qualified CS professionals and All India Rankers work tirelessly to ensure that every question in our test series is of the highest quality. We understand the importance of answer presentation in CS exams and train our students accordingly. With our structured approach to answer writing, students learn how to present their knowledge in a manner that maximizes marks.
          </p>
          <p>
            For Module 1, our CS Executive Test Series covers Jurisprudence Interpretation and General Laws which includes topics like interpretation of statutes, general principles of law, and important legal frameworks. Company Law and Practice covers the Companies Act, 2013, corporate governance, and compliance requirements. Setting Up of Business Industrial and Labour Laws covers various aspects of starting and operating a business in India. Corporate Accounting and Financial Management covers accounting standards, financial management, and corporate finance concepts.
          </p>
          <p>
            For Module 2, Capital Market and Securities Laws covers SEBI regulations, securities market operations, and investor protection. Economic Commercial and Intellectual Property Laws covers competition law, intellectual property rights, and international trade laws. Tax Laws and Practice covers income tax, goods and services tax, and other tax provisions. Each subject is thoroughly covered with multiple test papers and case studies.
          </p>
          <p>
            Our Chapterwise Test Series provides one test for each chapter covering 20-40 marks, plus one full syllabus test of 100 marks. The Unitwise Test Series provides four unit-wise tests covering 20-40 marks each, plus one full syllabus test. The Full Syllabus Test Series provides comprehensive full length mock tests. All plans include live mentorship sessions, strategy guidance, detailed evaluation, and suggested answers.
          </p>
          <p>
            One of the key highlights of our CS Executive Test Series is the weekly mentorship sessions conducted by All India Rankers. These sessions provide valuable insights into exam preparation strategies, time management techniques, and answer presentation skills. Students get the opportunity to interact directly with AIRs who have cleared the exams and understand what it takes to succeed. This personalized guidance helps students avoid common mistakes and focus on high-weightage topics.
          </p>
          <p>
            Our evaluation process is rigorous and thorough. Every answer is evaluated by qualified CS professionals and All India Rankers who understand the marking scheme and evaluation criteria. We provide detailed feedback on every answer, highlighting areas where students lost marks and suggesting improvements. This double-layer strict evaluation ensures that students get accurate assessment of their performance and understand exactly how to improve their scores.
          </p>
          <p>
            The CS Executive examination is conducted by ICSI twice a year, and passing this exam is a significant milestone in every aspiring Company Secretary's journey. Our test series is designed to help students clear both Module 1 and Module 2 in their first attempt. We provide comprehensive coverage of all seven papers, with special focus on case-based questions that test practical understanding of corporate laws and business scenarios.
          </p>
          <p>
            For CS Executive Module 1, Jurisprudence Interpretation and General Laws is a foundational paper that requires understanding of legal concepts, interpretation of statutes, and general principles of law. Our test series includes detailed questions on constitutional law, civil law, criminal law, and procedural laws. Company Law and Practice covers the Companies Act, 2013 in depth, including provisions related to incorporation, management, meetings, dividends, and corporate governance. Setting Up of Business Industrial and Labour Laws covers various aspects of starting and operating a business in India, including industrial laws, labour laws, and regulatory requirements.
          </p>
          <p>
            Corporate Accounting and Financial Management is a challenging paper that covers accounting standards, financial management, and corporate finance concepts. Our test series includes questions on ratio analysis, cash flow analysis, capital budgeting, working capital management, and financial planning. Detailed explanations help students understand complex financial concepts and their practical applications in corporate settings.
          </p>
          <p>
            For CS Executive Module 2, Capital Market and Securities Laws covers SEBI regulations, securities market operations, investor protection, and market instruments. Our test series includes questions on primary and secondary markets, derivative trading, mutual fund regulations, and corporate actions. Economic Commercial and Intellectual Property Laws covers competition law, intellectual property rights, international trade laws, and e-commerce regulations. Tax Laws and Practice is a comprehensive paper covering income tax, goods and services tax, and other tax provisions. Our test series includes practical case studies that help students understand tax planning and compliance requirements.
          </p>
          <p>
            Join Mission CS Test Series today and take the first step towards a successful career in corporate governance. Our comprehensive study material, expert guidance, and proven track record make us the preferred choice for CS Executive preparation. With our support, you can clear your CS Executive exams in the first attempt. We take pride in our student success stories and continuously strive to improve our content and services based on student feedback. Our commitment to excellence ensures that every student receives the best possible preparation for their CS Executive examinations.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const activePlan = ref('chapterwise')

const plans = ref([
  {
    id: 'chapterwise',
    name: 'Chapterwise',
    features: [
      '1 Test for Each Chapters (20-40 Marks)',
      '1 Full Syllabus Test Series (100 Marks)',
      'Weekly Live Mentorship by AIRs',
      'Strategy by AIRs',
      'Detailed Evaluation by AIRs/Qualified CS',
      'Module based Notes by AIRs',
      'Suggested Answers'
    ]
  },
  {
    id: 'unitwise',
    name: 'Unitwise',
    features: [
      '4 Unit wise Test (20-40 Marks)',
      '1 Full Syllabus Test Series (100 Marks)',
      'Monthly Live Mentorship by AIRs',
      'Strategy by AIRs',
      'Detailed Evaluation by AIRs/Qualified CS',
      'Module based Notes by AIRs',
      'Suggested Answers'
    ]
  },
  {
    id: 'fullsyllabus',
    name: 'Full Syllabus',
    features: [
      '1 Full Syllabus Test Series (100 Marks)',
      'Detailed Evaluation by AIRs/Qualified CS',
      'Suggested Answers'
    ]
  }
])

const module1Subjects = ref([
  { id: 1, paper: 'Paper-1', name: 'Jurisprudence, Interpretation & General Laws' },
  { id: 2, paper: 'Paper-2', name: 'Company Law & Practice' },
  { id: 3, paper: 'Paper-3', name: 'Setting Up of Business, Industrial & Labour Laws' },
  { id: 4, paper: 'Paper-4', name: 'Corporate Accounting & Financial Management' }
])

const module2Subjects = ref([
  { id: 5, paper: 'Paper-5', name: 'Capital Market & Securities Laws' },
  { id: 6, paper: 'Paper-6', name: 'Economic, Commercial & Intellectual Property Laws' },
  { id: 7, paper: 'Paper-7', name: 'Tax Laws and Practice' }
])

const getModule1Price = (planId) => {
  const prices = {
    'chapterwise': 849,
    'unitwise': 499,
    'fullsyllabus': 149
  }
  return prices[planId] || 0
}

const getModule2Price = (planId) => {
  const prices = {
    'chapterwise': 849,
    'unitwise': 499,
    'fullsyllabus': 149
  }
  return prices[planId] || 0
}

const getSubjectPrice = (planId) => {
  const prices = {
    'chapterwise': 799,
    'unitwise': 499,
    'fullsyllabus': 149
  }
  return prices[planId] || 0
}

useSeoMeta({
  title: 'CS Executive Test Series 2026 - Chapterwise, Unitwise & Full Syllabus | Mission CS',
  description: 'Best cs executive test series with chapterwise, unitwise & full syllabus tests. Designed by AIRs with weekly mentorship. Covers Module 1 & Module 2. Use code MISSIONCS for discount.',
  ogTitle: 'CS Executive Test Series 2026 - Prepare with AIRs',
  ogDescription: 'India\'s #1 CS Executive Test Series with chapterwise, unitwise & full syllabus tests. Fastest evaluation in 24-48 hours. Join now!',
  ogUrl: 'https://missioncstestseries.com/cs-executive-test-series',
  twitterCard: 'summary_large_image',
  keywords: 'cs executive test series, cs executive test series 2026, cs executive mock test, cs executive online test, cs executive chapterwise test series, cs executive unitwise test series, icsi cs executive test series, best cs executive test series, cs executive test series online, cs executive test series price'
});

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "CS Executive Test Series",
        "description": "Best CS Executive Test Series with chapterwise, unitwise & full syllabus tests. Designed by AIRs with weekly mentorship.",
        "brand": {
          "@type": "Brand",
          "name": "Mission CS Test Series"
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "149",
          "highPrice": "849",
          "priceCurrency": "INR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "5000"
        }
      })
    }
  ]
})
</script>

<style scoped>
.promo-marquee {
  background: linear-gradient(90deg, #ea580c, #f59e0b, #ea580c);
  padding: 0.85rem 0;
  overflow: hidden;
  position: relative;
  margin-top: 70px;
}

.marquee-content {
  display: flex;
  animation: marquee 20s linear infinite;
  white-space: nowrap;
}

.marquee-content span {
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 0 2rem;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.course-hero {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #ea580c 0%, #c2410c 100%);
  color: var(--white);
}

.course-hero-content {
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
}

.course-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.course-hero p {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.plans-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.plan-tab {
  padding: 1rem 2rem;
  background: var(--white);
  border: 2px solid var(--gray-200);
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.plan-tab.active {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}

.plan-content {
  margin-top: 2rem;
}

.plan-header-info {
  text-align: center;
  margin-bottom: 2rem;
}

.plan-header-info h3 {
  font-size: 1.75rem;
}

.plan-features-box {
  background: var(--gray-50);
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.plan-features-box h4 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.plan-features-box ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  list-style: none;
}

.plan-features-box li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-700);
}

.plan-features-box svg {
  width: 18px;
  height: 18px;
  color: var(--success);
  flex-shrink: 0;
}

.module-section {
  margin-bottom: 2rem;
}

.module-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary);
  text-align: center;
}

.subjects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.subject-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.2s ease;
  text-align: center;
}

.subject-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.subject-header {
  margin-bottom: 1rem;
}

.subject-paper {
  display: inline-block;
  background: var(--gray-100);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gray-600);
}

.subject-name {
  display: block;
  font-weight: 600;
  margin-top: 0.5rem;
  color: var(--gray-900);
  font-size: 0.875rem;
}

.subject-pricing {
  margin-bottom: 1rem;
}

.discount-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}

.module-total {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
  padding: 1rem;
  background: var(--gray-50);
  border-radius: 0.5rem;
}

.plan-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.plan-actions .btn-outline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.plan-actions svg {
  width: 20px;
  height: 20px;
}

.plan-actions a {
  text-decoration: none;
}

.seo-content-section {
  background: var(--gray-50);
}

.seo-text {
  max-width: 800px;
  margin: 0 auto;
}

.seo-text h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--gray-900);
}

.seo-text p {
  color: var(--gray-700);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.btn-full {
  width: 100%;
}

@media (max-width: 1024px) {
  .subjects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .plan-features-box ul {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .course-hero h1 {
    font-size: 2rem;
  }

  .subjects-grid {
    grid-template-columns: 1fr;
  }

  .plans-tabs {
    grid-template-columns: 1fr;
  }
}
</style>
