// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
  ],
  googleFonts: {
    families: {
      Doto: [100, 300, 400, 700],
    },
  },
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          sans: ['Doto', 'sans-serif'],
        },
      },
    },
  },
});
