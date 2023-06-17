import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { clientsApi } from "@/redux/features/clientsApi";

const reducers = combineReducers({
  [clientsApi.reducerPath]: clientsApi.reducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    // The middleware generated from our clientsApi manages cache lifetime and expirations.
    return getDefaultMiddleware().concat(clientsApi.middleware).concat();
  },
  devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
