<template>
  <div>
    <img class="center" src="../assets/liquid_cht.jpg" />
  </div>
  <div class="welcome container">
    <p>Welcome to Liquid Chat</p>

    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @signin="handleSignIn" />
      <p>
        Don't have an account?
        <span @click="showLogin = false">Sign Up</span> here
      </p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignUpForm @signin="handleSignIn" />
      <p>
        Already registered?
        <span @click="showLogin = true">Login</span> here
      </p>
    </div>
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    SignUpForm,
    LoginForm,
  },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();
    const handleSignIn = () => {
      router.push({ name: "Chatroom" });
    };

    return { showLogin, handleSignIn };
  },
};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome label {
  display: block;
  margin: 20px 0px 10px;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.welcome button {
  margin: 20px auto;
  cursor: pointer;
}
</style>
