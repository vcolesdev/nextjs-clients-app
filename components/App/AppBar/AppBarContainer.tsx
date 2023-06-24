import React from "react";

export function AppBarContainer({
  children,
  extraClasses
}: {
  children: React.ReactNode;
  extraClasses?: string;
}) {
  return (
    <header
      className={`flex justify-between relative shadow shadow-slate-200 border border-t-[6px] border-t-violet-500 z-40 ${
        extraClasses ? extraClasses : ""
      }`}
    >
      {children}
    </header>
  );
}
