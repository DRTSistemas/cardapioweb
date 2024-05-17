import { PrinterInfoForm } from "./printer-info-form";
import { SettingsCard } from "../../../../../components/cards/settings-card";

export default function Page() {
  return (
    <div className="grid gap-4">
      <SettingsCard
        title="1. Informações impressora"
        description="Escolha e configure sua impressora térmica"
      >
        <PrinterInfoForm />
      </SettingsCard>
    </div>
  );
}
