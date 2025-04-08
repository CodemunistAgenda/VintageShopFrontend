import API from "./api";
import type { AxiosRequestConfig, AxiosError } from "axios";

type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

const apiCall = async <T = any>(
  method: HttpMethod,
  url: string,
  data: any = null,
  rejectWithValue: (error: string) => any,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    console.log(`📡 API CALL → [${method.toUpperCase()}] ${url}`);
    if (data) console.log("Request Payload:", data);

    const finalConfig: AxiosRequestConfig = {
      ...config,
      withCredentials: true, 
    };

    const response =
      method === "get"
        ? await API.get<T>(url, { ...finalConfig, params: data })
        : await API[method]<T>(url, data, finalConfig);

    console.log(`✅ API Response [${method.toUpperCase()} ${url}]:`, response.data);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string; errors?: any }>;


    const status = error?.response?.status || "Unknown";
    const errorData = error?.response?.data || {};
    const message =
      errorData?.message ||
      errorData?.errors?.[Object.keys(errorData.errors || {})[0]]?.message || 
      error.message ||
      "Etwas ist schiefgelaufen!";

    console.error("API Fehler / Error Details:", {
      url,
      status,
      data: errorData,
    });

    return rejectWithValue(message);
  }
};

export default apiCall;
