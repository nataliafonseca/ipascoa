<template>
  <div class="app-top-bar">
    <v-app-bar color="green darken-4" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-0">iPáscoa</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        x-small
        icon
        elevation="2"
        fab
        @click="toggleColorTheme"
        class="color-mode-toggle"
        v-if="$vuetify.theme.dark"
      >
        <v-icon>mdi-white-balance-sunny</v-icon>
      </v-btn>

      <v-btn
        x-small
        icon
        elevation="2"
        fab
        @click="toggleColorTheme"
        class="color-mode-toggle"
        v-else
      >
        <v-icon>mdi-moon-waning-crescent</v-icon>
      </v-btn>

      <v-btn icon @click="$store.dispatch('logout')">
        <v-icon>mdi-logout</v-icon>
      </v-btn>

      <v-menu left bottom></v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="green darken--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>
          </router-link>
          
          <div v-for="loja in lojas" :key="loja.id">
          <router-link :to="`/loja/${loja.id}`">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-store</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ loja.nome }}</v-list-item-title>
          </v-list-item>
          </router-link>
        </div>

          <router-link to="/sobre">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sobre</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    name: 'AppTopBar',
    data: () => ({
      drawer: false,
      group: null,
      lojas:[]
    }),
    methods: {
        toggleColorTheme() {
this.$vuetify.theme.dark= !this.$vuetify.theme.dark;
        localStorage.setItem("luna.color_theme",
        `${this.$vuetify.theme.dark? "dark" : "light"}`);
        },
    },
    created() {
    // this.$store.dispatch("redirectLogin");
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        json.forEach((item) => {
          if (
            this.lojas.filter((loja) => loja.id === item.local.id).length === 0
          ) {
            this.lojas.push(item.local);
          }
        });
      });
  },
}
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}
</style>
