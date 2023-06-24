import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TClient } from "@/api/_types";
import { useGetFields } from "@/api/hooks/forms/useGetFields";
import { useCustomForm } from "@/api/hooks/forms/useCustomForm";
import {
  useGetClientQuery,
  useUpdateClientMutation
} from "@/redux/features/clientsApi";

/**
 * useUpdateClient.ts
 * @param client
 * @param clientId
 * Update the client in the database using RTK Query and React Hook Form
 */
export default function useUpdateClient(
  client: TClient,
  clientId: string | undefined
) {
  // Form
  const {
    control,
    formState,
    formState: { errors },
    formState: { isSubmitSuccessful },
    getValues,
    handleSubmit,
    register,
    reset,
    setValue
  } = useForm();

  // Get form fields
  const { fields } = useGetFields();

  // Form styles
  const { formStyles: formClasses } = useCustomForm();

  //  Modals
  const [isOpen, setIsOpen] = useState(false);
  const [viewComments, setViewComments] = useState(false);

  // Mutation triggers
  const [updateClient, {}] = useUpdateClientMutation();

  // Get the current client data from the database.
  const { data: currentClient } = useGetClientQuery(clientId);

  /**
   * useEffect()
   * Reset the form fields when the current client changes.
   */
  useEffect(() => {
    if (currentClient) {
      console.log(currentClient);
      reset({
        ...client,
        firstName: currentClient.firstName,
        lastName: currentClient.lastName,
        email: currentClient.email,
        phone: currentClient.phone || "",
        comments: currentClient.comments || "",
        status: currentClient.status
      });
    }

    // Set the initial value for client status.
    if (client) {
      setValue("isActiveClientUpdated", client.status);
    }

    // Register form fields manually
    // @link https://github.com/react-hook-form/react-hook-form/issues/85
    register("comments", {});
  }, [client, currentClient, getValues, register, reset, setValue]);

  /**
   * handleUpdateClient()
   * Submit handler that sends PUTs the formData to the database.
   */
  const handleUpdateClient = () => {
    const values = getValues();
    updateClient({
      ...client,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      comments: values.comments,
      status: values.status
    });
    console.log(values);
  };

  return {
    control,
    fields,
    formClasses,
    handleSubmit,
    handleUpdateClient,
    getValues,
    isOpen,
    isSubmitSuccessful,
    errors,
    formState,
    register,
    setIsOpen,
    setValue,
    setViewComments,
    viewComments
  };
}
