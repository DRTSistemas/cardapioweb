import { SystemStatusForm } from "./system-status-form";

import { SettingsCard } from "../../../../../components/cards/settings-card";

export default function Page() {
  return (
    <div className="grid gap-4">
      <SettingsCard
        title="1. Status do sistema"
        description="Defina o status de cada aplicação do seu estabelecimento"
      >
        <SystemStatusForm />
      </SettingsCard>
    </div>
  );
}
