<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">
      {{ error }}
    </div>
    <button>Log In</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);

      if (!error.value) {
        console.log("User Logged In");
      }
    };

    return {
      email,
      password,
      handleSubmit,
      error,
    };
  },
};
</script>

<style></style>
