import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/services/api";
import {
  getStoredToken,
  setStoredToken,
  clearStoredToken,
} from "@/services/storage";


// 🔁 Universelle API-Funktion für asynchrone Anfragen
const apiCall = async (method, url, data = null, rejectWithValue, config = {}) => {
  try {
    console.log("🔁 API Call →", method.toUpperCase(), url); 
    console.log("📦 Payload:", data); 
    const response = await API[method](url, data, config);
    console.log("✅ Response:", response.data); 
    return response.data;
  } catch (error) {
    console.error("❌ API Error:", error.response || error); 
    return rejectWithValue(error.response?.data?.message || "❌ Es ist ein Fehler aufgetreten.");
  }
};


//
// 🔐 LOGIN
// Asynchrone Aktion zum Einloggen eines Benutzers
//
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    const response = await apiCall("post", "/user/login", credentials, rejectWithValue);

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
// Asynchrone Aktion zum Registrieren eines neuen Benutzers
//
export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    const { username, email, password } = userData; // Nur diese 3
    const payload = { username, email, password };

    const response = await apiCall("post", "/user/register", payload, rejectWithValue);
    return response.message;
  }
);



//
// 🚪 LOGOUT
// Setzt Authentifizierungsstatus zurück und entfernt gespeicherten Token
//
export const logout = createAsyncThunk("auth/logout", async () => {
  clearStoredToken();
  return null;
});


//
// 🔄 AUTH SLICE
// Redux-Slice zur Verwaltung von Authentifizierungszuständen
//
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: getStoredToken(),                 // gespeicherter Token (falls vorhanden)
    isAuthenticated: !!getStoredToken(),     // Status: Benutzer eingeloggt?
    loading: false,                          // Status: Wird geladen?
    error: null,                             // Fehlermeldung (falls vorhanden)
    registerMessage: null,                   // Erfolgsnachricht bei Registrierung
  },
  reducers: {
    clearError: (state) => {
      state.error = null; // Setzt die Fehlermeldung zurück
    },
    clearRegisterMessage: (state) => {
      state.registerMessage = null; // Setzt die Registrierungsnachricht zurück
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
