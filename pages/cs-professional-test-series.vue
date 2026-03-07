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
    <section class="course-hero professional">
      <div class="container">
        <div class="course-hero-content">
          <h1>CS Professional Test Series</h1>
          <p>Best Test Series for CS Professional Programme | Designed by AIRs</p>
          <NuxtLink to="#plans" class="btn btn-white btn-lg">View Plans</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Plans Section -->
    <section class="section plans-section" id="plans">
      <div class="container">
        <h2 class="section-title">CS Professional Test Series Plans</h2>
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
                <a href="https://missioncstestseries.com/login" class="btn btn-success btn-full">Add to Cart</a>
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
                <a href="https://missioncstestseries.com/login" class="btn btn-success btn-full">Add to Cart</a>
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
            <a href="https://missioncstestseries.com/login" class="btn btn-success btn-lg">
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
          <h2>Best CS Professional Test Series for ICSI Exams</h2>
          <p>
            Our CS Professional Test Series is designed for students appearing in the CS Professional examination conducted by ICSI. This is the highest level of the Company Secretary course, requiring advanced knowledge and practical application of corporate laws, securities laws, economic policies, and governance frameworks. Our test series prepares you comprehensively for all aspects of the CS Professional examination.
          </p>
          <p>
            We offer Chapterwise Test Series, Unitwise Test Series, and Full Syllabus Test Series for CS Professional. Each test includes case-based unseen questions that prepare you for the actual exam. With fastest evaluation in 24-48 working hours, students can quickly identify weaknesses and improve. Our questions are designed by All India Rankers who have cleared CS Professional exams with top ranks.
          </p>
          <p>
            The CS Professional Programme consists of two modules - Module 1 and Module 2. Module 1 covers Environmental Social and Governance Principles and Practice, Drafting Pleadings and Appearances, Compliance Management Audit and Due Diligence, and CSR and Social Governance. Module 2 includes Strategic Management and Corporate Finance, Corporate Restructuring Valuation and Insolvency, and Insolvency and Bankruptcy Code.
          </p>
          <p>
            Our CS Professional Test Series includes comprehensive case studies and practical scenarios that mirror real-world corporate situations. This approach helps students develop the analytical skills required to excel in the professional exams. With one-on-one mentoring from qualified CS professionals, we provide personalized guidance to address individual learning needs and exam preparation strategies.
          </p>
          <p>
            The CS Professional examination is the final level in the Company Secretary course and requires advanced knowledge and practical application of various corporate laws and business concepts. Our test series is designed to help students clear both Module 1 and Module 2 in their first attempt. We provide comprehensive coverage of all seven papers, with special focus on case-based questions, practical scenarios, and latest amendments in corporate laws.
          </p>
          <p>
            For CS Professional Module 1, Environmental Social and Governance Principles and Practice is a contemporary paper that covers ESG framework, sustainability reporting, corporate social responsibility, and environmental regulations. Our test series includes questions on climate change, carbon footprint, corporate governance principles, and stakeholder engagement. Drafting Pleadings and Appearances is a practical paper that requires students to master the art of legal drafting, including petitions, plaints, written statements, and appearances before various forums and tribunals.
          </p>
          <p>
            Compliance Management Audit and Due Diligence is a comprehensive paper that covers compliance frameworks, internal audit, risk management, and due diligence procedures. Our test series includes practical case studies on compliance monitoring, audit planning, risk assessment, and corporate due diligence. CSR and Social Governance focuses on corporate social responsibility, sustainable development goals, and social audit. Students learn about CSR frameworks, impact assessment, and reporting requirements as per Companies Act, 2013.
          </p>
          <p>
            For CS Professional Module 2, Strategic Management and Corporate Finance covers strategic analysis, strategic implementation, mergers and acquisitions, and corporate finance concepts. Our test series includes questions on SWOT analysis, BCG matrix, Porter's five forces, valuation methods, and financial engineering. Corporate Restructuring Valuation and Insolvency is a specialized paper that covers corporate insolvency, bankruptcy code, restructuring mechanisms, and business valuation. Students get detailed exposure to insolvency resolution processes, liquidation procedures, and asset valuation techniques.
          </p>
          <p>
            Insolvency and Bankruptcy Code is a highly relevant paper given the increasing importance of IBC in corporate India. Our test series covers all aspects of the Insolvency and Bankruptcy Code, 2016, including corporate insolvency resolution process, liquidation process, voluntary liquidation, and cross-border insolvency. Questions on case studies and practical scenarios help students understand the application of IBC provisions in real-world situations.
          </p>
          <p>
            What makes our CS Professional Test Series stand out is the quality of our questions and the depth of evaluation. Every question is crafted by experienced faculty and All India Rankers who understand the exam pattern and marking scheme. Our questions test not just theoretical knowledge but also practical application and analytical abilities. Detailed explanations and suggested answers help students understand how to structure their answers for maximum marks.
          </p>
          <p>
            Our mentorship program connects students directly with qualified CS professionals and All India Rankers who provide guidance on exam preparation, time management, and answer presentation. Weekly live sessions allow students to clarify doubts, discuss strategies, and learn from the experiences of those who have cleared the exams with top ranks. This personalized attention ensures that every student gets the support they need to succeed.
          </p>
          <p>
            Join the league of successful CS professionals who achieved their dreams with our guidance and support. Our track record of producing All India Rankers in every attempt speaks volumes about the quality of our test series. With Mission CS Test Series, you are not just preparing for an exam - you are building a foundation for a successful career in corporate governance. Our comprehensive approach ensures that you are well-prepared to handle the challenges of the CS Professional examination and emerge successful.
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
  { id: 1, paper: 'Paper 1', name: 'Environmental, Social and Governance - Principles & Practice' },
  { id: 2, paper: 'Paper 2', name: 'Drafting, Pleadings & Appearances' },
  { id: 3, paper: 'Paper 3', name: 'Compliance Management, Audit & Due Diligence' },
  { id: 4, paper: 'Paper 4', name: 'CSR & Social Governance (Elective)' }
])

