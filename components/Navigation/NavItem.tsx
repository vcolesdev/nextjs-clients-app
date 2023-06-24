import React from "react";

export function NavItem({
  children,
  itemClasses
}: {
  children: React.ReactNode;
  itemClasses?: string;
}) {
  return (
    <li className={`inline-block me-4 my-2 ${itemClasses && itemClasses}`}>
      {children}
    </li>
  );
}
