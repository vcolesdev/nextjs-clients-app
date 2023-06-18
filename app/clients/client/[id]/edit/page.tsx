"use client";

import React from "react";
import MainLayout from "@/app/main/layout";
import PageHeader from "@/components/PageHeader";
import Alert from "@/components/Alert";
import Badge from "@/components/Badge";
import FormUpdateClient from "@/components/Clients/forms/UpdateClient";
import { Spinner } from "@chakra-ui/react";
import { useGetClientQuery } from "@/redux/features/clientsApi";
import ContentHeader from "@/components/Content/Header";
import { useRouter } from "next/navigation";

export default function UpdateClient({ params }: { params: { id: string } }) {
  const {
    data: client,
    error,
    isError,
    isFetching,
    isSuccess
  } = useGetClientQuery(params.id);

  const router = useRouter();
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);

  return (
    <>
      <PageHeader title={"Update Client"} />
      <Alert
        type={"success"}
        id={"AlertUpdateClient"}
        isOpen={isAlertOpen}
        onDismiss={() => setIsAlertOpen(false)}
      >
        <span>Success! Client has been successfully updated.</span>
      </Alert>
      <MainLayout>
        {isFetching && <Spinner size="lg" />}
        {isError && <p>Error: ${error.toString()}</p>}
        {isSuccess && client && (
          <>
            <ContentHeader
              headingText={"Client Information"}
              subheadingText={"Personal details and information."}
            />
            <div className="mt-6 border-t border-gray-100 mb-10">
              <dl className="divide-y divide-gray-100">
                {/* Full name */}
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm tracking-tight font-medium leading-6 text-gray-900">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {client.firstName} {client.lastName}
                  </dd>
                </div>
                {/* Email Address */}
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm tracking-tight font-medium leading-6 text-gray-900">
                    Email Address
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {client.email}
                  </dd>
                </div>
                {/* Phone Number */}
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm tracking-tight font-medium leading-6 text-gray-900">
                    Phone Number
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {client.phone ? client.phone : "–"}
                  </dd>
                </div>
                {/* Status */}
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm tracking-tight font-medium leading-6 text-gray-900">
                    Status
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {client.status ? (
                      <Badge label={"Active"} type={"success"} />
                    ) : (
                      <Badge label={"Inactive"} type={"danger"} />
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </>
        )}
        <ContentHeader
          containerClasses={"py-6 border-b border-gray-100 mb-10"}
          headingText={"Update Client Form"}
          subheadingText={
            "Update the personal information and details for this client."
          }
        />
        <FormUpdateClient
          client={client}
          clientId={params.id}
          extraClasses={"form--update-client"}
          formId={"formUpdateClient"}
          name={"formUpdateClient"}
          onClickSubmit={() => {
            setIsAlertOpen(true);
            router.push(`/clients/client/${params.id}/edit`);
          }}
        />
      </MainLayout>
    </>
  );
}
