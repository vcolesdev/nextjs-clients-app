/**
 * useFormStyles.ts
 * Custom hook to return styles for form elements.
 */
export const useFormStyles = () => {
  const formStyles = {
    label:
      "inline-block mb-1.5 text-sm font-medium tracking-tight text-gray-700",
    input:
      "block w-full px-3 py-3 rounded-md border-2 border-solid border-gray-300 " +
      "focus:border-violet-300 focus:ring focus:ring-violet-200 " +
      "focus:ring-opacity-50 text-sm tracking-tight text-gray-700",
    error: "text-red-500 text-xs italic"
  };

  return { formStyles };
};
