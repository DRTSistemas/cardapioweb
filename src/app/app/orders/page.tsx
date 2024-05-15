import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SystemStatusForm } from "./_components/system-status-form";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>1. Status do sistema</CardTitle>
          <CardDescription>
            Defina o status de cada aplicação do seu estabelecimento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SystemStatusForm />
        </CardContent>
      </Card>
    </div>
  );
}
