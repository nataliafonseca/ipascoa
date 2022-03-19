import Vue from "vue";
import VueRouter from "vue-router";

import PaginaInicio from "../views/PaginaInicio.vue";
import PaginaSobre from "../views/PaginaSobre.vue";
import PaginaLoja from "../views/PaginaLoja.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio",
    component: PaginaInicio,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: PaginaSobre,
  },
  {
    path: "/loja",
    name: "loja",
    component: PaginaLoja,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
