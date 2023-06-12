import React from "react";
import FormBtn from "@/components/Controls/Buttons/FormBtn";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAddNewClientMutation } from "@/redux/features/clientsApi";
import { TClient } from "@/api/_types";

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
    formState,
    formState: { errors },
    formState: { isSubmitSuccessful },
    getValues,
    handleSubmit,
    register,
    reset
  } = useForm();

  // Mutation triggers
  const [sendRequest, { data: clients, isSuccess }] = useAddNewClientMutation();
  const [addNewClient, { isLoading }] = useAddNewClientMutation();

  // Form submission
  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log("Added client");
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: ""
      });

      // Display success message.
      const alert = document.getElementById("AlertAddClient");
      if (alert) {
        alert.style.display = "flex";
      }
    }
  }, [isSubmitSuccessful, reset]);

  // @ts-ignore
  const handleAddClient = (formData) => {
    console.log("Form data", formData);
    sendRequest(formData);

    if (isSubmitSuccessful) {
      // Get field values.
      const values = getValues();

      // Create new client object from values.
      const newClient: TClient = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        comments: values.comments,
        status: true
      };

      // Add new client to state.
      addNewClient(newClient);
    }
  };

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
    <form
      action={action}
      className={`form ${extraClasses}`}
      id={formId}
      name={name}
      onSubmit={handleSubmit(handleAddClient)}
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
                <span className="font-semibold">Form Error:</span> First name is
                required
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
                <span className="font-semibold">Form Error:</span> First name is
                required
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
      </div>
      <div className="form__actions py-6">
        <FormBtn type={"submit"}>Add New Client</FormBtn>
        <FormBtn type={"reset"}>Reset Form</FormBtn>
        <FormBtn type={"cancel"}>Cancel</FormBtn>
      </div>
    </form>
  );
}
