import React from "react";
import { TClient } from "@/api/_types";

export default function TClientRow({
  client,
  trClasses
}: {
  client: TClient;
  trClasses?: string;
}) {
  return (
    <tr className={`min-w-full ${trClasses && trClasses}`}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
        {client.id}
      </td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
        {client.firstName} {client.lastName}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {client.email}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {client.phone ? client.phone : "-"}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {client.status ? "Active" : "Inactive"}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit<span className="sr-only">, {client.lastName}</span>
        </a>
      </td>
    </tr>
  );
}
