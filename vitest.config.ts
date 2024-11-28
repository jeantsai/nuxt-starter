import { defineVitestConfig } from '@nuxt/test-utils/config';
// import vue from '@vitejs/plugin-vue';

export default defineVitestConfig({
  // plugins: [vue()],
  test: {
    globals: true,
    environment: 'nuxt',
    include: ['{components,layouts,pages}/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
});
