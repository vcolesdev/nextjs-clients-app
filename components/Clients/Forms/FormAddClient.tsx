import React from "react";
import Toggle from "rsuite/Toggle";
import { Controller } from "react-hook-form";
import { Button } from "@/components/Controls/Button";
import { ContentHeader } from "@/components/Content";
import { Input } from "@/components/Controls/Forms";
import { FormActions, FormError, FormLabel } from "@/components/Form/";
import { ModalClientComments } from "@/components/Modals";
import useAddClient from "@/api/hooks/forms/useAddClient";

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
export function FormAddClient({
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
      <div className="mb-10">
        <ContentHeader
          containerClasses="mb-6 pb-4 border-b border-gray-200"
          headingText="Client Details"
          subheadingText="Fill out client details using the form below."
        />
        {fields &&
          fields.map((field) => (
            <div key={field.id} className="mb-5">
              <FormLabel htmlFor={field.id} labelClasses={formClasses.label}>
                {field.label}{" "}
                {field.required && <span className="text-red-500">*</span>}
              </FormLabel>
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
        <div className="mb-10">
          <p className={formClasses.label}>Activate this client?</p>
          <div>
            <Controller
              control={control}
              name="status"
              render={({ field: { value, onChange } }) => (
                <Toggle
                  id="isActiveClientAdded"
                  checked={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
        </div>
        {/* Add Client Comments */}
        <div className="mb-10">
          <ContentHeader
            containerClasses="mb-6 pb-4 border-b border-gray-200"
            headingText="Client Comments"
            subheadingText="Add client comments."
          />
          <Button
            primary
            label="Add Comments"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {/* Form Actions */}
      <div>
        <ContentHeader
          containerClasses="pb-4 border-b border-gray-200"
          headingText="Form Actions"
          subheadingText="Submit, reset, or cancel form submission."
        />
        <FormActions
          cancelHref="/clients"
          labelCancel="Cancel"
          labelReset="Clear Fields"
          labelSubmit="Add New Client"
          onClickSubmit={onClickSubmit}
        />
      </div>
      {/* Add Comments Modals */}
      <ModalClientComments
        control={control}
        isOpen={isOpen}
        modalHeadingText="Add Comments"
        modalType="addComments"
        onClick={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        size="lg"
      />
    </form>
  );
}
