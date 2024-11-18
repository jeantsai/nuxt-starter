<template>
  <header class="px-7 h-[76px] flex w-full">
    <div class="flex justify-between items-center self-center w-full">
      <div>
        <NuxtLink to="/" class="text-lg sm:text-2xl font-semibold">
          Tailwind PrivmVue Styling Exercise
        </NuxtLink>
        <nav class="text-xs sm:text-base font-light">
          <ul class="flex space-x-4">
            <li v-for="navLink in navLinks" :key="navLink.name">
              <a :href="navLink.path" class="hover:text-primary">
                {{ navLink.name }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex items-center">
        <i
          class="icon m-6"
          :class="{
            'icon-brightness-high-bold': !isDark,
            'icon-quiet-hours-presence-bold': isDark,
          }"
          @click="toggleDark()"
        />
        <Avatar
          v-if="isAuthenticated"
          label="J"
          class="mr-2 bg-primary-400 cursor-pointer"
          size="large"
          shape="circle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          @click="toggle"
        />
        <Avatar
          v-else
          icon="pi pi-user"
          class="mr-2 bg-primary-400 cursor-pointer"
          size="large"
          shape="circle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          @click="toggle"
        />
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Menu from 'primevue/menu';
import { useDark, useToggle } from '@vueuse/core';
// import { useAuth } from '@sidebase/nuxt-auth';

const isAuthenticated = computed(() => {
  // status.value === 'authenticated'
  // :label="
  //           status.value?.user?.image
  //             ? status.value.user.image
  //             : status.value.user.name.charAt(0)
  //         "
  return false;
});

const isDark = useDark();
// -- For F7 Icons
// const darkModeIcon = computed(() => (isDark.value ? 'f7:sun-max' : 'f7:moon'));
const toggleDark = useToggle(isDark);

const router = useRouter();
const menu = ref();
const items = ref([
  isAuthenticated.value
    ? {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        // command: () => signOut(),
      }
    : {
        label: 'Login',
        icon: 'pi pi-sign-in',
        command: () => router.push('/auth/Login'),
      },
]);

const toggle = (event) => {
  menu.value.toggle(event);
};

const navLinks = ref([
  // { name: 'Home', path: '/' },
  // { name: 'Services', path: '/services' },
  // { name: 'About', path: '/about' },
  // { name: 'Contact', path: '/contact' },
]);
</script>

<style scoped></style>
