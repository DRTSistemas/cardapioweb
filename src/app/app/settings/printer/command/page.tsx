import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComandaSettingsPrinterForm } from "./_components/comanda-settings-printer-form";

export default function Page() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">3. Comanda</CardTitle>
        </CardHeader>
        <CardContent>
          <ComandaSettingsPrinterForm />
        </CardContent>
      </Card>
    </div>
  );
}
