import React from "react";
import { FormBtn } from "@/components/Form";

export function FormActions({
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
        onClick={onClickSubmit}
        type="submit"
      />
      <FormBtn label={labelReset ? labelReset : "Reset"} type="reset" />
      <FormBtn
        href={cancelHref ? cancelHref : "/"}
        label={labelCancel ? labelCancel : "Cancel"}
        type="cancel"
      />
    </div>
  );
}
