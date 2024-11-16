<template>
  <header class="px-7 py-5">
    <div class="flex justify-between items-center">
      <NuxtLink to="/" class="text-lg sm:text-2xl font-semibold">
        Tailwind PrivmVue Styling Exercise
      </NuxtLink>
      <nav class="text-xs sm:text-base font-light">
        <ul class="flex space-x-4">
          <li v-for="navLink in navLinks" :key="navLink.name">
            <a :href="navLink.path" class="hover:text-primary">
              {{ navLink.name }}
            </a>
          </li>
        </ul>
      </nav>
      <i
        class="icon"
        :class="{
          'icon-brightness-high-bold': !isDark,
          'icon-quiet-hours-presence-bold': isDark,
        }"
        @click="toggleDark()"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
// -- For F7 Icons
// const darkModeIcon = computed(() => (isDark.value ? 'f7:sun-max' : 'f7:moon'));
const toggleDark = useToggle(isDark);

const navLinks = ref([
  // { name: 'Home', path: '/' },
  // { name: 'Services', path: '/services' },
  // { name: 'About', path: '/about' },
  // { name: 'Contact', path: '/contact' },
]);
</script>

<style scoped></style>
