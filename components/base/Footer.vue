<template>
  <footer class="bg-slate-700 text-white p-6 border-t-2 border-t-black">
    <div class="container mx-auto flex justify-between">
      <div>
        <h2 class="text-base sm:text-xl font-semibold">Nuxt Exercises</h2>
        <p class="text-xs sm:text-sm font-light">Exercises to practice Nuxt</p>
      </div>
      <div>
        <h3 class="text-sm sm:text-lg font-semibold">Links</h3>
        <ul class="text-xs sm:text-sm font-light">
          <li>
            <a href="/" class="hover:text>primary">Home</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-sm sm:text-lg font-semibold">Contact</h3>
        <p class="text-xs sm:text-sm font-light">123 Main St</p>
        <p class="text-xs sm:text-sm font-light">City, State, 12345</p>
        <p class="text-xs sm:text-sm font-light">555-555-5555</p>
      </div>
    </div>
    <div class="container mx-auto">
      <p class="text-center text-sm font-light">
        &copy; {{ new Date().getFullYear() }} Nuxt Exercises
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
