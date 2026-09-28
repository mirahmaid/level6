import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import {
  productApi,
  oneproductApi,
} from "./productApi";

import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cartt: cartReducer,

    [productApi.reducerPath]: productApi.reducer,

    [oneproductApi.reducerPath]: oneproductApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(oneproductApi.middleware)
      .concat(productApi.middleware),
});

setupListeners(store.dispatch);