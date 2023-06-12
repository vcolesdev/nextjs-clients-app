import React, { useState } from "react";
import FormBtn from "@/components/Controls/Buttons/FormBtn";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useGetClientQuery,
  useUpdateClientMutation
} from "@/redux/features/clientsApi";
import { Dialog } from "@headlessui/react";

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
  // React Hook Form
  const {
    formState,
    formState: { errors },
    formState: { isSubmitSuccessful },
    getValues,
    handleSubmit,
    register,
    reset
  } = useForm();

  // Mutation triggers
  const [updateClient, { isLoading: isUpdating, isSuccess }] =
    useUpdateClientMutation();

  const { data: currentClient } = useGetClientQuery(clientId);

  const [isOpen, setIsOpen] = useState(false);

  // Reset the form on component mount.
  useEffect(() => {
    if (currentClient) {
      reset({
        firstName: currentClient.firstName,
        lastName: currentClient.lastName,
        email: currentClient.email,
        phone: currentClient.phone || "",
        comments: currentClient.comments || "",
        status: currentClient.status // Gets the current client status on render.
      });
    }
  }, [currentClient, reset]);

  // Update the client on successful form submission.
  const handleUpdateClient = () => {
    const values = getValues();
    updateClient({
      ...client,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      comments: values.comments
    });

    // Display success message.
    const alert = document.getElementById("AlertUpdateClient");
    if (alert) {
      alert.style.display = "flex";
    }
  };

  // Form classes
  const formClasses = {
    label:
      "inline-block mb-1.5 text-sm font-medium tracking-tight " +
      "text-gray-700",
    input:
      "block w-full px-3 py-3 rounded-md border border-gray-300 " +
      "focus:border-violet-300 focus:ring focus:ring-violet-200 " +
      "focus:ring-opacity-50 text-sm tracking-tight text-gray-700",
    error: "text-red-500 text-xs italic"
  };

  return (
    <>
      <form
        action={action}
        className={`form ${extraClasses}`}
        id={formId}
        name={name}
        onSubmit={handleSubmit(handleUpdateClient)}
      >
        <div className="form__fields">
          {/* First Name */}
          <div className="mb-3">
            <label className={formClasses.label}>First Name</label>
            <input
              className={`${formClasses.input}`}
              id="firstname"
              type="text"
              {...register("firstName", { required: true })}
            />
            <div>
              {errors.firstName?.type === "required" && (
                <p className={formClasses.error} role="alert">
                  <span className="font-semibold">Form Error:</span> First name
                  is required
                </p>
              )}
            </div>
          </div>
          {/* Last Name */}
          <div className="mb-3">
            <label className={formClasses.label}>Last Name</label>
            <input
              className={`${formClasses.input}`}
              id="lastname"
              type="text"
              {...register("lastName", { required: true })}
            />
            <div>
              {errors.firstName?.type === "required" && (
                <p className={formClasses.error} role="alert">
                  <span className="font-semibold">Form Error:</span> First name
                  is required
                </p>
              )}
            </div>
          </div>
          {/* Email */}
          <div className="mb-3">
            <label className={formClasses.label}>Email Address</label>
            <input
              className={`mb-3 ${formClasses.input}`}
              id="email"
              {...register("email", { required: true })}
            />
            <div>
              {errors.email?.type === "required" && (
                <p className={formClasses.error} role="alert">
                  Email is required
                </p>
              )}
            </div>
          </div>
          {/* Phone */}
          <div className="mb-3">
            <label className={formClasses.label}>Phone Number</label>
            <input
              className={`mb-3 ${formClasses.input}`}
              id="phone"
              type="tel"
              {...register("phone")}
            />
          </div>
          {/* Status */}

          {/* Comments */}
          <div>
            <label className={formClasses.label}>Comments</label>
            <textarea
              className={`${formClasses.input}`}
              id="comments"
              placeholder="Some client comments here..."
              {...register("comments")}
            />
          </div>
          <div className={"my-6"}>
            <button
              className={
                "rounded-md px-3 py-2 bg-violet-50 text-violet-500 text-sm font-semibold " +
                "tracking-tight hover:bg-violet-500 hover:text-white active:bg-violet-600"
              }
              type={"button"}
            >
              Edit Client Comments
            </button>
          </div>
        </div>
        {/* Form Actions */}
        <div className="form__actions py-6">
          <FormBtn
            type={"submit"}
            onClick={() => console.log("Update form submitted")}
          >
            Update Client
          </FormBtn>
          <FormBtn type={"reset"}>Reset Form</FormBtn>
          <FormBtn href={"/clients/dashboard"} type={"cancel"}>
            Cancel
          </FormBtn>
        </div>
      </form>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
