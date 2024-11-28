<template>
  <header class="px-7 h-[76px] flex w-full" role="banner">
    <div class="flex justify-between items-center self-center w-full">
      <h1>
        <NuxtLink to="/" class="text-lg sm:text-2xl font-semibold">
          Tailwind PrivmVue Styling Exercise
        </NuxtLink>
      </h1>
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
          v-bind="avatarProp"
          class="mr-2 bg-primary-400 cursor-pointer"
          size="large"
          shape="circle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          @click="toggle"
        />
        <Menu id="overlay_menu" ref="menu" :model="menuItems" :popup="true" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Menu from 'primevue/menu';
import { useDark, useToggle } from '@vueuse/core';

const { status, data, signOut, signIn } = useAuth();
console.log('status', status.value);
console.log('data', data.value);

const isAuthenticated = computed(() => status.value === 'authenticated');

const avatarProp = computed(() => {
  if (isAuthenticated.value) {
    if (data.value?.image) {
      return {
        image: data.value.image,
      };
    }
    if (data.value?.username) {
      return {
        label: data.value.username.charAt(0).toUpperCase(),
      };
    }
    return {
      label: 'Noname',
    };
  } else {
    return {
      icon: 'pi pi-user',
    };
  }
});

const isDark = useDark();
// -- For F7 Icons
// const darkModeIcon = computed(() => (isDark.value ? 'f7:sun-max' : 'f7:moon'));
const toggleDark = useToggle(isDark);

const router = useRouter();
const menu = ref();
const menuItems = computed(() => [
  isAuthenticated.value
    ? {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
          console.log('Logging out ...');
          signOut({ callbackUrl: '/' });
        },
      }
    : {
        label: 'Login',
        icon: 'pi pi-sign-in',
        command: async () => {
          console.log('Logging in ...');
          await navigateTo({
            path: '/auth/login',
            query: { redirect: router.currentRoute.value.path },
          });
        },
      },
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>

<style scoped></style>
