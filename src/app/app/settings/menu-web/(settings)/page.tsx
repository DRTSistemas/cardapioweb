import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MenuWebSettingsForm } from "./_components/menu-web-settings-form";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">1. Configurações</CardTitle>
        </CardHeader>
        <CardContent>
          <MenuWebSettingsForm />
        </CardContent>
      </Card>
    </div>
  );
}
