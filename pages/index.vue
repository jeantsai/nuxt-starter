<template>
  <div>
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
      <div class="card flex flex-wrap">
        <Badge value="8" size="xlarge" severity="success"></Badge>
        <Badge value="6" size="large" severity="warn"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="2" size="small"></Badge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const toggleDarkMode = () => {
  document.body.classList.toggle('app-dark');
};
</script>
