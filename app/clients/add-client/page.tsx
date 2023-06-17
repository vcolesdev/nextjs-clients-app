"use client";

import React from "react";
import MainLayout from "@/app/main/layout";
import PageHeader from "@/components/PageHeader";
import FormAddClient from "@/components/Clients/forms/FormAddClient";
import Alert from "@/components/Alert";

export default function AddClient() {
  return (
    <>
      <PageHeader title={"Add New Client"} />
      <Alert type={"success"} id={"AlertAddClient"} isOpen={false}>
        Success! A new client has been added to the database.
      </Alert>
      <MainLayout>
        <FormAddClient
          action={"/"}
          extraClasses={"form--add-client"}
          formId={"formAddNewClient"}
          name={"formAddNewClient"}
        />
      </MainLayout>
    </>
  );
}
