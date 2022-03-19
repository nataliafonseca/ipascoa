<template>
  <v-app>
    <div class="mobile-container">
      <AppTopBar />
      <router-view />
      <RodaPe />
    </div>
  </v-app>
</template>

<script>
import AppTopBar from "./components/AppTopBar.vue";
import RodaPe from "./components/RodaPe.vue";

export default {
  name: "App",

  components: {
    AppTopBar,
    RodaPe,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #1b5e20 !important;
}

a:hover {
  color: #0b310e !important;
  text-decoration: underline;
}

button {
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
}

img {
  max-width: 100%;
  height: auto;
}

.mobile-container {
  width: 500px;
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0;
  padding-bottom: 120px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.page-container {
  margin-top: 30px;
  padding: 0 15px;
}

.v-enter {
  opacity: 0;
}

.v-enter-active {
  transition: all 0.3s;
}

</style>
