import React from "react";
import { Text } from "@/components/Typography";

export function DListItem({
  children,
  title
}: {
  children: React.ReactNode;
  title: string;
}) {
  const dClasses = {
    list: `divide-y divide-gray-100`,
    container: `px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0`,
    title: `text-sm tracking-tight font-medium leading-6 text-gray-700`,
    description: `mt-1 leading-6 sm:col-span-2 sm:mt-0`
  };

  return (
    <div className={dClasses.container}>
      <dt className={dClasses.title}>{title}</dt>
      <dd className={dClasses.description}>
        <Text>{children}</Text>
      </dd>
    </div>
  );
}
