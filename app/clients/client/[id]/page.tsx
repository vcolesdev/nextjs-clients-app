"use client";

import React from "react";
import MainLayout from "@/app/main/layout";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { useGetClientQuery } from "@/redux/features/clientsApi";

export default function Client({ params }: { params: { id: string } }) {
  const {
    data: client,
    error,
    isError,
    isFetching,
    isSuccess
  } = useGetClientQuery(params.id);

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
        {isFetching && <p>Fetching client by ID...</p>}
        {isError && <p>{error.toString()}</p>}
        {isSuccess && (
          <>
            <div className="px-4 sm:px-0">
              <h3 className="font-semibold leading-7 text-gray-900">
                Client Information
              </h3>
              <p className="mt-1 max-w-2xl leading-6 text-gray-500">
                Personal details and information.
              </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
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
                    {client.status === true ? "Active" : "Inactive"}
                  </dd>
                </div>
              </dl>
            </div>
          </>
        )}
      </MainLayout>
    </>
  );
}
