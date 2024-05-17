import { Shell } from "@/components/shell";
import { Kanban } from "../_components/orders-board";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";

export default function AppIndex() {
  return (
    <Shell variant="sidebar">
      <PageHeader className="max-w-full gap-4">
        <PageHeaderHeading size="sm" className="flex-1">
          Meus Pedidos
        </PageHeaderHeading>
      </PageHeader>

      <Kanban />
    </Shell>
  );
}
