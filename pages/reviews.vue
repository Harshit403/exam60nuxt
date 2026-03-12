<template>
  <div>
    <!-- Hero -->
    <section class="page-header">
      <div class="container">
        <h1>CS Test Series Reviews</h1>
        <p class="page-subtitle">Real student reviews and success stories for CS exam preparation</p>
      </div>
    </section>

    <!-- Stats -->
    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-value">4.9/5</span>
            <span class="stat-label">Average Rating</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">500+</span>
            <span class="stat-label">Student Reviews</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">99%</span>
            <span class="stat-label">Satisfaction Rate</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">20,000+</span>
            <span class="stat-label">Students Community</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Grid -->
    <section class="section reviews-section">
      <div class="container">
        <div class="section-header">
          <h2>What Students Say About CS Test Series</h2>
          <p>
            Genuine reviews from students who cleared their CS exams using our test series. 
            These are real success stories from CSEET, CS Executive, and CS Professional candidates.
          </p>
        </div>

        <div class="reviews-grid">
          <div v-for="review in reviews" :key="review.id" class="review-card">
            <div class="review-header">
              <div class="review-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div class="review-info">
                <h4>{{ review.name }}</h4>
                <span class="review-course">{{ review.course }}</span>
              </div>
            </div>
            <div class="review-rating">
              <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= review.rating }">★</span>
            </div>
            <p class="review-text">{{ review.comment }}</p>
            <div class="review-footer">
              <span class="review-date">{{ review.date }}</span>
              <span class="review-qualified">{{ review.qualified }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Course-wise Reviews -->
    <section class="section course-reviews">
      <div class="container">
        <div class="section-header">
          <h2>Reviews by CS Course</h2>
          <p>Find reviews specific to your exam level</p>
        </div>
        
        <div class="course-tabs">
          <button 
            v-for="course in courses" 
            :key="course.id"
            class="course-tab"
            :class="{ active: activeCourse === course.id }"
            @click="activeCourse = course.id"
          >
            {{ course.name }}
          </button>
        </div>

        <div class="course-reviews-grid">
          <div v-for="review in getCourseReviews(activeCourse)" :key="review.id" class="review-card">
            <div class="review-header">
              <div class="review-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div class="review-info">
                <h4>{{ review.name }}</h4>
              </div>
            </div>
            <div class="review-rating">
              <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= review.rating }">★</span>
            </div>
            <p class="review-text">{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Reviews Section -->
    <section class="section why-reviews-section">
      <div class="container">
        <div class="section-header">
          <h2>Why Students Love Our CS Test Series</h2>
          <p>Based on genuine student feedback and reviews</p>
        </div>
        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3>Top-Rated CS Test Series</h3>
            <p>With 4.9/5 average rating, we are one of the highest-rated CS test series in India. Students consistently praise our question quality and exam pattern similarity.</p>
          </div>
          <div class="why-card">
            <div class="why-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3>Fastest Evaluation</h3>
            <p>Students reviews highlight our 24-48 hour evaluation turnaround. Quick feedback helps identify weaknesses and improve faster before the actual exam.</p>
          </div>
          <div class="why-card">
            <div class="why-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Ranker-Created Content</h3>
            <p>Every review mentions the quality of content created by All India Rankers. This makes our test papers exactly match what students face in the actual ICSI exam.</p>
          </div>
          <div class="why-card">
            <div class="why-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <h3>Comprehensive Study Material</h3>
            <p>Students appreciate the detailed solutions and model answers that come with each test. The explanations help understand concepts thoroughly.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section" id="faq">
      <div class="container">
        <div class="section-header">
          <h2>CS Test Series Reviews - FAQs</h2>
          <p>Common questions about our CS test series based on student queries</p>
        </div>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>Are CS Test Series reviews genuine?</h3>
            <p>Yes, all reviews on this page are from real students who have enrolled in our CS test series and appeared for ICSI exams. We do not publish fake or paid reviews. Students share their honest feedback about question quality, evaluation speed, and overall experience.</p>
          </div>
          <div class="faq-item">
            <h3>What do reviews say about CS Executive test series?</h3>
            <p>Reviews for CS Executive test series are overwhelmingly positive. Students praise the chapter-wise coverage, accurate ICSI pattern questions, and detailed solutions. Many mention clearing both modules in their first attempt after using our test series consistently.</p>
          </div>
          <div class="faq-item">
            <h3>How are reviews for CS Professional test series?</h3>
            <p>CS Professional reviews highlight the quality of case study questions and practical application problems. Students appreciate the advanced-level questions that match the difficulty of actual Professional exams. The mentorship from AIRs receives special mention in positive reviews.</p>
          </div>
          <div class="faq-item">
            <h3>Do reviews mention CSEET test series quality?</h3>
            <p>Yes, CSEET test series reviews emphasize the comprehensive coverage of all four papers - Business Communication, Economic and Commercial Laws, Company Accounts and Cost & Management Accounting, and Quantitative Aptitude. Students find the mock tests very helpful for qualifying CSEET in first attempt.</p>
          </div>
          <div class="faq-item">
            <h3>What makes CS Test Series different according to reviews?</h3>
            <p>Based on student reviews, the key differentiators are: 1) Questions designed by All India Rankers, 2) Fastest 24-48 hour evaluation, 3) Detailed model answers with tips, 4) Weekly mentorship sessions, 5) Affordable pricing with quality content.</p>
          </div>
          <div class="faq-item">
            <h3>How to submit a review for CS Test Series?</h3>
            <p>After enrolling in our test series and appearing for exams, you can submit your review by clicking the "Submit Your Review" button on this page. All reviews are moderated before publishing to maintain authenticity and quality.</p>
          </div>
          <div class="faq-item">
            <h3>Are the CS test series questions similar to actual exam?</h3>
            <p>Multiple reviews confirm that our test questions closely resemble the actual ICSI exam pattern. Since our questions are created by previous year rankers who know exactly what ICSI expects, students find the difficulty level and question type very similar.</p>
          </div>
          <div class="faq-item">
            <h3>What is the satisfaction rate of CS Test Series students?</h3>
            <p>According to student reviews and our internal data, we have a 99% satisfaction rate. Many reviews from successful students mention that regular practice with our mock tests was key to their success in CS Executive and Professional exams.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Start Your Success Story</h2>
          <p>
            Join 20,000+ students community who cleared their CS exams with our test series. 
            Get access to the best CS mock tests designed by All India Rankers.
          </p>
          <div class="cta-buttons">
            <a href="https://missioncstestseries.com/login" target="_blank" class="btn btn-primary btn-lg">
              Enroll Now
            </a>
            <NuxtLink to="/cs-executive-test-series" class="btn btn-white btn-lg">
              View Test Series
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const showLoadMore = ref(false)
const activeCourse = ref('cseet')

