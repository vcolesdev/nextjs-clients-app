import React from "react";

export function NavMenu({
  children,
  menuClasses
}: {
  children: React.ReactNode;
  menuClasses?: string;
}) {
  return <ul className={`${menuClasses}`}>{children}</ul>;
}
