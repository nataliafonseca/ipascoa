<template>
  <div class="page-container">
    <v-form @submit.prevent="doLogin" class="login">
      <h2>Login</h2>
      <v-text-field
        hide-details="auto"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        hide-details="auto"
        v-model="password"
        :rules="passwordRules"
        label="Password"
        type="password"
        required
      ></v-text-field>
      <v-btn class="block-btn" large type="submit">Entrar</v-btn>
    </v-form>
    <p class="redirect">
      Ainda não possui um usuário?
      <router-link class="link" :to="{ name: 'registro' }"
        >Registre-se</router-link
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      valid: false,
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    doLogin() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      this.$router.push("/");
    },
  },
  created() {
    this.$store.dispatch("redirectHome");
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

.block-btn {
  margin-top: 40px;
  width: 100%;
  font-weight: bold;
}

.redirect {
  margin-top: 40px;
  text-align: center;
}
</style>
