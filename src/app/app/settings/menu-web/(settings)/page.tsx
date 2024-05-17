import { MenuWebSettingsForm } from "./menu-web-settings-form";
import { SettingsCard } from "../../../../../components/cards/settings-card";

export default function Page() {
  return (
    <div className="grid gap-6">
      <SettingsCard title="1. Configurações">
        <MenuWebSettingsForm />
      </SettingsCard>
    </div>
  );
}
