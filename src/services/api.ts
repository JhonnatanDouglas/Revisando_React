import axios from "axios";

const api = axios.create({
  baseURL: "https://raw.githubusercontent.com/JhonnatanDouglas/PortBack/main",
  timeout: 8000,
});

export default api;
