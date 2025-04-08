// src/store/slices/productSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import apiCall from "@/lib/apiCall";

// TYPES
export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: { _id: string } | string;
  images?: string[];
  [key: string]: any;
}

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  selectedCategory: string;
  loading: boolean;
  error: string | null;
  singleProduct: Product | null;
}

// ✅ INITIAL STATE
const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  selectedCategory: "all",
  loading: false,
  error: null,
  singleProduct: null,
};

// 🔄 Fetch All Products
export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => apiCall("get", "/products", null, rejectWithValue)
);

// ➕ Add New Product
export const addProduct = createAsyncThunk<Product, FormData, { rejectValue: string }>(
  "products/addProduct",
  async (productData, { rejectWithValue }) =>
    apiCall("post", "/products", productData, rejectWithValue, {
      headers: { "Content-Type": "multipart/form-data" },
    })
);

// ✏️ Update Product
export const updateProduct = createAsyncThunk<Product, { id: string; productData: any }, { rejectValue: string }>(
  "products/updateProduct",
  async ({ id, productData }, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("stock", productData.stock);
    formData.append("category", productData.category._id || productData.category);

    if (productData.images) {
      productData.images.forEach((img: string) => {
        formData.append("existingImages[]", img);
      });
    }

    if (productData.newImages) {
      productData.newImages.forEach((file: File) => {
        formData.append("images", file);
      });
    }

    return apiCall("put", `/products/${id}`, formData, rejectWithValue, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
);

// ❌ Delete Product
export const deleteProduct = createAsyncThunk<string, string, { rejectValue: string }>(
  "products/deleteProduct",
  async (id, { rejectWithValue }) =>
    apiCall("delete", `/products/${id}`, null, rejectWithValue)
);

// 🔍 Get Product by ID
export const fetchProductById = createAsyncThunk<Product, string, { rejectValue: string }>(
  "products/fetchProductById",
  async (id, { rejectWithValue }) =>
    apiCall("get", `/products/${id}`, null, rejectWithValue)
);

// 🧩 Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;

      if (action.payload === "all") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter((product) => {
          const catId = typeof product.category === "string" ? product.category : product.category?._id;
          return catId === action.payload;
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts =
          state.selectedCategory === "all"
            ? action.payload
            : action.payload.filter((product) => {
                const catId = typeof product.category === "string" ? product.category : product.category?._id;
                return catId === state.selectedCategory;
              });
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Fehler beim Laden der Produkte";
      })

      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.products.push(action.payload);
        if (
          state.selectedCategory === "all" ||
          (typeof action.payload.category === "string"
            ? action.payload.category === state.selectedCategory
            : action.payload.category?._id === state.selectedCategory)
        ) {
          state.filteredProducts.push(action.payload);
        }
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Fehler beim Hinzufügen des Produkts";
      })

      .addCase(updateProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        const updated = action.payload;
        state.products = state.products.map((p) => (p._id === updated._id ? updated : p));
        state.filteredProducts =
          state.selectedCategory === "all"
            ? state.products
            : state.products.filter((product) => {
                const catId = typeof product.category === "string" ? product.category : product.category?._id;
                return catId === state.selectedCategory;
              });
      })

      .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<string>) => {
        const id = action.payload;
        state.products = state.products.filter((p) => p._id !== id);
        state.filteredProducts = state.filteredProducts.filter((p) => p._id !== id);
      })

      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.singleProduct = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Fehler beim Laden des Produkts";
        state.singleProduct = null;
      });
  },
});

export const { filterByCategory } = productSlice.actions;
export default productSlice.reducer;
