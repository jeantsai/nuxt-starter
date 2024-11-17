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
    <div>
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
              name="username"
              autocomplete="username"
              fluid
              variant="outlined"
              class="outline-offset-4"
            />
            <label for="username">Enter your name</label>
          </FloatLabel>
          <Message
            v-if="$form.username?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.username.error?.message }}</Message
          >
          <FloatLabel variant="on">
            <Password
              name="password"
              :feedback="false"
              pt:pcInputText:root:autocomplete="current-password"
              fluid
              variant="outlined"
              class="outline-offset-4"
            />
            <label for="password">Enter your password</label>
          </FloatLabel>
          <Message
            v-if="$form.password?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.password.error?.message }}</Message
          >
        </div>
        <Button type="submit" severity="secondary">Login</Button>
      </Form>
    </div>
    <footer class="flex fixed bottom-0 gap-2 p-1">
      <p class="text-surface-200">Don't have an account?</p>
      <!-- <nuxt-link to="#" class="text-primary-500">Help</nuxt-link> -->
    </footer>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from 'primevue/usetoast';
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
  email: '',
});

const Credentials = z.object({
  username: z.string().min(1, { message: 'Username is required.' }),
  // email: z
  //   .string()
  //   .min(1, { message: 'Email is required.' })
  //   .email({ message: 'Invalid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

const resolver = ref(zodResolver(Credentials));

type Credentials = z.infer<typeof Credentials>;

const { signIn } = useAuth();
const route = useRoute();
const originPath = (route.query.redirect as string) || '/';

const onFormSubmit = async ({
  valid,
  values,
}: {
  valid: boolean;
  values: Record<string, any>;
}) => {
  toast.add({
    severity: 'success',
    summary: 'Form is submitted.',
    life: 3000,
  });
  if (valid) {
    toast.add({
      severity: 'success',
      summary: 'Form is submitted.',
      life: 3000,
    });
    console.log('Form submitted values: ', values);
    console.log('originPath: ', originPath);
    await signIn(
      { username: values.username, password: values.password },
      { callbackUrl: originPath },
    );
  }
};

definePageMeta({
  layout: false,
  // auth: false,
  // middleware: 'guest',
});
</script>

<style scoped></style>
