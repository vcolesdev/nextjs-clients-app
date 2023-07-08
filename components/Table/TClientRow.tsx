import React from "react";
import Link from "next/link";
import { Badge } from "@/components/Badge/Badge";
import { IconPencilSquare } from "@/components/Icons/IconPencilSquare";
import { TableCell, TableRow } from "@/components/Table";
import { Text } from "@/components/Typography";
import { TClient } from "@/api/_types";

const BtnEditClient = ({ href }: { href: string }) => {
  const linkClasses = `
    inline-flex flex-shrink-0 items-center justify-center py-1 px-2 rounded-lg text-slate-600 
    text-sm font-medium tracking-tight hover:bg-slate-100 active:bg-slate-200
  `;
  return (
    <Link href={href} className={linkClasses}>
      <span className="inline-block">Edit Client</span>
      <div className="inline-block ml-1.5">
        <IconPencilSquare height={3.5} width={3.5} strokeWidth={2} />
      </div>
    </Link>
  );
};

export function TClientRow({
  client,
  trClasses
}: {
  client: TClient;
  trClasses?: string;
}) {
  const linkClasses = `underline underline-offset-2 font-semibold text-gray-700 hover:text-violet-500 active:text-violet-600`;

  return (
    <TableRow extraClasses={trClasses ? trClasses : ""}>
      <TableCell extraClasses={"pl-4 sm:pl-0"}>
        <Text>{client.id}</Text>
      </TableCell>
      <TableCell extraClasses={"pl-4 sm:pl-0"}>
        <Link className={linkClasses} href={`/clients/client/${client.id}`}>
          {client.firstName} {client.lastName}
        </Link>
      </TableCell>
      <TableCell>
        <Text>{client.email}</Text>
      </TableCell>
      <TableCell>
        <Text>{client.phone ? client.phone : "-"}</Text>
      </TableCell>
      <TableCell>
        {client.status ? (
          <Badge label={"Active"} type={"success"} />
        ) : (
          <Badge label={"Inactive"} type={"danger"} />
        )}
      </TableCell>
      <TableCell>
        <Text>2023-06-10</Text>
      </TableCell>
      <TableCell extraClasses={`pl-3 text-right sm:pr-0`}>
        <BtnEditClient href={`/clients/client/${client.id}/edit`} />
      </TableCell>
    </TableRow>
  );
}
