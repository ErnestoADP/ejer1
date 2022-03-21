<template>
  <div>
    <h1>Crear una nueva cuenta</h1>
    <p>email: <input v-model="user.email" /></p>
    <p>password: <input v-model="user.password" /></p>
    <button @click="registrar">registrar</button>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Registrar",
  data() {
    return { user: { email: "", password: "" } };
  },
  methods: {
    async registrar() {
      const { email, password } = this.user;
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      this.$router.push("/");
    },
  },
};
</script>
