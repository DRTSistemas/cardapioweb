import { WhatsappSocialForm } from "./whatsapp-social-form";
import { SettingsCard } from "../../../../../components/cards/settings-card";

export default function Page() {
  return (
    <div className="grid gap-6">
      <SettingsCard title="1. WhatsApp">
        <WhatsappSocialForm />
      </SettingsCard>
    </div>
  );
}
