<template>
  <div>
    <!-- Promo Marquee -->
    <div class="promo-marquee">
      <div class="marquee-content">
        <span>🎉 Use Code MISSIONCS for Best Price - Limited Period Offer! 🎉</span>
        <span>🎉 Use Code MISSIONCS for Best Price - Limited Period Offer! 🎉</span>
        <span>🎉 Use Code MISSIONCS for Best Price - Limited Period Offer! 🎉</span>
        <span>🎉 Use Code MISSIONCS for Best Price - Limited Period Offer! 🎉</span>
        <span>🎉 Use Code MISSIONCS for Best Price - Limited Period Offer! 🎉</span>
        <span>🎉 Use Code MISSIONCS for Best Price - Limited Period Offer! 🎉</span>
        <span>🎉 Use Code MISSIONCS for Best Price - Limited Period Offer! 🎉</span>
        <span>🎉 Use Code MISSIONCS for Best Price - Limited Period Offer! 🎉</span>
      </div>
    </div>

    <!-- Course Hero -->
    <section class="course-hero cseet">
      <div class="container">
        <div class="course-hero-content">
          <span class="course-badge">Foundation Level</span>
          <h1>CSEET Test Series</h1>
          <p>Company Secretary Executive Entrance Test | Designed by AIRs</p>
          <div class="course-hero-stats">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              150+ Mock Tests
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Fastest Evaluation
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              Video Solutions
            </span>
          </div>
          <NuxtLink to="#plans" class="btn btn-white btn-lg">View Plans</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Plans Section -->
    <section class="section plans-section" id="plans">
      <div class="container">
        <h2 class="section-title">CSEET Test Series Plans</h2>
        <p class="section-subtitle">Choose your plan for CSEET preparation</p>

        <div class="plans-grid">
          <div v-for="plan in plans" :key="plan.id" class="plan-card">
            <div class="plan-header">
              <h3>{{ plan.name }}</h3>
            </div>
            <div class="plan-price">
              <span class="price">Rs. {{ plan.price }}</span>
            </div>
            <div class="plan-features">
              <ul>
                <li v-for="(feature, i) in plan.features" :key="i">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  {{ feature }}
                </li>
              </ul>
            </div>
            <div class="plan-actions">
              <a href="https://missioncstestseries.com/cstestseriesschedule" class="btn btn-outline" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Schedule
              </a>
              <a href="https://missioncstestseries.com/login" class="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO Content -->
    <section class="section seo-content-section">
      <div class="container">
        <div class="seo-text">
          <h2>CSEET Test Series - Your Gateway to CS Executive</h2>
          <p>
            The Company Secretary Executive Entrance Test (CSEET) is the gateway to the CS Executive Programme conducted by ICSI. Our CSEET Test Series provides comprehensive preparation for all sections of the entrance exam including Business Communication, Economics & Statistics, Corporate Laws, and Quantitative Aptitude. This online test series is designed to help students clear the CSEET exam in their first attempt with confidence and ease.
          </p>
          <p>
            Our test series is designed by experienced faculty and All India Rankers who understand the exam pattern and difficulty level. With chapter-wise tests, mock tests, and video solutions, we ensure complete preparation for the CSEET examination. The CSEET exam is conducted twice a year and tests students on their conceptual understanding and analytical abilities. Our comprehensive test series covers all aspects of the syllabus prescribed by ICSI.
          </p>
          <p>
            The CSEET exam consists of four papers: Business Communication, Economics and Statistics, Corporate Laws, and Quantitative Aptitude. Each paper carries 100 marks, and students need to secure minimum qualifying marks to pass. Our test series provides detailed coverage of all topics in these papers, ensuring students are well-prepared for every type of question that may appear in the exam.
          </p>
          <p>
            Our Chapterwise Test Series for CSEET includes one test for each chapter, covering 20-40 marks per test, plus one full syllabus test of 100 marks. This comprehensive approach ensures that students cover every topic thoroughly and identify areas that need more attention. The Unitwise Test Series provides four unit-wise tests covering 20-40 marks each, plus one full syllabus test. The Full Syllabus Test Series provides complete mock tests that simulate the actual exam environment.
          </p>
          <p>
            Business Communication is a crucial paper in CSEET that tests students on their English language skills, grammar, vocabulary, and business writing abilities. Our test series includes extensive practice questions on letter writing, essay writing, precis writing, and comprehension passages. Students also get access to video solutions that explain the nuances of business communication and help improve writing skills.
          </p>
          <p>
            Economics and Statistics is another important paper that covers microeconomics, macroeconomics, and statistical methods. Our test series includes questions on demand and supply analysis, national income, monetary policy, fiscal policy, measures of central tendency, correlation, and regression. Detailed explanations and video solutions help students understand complex economic concepts and statistical techniques.
          </p>
          <p>
            Corporate Laws paper covers the Companies Act, 2013, FEMA, SEBI regulations, and other corporate laws. This is a challenging paper that requires thorough understanding of legal provisions and their practical applications. Our test series includes case-based questions that test students' knowledge of corporate laws and their ability to apply legal principles to real-world scenarios. Questions on board meetings, shareholder meetings, corporate governance, and regulatory compliance are covered in detail.
          </p>
          <p>
            Quantitative Aptitude tests students on mathematical and numerical skills. Our test series covers topics like arithmetic, algebra, geometry, trigonometry, and data interpretation. We provide step-by-step solutions and video explanations that help students develop problem-solving skills and improve their speed and accuracy. Regular practice through our test series enables students to solve complex quantitative problems with ease.
          </p>
          <p>
            What sets our CSEET Test Series apart is the personalized attention we provide to each student. Our team of qualified faculty and All India Rankers work tirelessly to ensure that every question in our test series is of the highest quality. We provide detailed evaluation and feedback on every answer, helping students understand their strengths and weaknesses. With our structured approach to exam preparation, students can clear CSEET in their first attempt.
          </p>
          <p>
            Join thousands of successful students who have cleared their CSEET exam with our test series. Our track record speaks for itself - we have helped numerous students achieve their dream of becoming Company Secretaries. With Mission CS Test Series, you are not just buying a test series - you are investing in your future. Our comprehensive study material, expert guidance, and proven track record make us the preferred choice for CSEET preparation.
          </p>
          <p>
            Our online platform is user-friendly and accessible 24/7, allowing students to practice at their convenience. We provide mobile-friendly access so you can study anywhere, anytime. The interface is intuitive and easy to navigate, making your preparation journey smooth and hassle-free. Technical support is available round the clock to assist you with any queries. Start your CSEET preparation with Mission CS Test Series today and take the first step towards a successful career in corporate governance.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const plans = ref([
  {
    id: 1,
    name: 'Chapter wise Plan',
    price: 899,
    features: [
      '1 full Mock Tests',
      'Chapter-wise Tests',
      'Detailed evaluation',
      'Doubt session',
      'Access on Mobile'
    ]
  },
  {
    id: 2,
    name: 'Unit wise Plan',
    price: 499,
    features: [
      '4 unit wise  Mock Tests',
      '1 full Syllabus Tests',
      'Detailed evaluation Solutions',
      'Advanced Analytics',
      'Priority Support',
      'Download Schedule'
    ]
  },
  {
    id: 3,
    name: 'Full Syllabus Test Plan',
    price: 149,
    features: [
      '1 Mock Tests',
      'Deatiled Evalaution',
      'Guidelines Solutions',
      'Detailed Analytics',
      'Performave based guidance',
      'No doubt support',
      'ExamsUpdates'
    ]
  }
])

