<template>
  <div>
    <div>
      <h1 class="text-3xl font-bold underline text-primary italic">
        Hello, world! (Tailwind styled)
      </h1>
    </div>
    <div class="flex items-center bg-light p-2 m-2">
      <p class="text-lg text-info font-bold">Icon from Iconify:</p>
      <Icon name="ci:list-checklist" size="32px" style="color: black" />
    </div>
    <div>
      <p class="text-xl font-bold">PrimeVue with Tailwind:</p>
      <Button label="Click me!" class="p-2" @click="toggleDarkMode" />
      <div>
        <Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
        <Avatar
          label="V"
          class="mr-2"
          size="large"
          style="background-color: #ece9fc; color: #2a1261"
          shape="circle"
        />
        <Avatar
          label="U"
          class="mr-2"
          style="background-color: #dee9fc; color: #1a2551"
          shape="circle"
        />

        <OverlayBadge value="4" severity="danger" class="inline-flex">
          <Avatar label="U" size="xlarge" />
        </OverlayBadge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const toggleDarkMode = () => {
  document.body.classList.toggle('app-dark');
};
</script>
