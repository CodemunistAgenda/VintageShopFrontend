
import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice';
import productReducer from './slices/productSlice';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';
import wishlistReducer from './slices/wishlistSlice';



export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    product: productReducer,
    users: userReducer,
    auth: authReducer,
    cart: cartReducer,
    ui: uiReducer,
    wishlist: wishlistReducer,
  },
});
