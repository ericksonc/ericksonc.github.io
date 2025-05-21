<template>
  <section id="services" class="services relative py-20 bg-img min-h-[500px]">
    <div class="text-center mb-12 max-w-3xl mx-auto px-5">
      <h2 class="text-white font-sans font-light mb-2 text-3xl md:text-4xl tracking-wider-custom">Intelligent Solutions for Complex Challenges</h2>
    </div>
    <div class="services-container flex justify-center gap-8 max-w-6xl mx-auto px-5 lg:flex-row flex-col">
      <div class="service-card flex-1 bg-overlay rounded-lg p-8 text-white backdrop-blur-sm">
        <h3 class="text-2xl md:text-3xl mb-2 text-white font-sans font-normal">Deep Data Synthesis</h3>
        <h4 class="text-lg mb-5 font-sans font-normal text-accentOmnicaBlue">Unlocking Hidden Value</h4>
        <p class="mb-5 leading-relaxed font-sans">Omnica transforms your disparate data sources into a unified, intelligent ecosystem. We go beyond surface-level views to uncover the critical connections and patterns that reveal true business opportunities.</p>
      </div>
      <div class="service-card flex-1 bg-overlay rounded-lg p-8 text-white backdrop-blur-sm">
        <h3 class="text-2xl md:text-3xl mb-2 text-white font-sans font-normal">Contextual AI Insights</h3>
        <h4 class="text-lg mb-5 font-sans font-normal text-accentOmnicaBlue">Intelligence That Drives Action</h4>
        <p class="mb-5 leading-relaxed font-sans">Leveraging advanced AI, including Generative AI and machine learning, we deliver not just data, but deep contextual understanding – the 'why' behind the numbers – empowering your teams with clarity.</p>
      </div>
      <div class="service-card flex-1 bg-overlay rounded-lg p-8 text-white backdrop-blur-sm">
        <h3 class="text-2xl md:text-3xl mb-2 text-white font-sans font-normal">Actionable Decision Support</h3>
        <h4 class="text-lg mb-5 font-sans font-normal text-accentOmnicaBlue">Empowering Smarter Outcomes</h4>
        <p class="mb-5 leading-relaxed font-sans">Our solutions deliver timely, relevant intelligence directly into your workflows, enabling faster, more informed decisions that lead to measurable results.</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.bg-img {
  background-image: url('/img/bg-img.jpg');
  background-size: cover;
  background-position: center;
}
.bg-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>