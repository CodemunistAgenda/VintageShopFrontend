import axios from "axios";
import {
  getStoredToken,
  clearStoredToken, 
} from "./storage";

const API_BASE_URL = import.meta.env.VITE_API_URL;
console.log("🌐 API BASE URL:", API_BASE_URL);
console.log("🔑 Stored Token:", getStoredToken()); // 💡 token kontrolü

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


API.interceptors.request.use(
  (config) => {
    const token = getStoredToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


API.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401 || status === 403) {
      clearStoredToken(); 
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default API;
