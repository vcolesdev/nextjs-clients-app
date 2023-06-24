import { forwardRef } from "react";

interface TextAreaProps {
  inputClasses?: string;
  id?: string;
  label?: string;
  name?: string;
  onChange?: any;
  placeholder?: string;
  value?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(props: TextAreaProps, ref) {
    return (
      <textarea
        className={`${props.inputClasses ? props.inputClasses : ""}`}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        ref={ref}
        value={props.value}
      />
    );
  }
);
