import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PrinterInfoForm } from "../_components/printer-info-form";
import { AdvanvedSettingsPrinterForm } from "./_components/advanced-settings-printer-form";

export default function Page() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">2. Configuração avançadas</CardTitle>
        </CardHeader>
        <CardContent>
          <AdvanvedSettingsPrinterForm />
        </CardContent>
      </Card>
    </div>
  );
}
