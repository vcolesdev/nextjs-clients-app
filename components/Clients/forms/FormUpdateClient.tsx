import React, { useEffect } from "react";
import FormBtn from "@/components/Form/Buttons/FormBtn";
import Input from "@/components/Controls/Input";
import Label from "@/components/Form/Label";
import FormError from "@/components/Form/Error";
import CustomButton from "@/components/Controls/Button";
import CustomEditor from "@/components/Controls/CustomEditor";
import useUpdateClient from "@/components/Clients/hooks/useUpdateClient";
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
 * FormUpdateClient
 * @param action
 * @param client
 * @param clientId
 * @param extraClasses
 * @param formId
 * @param name
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
  name
}: {
  action?: string;
  client: any;
  clientId?: string;
  extraClasses?: string;
  formId: string;
  name: string;
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
    setIsOpen
  } = useUpdateClient(client, clientId);

  const [viewComments, setViewComments] = React.useState(false);

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
          <div className="form__fields">
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
            <div className={"my-6"}>
              <p className={formClasses.label}>Client Status</p>
              <div>
                <Switch
                  id="isActiveClientUpdated"
                  {...register("status", {})}
                  onChange={(e) => e.target.checked === !e.target.checked}
                />
              </div>
            </div>
            {/* Edit Client Comments */}
            <div className={"my-6"}>
              <p className={`mb-3 ${formClasses.label}`}>
                Edit notes, comments about client:
              </p>
              <div className={"flex"}>
                <CustomButton
                  activeColor={"violet-600"}
                  activeTextColor={"white"}
                  color={"violet-50"}
                  extraClasses={"mr-3"}
                  hoverColor={"violet-500"}
                  hoverTextColor={"white"}
                  label={"Edit Comments"}
                  onClick={() => setIsOpen(true)}
                  textColor={"violet-500"}
                />
                <CustomButton
                  activeColor={"slate-700"}
                  color={"slate-100"}
                  activeTextColor={"slate-600"}
                  hoverColor={"slate-200"}
                  hoverTextColor={"blue-700"}
                  label={"View Comments"}
                  onClick={() => setViewComments(true)}
                  textColor={"slate-600"}
                />
              </div>
            </div>
          </div>
          <Divider />
          {/* Form Actions */}
          <div className="form__actions py-6">
            <FormBtn
              label={"Update Client"}
              type={"submit"}
              onClick={() => console.log("Update form submitted")}
            />
            <FormBtn label={"Reset Form"} type={"reset"} />
            <FormBtn
              href={"/clients/dashboard"}
              label={"Cancel"}
              type={"cancel"}
            />
          </div>
          {/* Modal */}
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
          {/* View Comments Modal */}
          {/* Modal */}
          <Modal
            isOpen={viewComments}
            onClose={() => setViewComments(false)}
            size={"full"}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader className={"tracking-tight"}>
                View Client Comments
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* Comments */}
                <div>
                  <div>Client comments here...</div>
                </div>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  activeColor={"violet-600"}
                  activeTextColor={"white"}
                  color={"violet-50"}
                  hoverColor={"violet-500"}
                  hoverTextColor={"white"}
                  label={"Close"}
                  onClick={() => setViewComments(false)}
                  textColor={"violet-500"}
                />
              </ModalFooter>
            </ModalContent>
          </Modal>
        </form>
      )}
    </>
  );
}
