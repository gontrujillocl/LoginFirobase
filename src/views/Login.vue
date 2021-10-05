<template>
  <div class="container mt-5">
    <h3>Formulario</h3>
    <form @submit.prevent="envioForm">
      <div class="form-group">
        <label for="correo">Email: </label>
        <input
          class="form-control"
          v-model="email"
          id="correo"
          type="text"
          placeholder="Escríbe email"
          required
        />
      </div>
      <div class="form-group">
        <label for="contraseña">Contraseña: </label>
        <input
          class="form-control"
          v-model="password"
          placeholder="Ahora la contraseña"
          id="contraseña"
          type="password"
          required
        />
      </div>
      <button class="btn btn-primary" type="submit">Ingresar</button>
    </form>
  </div>
</template>

<script>
//usuario :gonzalo@truall.com
//contraseña: Gcl1963GO
import Firebase from "firebase";
export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    envioForm() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          this.$router.push("Logrado");
        })
        .catch((response) => {
          console.error(response);
        });
    },
  },
};
</script>
