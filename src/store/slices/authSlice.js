import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getStoredToken,
  setStoredToken,
  clearStoredToken,
} from "@/services/storage";
import apiCall from "@/services/apiCall";

//
// 🔐 LOGIN
//
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    const response = await apiCall("post", "/auth/login", credentials, rejectWithValue);

    const { token } = response;
    if (!token) {
      return rejectWithValue("❌ Anmeldung fehlgeschlagen. Kein Token erhalten.");
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
    const { username, email, password } = userData;
    const payload = { username, email, password };

    const response = await apiCall("post", "/auth/register", payload, rejectWithValue);
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
// 🧩 AUTH SLICE
//
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: getStoredToken(),                   // gespeicherter Token
    isAuthenticated: !!getStoredToken(),       // Login-Statuscredentials
    loading: false,                            // Ladeanzeige
    error: null,                               // Fehlermeldung
    registerMessage: null,                     // Erfolgsmeldung (Register)
  },
  reducers: {
    clearError: (state) => {
      state.error = null;                      // Fehler zurücksetzen
    },
    clearRegisterMessage: (state) => {
      state.registerMessage = null;            // Erfolgsmeldung zurücksetzen
    },
  },
  extraReducers: (builder) => {
    builder

      // ➤ LOGIN
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

      // ➤ REGISTER
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

      // ➤ LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = null;
      });
  },
});

export const { clearError, clearRegisterMessage } = authSlice.actions;
export default authSlice.reducer;
