import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SystemStatusForm } from "../_components/system-status-form";
import { Shell } from "@/components/shell";

export default function SettingsPage() {
  return (
    <Shell variant={"sidebar"}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">1. Status do sistema</CardTitle>
          <CardDescription>
            Defina o status de cada aplicação do seu estabelecimento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SystemStatusForm />
        </CardContent>
      </Card>
    </Shell>
  );
}