const module2Subjects = ref([
  { id: 5, paper: 'Paper 5', name: 'Strategic Management & Corporate Finance' },
  { id: 6, paper: 'Paper 6', name: 'Corporate Restructuring, Valuation & Insolvency' },
  { id: 7, paper: 'Paper 7', name: 'Insolvency and Bankruptcy Code (Elective)' }
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
  title: 'CS Professional Test Series - Chapterwise, Unitwise & Full Syllabus | Mission CS',
  description: 'Best cs professional test series with chapterwise, unitwise & full syllabus tests. Designed by AIRs. Covers ESG, Drafting, Compliance, IBC. Use code MISSIONCS for discount.',
  ogTitle: 'CS Professional Test Series - Prepare with AIRs',
  ogDescription: 'India\'s #1 CS Professional Test Series with chapterwise, unitwise & full syllabus tests. Fastest evaluation in 24-48 hours. Join now!',
  ogUrl: 'https://missioncstestseries.com/cs-professional-test-series',
  twitterCard: 'summary_large_image',
  keywords: 'cs professional test series, cs professional test series 2026, cs professional mock test, cs professional online test, cs professional chapterwise test series, cs professional unitwise test series, icsi cs professional test series, best cs professional test series, cs professional test series online, cs professional test series price'
});

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "CS Professional Test Series",
        "description": "Best CS Professional Test Series with chapterwise, unitwise & full syllabus tests. Designed by AIRs. Covers ESG, Drafting, Compliance, IBC.",
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
          "reviewCount": "3000"
        }
      })
    }
  ]
})
</script>

<style scoped>
.promo-marquee {
  background: linear-gradient(90deg, #059669, #10b981, #059669);
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
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
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
  background: var(--success);
  border-color: var(--success);
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
  color: var(--success);
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
  border-color: var(--success);
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
  color: var(--success);
}

.btn-success {
  background-color: var(--success);
  color: var(--white);
}

.btn-success:hover {
  background-color: #047857;
}

.module-total {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--success);
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
