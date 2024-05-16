import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsappSocialForm } from "../_components/whatsapp-social-form";
import { SocialFAQs } from "../_components/social-faqs";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">1. WhatsApp</CardTitle>
        </CardHeader>
        <CardContent>
          <WhatsappSocialForm />
          <SocialFAQs />
        </CardContent>
      </Card>
    </div>
  );
}
