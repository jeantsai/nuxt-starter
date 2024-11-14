<template>
  <header class="bg-slate-700 text-white p-6 border-b-2 border-b-black">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-lg sm:text-2xl font-semibold">Exercise 2</h1>
      <nav class="text-xs sm:text-base font-light">
        <ul class="flex space-x-4">
          <li v-for="navLink in navLinks" :key="navLink.name">
            <a :href="navLink.path" class="hover:text-primary">
              {{ navLink.name }}
            </a>
          </li>
        </ul>
      </nav>
      <button class="text-xs sm:text-base font-light" @click="toggleDark">
        Toggle Dark Mode
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits(['toggleDark']);

const toggleDark = () => {
  console.log('toggleDark');
  emit('toggleDark');
};

const navLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]);
</script>

<style scoped></style>
