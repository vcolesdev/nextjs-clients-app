import { configureStore } from "@reduxjs/toolkit";
import { clientsApi } from "@/redux/features/clientsApi";

export const store = configureStore({
  reducer: {
    // The reducer generated from our clientsApi.
    [clientsApi.reducerPath]: clientsApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    // The middleware generated from our clientsApi manages cache lifetime and expirations.
    return getDefaultMiddleware().concat(clientsApi.middleware).concat();
  },
  devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