useSeoMeta({
  title: 'CSEET Test Series - Online Mock Tests | Mission CS',
  description: 'Best CSEET Test Series with 150+ mock tests, chapterwise & unitwise tests. Prepare for ICSI Company Secretary Executive Entrance Test. Designed by AIRs. Use code MISSIONCS for discount.',
  ogTitle: 'CSEET Test Series - Prepare with AIRs',
  ogDescription: 'India\'s #1 CSEET Test Series. Comprehensive preparation for CS Executive Entrance Test with chapterwise, unitwise & full syllabus tests.',
  ogUrl: 'https://missioncstestseries.com/cseet-test-series',
  twitterCard: 'summary_large_image',
  keywords: 'cs test series, CSEET test series, cseet exam, icsi cseet, company secretary entrance test, cseet mock test, cseet online test, cseet preparation, best cseet test series, cseet test series 2026'
});

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "CSEET Test Series",
        "description": "Best CSEET Test Series with 150+ mock tests, chapterwise & unitwise tests. Prepare for ICSI Company Secretary Executive Entrance Test.",
        "brand": {
          "@type": "Brand",
          "name": "Mission CS Test Series"
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "149",
          "highPrice": "899",
          "priceCurrency": "INR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "2000"
        }
      })
    }
  ]
})
</script>

<style scoped>
.promo-marquee {
  background: linear-gradient(90deg, #1e3a8a, #3b82f6, #1e3a8a);
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
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  color: var(--white);
}

.course-hero-content {
  max-width: 700px;
}

.course-badge {
  display: inline-block;
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
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

.course-hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.course-hero-stats span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.course-hero-stats svg {
  width: 20px;
  height: 20px;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.plan-card {
  background: var(--white);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  position: relative;
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

.plan-header h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.plan-price {
  margin-bottom: 1.5rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
}

.plan-features ul {
  list-style: none;
  margin-bottom: 2rem;
}

.plan-features li {
  padding: 0.5rem 0;
  color: var(--gray-700);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.plan-features svg {
  width: 18px;
  height: 18px;
  color: var(--success);
}

.plan-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.plan-actions .btn-outline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;
  text-decoration: none;
}

.plan-actions .btn-primary {
  text-decoration: none;
}

.plan-actions svg {
  width: 18px;
  height: 18px;
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

@media (max-width: 1024px) {
  .plans-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .course-hero h1 {
    font-size: 2rem;
  }

  .plans-grid {
    grid-template-columns: 1fr;
  }
}
</style>
