import MainThemePreset from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
    '@primevue/nuxt-module',
  ],
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 700],
    },
  },
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
  },
  primevue: {
    options: {
      theme: {
        preset: MainThemePreset,
        options: {
          darkModeSelector: '.app-dark',
        },
      },
    },
  },
});
