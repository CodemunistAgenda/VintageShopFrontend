// src/lib/api.ts
import axios from "axios";
import Router from "next/router";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5009/api";

if (!API_BASE_URL) {
  console.warn("⚠️ Environment variable 'NEXT_PUBLIC_API_URL' is not defined.");
}

const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401 || status === 403) {
      console.warn("🚪 Unauthorized – redirecting to login...");
      if (typeof window !== "undefined") {
        Router.push("/login");
      }
    }

    return Promise.reject(error?.response?.data || { message: "Unbekannter Fehler" });
  }
);

export default API;

