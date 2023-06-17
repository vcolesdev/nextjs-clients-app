"use client";

import React from "react";
import TableContainer from "@/components/Table/TableContainer";
import THead from "@/components/Table/THead";
import TBody from "@/components/Table/TBody";
import TClientRow from "@/components/Table/TClientRow";
import { Spinner } from "@chakra-ui/react";
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

  return (
    <>
      {isLoading && <Spinner size="lg" />}
      {isError && <p>{error.toString()}</p>}
      {isSuccess && (
        <TableContainer>
          <THead
            items={[
              "ID",
              "Full Name",
              "Email",
              "Phone",
              "Status",
              "Date Added",
              "Actions"
            ]}
          />
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
