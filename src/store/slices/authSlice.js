import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/services/api";
import {
  getStoredToken,
  setStoredToken,
  clearStoredToken,
} from "@/services/storage";



const apiCall = async (method, url, data = null, rejectWithValue, config = {}) => {
  try {
    const response = await API[method](url, data, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "❌ Bir hata oluştu.");
  }
};

//
// 🔐 LOGIN
//
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    const response = await apiCall("post", "/user/login", credentials, rejectWithValue);

    const { token } = response;
    if (!token) {
      return rejectWithValue("❌ Giriş başarısız. Token alınamadı.");
    }

    setStoredToken(token);
    return { token };
  }
);

//
// 📝 REGISTER
//
export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    const response = await apiCall("post", "/user/register", userData, rejectWithValue, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.message; 
  }
);

//
// 🚪 LOGOUT
//
export const logout = createAsyncThunk("auth/logout", async () => {
  clearStoredToken();
  return null;
});

//
// 🔄 AUTH SLICE
//
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: getStoredToken(),
    isAuthenticated: !!getStoredToken(),
    loading: false,
    error: null,
    registerMessage: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearRegisterMessage: (state) => {
      state.registerMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // REGISTER
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.registerMessage = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.registerMessage = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = null;
      });
  },
});

export const { clearError, clearRegisterMessage } = authSlice.actions;
export default authSlice.reducer;
