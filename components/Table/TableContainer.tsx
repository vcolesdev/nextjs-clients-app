import React from "react";

export default function TableContainer({
  children,
  tableClasses
}: {
  children: React.ReactNode;
  tableClasses?: string;
}) {
  return (
    <table
      className={`min-w-full divide-y divide-gray-300 ${
        tableClasses && tableClasses
      }`}
    >
      {children}
    </table>
  );
}
