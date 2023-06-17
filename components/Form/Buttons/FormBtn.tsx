import React from "react";
import Link from "next/link";

export default function FormBtn({
  btnClasses,
  contentClasses,
  href,
  id,
  label,
  onClick,
  type
}: {
  btnClasses?: string;
  contentClasses?: string;
  href?: string;
  id?: string;
  label?: string;
  onClick?: any;
  type: string;
}) {
  let button;
  if (type === "submit") {
    button = (
      <button
        className={`btn btn--submit inline-block px-3 py-2 mr-3 bg-slate-700 rounded-lg font-semibold text-white text-sm tracking-tight hover:bg-violet-500 hover:text-white active:bg-violet-600 ${
          btnClasses && btnClasses
        }`}
        id={id ? id : ""}
        onClick={onClick && onClick}
        type={"submit"}
      >
        <span className={`inline-block ${contentClasses && contentClasses}`}>
          {label}
        </span>
      </button>
    );
  } else if (type === "reset") {
    button = (
      <button
        className={`btn btn--reset inline-block px-3 py-2 mr-3 bg-slate-100 rounded-lg font-semibold text-gray-600 text-sm tracking-tight hover:bg-slate-200 ${
          btnClasses && btnClasses
        }`}
        id={id ? id : ""}
        onClick={onClick && onClick}
        type={"reset"}
      >
        <span className={`inline-block ${contentClasses && contentClasses}`}>
          {label}
        </span>
      </button>
    );
  } else if (type === "cancel") {
    button = (
      <Link
        className={`btn btn--cancel inline-block px-3 py-2 mr-6 bg-slate-100 rounded-lg font-semibold text-red-400 text-sm tracking-tight hover:bg-red-50 ${
          btnClasses && btnClasses
        }`}
        href={href ? href : "/"}
        id={id ? id : ""}
      >
        <span className={`inline-block ${contentClasses && contentClasses}`}>
          {label}
        </span>
      </Link>
    );
  }

  return <>{button}</>;
}
