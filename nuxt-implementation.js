// nuxt.config.js
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Omnica - AI Consultancy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  components: true,
  build: {
    transpile: []
  }
})

// app.vue
<template>
  <div>
    <TheHeader />
    <TheHero />
    <TheServices />
    <TheInsights />
    <TheFooter />
  </div>
</template>

// components/TheHeader.vue
<template>
  <header class="fixed top-0 left-0 w-full z-50 flex justify-between p-5">
    <div class="logo">
      <img src="/img/omnica-logo.svg" alt="Omnica" class="h-10">
    </div>
    <button 
      class="menu-toggle fixed top-5 left-5 z-[1001] bg-transparent border-none flex flex-col justify-between w-8 h-5"
      @click="toggleMenu"
    >
      <span class="block h-[3px] w-full bg-primary transition-all duration-300"></span>
      <span class="block h-[3px] w-full bg-primary transition-all duration-300"></span>
      <span class="block h-[3px] w-full bg-primary transition-all duration-300"></span>
    </button>
    <nav 
      class="menu fixed top-0 left-0 w-64 h-screen bg-white z-[999] transform -translate-x-full transition-transform duration-300 shadow-md"
      :class="{ 'translate-x-0': menuOpen }"
    >
      <ul class="pt-16 pb-5 px-5">
        <li class="mb-4"><a href="#home" @click="closeMenu" class="text-gray-800 no-underline text-lg hover:text-primary">Home</a></li>
        <li class="mb-4"><a href="#services" @click="closeMenu" class="text-gray-800 no-underline text-lg hover:text-primary">Services</a></li>
        <li class="mb-4"><a href="#insights" @click="closeMenu" class="text-gray-800 no-underline text-lg hover:text-primary">Insights</a></li>
        <li class="mb-4"><a href="#contact" @click="closeMenu" class="text-gray-800 no-underline text-lg hover:text-primary">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

// components/TheHero.vue
<template>
  <section id="home" class="hero relative h-screen flex items-center justify-center flex-col text-center text-gray-800 px-5">
    <video class="video-bg absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-80" autoplay loop muted playsinline>
      <source src="/videos/bg-grayscale.mp4" type="video/mp4">
    </video>
    <div class="hero-content max-w-3xl z-[1]">
      <h1 class="text-5xl md:text-6xl font-bold mb-5">See inside your AI strategy</h1>
      <p class="text-lg mb-6 max-w-xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna mattis efficitur.</p>
      <p class="text-lg max-w-xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
    </div>
  </section>
</template>

// components/TheServices.vue
<template>
  <section id="services" class="services relative py-20 bg-img min-h-[500px]">
    <div class="services-container flex justify-center gap-8 max-w-6xl mx-auto px-5 lg:flex-row flex-col">
      <div class="service-card flex-1 bg-overlay rounded-lg p-8 text-white backdrop-blur-sm">
        <h3 class="text-2xl md:text-3xl mb-2 text-white">AI Evaluation</h3>
        <h4 class="text-lg mb-5 font-normal text-primary">Win before you deploy</h4>
        <p class="mb-5 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna mattis efficitur. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna mattis efficitur.</p>
      </div>
      <div class="service-card flex-1 bg-overlay rounded-lg p-8 text-white backdrop-blur-sm">
        <h3 class="text-2xl md:text-3xl mb-2 text-white">AI Scientists</h3>
        <h4 class="text-lg mb-5 font-normal text-primary">Let's amp your ideas</h4>
        <p class="mb-5 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna mattis efficitur. Aenean sollicitudin, lorem quis bibendum auctor.</p>
        <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna mattis efficitur. Aenean sollicitudin, lorem quis bibendum auctor.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-img {
  background-image: url('/img/bg-img.png');
  background-size: cover;
  background-position: center;
}
.bg-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

// components/TheInsights.vue
<template>
  <section id="insights" class="insights bg-primary text-white py-20 px-5 text-center">
    <h2 class="text-3xl md:text-4xl mb-10">Here's just some of what we've learned...</h2>
    <div class="carousel max-w-3xl mx-auto relative">
      <div class="carousel-item px-10">
        <p>{{ carouselItems[currentItem] }}</p>
      </div>
      <div class="carousel-nav flex justify-between absolute w-full top-1/2 -translate-y-1/2 px-2">
        <button @click="prevSlide" class="bg-transparent border-none text-4xl text-white cursor-pointer transition-transform hover:scale-110">‹</button>
        <button @click="nextSlide" class="bg-transparent border-none text-4xl text-white cursor-pointer transition-transform hover:scale-110">›</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const carouselItems = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nibh vel velit auctor aliquet.",
  "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem.",
  "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo."
];

const currentItem = ref(0);

function nextSlide() {
  currentItem.value = (currentItem.value + 1) % carouselItems.length;
}

function prevSlide() {
  currentItem.value = (currentItem.value - 1 + carouselItems.length) % carouselItems.length;
}
</script>

// components/TheFooter.vue
<template>
  <footer class="footer py-5 px-5 text-center bg-white text-gray-800">
    <p>© Omnica AI, Inc. 2025</p>
  </footer>
</template>

// assets/css/main.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-color: #007BFF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  overflow-x: hidden;
}

.text-primary {
  color: var(--primary-color);
}

.bg-primary {
  background-color: var(--primary-color);
}

@media (max-width: 980px) {
  /* Tablet styles */
}

@media (max-width: 760px) {
  /* Mobile styles */
}

// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
      },
    }
  }
}
