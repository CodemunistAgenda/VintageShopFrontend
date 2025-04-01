import API from "./api";

// 🌐 Universelle API-Funktion zur Reduzierung von Duplikaten
const apiCall = async (method, url, data = null, rejectWithValue, config = {}) => {
  try {
    const response =
      method === "get"
        ? await API.get(url, { ...config, params: data })
        : await API[method](url, data, config);

    console.log(`📌 Antwort (${method.toUpperCase()} ${url}):`, response.data);
    return response.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.response?.data ||
      error?.message ||
      "🚨 Etwas ist schiefgelaufen!";
    console.error(`❌ Fehler (${method.toUpperCase()} ${url}):`, message);
    return rejectWithValue(message);
  }
};

export default apiCall;


