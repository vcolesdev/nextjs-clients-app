import Sidebar from "@/components/App/Sidebar";
import AppBar from "@/components/App/AppBar";
import Footer from "@/components/App/Footer";
import React from "react";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div id="App" className={"relative flex min-h-screen"}>
      <div className={"app flex flex-col w-full"}>
        <AppBar />
        <main className={"flex-grow p-10 bg-gray-100"}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
