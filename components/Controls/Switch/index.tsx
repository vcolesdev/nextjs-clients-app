import classNames from "classnames";
import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import { Switch } from "@headlessui/react";
import { CustomSwitchProps } from "@/api/_interfaces";

const CustomSwitch = forwardRef<HTMLInputElement, CustomSwitchProps>(
  function CustomSwitch(props, ref) {
    let switchClasses = classNames(
      `relative inline-flex h-6 w-11 items-center rounded-full`,
      {
        [`${props.checked ? "bg-blue-600" : "bg-gray-200"}`]: true
      }
    );

    let controlClasses = classNames(
      `inline-block h-4 w-4 transform rounded-full bg-white transition`,
      {
        [`${props.checked ? "translate-x-6" : "translate-x-1"}`]: true
      }
    );

    return (
      <>
        <Controller
          control={props.control}
          name={props.name}
          render={({ field: { ref, ...field } }) => (
            <Switch
              {...field}
              checked={props.checked}
              className={switchClasses}
              name={props.name}
              ref={ref}
            >
              {props.srOnly && (
                <span className="sr-only">{props.srOnlyText}</span>
              )}
              <span className={controlClasses} />
            </Switch>
          )}
        />
      </>
    );
  }
);

export default CustomSwitch;
