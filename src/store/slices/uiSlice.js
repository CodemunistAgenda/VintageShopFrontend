// src/store/slices/uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  activeDropdown: null,
  scrolled: false,
  transparent: false,
  isMobile: window.innerWidth <= 1440,
  prevScrollY: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    toggleDropdown: (state, action) => {
      const category = action.payload;
      state.activeDropdown = state.activeDropdown === category ? null : category;
    },
    setScrolled: (state, action) => {
      state.scrolled = action.payload;
    },
    setTransparent: (state, action) => {
      state.transparent = action.payload;
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
    setPrevScrollY: (state, action) => {
      state.prevScrollY = action.payload;
    },
    closeDropdown: (state) => {
      state.activeDropdown = null;
    },
  },
});

export const {
  toggleMenu,
  setMenuOpen,
  toggleDropdown,
  setScrolled,
  setTransparent,
  setIsMobile,
  setPrevScrollY,
  closeDropdown,
} = uiSlice.actions;

export default uiSlice.reducer;
