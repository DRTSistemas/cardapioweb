import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Shell } from "@/components/shell";

import { Categories } from "./categories";

export default function Page() {
  return (
    <Shell variant="sidebar">
      <PageHeader>
        <PageHeaderHeading size="sm">Gestor de cardápio</PageHeaderHeading>
      </PageHeader>
      <Categories />
    </Shell>
  );
}
