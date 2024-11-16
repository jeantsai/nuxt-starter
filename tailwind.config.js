/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const primeui = require('tailwindcss-primeui');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: colors.gray,
  //     },
  //   },
  // },
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  plugins: [addDynamicIconSelectors(), primeui],
};
