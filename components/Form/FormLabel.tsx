import React from "react";

export function FormLabel({
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
