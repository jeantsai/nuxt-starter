<template>
  <div class="">
    <div class="py-6">
      <h2 class="text-2xl font-bold text-primary">DataTable Example</h2>
    </div>
    <div
      class="p-6 rounded-l-xl bg-surface-50 dark:bg-surface-800 w-full space-x-4"
    >
      <DataTable :value="products" table-style="min-width: 50rem">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
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
</script>
