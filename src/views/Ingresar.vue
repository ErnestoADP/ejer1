<template>
  <div>
    <h1>Iniciar sesión</h1>
    <p>email: <input v-model="user.email" /></p>
    <p>password: <input v-model="user.password" /></p>
    <button @click="ingresar">ingresar</button>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Ingresar",
  data() {
    return { user: { email: "", password: "" } };
  },
  methods: {
    async ingresar() {
      const { email, password } = this.user;
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      this.$router.push("/");
    },
  },
};
</script>
