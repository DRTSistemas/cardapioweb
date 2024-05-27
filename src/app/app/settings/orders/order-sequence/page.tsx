import { SettingsCard } from "../../../../../components/cards/settings-card"
import { OrderSequenceForm } from "./order-sequence-form"

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
  )
}
