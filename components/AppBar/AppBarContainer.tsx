import React from "react";

export default function AppBarContainer({ children, extraClasses }: {
  children: React.ReactNode,
  extraClasses?: string
}) {
  return (
    <header className={`flex justify-between relative shadow shadow-slate-200 z-40 ${extraClasses}`}>
      {children}
    </header>
  )
}