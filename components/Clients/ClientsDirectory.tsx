"use client";

import React from "react";
import Loader from "rsuite/Loader";
import { TClient } from "@/api/_types";
import {
  TableBody,
  TableContainer,
  TableHead,
  TClientRow
} from "@/components/Table";
import { useGetClientsListQuery } from "@/redux/features/clientsApi";

export function ClientsDirectory() {
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
