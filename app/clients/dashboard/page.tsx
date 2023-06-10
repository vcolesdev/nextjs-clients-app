import MainLayout from "@/app/main/layout";
import PageHeader from "@/components/PageHeader";
import ClientsDirectory from "@/components/Clients";

export default function Dashboard() {
  return (
    <>
      <PageHeader title={"Clients Dashboard"} />
      <MainLayout>
        <ClientsDirectory />
      </MainLayout>
    </>
  );
}
