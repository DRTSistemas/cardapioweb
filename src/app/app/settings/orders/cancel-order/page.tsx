import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CancelOrderForm } from "./_components/cancel-order-form";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">3. Som dos pedidos</CardTitle>
        </CardHeader>
        <CardContent>
          <CancelOrderForm />
        </CardContent>
      </Card>
    </div>
  );
}
