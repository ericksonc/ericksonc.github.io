export default defineNuxtConfig({
  app: {
    head: {
      title: 'Omnica - AI Consultancy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  components: true,

  build: {
    transpile: []
  },

  compatibilityDate: '2025-03-12'
})
