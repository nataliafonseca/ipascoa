import axios from "axios";

const api = axios.create({
  baseURL: "https://ipascoa-login.herokuapp.com",
});

export default api;
