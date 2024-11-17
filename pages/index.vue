<template>
  <div class="p-24 container mx-auto">
    <div class="">
      <h1
        class="text-surface-900 dark:text-surface-100 font-extrabold text-4xl tracking-tight sm:text-4xl sm:tracking-tight lg:text-5xl xl:text-6xl xl:tracking-tight"
      >
        A quick way for
        <span class="app-title-blue">Our</span>
        <br />internal <span class="app-title-green">Vue 3</span> projects
      </h1>
      <p
        class="mt-6 text-surface-600 dark:text-surface-300 text-md sm:text-lg lg:text-xl xl:text-2xl"
      >
        Powered by NuxtJS and PrimeVue. Enable the posibility of teams with
        tight resources and schedules.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: false,
});
</script>
