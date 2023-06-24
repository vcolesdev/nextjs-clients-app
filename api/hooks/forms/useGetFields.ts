/**
 * useGetFields.ts
 * Returns the fields for the client form.
 */
export const useGetFields = () => {
  const fields = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      required: true
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      required: true
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      required: true
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      required: false
    }
  ];

  return { fields };
};
