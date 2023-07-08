import Link from "next/link";
import MainLayout from "@/app/main/layout";
import { ClientsDirectory } from "@/components/Clients";
import { PageHeader } from "@/components/Page";
import { Text } from "@/components/Typography";

export default function Dashboard() {
  return (
    <>
      <PageHeader title="Clients Dashboard" />
      <MainLayout>
        <div className="mb-8">
          <Text>
            View a list of active and inactive clients here.
            <Link
              href={"/clients/add-client"}
              className="inline-block ms-2 text-violet-500 underline font-semibold tracking-tight hover:text-slate-600"
            >
              Add New
            </Link>
          </Text>
        </div>
        <ClientsDirectory />
      </MainLayout>
    </>
  );
}
