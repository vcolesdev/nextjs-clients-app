"use client";

import React from "react";
import MainLayout from "@/app/main/layout";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import ContentHeader from "@/components/Content/Header";
import DList from "@/components/DList/List";
import DListItem from "@/components/DList/Item";
import Loader from "rsuite/Loader";
import { useGetClientQuery } from "@/redux/features/clientsApi";
import { useClientDetails } from "@/api/hooks/useClientDetails";
import { useClient } from "@/api/hooks/useClient";

export default function Client({ params }: { params: { id: string } }) {
  const {
    data: client,
    error,
    isError,
    isFetching,
    isSuccess
  } = useGetClientQuery(params.id);

  // Handle removing a client.
  const { handleRemoveClient, dClasses, btnDeleteClasses, removeClient } =
    useClient({
      params
    });

  // Client details
  const { dListItems } = useClientDetails({ client });

  return (
    <>
      {isSuccess && (
        <>
          <PageHeader title={`${client.firstName} ${client.lastName}`} />
          <div className={"breadcrumb pl-6 mb-6"}>
            <Link
              href={"/clients/dashboard"}
              className={"text-sm text-gray-600 font-medium underline"}
            >
              Back to Dashboard
            </Link>
          </div>
        </>
      )}
      <MainLayout>
        {isFetching && <Loader size="lg" />}
        {isError && <p>{error.toString()}</p>}
        {isSuccess && (
          <>
            <ContentHeader
              headingText={"Client Information"}
              subheadingText={"Personal details and information."}
            />
            {/* Client Details */}
            <div className={dClasses.listContainer}>
              <DList>
                {dListItems.map((item, index) => (
                  <DListItem key={index} title={item.title}>
                    {item.desc}
                  </DListItem>
                ))}
              </DList>
            </div>
            {/* Client Actions */}
            <div className="pt-6">
              <div className={"pb-6 mb-6 border-b border-gray-100"}>
                <ContentHeader
                  headingText={"Delete Client"}
                  subheadingText={"Permanently delete this client."}
                />
              </div>
              <div>
                <button
                  className={btnDeleteClasses}
                  onClick={handleRemoveClient}
                >
                  Delete Client
                </button>
              </div>
            </div>
          </>
        )}
      </MainLayout>
    </>
  );
}
