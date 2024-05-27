import { SettingsCard } from "@/components/cards/settings-card"
import { ComandaSettingsPrinterForm } from "./comanda-settings-printer-form"

export default function Page() {
  return (
    <div className="grid gap-6">
      <SettingsCard title="3. Comanda">
        <ComandaSettingsPrinterForm />
      </SettingsCard>
    </div>
  )
}
