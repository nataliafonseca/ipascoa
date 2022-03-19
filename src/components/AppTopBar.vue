<template>
    <div class="app-top-bar">
         <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-0">iPascoa</v-toolbar-title>

      <v-spacer></v-spacer>

     <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-menu left bottom></v-menu>

      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
            <v-router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>
          </v-router-link>

          <!-- <v-router-link to="/"> -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-store</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Loja1</v-list-item-title>
          </v-list-item>
          <!-- </v-router-link> -->

           <!-- <v-router-link to="/"> -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-store</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Loja2</v-list-item-title>
          </v-list-item>
          <!-- </v-router-link> -->

           <!-- <v-router-link to="/"> -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-store</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Loja3</v-list-item-title>
          </v-list-item>
          <!-- </v-router-link> -->

           <!-- <v-router-link to="/"> -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cadastro</v-list-item-title>
          </v-list-item>
          <!-- </v-router-link> -->

        <v-router-link to="/sobre">
         <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sobre</v-list-item-title>
          </v-list-item>
        </v-router-link>

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
}
</script>

<style scoped>

</style>