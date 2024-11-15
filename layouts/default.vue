<template>
  <div id="MainLayout" class="h-screen bg-primary">
    <base-header @toggle-dark="toggleDark" />
    <div class="flex h-screen bg-primary/75">
      <base-side-nav />
      <slot />
    </div>
    <base-footer />
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
// {
// onChanged: (dark) => {
//   document.body.classList.toggle('app-dark', dark);
// },
// selector: 'html',
// attribute: 'class',
// valueDark: 'p-dark',
// valueLight: '',
// }
const toggleDark = useToggle(isDark);
</script>

<style scoped></style>
