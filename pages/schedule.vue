<template>
  <div class="schedule-page">
    <div class="redirect-message">
      <h1>CS Test Series Schedule</h1>
      <p>Redirecting to schedule page...</p>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'CS Test Series Schedule | ICSI Exam Test Schedule',
  meta: [
    { name: 'description', content: 'View CS Test Series schedule for CS Executive and CS Professional exams. Check test dates, timing, and exam schedule for ICSI preparation.' },
    { name: 'keywords', content: 'CS test series schedule, ICSI exam schedule, CS executive test schedule, CS professional test schedule, exam calendar' },
    { property: 'og:title', content: 'CS Test Series Schedule | ICSI Exam Test Schedule' },
    { property: 'og:description', content: 'View CS Test Series schedule for CS Executive and CS Professional exams. Check test dates and timing.' },
    { name: 'robots', content: 'index, follow' }
  ]
})

onMounted(() => {
  window.location.href = 'https://missioncstestseries.com/cstestseriesschedule'
})
</script>

<style scoped>
.schedule-page {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.redirect-message h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1e3a8a;
}

.redirect-message p {
  color: #666;
}
</style>
