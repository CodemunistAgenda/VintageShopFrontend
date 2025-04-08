import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import apiCall from "../../lib/apiCall";

// TYPES
export interface User {
  _id: string;
  name?: string;
  email: string;
  role?: string;
  profileImage?: string;
  [key: string]: any;
}

interface LoginResponse {
  user: User;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  registerMessage: string | null;
}

interface Credentials {
  email: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

// ✅ INITIAL STATE (no localStorage, no token)
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  registerMessage: null,
};

// ✅ LOGIN
export const login = createAsyncThunk<
  LoginResponse,
  Credentials,
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await apiCall("post", "/auth/login", credentials, rejectWithValue);

    const user = response.user || response;

    if (!user?._id) {
      return rejectWithValue("Anmeldung fehlgeschlagen. Kein Benutzer erhalten.");
    }

    return { user };
  } catch  {
    return rejectWithValue("Fehler beim Login");
  }
});


// ✅ REGISTER
export const register = createAsyncThunk<
  string,
  RegisterData,
  { rejectValue: string }
>("auth/register", async (userData, { rejectWithValue }) => {
  try {
    const response = await apiCall("post", "/auth/register", userData, rejectWithValue);
    return response.message;
  } catch  {
    return rejectWithValue("Fehler bei der Registrierung");
  }
});

// ✅ LOGOUT
export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await apiCall("post", "/auth/logout", null, rejectWithValue);
    } catch  {
      return rejectWithValue( "Fehler beim Logout");
    }
  }
);

// ✅ FETCH CURRENT USER
export const fetchCurrentUser = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>("auth/fetchCurrentUser", async (_, { rejectWithValue }) => {
  try {
    const response = await apiCall("get", "/auth/me", null, rejectWithValue);
    return response;
  } catch {
    return rejectWithValue("Benutzer konnte nicht geladen werden");
  }
});


// ✅ SLICE
const authSlice = createSlice({
  name: "auth",
  initialState,
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
      // ➤ LOGIN
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Fehler beim Login";
      })

      // ➤ REGISTER
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.registerMessage = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.registerMessage = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Fehler bei der Registrierung";
      })

      // ➤ LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })

      // ➤ FETCH CURRENT USER
      .addCase(fetchCurrentUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { clearError, clearRegisterMessage } = authSlice.actions;
export default authSlice.reducer;
