<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen bg-surface-950 dark"
  >
    <header>
      <img
        src="~/assets/images/logo-example.png"
        alt="Login"
        class="w-24 h-24 mx-auto"
      />
      <h1
        class="p-6 text-5xl font-semibold text-center text-white tracking-tighter"
      >
        Please login to continue
      </h1>
    </header>
    <content>
      <Form
        v-slot="$form"
        :resolver="resolver"
        :initial-values="initialValues"
        class="flex flex-col gap-4 w-full sm:w-80 m-12"
        @submit="onFormSubmit"
      >
        <div class="flex flex-col gap-1">
          <FloatLabel variant="on">
            <InputText
              name="email"
              type="text"
              fluid
              variant="outlined"
              class="outline-offset-4"
            />
            <label for="email">Enter your email address</label>
          </FloatLabel>
          <Message
            v-if="$form.email?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.email.error?.message }}</Message
          >
        </div>
        <Button type="submit" severity="secondary">Next</Button>
      </Form>
    </content>
    <footer class="flex fixed bottom-0 gap-2 p-1">
      <p class="text-surface-200">Don't have an account?</p>
      <nuxt-link to="/auth/register" class="text-primary-500">Help</nuxt-link>
    </footer>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from 'primevue/usetoast';
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
  email: '',
});

const resolver = ref(
  zodResolver(
    z.object({
      email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Invalid email address.' }),
    }),
  ),
);

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({
      severity: 'success',
      summary: 'Form is submitted.',
      life: 3000,
    });
    router.push('/');
  }
};

definePageMeta({
  layout: false,
  // auth: false,
  // middleware: 'guest',
});
</script>

<style scoped></style>
