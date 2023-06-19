import Link from "next/link";
import MainLayout from "@/app/main/layout";
import PageHeader from "@/components/PageHeader";
import ClientsDirectory from "@/components/Clients/Directory";
import Text from "@/components/Text";

export default function Dashboard() {
  return (
    <>
      <PageHeader title={"Clients Dashboard"} />
      <MainLayout>
        <div className={"mb-8"}>
          <Text>
            View a list of active and inactive clients here.
            <Link
              href={"/clients/add-client"}
              className={
                "inline-block ms-2 text-violet-500 underline font-semibold tracking-tight hover:text-slate-600"
              }
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
