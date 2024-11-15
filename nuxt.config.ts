import { definePreset } from '@primevue/themes';
import Material from '@primevue/themes/material';

const MainThemePreset = definePreset(Material, {
  semantic: {
    content: {
      borderRadius: '{border.radius.none}',
    },
    primary: {
      50: '#EDF8FF',
      100: '#DBF0FF',
      200: '#BFE3FF',
      300: '#96D0FF',
      400: '#64B4FA',
      500: '#3492EB',
      600: '#1170CF',
      700: '#0353A8',
      800: '#063A75',
      900: '#0A274A',
      950: '#091A30',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{neutral.50}',
          100: '{neutral.100}',
          200: '{neutral.200}',
          300: '{neutral.300}',
          400: '{neutral.400}',
          500: '{neutral.500}',
          600: '{neutral.600}',
          700: '{neutral.700}',
          800: '{neutral.800}',
          900: '{neutral.900}',
          950: '{neutral.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{neutral.50}',
          100: '{neutral.100}',
          200: '{neutral.200}',
          300: '{neutral.300}',
          400: '{neutral.400}',
          500: '{neutral.500}',
          600: '{neutral.600}',
          700: '{neutral.700}',
          800: '{neutral.800}',
          900: '{neutral.900}',
          950: '{neutral.950}',
        },
      },
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
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
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 700],
    },
  },
  css: ['~/assets/styles/app.css'],
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
      darkMode: 'selector',
    },
  },
  primevue: {
    options: {
      theme: {
        preset: MainThemePreset,
        options: {
          darkModeSelector: '.dark',
          prefix: 'p',
        },
      },
    },
  },
});
