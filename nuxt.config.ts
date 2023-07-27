// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/togw-hello/',
    head: {
        htmlAttrs: { dir: 'rtl', lang: 'he' },
    },
  },
  // devtools: { enabled: true },
  ssr: false,
  target: 'static',
  router: {
    base: '/togw-hello/',
 },
  modules: [
    '@nuxthq/ui',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Assistant: [500, 700, 800],
    }
  }
})
