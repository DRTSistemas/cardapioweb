import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PrinterInfoForm } from "../_components/printer-info-form";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">1. Informações impressora</CardTitle>
          <CardDescription>
            Escolha e configure sua impressora térmica
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PrinterInfoForm />
        </CardContent>
      </Card>
    </div>
  );
}
