import axios from "axios";

const api = axios.create({
  baseURL: "http://cep.republicavirtual.com.br",
});

export default api;