import React from "react";
import { forwardRef } from "react";
import { InputProps } from "@/api/_interfaces";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props: InputProps,
  ref
) {
  return (
    <input
      className={`${props.inputClasses ? props.inputClasses : ""}`}
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

export default Input;
