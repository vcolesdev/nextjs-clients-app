"use client";

import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";

// Custom Provider component to wrap the app in the Redux store.
// https://codevoweb.com/setup-redux-toolkit-in-nextjs-13-app-directory/
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
