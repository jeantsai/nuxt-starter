<template>
  <div id="MainLayout" class="h-screen app-layout">
    <base-header @toggle-dark="toggleDark" />
    <div class="flex h-screen">
      <div class="p-4">
        <base-side-nav />
      </div>
      <div class="p-4">
        <slot />
      </div>
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
