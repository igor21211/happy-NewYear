import axios from "axios";

const api = axios.create({
  baseURL: "https://65a19d3342ecd7d7f0a6cff6.mockapi.io/api/v1/",
  headers: { "Content-Type": "application/json" },
});

export default api;
