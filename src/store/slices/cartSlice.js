import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/services/api";


const calculateTotals = (cartItems = []) => {
  const VAT_RATE = 0.19; // Mehrwertsteuer 19%
  const SHIPPING_COST = 20;

  let totalPrice = 0;
  let totalQuantity = 0;

  cartItems.forEach((item) => {
    totalPrice += item.quantity * item.price;
    totalQuantity += item.quantity;
  });

  const netPrice = totalPrice / (1 + VAT_RATE);
  const vatAmount = totalPrice - netPrice;
  const grandTotal = totalPrice + SHIPPING_COST;

  return {
    totalPrice: parseFloat(totalPrice.toFixed(2)),
    netPrice: parseFloat(netPrice.toFixed(2)),
    totalQuantity,
    vatAmount: parseFloat(vatAmount.toFixed(2)),
    shippingCost: SHIPPING_COST,
    grandTotal: parseFloat(grandTotal.toFixed(2)),
  };
};


const apiCall = async (method, url, data = null, rejectWithValue) => {
  try {
    const response = await API[method](url, data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error?.response?.data || "🚨 Fehler bei der Anfrage!");
  }
};

// 🛒 Warenkorb abrufen
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) =>
    apiCall("get", "/cart/user", null, rejectWithValue)
);

// ➕ Produkt in den Warenkorb legen
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product, { dispatch, rejectWithValue }) => {
    if (!product._id) return rejectWithValue("🚨 Produkt-ID fehlt!");
    await apiCall("post", "/cart", {
      productId: product._id,
      quantity: product.quantity || 1,
      price: product.price,
      title: product.title,
      images: product.images,
    }, rejectWithValue);
    return dispatch(fetchCart()).unwrap();
  }
);

// 🔼 Menge eines Produkts erhöhen
export const increaseQuantity = createAsyncThunk(
  "cart/increaseQuantity",
  async (productId, { dispatch, rejectWithValue }) => {
    await apiCall("patch", `/cart/increase/${productId}`, null, rejectWithValue);
    return dispatch(fetchCart()).unwrap();
  }
);

// 🔽 Menge eines Produkts reduzieren
export const decreaseQuantity = createAsyncThunk(
  "cart/decreaseQuantity",
  async (productId, { dispatch, rejectWithValue }) => {
    await apiCall("patch", `/cart/decrease/${productId}`, null, rejectWithValue);
    return dispatch(fetchCart()).unwrap();
  }
);

// ❌ Produkt aus dem Warenkorb entfernen
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productId, { dispatch, rejectWithValue }) => {
    await apiCall("delete", `/cart/remove/${productId}`, null, rejectWithValue);
    return dispatch(fetchCart()).unwrap();
  }
);

// 🧹 Warenkorb leeren
export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { dispatch, rejectWithValue }) => {
    await apiCall("delete", "/cart/clear", null, rejectWithValue);
    return dispatch(fetchCart()).unwrap();
  }
);


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
    vatAmount: 0,
    shippingCost: 20,
    grandTotal: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 📥 Warenkorb abrufen
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        const totals = calculateTotals(state.cartItems);
        Object.assign(state, totals);
        state.loading = false;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Gleiche Behandlung für add/increase/decrease/remove
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        Object.assign(state, calculateTotals(state.cartItems));
      })
      .addCase(increaseQuantity.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        Object.assign(state, calculateTotals(state.cartItems));
      })
      .addCase(decreaseQuantity.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        Object.assign(state, calculateTotals(state.cartItems));
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        Object.assign(state, calculateTotals(state.cartItems));
      })

      // 🧹 Warenkorb komplett leeren
      .addCase(clearCart.fulfilled, (state) => {
        state.cartItems = [];
        state.totalQuantity = 0;
        state.totalPrice = 0;
        state.vatAmount = 0;
        state.grandTotal = state.shippingCost; 
      });
  },
});

export default cartSlice.reducer;
