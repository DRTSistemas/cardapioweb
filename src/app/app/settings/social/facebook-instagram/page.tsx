import { InstaFaceSocialForm } from "./insta-face-social-form"

import { SettingsCard } from "../../../../../components/cards/settings-card"

export default function Page() {
  return (
    <div className="grid gap-6">
      <SettingsCard title="2. Facebook/Instagram">
        <InstaFaceSocialForm />
      </SettingsCard>
    </div>
  )
}
