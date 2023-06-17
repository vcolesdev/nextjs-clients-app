import React from "react";
import Link from "next/link";
import { TClient } from "@/api/_types";
import IconPencilSquare from "@/components/Icons/PencilSquare";
import Badge from "@/components/Badge";

export default function TClientRow({
  client,
  trClasses
}: {
  client: TClient;
  trClasses?: string;
}) {
  const tRowClasses = `whitespace-nowrap text-sm text-gray-700 tracking-tight`;

  return (
    <tr className={`min-w-full ${trClasses ? trClasses : ""}`}>
      <td className={`py-4 pl-4 pr-3 sm:pl-0 ${tRowClasses}`}>{client.id}</td>
      <td
        className={`py-4 pl-4 pr-3 sm:pl-0 text-violet-600 hover:text-violet-700 
        underline underline-offset-2 active:text-gray-700 ${tRowClasses}`}
      >
        <Link href={`/clients/client/${client.id}`}>
          {client.firstName} {client.lastName}
        </Link>
      </td>
      <td className={`pr-3 py-4 ${tRowClasses}`}>{client.email}</td>
      <td className={`pr-3 py-4 ${tRowClasses}`}>
        {client.phone ? client.phone : "-"}
      </td>
      <td className={`pr-3 py-4 ${tRowClasses}`}>
        {client.status ? (
          <Badge label={"Active"} type={"success"} />
        ) : (
          <Badge label={"Inactive"} type={"danger"} />
        )}
      </td>
      <td className={`pr-3 py-4 ${tRowClasses}`}>2023-06-10</td>
      <td className={`py-4 pl-3 pr-4 text-right sm:pr-0 ${tRowClasses}`}>
        <Link
          href={`/clients/client/${client.id}/edit`}
          className={
            "inline-flex flex-shrink-0 items-center justify-center py-1 px-2 rounded-lg " +
            "text-gray-600 font-medium mr-2.5 tracking-tight hover:bg-gray-50 " +
            "active:bg-gray-100"
          }
        >
          <span className={"inline-block"}>Edit</span>
          <div className={"inline-block ml-1.5"}>
            <IconPencilSquare height={3.5} width={3.5} strokeWidth={2} />
          </div>
        </Link>
      </td>
    </tr>
  );
}
