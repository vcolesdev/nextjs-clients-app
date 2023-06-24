import React from "react";

export function NavContainer({
  children,
  navClasses
}: {
  children: React.ReactNode;
  navClasses?: string;
}) {
  return <nav className={`py-3.5 ${navClasses && navClasses}`}>{children}</nav>;
}
