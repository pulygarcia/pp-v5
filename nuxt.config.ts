// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    preset: 'static',
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@vueuse/motion/nuxt', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Almarai: [300, 400, 700, 800],
      'Instrument Serif': {
        ital: [400],
      },
    },
    display: 'swap',
  },
})
