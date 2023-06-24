import React from "react";
import Link from "next/link";
import useButton from "@/api/hooks/components/useButton";
import { ButtonProps } from "@/api/_interfaces";

export function CustomButton({ ...props }: ButtonProps) {
  let { buttonContent, buttonClasses, options } = useButton(props);

  return (
    <>
      {options.isNextLinkButton ? (
        <Link
          className={
            buttonClasses + (options.extraClasses ? options.extraClasses : "")
          }
          href={options.href ? options.href : "#"}
        >
          {buttonContent ? buttonContent : "Custom button"}
        </Link>
      ) : options.isLinkButton ? (
        <a
          href={options.href ? options.href : "#"}
          className={
            buttonClasses + (options.extraClasses ? options.extraClasses : "")
          }
        >
          {buttonContent ? buttonContent : "Custom Button"}
        </a>
      ) : (
        <button
          className={`${buttonClasses} ${
            options.extraClasses ? options.extraClasses : ""
          }`}
          onClick={options.onClick ? options.onClick : null}
          type={options.type ? options.type : "button"}
        >
          {buttonContent ? buttonContent : "Custom Button"}
        </button>
      )}
    </>
  );
}