const courses = [
  { id: 'cseet', name: 'CSEET' },
  { id: 'executive', name: 'CS Executive' },
  { id: 'professional', name: 'CS Professional' }
]

const reviews = ref([
  {
    id: 1,
    name: 'Neha Magpal',
    course: 'CS Executive',
    rating: 5,
    comment: "I wanted to say a big thank you for your efforts and the notes because of which i was able to pass executive with AIR 7 🙏🙏\n\nThank you so much ☺️\n\nYou are doing a great job.. May god bless uh",
    date: 'Dec 2024',
    qualified: 'AIR 7 - CS Executive'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    course: 'CS Executive',
    rating: 5,
    comment: 'The CS Executive test series was exceptional. The questions were exactly like the real ICSI exam. I cleared both modules in my first attempt thanks to this platform. The detailed solutions helped me understand where I was going wrong.',
    date: 'Dec 2024',
    qualified: 'CS Executive Qualified'
  },
  {
    id: 2,
    name: 'Yash Kamra',
    course: 'CS Professional',
    rating: 5,
    comment: 'Case study papers for CS Professional were excellent. The detailed solutions helped me understand practical application of corporate laws. This 	was possible only because of rigorous practice with these mock tests.',
    date: 'June 2025',
    qualified: 'CS Professional Qualified'
  },
  {
    id: 3,
    name: 'Anita Patel',
    course: 'CSEET',
    rating: 5,
    comment: 'Best test series for CSEET preparation. The comprehensive coverage of all four papers and performance analytics helped me identify weak areas. Cleared CSEET in first attempt with good marks.',
    date: 'November 2023',
    qualified: 'CSEET Qualified'
  },
  {
    id: 4,
    name: 'Mohit Singh',
    course: 'CS Executive',
    rating: 5,
    comment: 'The CS Executive mock tests helped me manage time during the actual exam. The difficulty level was perfect for preparation. The 24-hour evaluation was really helpful for quick revision.',
    date: 'Dec 2025',
    qualified: 'CS Executive Qualified'
  },
  {
    id: 5,
    name: 'Sneha Gupta',
    course: 'CS Professional',
    rating: 5,
    comment: 'Comprehensive test series with excellent coverage of advanced topics. The one-on-one mentoring with AIRs was very helpful for my weak areas in Corporate Restructuring.',
    date: 'June 2025',
    qualified: 'CS Professional Qualified'
  },
  {
    id: 6,
    name: 'Vikram Kumar',
    course: 'CS Executive',
    rating: 5,
    comment: 'Chapter-wise tests helped me identify weak topics in Tax Laws. Detailed solutions made learning easier. The question bank is updated as per latest ICSI syllabus.',
    date: 'June 2025',
    qualified: 'CS Executive Qualified'
  }
])

