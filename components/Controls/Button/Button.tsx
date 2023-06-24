import React from "react";
import { CustomButton } from "@/components/Controls/Custom/CustomButton";

export function Button({
  extraClasses,
  label,
  onClick,
  primary,
  secondary
}: {
  extraClasses?: string;
  label?: string;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
}) {
  const btnProps = {
    activeColor: primary ? "violet-600" : secondary ? "slate-700" : "gray-700",
    activeTextColor: primary ? "white" : secondary ? "white" : "white",
    color: primary ? "violet-50" : secondary ? "slate-100" : "gray-100",
    hoverColor: primary ? "violet-500" : secondary ? "slate-200" : "gray-200",
    hoverTextColor: primary ? "white" : secondary ? "slate-700" : "gray-700",
    textColor: primary ? "violet-500" : secondary ? "slate-600" : "gray-600"
  };
  return (
    <CustomButton
      activeColor={btnProps.activeColor}
      activeTextColor={btnProps.activeTextColor}
      color={btnProps.color}
      extraClasses={`${extraClasses ? extraClasses : ""}`}
      hoverColor={btnProps.hoverColor}
      hoverTextColor={btnProps.hoverTextColor}
      label={label ? label : "Custom Button"}
      onClick={onClick}
      textColor={btnProps.textColor}
    />
  );
}
