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
    '@sidebase/nuxt-auth',
    '@nuxt/test-utils',
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
  auth: {
    globalAppMiddleware: {
      isEnabled: true,
      addDefaultCallbackUrl: true,
    },
    // baseURL: '/api/auth',
    baseURL: 'https://dummyjson.com/auth/',
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: 'login', method: 'post' },
        // signOut: { path: '/logout', method: 'post' },
        signOut: false,
        // signUp: { path: '/register', method: 'post' },
        // getSession: { path: '/session', method: 'get' },
        getSession: { path: 'me', method: 'get' },
      },
      token: {
        // signInResponseTokenPointer: '/token',
        signInResponseTokenPointer: '/accessToken',
        // type: 'Bearer',
        // cookieName: 'auth.token',
        // headerName: 'Authorization',
        // maxAgeInSeconds: 1800,
        // sameSiteAttribute: 'lax',
        // cookieDomain: 'sidebase.io',
        // secureCookieAttribute: false,
        // httpOnlyCookieAttribute: false,
      },
      pages: {
        login: '/auth/login',
      },
    },
  },
  app: {
    head: {
      title: 'Nuxt template with Tailwind-PrimeVue, and Nuxt Auth',
    },
  },
});
