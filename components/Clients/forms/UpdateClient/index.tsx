import React from "react";
import Input from "@/components/Controls/Input";
import Label from "@/components/Form/Label";
import FormError from "@/components/Form/Error";
import Button from "@/components/Controls/Button";
import Toggle from "rsuite/Toggle";
import FormActions from "@/components/Form/Actions";
import ContentHeader from "@/components/Content/Header";
import ModalClientComments from "@/components/Modal/Client/Comments";
import useUpdateClient from "@/components/Clients/forms/UpdateClient/useUpdateClient";
import { Controller } from "react-hook-form";

/**
 * FormUpdateClient
 * @param action
 * @param client
 * @param clientId
 * @param extraClasses
 * @param formId
 * @param name
 * @param onClickSubmit
 * @constructor
 * Form component for updating a client.
 * @link https://stackoverflow.com/questions/62176047/react-hook-form-controller-with-react-draft-wysiwyg
 */
export default function FormUpdateClient({
  action,
  client,
  clientId,
  extraClasses,
  formId,
  name,
  onClickSubmit
}: {
  action?: string;
  client: any;
  clientId?: string;
  extraClasses?: string;
  formId: string;
  name: string;
  onClickSubmit?: () => void;
}) {
  const {
    control,
    errors,
    fields,
    formClasses,
    handleSubmit,
    handleUpdateClient,
    isOpen,
    register,
    setIsOpen,
    setViewComments,
    viewComments
  } = useUpdateClient(client, clientId);

  return (
    <>
      {client && (
        <form
          action={action}
          className={`form ${extraClasses}`}
          id={formId}
          name={name}
          onSubmit={handleSubmit(handleUpdateClient)}
        >
          <div className="mb-10">
            {fields &&
              fields.map((field) => (
                <div key={field.id} className="mb-5">
                  <Label htmlFor={field.id} labelClasses={formClasses.label}>
                    {field.label}{" "}
                    {field.required && (
                      <span className={"text-red-500"}>*</span>
                    )}
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
            <div className={"mb-10"}>
              <p className={formClasses.label}>Activate this client?</p>
              <div>
                <Controller
                  control={control}
                  name="status"
                  render={({ field: { value, onChange } }) => (
                    <Toggle
                      id={"isActiveClientUpdated"}
                      checked={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
            {/* Edit Client Comments */}
            <div className={"mb-10"}>
              <ContentHeader
                containerClasses={"mb-6 pb-4 border-b border-gray-200"}
                headingText={"Client Comments"}
                subheadingText={"View or edit client comments."}
              />
              <div className={"flex"}>
                <Button
                  primary
                  extraClasses={"mr-3"}
                  label={"Edit Comments"}
                  onClick={() => setIsOpen(true)}
                />
                <Button
                  secondary
                  label={"View Comments"}
                  onClick={() => setViewComments(true)}
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
              cancelHref={"/clients/dashboard"}
              labelCancel={"Cancel"}
              labelReset={"Clear Fields"}
              labelSubmit={"Update Client"}
              onClickSubmit={onClickSubmit}
            />
          </div>
          {/* Edit Clients Modal */}
          <ModalClientComments
            control={control}
            isOpen={isOpen}
            modalHeadingText={"Edit Client Comments"}
            modalType={"editComments"}
            onClick={() => setIsOpen(false)}
            onClose={() => setIsOpen(false)}
            size={"lg"}
          />
          {/* View Comments Modal */}
          <ModalClientComments
            client={client && client}
            control={control}
            isOpen={viewComments}
            modalHeadingText={"View Client Comments"}
            modalType={"viewComments"}
            onClick={() => setViewComments(false)}
            onClose={() => setViewComments(false)}
            size={"lg"}
          />
        </form>
      )}
    </>
  );
}
