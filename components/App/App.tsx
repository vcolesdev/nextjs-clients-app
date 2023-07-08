import React from "react";
import { AppBar } from "@/components/App/AppBar/AppBar";
import { Footer } from "@/components/Footer/Footer";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <div id="App" className="relative flex min-h-screen">
      <div className="app flex flex-col w-full">
        <AppBar />
        <main className="flex-grow p-10 bg-gray-100">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
