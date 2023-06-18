import React from "react";
import Input from "@/components/Controls/Input";
import Label from "@/components/Form/Label";
import FormError from "@/components/Form/Error";
import Button from "@/components/Controls/Button";
import FormActions from "@/components/Form/Actions";
import ModalClientComments from "@/components/Modal/Client/Comments";
import useAddClient from "@/components/Clients/hooks/useAddClient";
import { Divider, Switch } from "@chakra-ui/react";
import ContentHeader from "@/components/Content/Header";

/**
 * FormAddClient
 * @param action
 * @param extraClasses
 * @param formId
 * @param name
 * @param onClickSubmit
 * @constructor
 * Form component for adding a new client.
 */
export default function FormAddClient({
  action,
  extraClasses,
  formId,
  name,
  onClickSubmit
}: {
  action: string;
  extraClasses?: string;
  formId: string;
  name: string;
  onClickSubmit?: () => void;
}) {
  const {
    control,
    fields,
    formClasses,
    errors,
    handleAddClient,
    handleSubmit,
    isOpen,
    register,
    setIsOpen
  } = useAddClient();

  return (
    <form
      action={action}
      className={`form ${extraClasses}`}
      id={formId}
      name={name}
      onSubmit={handleSubmit(handleAddClient)}
    >
      <div className="form__fields">
        <ContentHeader
          containerClasses={"mb-6 pb-4 border-b border-gray-200"}
          headingText={"Client Details"}
          subheadingText={"Fill out client details using the form below."}
        />
        {fields &&
          fields.map((field) => (
            <div key={field.id} className="mb-5">
              <Label htmlFor={field.id} labelClasses={formClasses.label}>
                {field.label}{" "}
                {field.required && <span className={"text-red-500"}>*</span>}
              </Label>
              <Input
                inputClasses={formClasses.input}
                id={field.id}
                type={field.type}
                {...register(field.id, { required: field.required })}
              />
              <div>
                {errors.field?.type === "required" && (
                  <FormError
                    errorClasses={formClasses.error}
                    errorLabel={field.label}
                  />
                )}
              </div>
            </div>
          ))}
        {/* Client Status */}
        <div className={"mt-6 mb-10"}>
          <p className={formClasses.label}>Client Status</p>
          <div>
            <Switch
              id="isActiveClientAdded"
              {...register("status", {})}
              onChange={(e) => e.target.checked === !e.target.checked}
            />
          </div>
        </div>
        <div className={"my-6"}>
          {/* Add Client Comments */}
          <div className={"my-6"}>
            <ContentHeader
              containerClasses={"mb-6 pb-4 border-b border-gray-200"}
              headingText={"Client Comments"}
              subheadingText={"Add client comments."}
            />
            <Button
              primary
              label={"Add Comments"}
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
      {/* Form Actions */}
      <div>
        <ContentHeader
          containerClasses={"pb-4 border-b border-gray-200"}
          headingText={"Form Actions"}
          subheadingText={"Submit, reset, or cancel form submission."}
        />
        <FormActions
          cancelHref={"/clients"}
          labelCancel={"Cancel"}
          labelReset={"Clear Fields"}
          labelSubmit={"Add New Client"}
          onClickSubmit={onClickSubmit}
        />
      </div>
      {/* Add Comments Modal */}
      <ModalClientComments
        control={control}
        isOpen={isOpen}
        modalHeadingText={"Add Comments"}
        modalType={"addComments"}
        onClick={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        size={"xl"}
      />
    </form>
  );
}
