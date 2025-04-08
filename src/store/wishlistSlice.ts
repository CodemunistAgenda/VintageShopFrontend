import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getStoredWishlist,
  setStoredWishlist,
  clearStoredWishlist,
} from "../lib/storage";

// Wishlist item tipi (ID ve tüm veri)
export interface WishlistItem {
  _id: string;
  [key: string]: any;
}

export interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: getStoredWishlist() || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.find(item => item._id === action.payload._id);
      if (!exists) {
        state.items.push(action.payload);
        setStoredWishlist(state.items);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
      setStoredWishlist(state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      clearStoredWishlist();
    },
    toggleWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.find(item => item._id === action.payload._id);
      if (exists) {
        state.items = state.items.filter(item => item._id !== action.payload._id);
      } else {
        state.items.push(action.payload);
      }
      setStoredWishlist(state.items);
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  toggleWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
