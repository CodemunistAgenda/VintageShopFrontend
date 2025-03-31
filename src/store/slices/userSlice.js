import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/services/api";

// 🔧 Einheitlicher API-Aufruf-Handler
const apiCall = async (method, url, data = null, rejectWithValue, config = {}) => {
  try {
    const response = await API[method](url, data, config);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "❌ Ein Fehler ist aufgetreten.");
  }
};

const initialState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
};


// 👥 Alle Benutzer abrufen
export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, { rejectWithValue }) =>
    apiCall("get", "/auth/users", null, rejectWithValue)
);

// 🔍 Benutzer per ID abrufen
export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (userId, { rejectWithValue }) => {
    if (!userId) return rejectWithValue("❌ Benutzer-ID fehlt!");
    return apiCall("get", `/auth/users/${userId}`, null, rejectWithValue);
  }
);

// ❤️ Favoriten des Benutzers abrufen
export const fetchUserFavorites = createAsyncThunk(
  "users/fetchUserFavorites",
  async (userId, { rejectWithValue }) =>
    apiCall("get", `/auth/users/${userId}/favorites`, null, rejectWithValue)
);

// ✏️ Benutzer aktualisieren
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ userId, userData }, { rejectWithValue }) =>
    apiCall("put", `/auth/users/${userId}`, userData, rejectWithValue)
);

// ❌ Benutzer löschen
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async ({ userId }, { rejectWithValue }) => {
    if (!userId || typeof userId !== "string") {
      return rejectWithValue("❌ Ungültige Benutzer-ID!");
    }
    await apiCall("delete", `/auth/users/${userId}`, null, rejectWithValue);
    return userId;
  }
);

// 🔁 Aktivierungsstatus eines Benutzers ändern
export const toggleUserStatus = createAsyncThunk(
  "users/toggleUserStatus",
  async ({ userId, token }, { rejectWithValue }) => {
    if (!userId || typeof userId !== "string") {
      return rejectWithValue("❌ Benutzer-ID fehlt oder ungültig!");
    }
    const result = await apiCall(
      "put",
      `/auth/users/${userId}/status`,
      {},
      rejectWithValue,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return { userId, isActive: result.isActive };
  }
);

// 👮 Benutzerrolle aktualisieren
export const updateUserRole = createAsyncThunk(
  "users/updateUserRole",
  async ({ userId, role }, { rejectWithValue }) =>
    apiCall("put", `/auth/users/${userId}/role`, { role }, rejectWithValue)
);

// 🏠 Adresse aktualisieren
export const updateAddress = createAsyncThunk(
  "users/updateAddress",
  async ({ userId, address }, { rejectWithValue }) =>
    apiCall("patch", `/auth/users/${userId}`, { address }, rejectWithValue)
);


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 👥 Benutzerliste
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 🔍 Einzelner Benutzer
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
      })

      // ✏️ Benutzer aktualisieren
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        );
      })

      // ❌ Benutzer löschen
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload);
      })

      // 👮 Rolle aktualisieren
      .addCase(updateUserRole.fulfilled, (state, action) => {
        state.users = state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        );
      })

      // ✅ Aktiv/Deaktiv-Status ändern
      .addCase(toggleUserStatus.fulfilled, (state, action) => {
        state.users = state.users.map((user) =>
          user._id === action.payload.userId
            ? { ...user, isActive: action.payload.isActive }
            : user
        );
      })

      // 🏠 Adresse aktualisieren
      .addCase(updateAddress.fulfilled, (state, action) => {
        if (state.selectedUser?._id === action.payload._id) {
          state.selectedUser = action.payload;
        }
      })

      // ❤️ Favoriten aktualisieren
      .addCase(fetchUserFavorites.fulfilled, (state, action) => {
        if (state.selectedUser?._id === action.payload._id) {
          state.selectedUser.favorites = action.payload.favorites;
        }
      });
  },
});

export const { clearError } = userSlice.actions;
export default userSlice.reducer;
