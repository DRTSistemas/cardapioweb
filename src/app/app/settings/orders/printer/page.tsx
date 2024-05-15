import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PrinterForm } from "./_components/printer-form";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">4. Impressão</CardTitle>
          <CardDescription>Configure a impressão automática</CardDescription>
        </CardHeader>
        <CardContent>
          <PrinterForm />
        </CardContent>
      </Card>
    </div>
  );
}
