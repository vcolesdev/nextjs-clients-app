import { useRemoveClientMutation } from "@/redux/features/clientsApi";
import { useRouter } from "next/navigation";

/**
 * useClient.tsx
 * @param params
 * Hook for handling single client view.
 */
export const useClient = ({ params }: { params: { id: string } }) => {
  // Mutation function to remove a client.
  const [removeClient] = useRemoveClientMutation();

  // Next.js router
  const router = useRouter();

  const dClasses = {
    listContainer: `mt-6 border-t border-gray-100 mb-10`
  };

  // Delete button classes
  const btnDeleteClasses = `inline-block px-3 py-2 rounded-md font-semibold bg-gray-50 text-red-500 text-sm hover:bg-red-50 hover:text-red-600 active:bg-red-100`;

  // Handle removing a client
  const handleRemoveClient = () => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      removeClient(params.id);
      router.push("/clients/dashboard");
    }
  };

  return {
    btnDeleteClasses,
    dClasses,
    handleRemoveClient,
    removeClient
  };
};
