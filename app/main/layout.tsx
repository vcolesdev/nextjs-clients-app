import React from "react";

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="content bg-white p-8 rounded-xl shadow-xl shadow-slate-200 text-gray-600">
      {children}
    </section>
  );
}
