import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TClient } from "@/api/_types";
import { useGetFields } from "@/api/hooks/forms/useGetFields";
import { useCustomForm } from "@/api/hooks/forms/useCustomForm";
import { useAddNewClientMutation } from "@/redux/features/clientsApi";

/**
 * useAddClient.ts
 * Add a new client to the database using RTK Query and React Hook Form
 */
export default function useAddClient() {
  // Form
  const {
    control,
    formState,
    formState: { errors },
    formState: { isSubmitSuccessful },
    getValues,
    handleSubmit,
    register,
    reset
  } = useForm();

  // Get form fields
  const { fields } = useGetFields();

  // Form styles
  const { formStyles: formClasses } = useCustomForm();

  // Mutation triggers
  const [sendRequest, {}] = useAddNewClientMutation();
  const [addNewClient, {}] = useAddNewClientMutation();

  // Modals
  const [isOpen, setIsOpen] = React.useState(false);

  /**
   * useEffect()
   * Reset the form fields after the form is submitted.
   */
  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log("Added client");
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: "",
        status: false
      });
    }
  }, [isSubmitSuccessful, reset]);

  /**
   * handleAddClient()
   * @param formData
   * Handle the form submission that send client data to database.
   * @todo: Add formData type.
   */
  // @ts-ignore
  const handleAddClient = (formData) => {
    sendRequest(formData);
    if (isSubmitSuccessful) {
      console.log(formData);
      const values = getValues();
      const newClient: TClient = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        comments: values.comments,
        status: values.status
      };
      addNewClient(newClient);
    }
  };

  return {
    control,
    fields,
    formClasses,
    formState,
    errors,
    getValues,
    handleAddClient,
    handleSubmit,
    isOpen,
    setIsOpen,
    register,
    reset
  };
}
