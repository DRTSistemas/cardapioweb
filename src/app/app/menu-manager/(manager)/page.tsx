import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Shell } from "@/components/shell";
import { CategoriesForm } from "./categories-form";

export default function Page() {
  return (
    <Shell variant="sidebar">
      <PageHeader>
        <PageHeaderHeading size="sm">Gestor de cardápio</PageHeaderHeading>
      </PageHeader>
      <CategoriesForm />
    </Shell>
  );
}
