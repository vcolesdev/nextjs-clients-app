import React from "react";
import classnames from "classnames";
import { ButtonProps } from "@/api/_interfaces";

export default function useButton({ ...options }: ButtonProps) {
  let {
    extraClasses,
    color,
    hasIcon,
    hoverColor,
    hoverTextColor,
    activeColor,
    activeTextColor,
    href,
    icon,
    iconPosition,
    isLinkButton,
    isNextLinkButton,
    label,
    paddingX,
    paddingY,
    spanClasses,
    textColor,
    textSize,
    type
  } = options;

  let buttonClasses = classnames(
    "btn flex rounded-md font-semibold tracking-tight",
    {
      "btn--hasIcon": hasIcon,
      "btn--link": isLinkButton,
      "btn--next-link": isNextLinkButton,
      [`${activeColor ? `active:bg-${activeColor}` : "active:bg-gray-600"}`]:
        true,
      [`${
        activeTextColor ? `active:text-${activeTextColor}` : "active:text-white"
      }`]: true,
      [`${color ? `bg-${color}` : "bg-gray-50"}`]: true,
      [`${hoverColor ? `hover:bg-${hoverColor}` : "hover:bg-gray-500"}`]: true,
      [`${
        hoverTextColor ? `hover:text-${hoverTextColor}` : "hover:text-white"
      }`]: true,
      [`${paddingX ? `px-${paddingX}` : "px-3"}`]: true,
      [`${paddingY ? `py-${paddingY}` : "py-2"}`]: true,
      [`${textColor ? `text-${textColor}` : "text-gray-600"}`]: true,
      [`${textSize ? `text-${textSize}` : "text-sm"}`]: true
    }
  );

  let buttonContent;

  if (hasIcon && iconPosition === "left") {
    buttonContent = (
      <>
        <div className={"mr-2 inline-block"}>{icon}</div>
        <span className={`inline-block ${spanClasses ? spanClasses : ""}`}>
          {label}
        </span>
      </>
    );
  } else if (hasIcon && iconPosition === "right") {
    buttonContent = (
      <>
        <span className={`inline-block ${spanClasses ? spanClasses : ""}`}>
          {label}
        </span>
        <div className={"ml-2 inline-block"}>{icon}</div>
      </>
    );
  } else {
    buttonContent = (
      <span className={`inline-block ${spanClasses ? spanClasses : ""}`}>
        {label}
      </span>
    );
  }

  return { buttonClasses, buttonContent, options };
}
