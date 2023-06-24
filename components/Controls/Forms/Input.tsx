import React from "react";
import { forwardRef } from "react";
import { InputProps } from "@/api/_interfaces";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props: InputProps,
  ref
) {
  return (
    <input
      className={`border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-violet-50 focus:ring-violet-500 ${
        props.inputClasses ? props.inputClasses : ""
      }`}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
      ref={ref}
      type={props.type}
      value={props.value}
    />
  );
});
