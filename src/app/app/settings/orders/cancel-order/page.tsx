import { SettingsCard } from "../../../../../components/cards/settings-card"
import { CancelOrderForm } from "./cancel-order-form"

export default function Page() {
  return (
    <div className="grid gap-6">
      <SettingsCard title="5. Cancelar pedido">
        <CancelOrderForm />
      </SettingsCard>
    </div>
  )
}
