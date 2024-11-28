<template>
  <div class="">
    <!-- Tailwind class can be used inside PrimeVue Passthrough without '!' -->
    <!-- <PanelMenu
      :model="items"
      class="w-full md:w-64"
      :pt="{
        headerContent: { class: 'rounded-full' },
        itemContent: { class: 'rounded-full' },
      }"
    /> -->
    <!-- Tailwind class can be used inside PrimeVue Passthrough without '!' -->
    <Menu
      :model="items"
      class="w-full md:w-64"
      aria-label="SideMenu"
      :pt="{
        headerContent: { class: 'rounded-full' },
        itemContent: { class: 'rounded-full' },
      }"
    ></Menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const router = useRouter();

const items = ref([
  {
    label: 'Color',
    icon: 'icon icon-colour-palette-bold',
    items: [
      {
        label: 'Core Colors',
        icon: 'icon-[ri--color-filter-ai-line]',
        command: () => {
          router.push('/color/CoreColors');
        },
      },
      {
        label: 'Primay Colors',
        icon: 'icon-[ri--color-filter-line]',
        command: () => {
          router.push('/color/PrimaryColors');
        },
      },
    ],
  },
  {
    label: 'Icon',
    icon: 'pi pi-font',
    items: [
      {
        label: 'PrimeVue Icons',
        icon: 'pi pi-prime',
        command: () => {
          router.push('/icon/PrimeVueIcons');
        },
      },
      {
        label: 'Iconify Icons',
        icon: 'icon-[fluent--emoji-smile-slight-24-filled]',
        command: () => {
          router.push('/icon/IconifyIcons');
        },
      },
      {
        label: 'Momentum Icons',
        icon: 'icon icon-colour-palette-bold',
        command: () => {
          router.push('/icon/MomentumIcons');
        },
      },
    ],
  },
  {
    label: 'Data',
    icon: 'pi pi-table',
    items: [
      {
        label: 'DataTable',
        icon: 'pi pi-table',
        command: () => {
          router.push('/data/DataTable');
        },
      },
      {
        label: 'TemplateTable',
        icon: 'pi pi-table',
        command: () => {
          router.push('/data/TemplateTable');
        },
      },
      {
        label: 'TreeTable',
        icon: 'icon-[ri--node-tree]',
        command: () => {
          router.push('/data/TreeTable');
        },
      },
    ],
  },
]);
</script>
