import MainLayout from "@/app/main/layout";
import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader title={"Homepage"} />
      <MainLayout>
        <p>Homepage content will go here...</p>
      </MainLayout>
    </>
  );
}
