/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

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
  plugins: [require('tailwindcss-primeui')],
};
