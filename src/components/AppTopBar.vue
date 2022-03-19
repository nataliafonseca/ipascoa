<template>
  <div class="app-top-bar">
    <v-app-bar color="green darken-4" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

    <v-app-bar color="green darken-4" dense dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title class="pl-0">iPascoa</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon elevation="2" fab @click="toggleColorTheme"
            class="color-mode-toggle" v-if="$vuetify.theme.dark">
            <v-icon>fa-sun</v-icon>
        </v-btn>

        <v-btn icon elevation="2" fab @click="toggleColorTheme"
            class="color-mode-toggle" v-else>
            <v-icon>fa-moon</v-icon>
        </v-btn>
        
     <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
      <v-btn icon @click="$store.dispatch('logout')">
        <v-icon>mdi-logout</v-icon>
      </v-btn>

        <v-menu left bottom></v-menu>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="green darken--text text--accent-4">

            <router-link to="/">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Inicio</v-list-item-title>
                </v-list-item>
            </router-link>

            <!-- <router-link to="/"> -->
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-store</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Posto Renoir</v-list-item-title>
                </v-list-item>
            <!-- </router-link> -->

            <!-- <router-link to="/"> -->
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-store</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Quinta Beija-flor
                    </v-list-item-title>
                 </v-list-item>
            <!-- </router-link> -->

            <!-- <router-link to="/"> -->
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-store</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Passarela Raiz dejavú
                    </v-list-item-title>
                </v-list-item>
            <!-- </router-link> -->

           <router-link to="/registro">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Cadastro</v-list-item-title>
                </v-list-item>
          </router-link>

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
    }),
    methods: {
        toggleColorTheme() {
this.$vuetify.theme.dark= !this.$vuetify.theme.dark;
localStorage.setItem(
"luna.color_theme",
`${this.$vuetify.theme.dark? "dark" : "light"}`
);
},
}
}
</script>

<style scoped>
    .app-top-bar a {
        text-decoration: none;
    }
</style>
