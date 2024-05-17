import { OrderSequenceForm } from "./order-sequence-form";
import { SettingsCard } from "../../../../../components/cards/settings-card";

export default function Page() {
  return (
    <div className="grid gap-6">
      <SettingsCard
        title="2. Sequência do pedido"
        description="Redefina os número dos seus pedidos"
      >
        <OrderSequenceForm />
      </SettingsCard>
    </div>
  );
}
