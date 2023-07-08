import React from "react";

export function ActionButton({
  buttonClasses,
  children,
  hasIcon,
  iconPosition,
  label
}: {
  buttonClasses?: string;
  children?: React.ReactNode;
  hasIcon?: boolean;
  iconPosition?: "left" | "right";
  label: string;
}) {
  if (hasIcon) {
    return (
      <button
        className={`btn flex items-center py-1.5 px-2 rounded-lg bg-transparent hover:bg-slate-100 active:bg-slate-200 ${
          buttonClasses && buttonClasses
        }`}
      >
        {(iconPosition === "left" && (
          <>
            <span className="inline-block mr-2">{children}</span>
            <span className="font-semibold text-gray-600">{label}</span>
          </>
        )) ||
          (iconPosition === "right" && (
            <>
              <span className="font-semibold text-gray-600">{label}</span>
              <span className="inline-block ml-2">{children}</span>
            </>
          ))}
      </button>
    );
  } else {
    return (
      <button
        className={`btn flex items-center py-1.5 px-2 rounded-lg bg-transparent hover:bg-slate-100 active:bg-slate-200 ${
          buttonClasses && buttonClasses
        }`}
      >
        <span className="font-semibold text-gray-600">{label}</span>
      </button>
    );
  }
}
