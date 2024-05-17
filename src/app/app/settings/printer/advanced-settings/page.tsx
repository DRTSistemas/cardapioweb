import { AdvanvedSettingsPrinterForm } from "./advanced-settings-printer-form";
import { SettingsCard } from "../../../../../components/cards/settings-card";

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
  );
}
