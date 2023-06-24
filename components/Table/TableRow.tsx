import React from "react";

export function TableRow({
  extraClasses,
  children
}: {
  extraClasses?: string;
  children: React.ReactNode;
}) {
  return (
    <tr
      className={`min-w-full px-4 text-sm ${extraClasses ? extraClasses : ""}`}
    >
      {children}
    </tr>
  );
}
