import React from "react";
import FormBtn from "@/components/Form/Buttons/FormBtn";
import Input from "@/components/Controls/Input";
import Label from "@/components/Form/Label";
import FormError from "@/components/Form/Error";
import useAddClient from "@/components/Clients/hooks/useAddClient";
import CustomButton from "@/components/Controls/Button";
import CustomEditor from "@/components/Controls/CustomEditor";
import { Controller } from "react-hook-form";
import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch
} from "@chakra-ui/react";

/**
 * FormAddClient
 * @param action
 * @param extraClasses
 * @param formId
 * @param name
 * @constructor
 * Form component for adding a new client.
 */
export default function FormAddClient({
  action,
  extraClasses,
  formId,
  name
}: {
  action: string;
  extraClasses?: string;
  formId: string;
  name: string;
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
        <div className={"my-6"}>
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
            <p className={`mb-3 ${formClasses.label}`}>
              Add notes, comments about client:
            </p>
            <CustomButton
              activeColor={"violet-600"}
              activeTextColor={"white"}
              color={"violet-50"}
              hoverColor={"violet-500"}
              hoverTextColor={"white"}
              label={"Add Comments"}
              onClick={() => setIsOpen(true)}
              textColor={"violet-500"}
            />
          </div>
        </div>
      </div>
      <Divider />
      {/* Form Actions */}
      <div className="form__actions py-6">
        <FormBtn label={"Add New Client"} type={"submit"} />
        <FormBtn label={"Reset Form"} type={"reset"} />
        <FormBtn label={"Cancel"} type={"cancel"} />
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={"full"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className={"tracking-tight"}>
            Client Comments
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className={"mb-4"}>
              <p className={"text-sm text-gray-700 tracking-tight"}>
                Edit comments about client using the textarea below.
              </p>
            </div>
            {/* Comments */}
            <div>
              <Label htmlFor={"comments"} labelClasses={formClasses.label}>
                Comments
              </Label>
              <Controller
                control={control}
                name={"comments"}
                render={({ field }) => (
                  <CustomEditor
                    editorClasses={"p-4 text-sm text-gray-600"}
                    editorState={field.value}
                    onChange={field.onChange}
                    value={field.value}
                    wrapperClasses={"border border-gray-300"}
                  />
                )}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <CustomButton
              activeColor={"violet-600"}
              activeTextColor={"white"}
              color={"violet-50"}
              hoverColor={"violet-500"}
              hoverTextColor={"white"}
              label={"Save Comments"}
              onClick={() => setIsOpen(false)}
              textColor={"violet-500"}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
}
