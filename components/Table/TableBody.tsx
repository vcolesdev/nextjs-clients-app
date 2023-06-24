import React from "react";

export function TableBody({
  children,
  tbodyClasses
}: {
  children: React.ReactNode;
  tbodyClasses?: string;
}) {
  return (
    <tbody
      className={`min-w-full divide-y divide-gray-300 ${
        tbodyClasses && tbodyClasses
      }`}
    >
      {children}
    </tbody>
  );
}
