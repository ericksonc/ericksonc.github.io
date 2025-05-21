<template>
  <section id="home" class="hero relative min-h-[70vh] flex items-start justify-center flex-col text-center text-gray-800 px-5">
    <video class="video-bg absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-80" autoplay loop muted playsinline>
      <source src="/videos/bg-grayscale.mp4" type="video/mp4">
    </video>
    
    <!-- Logo with consistent top spacing -->
    <div class="logo w-full flex justify-center mt-12 mb-16">
      <img src="/img/Omnica_Logo-01.png" alt="Omnica" class="h-10">
    </div>
    
    <div class="hero-content max-w-3xl z-[1] mx-auto">
      <h1 class="mb-8 font-sans font-light tracking-wider-custom leading-tight lg:text-5xl xl:text-4xl 2xl:text-5xl">
        <span class="text-textPrimary inline-block">Activating</span>
        <span class="text-accentOmnicaBlue inline-block">&nbsp;Enterprise Intelligence</span>
      </h1>
      <p class="text-lg mb-6 max-w-xl mx-auto font-sans text-textSecondary">We bridge the gap between complex enterprise data and the actionable AI-powered insights your teams need to drive growth and make smarter decisions.</p>
      <div class="mt-8">
        <NuxtLink to="/solutions" class="px-6 py-3 bg-accentOmnicaBlue text-white rounded-md font-sans hover:bg-accentOmnicaBlue/90 transition-colors">Explore Our Approach</NuxtLink>
      </div>
    </div>
  </section>
</template>