import { SettingsCard } from "../../../../../components/cards/settings-card"
import { AdvanvedSettingsPrinterForm } from "./advanced-settings-printer-form"

export default function Page() {
  return (
    <div className="grid gap-6">
      <SettingsCard
        title="2. Configuração avançadas"
        description="Escolha e configure sua impressora térmica"
      >
        <AdvanvedSettingsPrinterForm />
      </SettingsCard>
    </div>
  )
}
