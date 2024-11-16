<template>
  <div class="">
    <div class="py-6">
      <h2 class="text-2xl font-bold text-primary">DataTable Example</h2>
    </div>
    <div
      class="p-6 rounded-l-xl bg-surface-50 dark:bg-surface-800 w-full space-x-4"
    >
      <DataTable :value="products" table-style="min-width: 50rem">
        <template #header>
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-xl font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
          </div>
        </template>
        <Column field="name" header="Name"></Column>
        <Column header="Image">
          <template #body="slotProps">
            <img
              :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
              :alt="slotProps.data.image"
              class="w-24 rounded"
            />
          </template>
        </Column>
        <Column field="price" header="Price">
          <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
          </template>
        </Column>
        <Column field="category" header="Category"></Column>
        <Column field="rating" header="Reviews">
          <template #body="slotProps">
            <Rating :model-value="slotProps.data.rating" readonly />
          </template>
        </Column>
        <Column header="Status">
          <template #body="slotProps">
            <Tag
              :value="slotProps.data.inventoryStatus"
              :severity="getSeverity(slotProps.data)"
            />
          </template>
        </Column>
        <template #footer>
          In total there are {{ products ? products.length : 0 }} products.
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
  console.log('DataTable mounted');
  ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warn';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return null;
  }
};
</script>
