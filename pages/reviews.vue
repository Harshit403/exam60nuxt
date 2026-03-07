<template>
  <div>
    <!-- Hero -->
    <section class="reviews-hero">
      <div class="container">
        <h1>CS Test Series Reviews</h1>
        <p>Hear from our successful students who cracked CS exams</p>
      </div>
    </section>

    <!-- Stats -->
    <section class="section reviews-stats">
      <div class="container">
        <div class="stats-row">
          <div class="stat-item">
            <span class="stat-value">4.9/5</span>
            <span class="stat-label">Average Rating</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">500+</span>
            <span class="stat-label">Reviews</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">99%</span>
            <span class="stat-label">Recommended</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">99+</span>
            <span class="stat-label">Satisfaction</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Grid -->
    <section class="section reviews-section">
      <div class="container">
        <h2 class="section-title">Student Success Stories</h2>
        <p class="section-subtitle">Join thousands of successful students</p>

        <div class="reviews-grid">
          <div v-for="review in reviews" :key="review.id" class="review-card">
            <div class="review-header">
              <img :src="review.avatar" :alt="review.name" class="review-avatar" />
              <div class="review-info">
                <h4>{{ review.name }}</h4>
                <span class="review-course">{{ review.course }}</span>
                <div class="review-rating">
                  <span v-for="n in 5" :key="n" :class="{ filled: n <= review.rating }">★</span>
                </div>
              </div>
            </div>
            <p class="review-text">"{{ review.comment }}"</p>
            <div class="review-footer">
              <span class="review-date">{{ review.date }}</span>
              <span class="review-qualified">{{ review.qualified }}</span>
            </div>
          </div>
        </div>

        <div class="text-center" style="margin-top: 3rem;">
          <button class="btn btn-outline btn-lg" @click="showLoadMore = !showLoadMore">
            {{ showLoadMore ? 'Show Less' : 'Load More Reviews' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Course-wise Reviews -->
    <section class="section course-reviews">
      <div class="container">
        <h2 class="section-title">Reviews by Course</h2>
        
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
              <img :src="review.avatar" :alt="review.name" class="review-avatar" />
              <div class="review-info">
                <h4>{{ review.name }}</h4>
                <div class="review-rating">
                  <span v-for="n in 5" :key="n" :class="{ filled: n <= review.rating }">★</span>
                </div>
              </div>
            </div>
            <p class="review-text">"{{ review.comment }}"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Submit Review CTA -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Share Your Success Story</h2>
          <p>Did you clear your CS exam with our test series? Share your experience and inspire others!</p>
          <button class="btn btn-white btn-lg" @click="showReviewForm = true">
            Submit Your Review
          </button>
        </div>
      </div>
    </section>

    <!-- Review Form Modal -->
    <div v-if="showReviewForm" class="modal-overlay" @click.self="showReviewForm = false">
      <div class="modal">
        <div class="modal-header">
          <h2 class="modal-title">Submit Your Review</h2>
          <button class="close-btn" @click="showReviewForm = false">&times;</button>
        </div>
        <form @submit.prevent="submitReview">
          <div class="form-group">
            <label class="label">Your Name</label>
            <input v-model="reviewForm.name" type="text" class="input" required />
          </div>
          <div class="form-group">
            <label class="label">Course</label>
            <select v-model="reviewForm.course" class="input" required>
              <option value="">Select course</option>
              <option value="CSEET">CSEET</option>
              <option value="CS Executive">CS Executive</option>
              <option value="CS Professional">CS Professional</option>
            </select>
          </div>
          <div class="form-group">
            <label class="label">Rating</label>
            <div class="rating-input">
              <button 
                type="button"
                v-for="n in 5" 
                :key="n"
                class="star-btn"
                :class="{ filled: n <= reviewForm.rating }"
                @click="reviewForm.rating = n"
              >
                ★
              </button>
            </div>
          </div>
          <div class="form-group">
            <label class="label">Your Review</label>
            <textarea v-model="reviewForm.comment" class="input" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-full">Submit Review</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const showReviewForm = ref(false)
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
    name: 'Priya Sharma',
    course: 'CS Executive',
    rating: 5,
    comment: 'The test series was exceptional. The questions were exactly like the real exam. I cleared both modules in my first attempt thanks to this platform.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    date: 'Jan 2024',
    qualified: 'CS Executive Qualified'
  },
  {
    id: 2,
    name: 'Rahul Verma',
    course: 'CS Professional',
    rating: 5,
    comment: 'Case study papers for CS Professional were excellent. The detailed solutions helped me understand practical application of corporate laws.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul',
    date: 'Dec 2023',
    qualified: 'CS Professional Qualified'
  },
  {
    id: 3,
    name: 'Anita Patel',
    course: 'CSEET',
    rating: 5,
    comment: 'Best test series for CSEET preparation. The video solutions and performance analytics helped me improve significantly.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=anita',
    date: 'Nov 2023',
    qualified: 'CSEET Qualified'
  },
  {
    id: 4,
    name: 'Mohit Singh',
    course: 'CS Executive',
    rating: 5,
    comment: 'The mock tests helped me manage time during the actual exam. The difficulty level was perfect for preparation.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mohit',
    date: 'Oct 2023',
    qualified: 'CS Executive Qualified'
  },
  {
    id: 5,
    name: 'Sneha Gupta',
    course: 'CS Professional',
    rating: 4,
    comment: 'Comprehensive test series with excellent coverage. The one-on-one mentoring was very helpful for my weak areas.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sneha',
    date: 'Sep 2023',
    qualified: 'CS Professional Qualified'
  },
  {
    id: 6,
    name: 'Vikram Kumar',
    course: 'CS Executive',
    rating: 5,
    comment: 'The chapter-wise tests helped me identify my weak topics. Detailed solutions made learning easier.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram',
    date: 'Aug 2023',
    qualified: 'CS Executive Qualified'
  }
])

