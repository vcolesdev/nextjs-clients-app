import React from "react";

export function TableCell({
  children,
  extraClasses
}: {
  children: React.ReactNode;
  extraClasses?: string;
}) {
  const tRowClasses = `whitespace-nowrap`;
  return (
    <td
      className={`py-4 pr-3 ${tRowClasses} ${extraClasses ? extraClasses : ""}`}
    >
      {children}
    </td>
  );
}
