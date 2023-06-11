"use client";

import React from "react";
import MainLayout from "@/app/main/layout";
import PageHeader from "@/components/PageHeader";
import FormAddClient from "@/components/Clients/forms/FormAddClient";

export default function AddClient() {
  return (
    <>
      <PageHeader title={"Add New Client"} />
      <MainLayout>
        <FormAddClient />
      </MainLayout>
    </>
  );
}