const reviewForm = ref({
  name: '',
  course: '',
  rating: 5,
  comment: ''
})

const getCourseReviews = (courseId) => {
  const courseMap = {
    'cseet': 'CSEET',
    'executive': 'CS Executive',
    'professional': 'CS Professional'
  }
  return reviews.value.filter(r => r.course === courseMap[courseId])
}

const submitReview = () => {
  alert('Thank you for your review! It will be published after moderation.')
  showReviewForm.value = false
  reviewForm.value = { name: '', course: '', rating: 5, comment: '' }
}

useSeoMeta({
  title: 'CS Test Series Reviews 2026 - Student Success Stories | Mission CS',
  description: 'Read reviews from students who cleared CS Executive & Professional exams with our test series. 95% pass rate, 4.9/5 rating. Join 50,000+ successful students.',
  ogTitle: 'CS Test Series Reviews 2026 - Student Success Stories',
  ogDescription: 'Student success stories and reviews for CSEET, CS Executive, and CS Professional test series.',
  ogUrl: 'https://missioncstestseries.com/reviews',
  twitterCard: 'summary_large_image',
  keywords: 'cs test series reviews, cs executive test series reviews, cs professional test series reviews, cs test series student feedback, icsi exam reviews, cseet test series reviews, best cs test series reviews'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Mission CS Test Series",
        "description": "India's #1 CS Test Series for ICSI exams with 95% pass rate.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "5000"
        }
      })
    }
  ]
})
</script>

<style scoped>
.reviews-hero {
  padding: 10rem 0 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: var(--white);
  text-align: center;
}

.reviews-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.reviews-hero p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.reviews-stats {
  background: var(--secondary);
  color: var(--white);
}

.stats-row {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent);
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.review-card {
  background: var(--white);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.review-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.review-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.review-info h4 {
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.review-course {
  font-size: 0.875rem;
  color: var(--gray-500);
  display: block;
  margin-bottom: 0.5rem;
}

.review-rating {
  color: #fbbf24;
}

.review-rating .filled {
  color: #fbbf24;
}

.review-rating span:not(.filled) {
  color: var(--gray-300);
}

.review-text {
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: 1rem;
  font-style: italic;
}

.review-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
}

.review-date {
  color: var(--gray-500);
}

.review-qualified {
  color: var(--success);
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
  border: 2px solid var(--gray-200);
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
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

.cta-section {
  background: linear-gradient(135deg, var(--primary) 0%, #764ba2 100%);
  color: var(--white);
}

.cta-content {
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.rating-input {
  display: flex;
  gap: 0.5rem;
}

.star-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--gray-300);
  cursor: pointer;
  transition: color 0.2s ease;
}

.star-btn.filled {
  color: #fbbf24;
}

.btn-full {
  width: 100%;
}

@media (max-width: 1024px) {
  .reviews-grid,
  .course-reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .reviews-hero h1 {
    font-size: 2rem;
  }

  .stats-row {
    flex-wrap: wrap;
    gap: 2rem;
  }

  .reviews-grid,
  .course-reviews-grid {
    grid-template-columns: 1fr;
  }

  .course-tabs {
    flex-wrap: wrap;
  }
}
</style>
