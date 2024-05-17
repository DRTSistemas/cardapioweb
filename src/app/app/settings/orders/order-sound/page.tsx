import { SettingsCard } from "../../../../../components/cards/settings-card";
import { OrderSoundForm } from "./order-sound-form";

export default function Page() {
  return (
    <div className="grid gap-6">
      <SettingsCard title="3. Som dos pedidos">
        <OrderSoundForm />
      </SettingsCard>
    </div>
  );
}
