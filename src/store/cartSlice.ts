import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import apiCall from "@/lib/apiCall";

// -------------------------
// Types
// -------------------------
interface CartItem {
  product: {
    _id: string;
    name: string;
    price: number;
    stock?: number;
    [key: string]: any;
  };
  quantity: number;
  priceAtAddition: number;
}

interface CartResponse {
  items: CartItem[];
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
  totalCount: number;
  totalPrice: number;
  loading: boolean;
  error: string | null;
}

// -------------------------
// Initial State
// -------------------------
const initialState: CartState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
  loading: false,
  error: null,
};

// -------------------------
// Async Thunks
// -------------------------
export const fetchCart = createAsyncThunk<CartResponse>(
  "cart/fetch",
  async (_, thunkAPI) => {
    return await apiCall("get", "/cart", null, thunkAPI.rejectWithValue);
  }
);

export const addToCart = createAsyncThunk<CartResponse, { productId: string; quantity: number }>(
  "cart/add",
  async ({ productId, quantity }, thunkAPI) => {
    return await apiCall("post", "/cart/add", { productId, quantity }, thunkAPI.rejectWithValue);
  }
);

export const increaseQuantity = createAsyncThunk<CartResponse, string>(
  "cart/increase",
  async (productId, thunkAPI) => {
    return await apiCall("patch", `/cart/increase/${productId}`, null, thunkAPI.rejectWithValue);
  }
);

export const decreaseQuantity = createAsyncThunk<CartResponse, string>(
  "cart/decrease",
  async (productId, thunkAPI) => {
    return await apiCall("patch", `/cart/decrease/${productId}`, null, thunkAPI.rejectWithValue);
  }
);

export const removeFromCart = createAsyncThunk<CartResponse, string>(
  "cart/remove",
  async (productId, thunkAPI) => {
    return await apiCall("delete", `/cart/remove/${productId}`, null, thunkAPI.rejectWithValue);
  }
);

export const clearCart = createAsyncThunk<CartResponse>(
  "cart/clear",
  async (_, thunkAPI) => {
    return await apiCall("delete", "/cart/clear", null, thunkAPI.rejectWithValue);
  }
);

// -------------------------
// Slice
// -------------------------
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ➤ FETCH
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action: PayloadAction<CartResponse>) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalCount = action.payload.items.reduce((sum, item) => sum + item.quantity, 0);
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // ➤ ADD / INCREASE / DECREASE / REMOVE → same structure
      .addCase(addToCart.fulfilled, updateCartState)
      .addCase(increaseQuantity.fulfilled, updateCartState)
      .addCase(decreaseQuantity.fulfilled, updateCartState)
      .addCase(removeFromCart.fulfilled, updateCartState)

      // ➤ CLEAR
      .addCase(clearCart.fulfilled, (state) => {
        state.items = [];
        state.totalCount = 0;
        state.totalPrice = 0;
      });
  },
});

// -------------------------
// Reusable Reducer Handler
// -------------------------
function updateCartState(state: CartState, action: PayloadAction<CartResponse>) {
  const { items, totalPrice } = action.payload;
  state.items = items;
  state.totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  state.totalPrice = totalPrice;
}

// -------------------------
// Export
// -------------------------
export const { resetCart } = cartSlice.actions;
export default cartSlice.reducer;
