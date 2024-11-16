<template>
  <div id="MainLayout" class="h-screen app-layout">
    <base-header />
    <div
      class="flex h-full w-full app-layout-main border-t-[1px] border-t-neutral-300 dark:border-t-neutral-700"
    >
      <div class="p-4">
        <base-side-nav />
      </div>
      <div class="h-full w-full app-layout-content">
        <div class="h-full overflow-auto">
          <slot />
          <div
            class="rounded-tl-xl bg-surface-50 dark:bg-surface-800 pt-6 -mt-3 sticky top-[calc(100vh)] h-[13rem]"
          >
            <base-footer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
