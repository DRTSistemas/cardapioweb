import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InstaFaceSocialForm } from "./_components/insta-face-social-form";
import { SocialFAQs } from "../_components/social-faqs";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">2. Facebook/Instagram</CardTitle>
        </CardHeader>
        <CardContent>
          <InstaFaceSocialForm />
          <SocialFAQs />
        </CardContent>
      </Card>
    </div>
  );
}
