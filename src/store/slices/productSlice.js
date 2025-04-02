// src/store/slices/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiCall from "@/services/apiCall";

// 🔄 Alle Produkte abrufen
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) =>
    apiCall("get", "/products", null, rejectWithValue)
);

// ➕ Neues Produkt hinzufügen
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, { rejectWithValue }) =>
    apiCall("post", "/products", productData, rejectWithValue, {
      headers: { "Content-Type": "multipart/form-data" },
    })
);

// ✏️ Produkt bearbeiten
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, productData }, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("stock", productData.stock);
    formData.append("category", productData.category._id || productData.category);

    if (productData.images) {
      productData.images.forEach((img) => {
        if (typeof img === "string") {
          formData.append("existingImages[]", img);
        }
      });
    }

    if (productData.newImages) {
      productData.newImages.forEach((file) => {
        formData.append("images", file);
      });
    }

    return apiCall("put", `/products/${id}`, formData, rejectWithValue, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
);

// ❌ Produkt löschen
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) =>
    apiCall("delete", `/products/${id}`, null, rejectWithValue)
);

// 🔍 Produkt nach ID abrufen
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id, { rejectWithValue }) =>
    apiCall("get", `/products/${id}`, null, rejectWithValue)
);

// 🧩 Slice-Konfiguration
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredProducts: [],
    selectedCategory: "all",
    loading: false,
    error: null,
    singleProduct: null,
  },
  reducers: {
    // 🔍 Produkte nach Kategorie filtern
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;

      if (action.payload === "all") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter((product) => {
          const cat = product.category?._id || product.category;
          return cat?.toString() === action.payload.toString();
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔽 Produkte abrufen
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        const selected = state.selectedCategory;
        state.filteredProducts =
          selected === "all"
            ? action.payload
            : action.payload.filter((product) => {
                const cat = product.category?._id || product.category;
                return cat?.toString() === selected.toString();
              });
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ➕ Produkt hinzufügen
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
        if (
          state.selectedCategory === "all" ||
          (action.payload.category &&
            action.payload.category.toString() === state.selectedCategory.toString())
        ) {
          state.filteredProducts.push(action.payload);
        }
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✏️ Produkt aktualisieren
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updated = action.payload;
        state.products = state.products.map((p) =>
          p._id === updated._id ? updated : p
        );
        state.filteredProducts =
          state.selectedCategory === "all"
            ? state.products
            : state.products.filter((product) => {
                const cat = product.category?._id || product.category;
                return cat?.toString() === state.selectedCategory.toString();
              });
      })

      // ❌ Produkt löschen
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const id = action.payload;
        state.products = state.products.filter((p) => p._id !== id);
        state.filteredProducts = state.filteredProducts.filter((p) => p._id !== id);
      })

      // 🔍 Einzelnes Produkt abrufen
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.singleProduct = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.singleProduct = null;
      });
  },
});

export const { filterByCategory } = productSlice.actions;
export default productSlice.reducer;
