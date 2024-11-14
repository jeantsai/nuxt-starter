<template>
  <div>
    <base-header @toggle-dark="toggleDark" />
    <slot />
    <base-footer />
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
  // onChanged: (dark) => {
  //   document.body.classList.toggle('app-dark', dark);
  // },
  selector: 'html',
  attribute: 'class',
  valueDark: 'app-dark',
  valueLight: '',
});
const toggleDark = useToggle(isDark);
</script>

<style scoped></style>
