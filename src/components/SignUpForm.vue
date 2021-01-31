<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="text" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div ref="errorDiv" class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";

export default {
  setup(props, context) {
    const { error, signup } = useSignup();

    const errorDiv = ref(null);
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);

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
      error,
      displayName,
      email,
      password,
      handleSubmit,
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
