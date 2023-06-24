"use client";

import React from "react";
import Loader from "rsuite/Loader";
import MainLayout from "@/app/main/layout";
import { PageHeader } from "@/components/Page";
import { Alert } from "@/components/Alert/Alert";
import { ContentHeader } from "@/components/Content";
import { DList, DListItem } from "@/components/DList";
import { FormUpdateClient } from "@/components/Clients/Forms";
import { useClientDetails } from "@/api/hooks/clients/useClientDetails";
import { useGetClientQuery } from "@/redux/features/clientsApi";
import { useRouter } from "next/navigation";

export default function UpdateClient({ params }: { params: { id: string } }) {
  const {
    data: client,
    error,
    isError,
    isFetching,
    isSuccess
  } = useGetClientQuery(params.id);

  // Next.js router
  const router = useRouter();

  // Handle alert
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);

  // Client details
  const { dListItems } = useClientDetails({ client });

  // Definition list classes
  const dClasses = {
    listContainer: `mt-6 border-t border-gray-100 mb-10`
  };

  return (
    <>
      <div className={"flex relative items-center"}>
        <PageHeader title={`Update Client`} />
        <span className={"mb-4 ml-4 text-xl text-gray-500 font-light"}>
          {client && `${client.firstName} ${client.lastName}`}
        </span>
      </div>
      <Alert
        type={"success"}
        id={"AlertUpdateClient"}
        isOpen={isAlertOpen}
        onDismiss={() => setIsAlertOpen(false)}
      >
        <span>Success! Client has been successfully updated.</span>
      </Alert>
      <MainLayout>
        {isFetching && <Loader size="lg" />}
        {isError && <p>Error: ${error.toString()}</p>}
        {isSuccess && client && (
          <>
            <ContentHeader
              headingText={"Client Information"}
              subheadingText={"Personal details and information."}
            />
            <div className={dClasses.listContainer}>
              <DList>
                {dListItems.map((item, index) => (
                  <DListItem key={index} title={item.title}>
                    {item.desc}
                  </DListItem>
                ))}
              </DList>
            </div>
          </>
        )}
        <ContentHeader
          containerClasses={"mb-6 py-6 border-b border-gray-100"}
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
