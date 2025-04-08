// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./user/authSlice";
// import profileReducer from "./user/profileSlice";
// import userCrudReducer from "./user/userCrudSlice";
// import userStatusReducer from "./user/userStatusSlice";

import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import ordersReducer from "./ordersSlice";

import uiReducer from "./uiSlice";
import wishlistReducer from "./wishlistSlice";

// import appointmentsReducer from "./appointmentsSlice";
// import blogReducer from "./blogSlice";
// import notificationReducer from "./notificationSlice";
// import feedbackReducer from "./feedbackSlice";
// import settingsReducer from "./settingsSlice";
// import emailReducer from "./emailSlice";
// import galleryReducer from "./gallerySlice";
// import faqReducer from "./faqSlice";
// import couponReducer from "./couponSlice";
// import stockReducer from "./stockSlice";
// import dashboardReducer from "./dashboardSlice";
// import accountReducer from "./accountSlice";
// import contactReducer from "./contactMessageSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
    orders: ordersReducer,
    ui: uiReducer,
    wishlist: wishlistReducer,

    // profile: profileReducer,
    // userCrud: userCrudReducer,
    // userStatus: userStatusReducer,
    // appointments: appointmentsReducer,
    // blog: blogReducer,
    // notification: notificationReducer,
    // feedback: feedbackReducer,
    // settings: settingsReducer,
    // email: emailReducer,
    // gallery: galleryReducer,
    // faq: faqReducer,
    // coupon: couponReducer,
    // stocks: stockReducer,
    // dashboard: dashboardReducer,
    // account: accountReducer,
    // contactMessage: contactReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
