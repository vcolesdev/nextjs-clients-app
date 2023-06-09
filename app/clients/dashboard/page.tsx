import MainLayout from "@/app/main/layout";
import PageHeader from "../../../components/PageHeader";
import ClientsDirectory from "@/features/clients";

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