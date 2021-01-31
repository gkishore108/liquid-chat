<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div ref="errorDiv" class="error">
      {{ error }}
    </div>
    <button>Log In</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");
    const errorDiv = ref(null);

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);

      if (error.value) {
        setTimeout(() => {
          errorDiv.value.classList.add("remove");
          error.value = null;
        }, 5000);
      }
      if (!error.value) {
        context.emit("signin");
      }
    };

    return {
      email,
      password,
      handleSubmit,
      error,
      errorDiv,
    };
  },
};
</script>

<style>
.remove {
  display: none;
}
</style>
