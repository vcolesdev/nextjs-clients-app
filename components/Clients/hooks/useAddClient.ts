import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TClient } from "@/api/_types";
import { useGetFields } from "@/api/hooks/useGetFields";
import { useAddNewClientMutation } from "@/redux/features/clientsApi";

/**
 * useAddClient.ts
 * Add a new client to the database using RTK Query and React Hook Form
 */
export default function useAddClient() {
  // Form
  const { fields } = useGetFields();
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

  // Form styles
  const formClasses = {
    label:
      "inline-block mb-1.5 text-sm font-medium tracking-tight text-gray-700",
    input:
      "block w-full px-3 py-3 rounded-md border border-solid border-gray-300 " +
      "focus:border-violet-300 focus:ring focus:ring-violet-200 " +
      "focus:ring-opacity-50 text-sm tracking-tight text-gray-700",
    error:
      "mt-2 px-3 py-2 rounded-lg bg-red-50 text-red-600 text-sm tracking-tight"
  };

  // Mutation triggers
  const [sendRequest, {}] = useAddNewClientMutation();
  const [addNewClient, {}] = useAddNewClientMutation();

  // Modal
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
