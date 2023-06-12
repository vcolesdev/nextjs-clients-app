import React from "react";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon
} from "@heroicons/react/20/solid";

export default function Alert({
  alertClasses,
  children,
  id,
  style,
  type
}: {
  alertClasses?: string;
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  type: string;
}) {
  let isSuccess = type === "success";
  let isWarning = type === "warning";
  let isError = type === "error";

  const onDismiss = () => {
    if (id) {
      const alert = document.getElementById(id);
      if (alert) {
        alert.style.display = "none";
      }
    }
  };

  return (
    <div
      className={`flex my-6 px-4 py-3 rounded-md bg-white tracking-tight font-semibold text-sm ${
        isSuccess
          ? "text-gray-700"
          : isWarning
          ? "text-gray-700"
          : isError
          ? "text-gray-700"
          : ""
      } ${alertClasses && alertClasses}`}
      id={id ? id : ""}
      style={style && style}
    >
      <div className={"flex"}>
        <div className={"flex-shrink-0"}>
          {type === "success" && (
            <CheckCircleIcon
              className={"h-5 w-5 text-green-400"}
              aria-hidden={"true"}
            />
          )}
          {type === "warning" && (
            <ExclamationTriangleIcon
              className="h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
      <div className={"ml-3"}>{children}</div>
      <div className={"ml-auto pl-3"}>
        <div className={"-mx-1.5 -my-1.5"}>
          <button
            type={"button"}
            className={`inline-flex mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 ${
              isSuccess
                ? "text-green-500 focus:ring-green-400"
                : isWarning
                ? "text-yellow-500 focus:ring-yellow-400"
                : isError
                ? "text-red-500 focus:ring-red-400"
                : ""
            }`}
            onClick={onDismiss}
          >
            <span className={"sr-only"}>Dismiss</span>
            <XMarkIcon className={"h-5 w-5"} aria-hidden={"true"} />
          </button>
        </div>
      </div>
    </div>
  );
}
