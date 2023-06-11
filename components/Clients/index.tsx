"use client";

import React from "react";
import TableContainer from "@/components/Table/TableContainer";
import THead from "@/components/Table/THead";
import TBody from "@/components/Table/TBody";
import TClientRow from "@/components/Table/TClientRow";
import { TClient, TClientsState } from "@/api/_types";
import { useGetClientsListQuery } from "@/redux/features/clientsApi";

export default function ClientsDirectory() {
  const {
    data: clients,
    error,
    isError,
    isLoading,
    isSuccess
  } = useGetClientsListQuery();

  return (
    <>
      {isLoading && <p>LOADING...</p>}
      {isError && <p>{error.toString()}</p>}
      {isSuccess && (
        <TableContainer>
          <THead items={["ID", "Full Name", "Email", "Phone", "Status"]} />
          <TBody>
            {clients &&
              clients.map((client: TClient) => (
                <TClientRow client={client} key={client.id} />
              ))}
          </TBody>
        </TableContainer>
      )}
    </>
  );
}
