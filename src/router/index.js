import Vue from "vue";
import VueRouter from "vue-router";

import PaginaInicio from "../views/PaginaInicio.vue";
import PaginaLogin from "../views/PaginaLogin.vue";
import PaginaRegistro from "../views/PaginaRegistro.vue";
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
<<<<<<< HEAD
    
=======
    path: "/registro",
    name: "registro",
    component: PaginaRegistro,
  },
  {
    path: "/login",
    name: "login",
    component: PaginaLogin,

    path: "/loja",
    name: "loja",
    component: PaginaLoja,
>>>>>>> 40ce64c2315995807517365a05e99b1fbbda701f
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
