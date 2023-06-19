import React from "react";

export default function DList({ children }: { children: React.ReactNode }) {
  const dClasses = {
    list: `divide-y divide-gray-100`
  };

  return <dl className={dClasses.list}>{children}</dl>;
}
