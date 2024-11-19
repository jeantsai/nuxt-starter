<template>
  <div class="">
    <div class="py-6">
      <h2 class="text-2xl font-bold text-surface-700">TreeTable Example</h2>
    </div>
    <div
      class="p-6 rounded-l-xl bg-surface-50 dark:bg-surface-800 w-full space-x-4"
    >
      <TreeTable :value="nodes" table-style="min-width: 50rem">
        <template #header>
          <div class="text-xl font-bold">File Viewer</div>
        </template>
        <Column
          field="name"
          header="Name"
          expander
          style="width: 250px"
        ></Column>
        <Column field="size" header="Size" style="width: 150px"></Column>
        <Column field="type" header="Type" style="width: 150px"></Column>
        <Column style="width: 10rem">
          <template #body>
            <div class="flex flex-wrap gap-2">
              <Button type="button" icon="pi pi-search" rounded />
              <Button
                type="button"
                icon="pi pi-pencil"
                rounded
                severity="success"
              />
            </div>
          </template>
        </Column>
        <template #footer>
          <div class="flex justify-start">
            <Button icon="pi pi-refresh" label="Reload" severity="warn" />
          </div>
        </template>
      </TreeTable>
    </div>
  </div>
</template>

<script setup>
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
  NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
</script>
