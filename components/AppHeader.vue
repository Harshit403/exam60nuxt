<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="header-content">
        <NuxtLink to="/" class="logo">
          <img src="https://missioncstestseries.com/logo.png" alt="CS TEST SERIES logo" class="logo-img" />
        </NuxtLink>

        <nav class="nav-desktop">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/cseet-test-series" class="nav-link">CSEET</NuxtLink>
          <NuxtLink to="/cs-executive-test-series" class="nav-link">CS Executive</NuxtLink>
          <NuxtLink to="/cs-professional-test-series" class="nav-link">CS Professional</NuxtLink>
          <NuxtLink to="/downloads" class="nav-link">Downloads</NuxtLink>
          <NuxtLink to="/reviews" class="nav-link">Reviews</NuxtLink>
        </nav>

        <div class="header-actions">
          <a href="https://missioncstestseries.com/login" class="btn btn-outline">Login</a>
          <a href="https://missioncstestseries.com/signup" class="btn btn-primary">Sign Up</a>
        </div>

        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <span class="hamburger"></span>
        </button>
      </div>

      <nav class="nav-mobile" :class="{ open: mobileMenuOpen }">
        <NuxtLink to="/" class="nav-link" @click="mobileMenuOpen = false">Home</NuxtLink>
        <NuxtLink to="/cseet-test-series" class="nav-link" @click="mobileMenuOpen = false">CSEET</NuxtLink>
        <NuxtLink to="/cs-executive-test-series" class="nav-link" @click="mobileMenuOpen = false">CS Executive</NuxtLink>
        <NuxtLink to="/cs-professional-test-series" class="nav-link" @click="mobileMenuOpen = false">CS Professional</NuxtLink>
        <NuxtLink to="/downloads" class="nav-link" @click="mobileMenuOpen = false">Downloads</NuxtLink>
        <NuxtLink to="/reviews" class="nav-link" @click="mobileMenuOpen = false">Reviews</NuxtLink>
        <div class="mobile-actions">
          <a href="https://missioncstestseries.com/login" class="btn btn-outline btn-full">Login</a>
          <a href="https://missioncstestseries.com/signup" class="btn btn-primary btn-full">Sign Up</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  box-shadow: var(--shadow);
  border-bottom-color: var(--gray-200);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}

.logo-img {
  height: 45px;
  width: auto;
}

.logo-icon {
  font-size: 1.75rem;
  display: flex;
  align-items: center;
}

.logo-icon svg {
  width: 28px;
  height: 28px;
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--gray-700);
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-actions .btn {
  text-decoration: none;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--gray-800);
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--gray-800);
  left: 0;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  top: 8px;
}

.nav-mobile {
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid var(--gray-200);
  margin-top: 1rem;
}

.mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

.mobile-actions .btn {
  text-decoration: none;
}

.btn-full {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-desktop,
  .header-actions {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .nav-mobile {
    display: none;
  }

  .nav-mobile.open {
    display: flex;
  }
}
</style>
