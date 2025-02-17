export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ['@nuxt/ui','@nuxtjs/i18n'],
  components: true,
  i18n: {
    strategy: "no_prefix",
    defaultLocale: 'fr',
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'fr', file: 'fr.json' }
    ],
  }
})
