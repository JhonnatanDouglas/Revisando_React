import axios from "axios";

const api = axios.create({
  baseURL: "https://fruit-fake-api.onrender.com/",
  timeout: 8000,
});

export default api;
