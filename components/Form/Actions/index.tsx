import React from "react";
import FormBtn from "@/components/Form/Buttons/FormBtn";

export default function FormActions({
  cancelHref,
  containerClasses,
  labelCancel,
  labelReset,
  labelSubmit,
  onClickSubmit
}: {
  cancelHref?: string;
  containerClasses?: string;
  labelCancel?: string;
  labelReset?: string;
  labelSubmit?: string;
  onClickSubmit?: any;
  type?: string;
}) {
  return (
    <div className={`py-6 ${containerClasses ? containerClasses : ""}`}>
      <FormBtn
        label={labelSubmit ? labelSubmit : "Submit"}
        type={"submit"}
        onClick={onClickSubmit}
      />
      <FormBtn label={labelReset ? labelReset : "Reset"} type={"reset"} />
      <FormBtn
        href={cancelHref ? cancelHref : "/"}
        label={labelCancel ? labelCancel : "Cancel"}
        type={"cancel"}
      />
    </div>
  );
}
