import { PrinterForm } from "./printer-form";
import { SettingsCard } from "../../../../../components/cards/settings-card";

export default function Page() {
  return (
    <div className="grid gap-6">
      <SettingsCard
        title="4. Impressão"
        description="Configure a impressão automática"
      >
        <PrinterForm />
      </SettingsCard>
    </div>
  );
}
