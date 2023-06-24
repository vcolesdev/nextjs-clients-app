/**
 * useCustomForm.ts
 * Global form properties, styles, and functions.
 */
export const useCustomForm = () => {
  // Form styles
  const formStyles = {
    label: `inline-block mb-2 font-medium tracking-tight text-slate-700`,
    input: `block w-full px-3 py-3 mb-2 rounded-lg tracking-tight`,
    error: `mt-2 px-3 py-2 rounded-lg bg-red-50 text-red-600 text-sm tracking-tight`
  };

  return { formStyles };
};
