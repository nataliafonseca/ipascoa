<template>
  <v-app>
    <AppTopBar/>
      <router-view />
  </v-app>
</template>

<script>

import AppTopBar from "./components/AppTopBar.vue"

export default {
  name: "App",

  components: {
    AppTopBar,
  },
};
</script>

<style>
.page-container {
  margin-top: 30px;
  padding: 0 15px;
}
</style>
