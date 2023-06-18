import Link from "next/link";
import MainLayout from "@/app/main/layout";
import PageHeader from "@/components/PageHeader";
import ClientsDirectory from "@/components/Clients/Directory";

export default function Dashboard() {
  return (
    <>
      <PageHeader title={"Clients Dashboard"} />
      <MainLayout>
        <div className={"mb-8"}>
          <p className={"text-gray-600 text-sm"}>
            View a list of active and inactive clients here.
            <Link
              href={"/clients/add-client"}
              className={
                "inline-block ms-2 text-gray-600 underline font-semibold tracking-tight hover:text-violet-500"
              }
            >
              Add New
            </Link>
          </p>
        </div>
        <ClientsDirectory />
      </MainLayout>
    </>
  );
}
