import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
  isMenuOpen: boolean;
  activeDropdown: string | null;
  scrolled: boolean;
  transparent: boolean;
  isMobile: boolean;
  prevScrollY: number;
}

// Check if running on client side (to safely access window)
const isClient = typeof window !== "undefined";

const initialState: UIState = {
  isMenuOpen: false,
  activeDropdown: null,
  scrolled: false,
  transparent: false,
  isMobile: isClient ? window.innerWidth <= 1440 : true,
  prevScrollY: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    toggleDropdown: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      state.activeDropdown =
        state.activeDropdown === category ? null : category;
    },
    closeDropdown: (state) => {
      state.activeDropdown = null;
    },
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.scrolled = action.payload;
    },
    setTransparent: (state, action: PayloadAction<boolean>) => {
      state.transparent = action.payload;
    },
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    setPrevScrollY: (state, action: PayloadAction<number>) => {
      state.prevScrollY = action.payload;
    },
  },
});

export const {
  toggleMenu,
  setMenuOpen,
  toggleDropdown,
  closeDropdown,
  setScrolled,
  setTransparent,
  setIsMobile,
  setPrevScrollY,
} = uiSlice.actions;

export default uiSlice.reducer;
