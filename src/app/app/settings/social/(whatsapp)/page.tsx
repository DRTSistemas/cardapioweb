import { SettingsCard } from "../../../../../components/cards/settings-card"
import { WhatsappSocialForm } from "./whatsapp-social-form"

export default function Page() {
  return (
    <div className="grid gap-6">
      <SettingsCard title="1. WhatsApp">
        <WhatsappSocialForm />
      </SettingsCard>
    </div>
  )
}
