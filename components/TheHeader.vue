<template>
  <header>
    <!-- Hamburger menu (fixed at top left) -->
    <button 
      class="menu-toggle fixed top-5 left-5 z-[1001] bg-transparent border-none flex flex-col justify-between w-8 h-5"
      @click="toggleMenu"
    >
      <span class="block h-[3px] w-full bg-textPrimary transition-all duration-300"></span>
      <span class="block h-[3px] w-full bg-textPrimary transition-all duration-300"></span>
      <span class="block h-[3px] w-full bg-textPrimary transition-all duration-300"></span>
    </button>
    
    <!-- Navigation menu -->
    <nav 
      class="menu fixed top-0 left-0 w-64 h-screen bg-black/50 backdrop-blur-sm z-[999] transform -translate-x-full transition-transform duration-300 shadow-md"
      :class="{ 'translate-x-0': menuOpen }"
    >
      <ul class="pt-16 pb-5 px-5">
        <li class="mb-4"><NuxtLink to="/" @click="closeMenu" class="text-white no-underline font-sans text-lg hover:text-accentOmnicaBlue">Home</NuxtLink></li>
        <li class="mb-4"><NuxtLink to="/about-us" @click="closeMenu" class="text-white no-underline font-sans text-lg hover:text-accentOmnicaBlue">About Us</NuxtLink></li>
        <li class="mb-4"><NuxtLink to="/solutions" @click="closeMenu" class="text-white no-underline font-sans text-lg hover:text-accentOmnicaBlue">Solutions</NuxtLink></li>
        <li class="mb-4"><NuxtLink to="/contact-us" @click="closeMenu" class="text-white no-underline font-sans text-lg hover:text-accentOmnicaBlue">Contact Us</NuxtLink></li>
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