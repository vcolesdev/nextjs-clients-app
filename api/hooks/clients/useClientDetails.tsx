import React from "react";
import { Badge } from "@/components/Badge";

/**
 * useClientDetails.tsx
 * @param client
 */
export const useClientDetails = ({ client }: { client: {} | any }) => {
  const dListItems = [
    {
      title: "Full Name",
      desc: `${client && client.firstName} ${client && client.lastName}`
    },
    {
      title: "Email Address",
      desc: client && client.email
    },
    {
      title: "Phone Number",
      desc: client && client.phone
    },
    {
      title: "Status",
      desc:
        client && client.status ? (
          <Badge label={"Active"} type={"success"} />
        ) : (
          <Badge label={"Inactive"} type={"danger"} />
        )
    }
  ];

  return { dListItems };
};
