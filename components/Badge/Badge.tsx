import React from "react";
import classNames from "classnames";

export function Badge({
  label,
  type
}: {
  label: string;
  type?: "success" | "warning" | "danger";
}) {
  const badgeClasses = classNames(
    "rounded-lg inline-block px-2 py-1 font-medium text-sm tracking-tight",
    {
      [`bg-slate-100 text-slate-600`]: !type,
      [`bg-green-100 text-green-600`]: type === "success",
      [`bg-amber-100 text-amber-600`]: type === "warning",
      [`bg-red-50 text-red-600`]: type === "danger"
    }
  );

  const isSuccess = type && type === "success";
  const isWarning = type && type === "warning";
  const isDanger = type && type === "danger";

  return <span className={badgeClasses}>{label}</span>;
}
