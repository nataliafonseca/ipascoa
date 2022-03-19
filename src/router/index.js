import Vue from "vue";
import VueRouter from "vue-router";

import PaginaInicio from "../views/PaginaInicio.vue";
import PaginaSobre from "../views/PaginaSobre.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: PaginaInicio,
  },
  {
    path: "/about",
    name: "about",
    component: PaginaSobre,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
