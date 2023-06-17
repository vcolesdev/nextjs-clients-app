import React from "react";

export default function Label({
  children,
  htmlFor,
  labelClasses
}: {
  children: React.ReactNode;
  htmlFor?: string;
  labelClasses?: string;
}) {
  return (
    <label
      htmlFor={htmlFor ? htmlFor : undefined}
      className={`${labelClasses ? labelClasses : ""}`}
    >
      {children}
    </label>
  );
}
