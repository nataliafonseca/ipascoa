<template>
  <div class="page-container">
    <v-form @submit.prevent="doRegister" class="login">
      <h2>Registro</h2>
      <v-select
        :items="roleItems"
        v-model="role"
        :rules="roleRules"
        hide-details="auto"
        label="Quem é você?"
      ></v-select>
      <v-text-field
        hide-details="auto"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        type="email"
        required
      ></v-text-field>
      <v-text-field
        hide-details="auto"
        v-model="password"
        :rules="passwordRules"
        label="Senha"
        type="password"
        required
      ></v-text-field>
      <v-text-field
        hide-details="auto"
        v-model="passwordConfirmation"
        :rules="passwordConfirmationRules"
        label="Confirme sua senha"
        type="password"
        required
      ></v-text-field>
      <v-text-field
        hide-details="auto"
        v-model="name"
        :rules="nameRules"
        label="Nome"
        required
      ></v-text-field>
      <v-text-field
        hide-details="auto"
        v-model="lastName"
        :rules="lastNameRules"
        label="Sobrenome"
        required
      ></v-text-field>
      <v-btn class="block-btn" large type="submit">Registrar</v-btn>
    </v-form>
    <p class="redirect">
      Já possui um usuário?
      <router-link class="link" :to="{ name: 'login' }">Entre</router-link>.
    </p>
  </div>
</template>

<script>
export default {
  name: "PaginaRegistro",
  data() {
    return {
      valid: false,
      roleItems: ["Cliente", "Vendedor"],
      role: "",
      roleRules: [(v) => !!v || "O campo é obrigatório"],
      email: "",
      emailRules: [
        (v) => !!v || "O campo e-mail é obrigatório",
        (v) => /.+@.+/.test(v) || "Por favor, insira um e-mail válido",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "O campo senha é obrigatório",
        (v) => !!(v.length >= 6) || "Sua senha deve possuir ao menos 6 dígitos",
      ],
      passwordConfirmation: "",
      passwordConfirmationRules: [
        (v) => !!v || "O campo confirmação de senha é obrigatório",
        (v) => !!(v === this.password) || "As senhas digitadas não conferem",
      ],
      name: "",
      nameRules: [(v) => !!v || "O campo nome é obrigatório"],
      lastName: "",
      lastNameRules: [(v) => !!v || "O campo sobrenome é obrigatório"],
    };
  },
  methods: {
    doRegister() {
      this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
        name: this.name,
        lastName: this.lastName,
        role: this.role,
      });
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