const getCourseReviews = (courseId) => {
  const courseMap = {
    'cseet': 'CSEET',
    'executive': 'CS Executive',
    'professional': 'CS Professional'
  }
  return reviews.value.filter(r => r.course === courseMap[courseId])
}

useHead({
  title: 'CS Test Series Reviews | Student Success Stories & Ratings',
  meta: [
    { name: 'description', content: 'Read genuine CS test series reviews from 500+ students. 4.9/5 rating, 99% satisfaction rate. Reviews for CSEET, CS Executive & Professional test series. Enroll now!' },
    { name: 'keywords', content: 'cs test series reviews, cs test series review, cs executive test series reviews, cs professional test series reviews, cseet test series reviews, best cs test series reviews, icsi exam reviews, cs test series student feedback, cs test series rating, cs test series success rate' },
    { property: 'og:title', content: 'CS Test Series Reviews - Student Success Stories' },
    { property: 'og:description', content: '4.9/5 rating from 500+ student reviews. Join 20,000+ successful CS exam candidates.' },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    { rel: 'canonical', href: 'https://exam60.online/reviews' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "CS Test Series",
        "description": "India's #1 CS Test Series for ICSI exams with 99% satisfaction rate and 4.9/5 rating.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Priya Sharma"
            },
            "reviewBody": "Cleared CS Executive both modules in first attempt. Questions were exactly like real exam."
          }
        ]
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
            "name": "Are CS Test Series reviews genuine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all reviews are from real students who have enrolled in our CS test series and appeared for ICSI exams."
            }
          },
          {
            "@type": "Question",
            "name": "What do reviews say about CS Executive test series?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Reviews praise the chapter-wise coverage, accurate ICSI pattern questions, and detailed solutions."
            }
          },
          {
            "@type": "Question",
            "name": "What makes CS Test Series different according to reviews?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Key differentiators: questions by AIRs, 24-48 hour evaluation, detailed model answers, weekly mentorship, affordable pricing."
            }
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--gray-100) 0%, var(--gray-200) 100%);
  padding: 4rem 0;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.125rem;
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
}

.stats-section {
  background: var(--gray-900);
  padding: 3rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-card {
  text-align: center;
  padding: 1.5rem;
  background: var(--gray-800);
  border-radius: 12px;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--gray-400);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 0.75rem;
}

.section-header p {
  font-size: 1.0625rem;
  color: var(--gray-600);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.review-card {
  background: var(--white);
  border-radius: 12px;
  padding: 1.75rem;
  border: 1px solid var(--gray-200);
  transition: all 0.2s ease;
}

.review-card:hover {
  border-color: var(--gray-300);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.review-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.review-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--gray-100);
  border-radius: 50%;
  color: var(--gray-600);
}

.review-info h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-900);
}

.review-course {
  font-size: 0.8125rem;
  color: var(--gray-500);
}

.review-rating {
  margin-bottom: 1rem;
}

.review-rating .star {
  color: var(--gray-300);
  font-size: 1rem;
  margin-right: 2px;
}

.review-rating .star.filled {
  color: #d97706;
}

.review-text {
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 0.9375rem;
}

.review-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
  padding-top: 1rem;
  border-top: 1px solid var(--gray-100);
}

.review-date {
  color: var(--gray-500);
}

.review-qualified {
  color: var(--primary);
  font-weight: 600;
}

.course-reviews {
  background: var(--gray-50);
}

.course-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0 3rem;
}

.course-tab {
  padding: 0.75rem 2rem;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  font-weight: 600;
  color: var(--gray-700);
  cursor: pointer;
  transition: all 0.2s ease;
}

.course-tab:hover {
  background: var(--gray-50);
}

.course-tab.active {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}

.course-reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.why-reviews-section {
  background: var(--white);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.why-card {
  background: var(--gray-50);
  padding: 1.75rem;
  border-radius: 12px;
  border: 1px solid var(--gray-200);
}

.why-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--white);
  border-radius: 10px;
  color: var(--primary);
  margin-bottom: 1.25rem;
}

.why-card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 0.75rem;
}

.why-card p {
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--gray-600);
}

.faq-section {
  background: var(--gray-50);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.faq-item {
  background: var(--white);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--gray-200);
}

.faq-item h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 0.75rem;
}

.faq-item p {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--gray-600);
}

.cta-section {
  background: linear-gradient(135deg, var(--primary) 0%, #059669 100%);
  padding: 4rem 0;
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.0625rem;
  color: var(--gray-100);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .reviews-grid,
  .course-reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .stats-grid,
  .reviews-grid,
  .course-reviews-grid,
  .why-grid,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .course-tabs {
    flex-wrap: wrap;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-buttons .btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>
