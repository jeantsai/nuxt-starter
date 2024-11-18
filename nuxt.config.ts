// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: {
    enabled: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@primevue/nuxt-module',
  ],
  // googleFonts: {
  //   families: {
  //     Inter: [100, 200, 300, 400, 500, 600, 700, 800],
  //   },
  // },
  css: ['@/assets/styles/tailwind.css', '@/assets/styles/app.css'],
  tailwindcss: {
    config: {
      // theme: {
      //   fontFamily: {
      //     sans: ['Inter', 'sans-serif'],
      //   },
      // },
      darkMode: 'selector',
    },
  },
  primevue: {
    options: {
      theme: 'none',
    },
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
