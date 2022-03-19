import { decodeJwt } from "jose";
import Vue from "vue";
import Vuex from "vuex";

import router from "../router";
import api from "../services/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    user: {
      id: "",
      email: "",
      name: "",
      lastName: "",
      role: "",
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = {
        id: payload.id,
        email: payload.email,
        name: payload.name,
        lastName: payload.last_name,
        role: payload.role,
      };
    },
  },
  actions: {
    async login(context, payload) {
      try {
        const { data } = await api.post("login", {
          email: payload.email,
          password: payload.password,
        });

        localStorage.setItem("ipascoa.token", data.accessToken);
        context.commit("UPDATE_LOGIN", true);
        context.commit("UPDATE_USER", data.user);

        context.dispatch("redirectHome");
      } catch (err) {
        Vue.$vToastify.error("E-mail e/ou senha incorretos.", "Erro");
      }
    },
    async register(context, payload) {
      try {
        const { data } = await api.post("register", {
          email: payload.email,
          password: payload.password,
          name: payload.name,
          last_name: payload.lastName,
          role: payload.role,
        });

        localStorage.setItem("ipascoa.token", data.accessToken);
        context.commit("UPDATE_LOGIN", true);
        context.commit("UPDATE_USER", data.user);

        context.dispatch("redirectHome");
      } catch (err) {
        Vue.$vToastify.error("Já existe uma conta com esse e-mail.", "Erro");
      }
    },
    logout(context) {
      localStorage.removeItem("ipascoa.token");
      context.commit("UPDATE_LOGIN", false);
      context.commit("UPDATE_USER", {
        id: "",
        email: "",
        name: "",
        lastName: "",
        role: "",
      });

      context.dispatch("redirectLogin");
    },
    async logUserById(context, payload) {
      const { data, status } = await api.get(`users/${payload}`);

      if (status === 404) {
        throw new Error("User not found");
      }

      context.commit("UPDATE_LOGIN", true);
      context.commit("UPDATE_USER", data);
      context.dispatch("redirectHome");
    },
    async checkAuthentication(context) {
      const token = localStorage.getItem("ipascoa.token");

      if (!token) {
        context.dispatch("redirectLogin");
      }

      const { sub: user_id } = decodeJwt(token);
      await context.dispatch("logUserById", user_id);
    },
    redirectHome(context) {
      if (context.state.login) {
        router.push("/");
      }
    },
    redirectLogin(context) {
      if (!context.state.login) {
        router.push("/login");
      }
    },
  },
});
