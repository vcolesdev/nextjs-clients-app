"use client";

import React from "react";
import TableContainer from "@/components/Table/Container/TableContainer";
import TableHead from "@/components/Table/Head";
import TableBody from "@/components/Table/Body";
import TClientRow from "@/components/Table/TClientRow";
import Loader from "rsuite/Loader";
import { TClient } from "@/api/_types";
import { useGetClientsListQuery } from "@/redux/features/clientsApi";

export default function ClientsDirectory() {
  const {
    data: clients,
    error,
    isError,
    isLoading,
    isSuccess
  } = useGetClientsListQuery();

  const items = [
    "ID",
    "Full Name",
    "Email Address",
    "Phone",
    "Status",
    "Date Added",
    "Actions"
  ];

  return (
    <>
      {isLoading && <Loader size="lg" />}
      {isError && <p>{error.toString()}</p>}
      {isSuccess && (
        <TableContainer>
          <TableHead items={items} />
          <TableBody>
            {clients &&
              clients.map((client: TClient) => (
                <TClientRow client={client} key={client.id} />
              ))}
          </TableBody>
        </TableContainer>
      )}
    </>
  );
}
