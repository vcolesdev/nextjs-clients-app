import MainLayout from "@/app/main/layout";
import { PageHeader } from "@/components/Page";

export default function About() {
  return (
    <>
      <PageHeader title="About" />
      <MainLayout>
        <p>A description of the app and its intents will be shown here...</p>
      </MainLayout>
    </>
  );
}
