"use client";

import React from "react";
import MainLayout from "@/app/main/layout";
import { Alert } from "@/components/Alert";
import { FormAddClient } from "@/components/Clients/Forms";
import { PageHeader } from "@/components/Page";
import { useRouter } from "next/navigation";

export default function AddClient() {
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);
  const router = useRouter();

  return (
    <>
      <PageHeader title={"Add New Client"} />
      <Alert
        type="success"
        id="AlertAddClient"
        isOpen={isAlertOpen}
        onDismiss={() => setIsAlertOpen(false)}
      >
        Success! A new client has been added to the database.
      </Alert>
      <MainLayout>
        <FormAddClient
          action="/"
          extraClasses="form--add-client"
          formId="formAddNewClient"
          name="formAddNewClient"
          onClickSubmit={() => {
            setIsAlertOpen(true);
            router.push("/clients/add-client");
          }}
        />
      </MainLayout>
    </>
  );
}
