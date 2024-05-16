import { Shell } from "@/components/shell";
import { Kanban } from "./_components/orders-board";

export default function AppIndex() {
  return (
    <Shell variant="sidebar">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Meus Pedidos</h1>
      </div>

      <Kanban />
    </Shell>
  );
}
