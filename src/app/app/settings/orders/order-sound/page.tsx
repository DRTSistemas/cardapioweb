import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderSoundForm } from "./_components/order-sound-form";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">3. Som dos pedidos</CardTitle>
        </CardHeader>
        <CardContent>
          <OrderSoundForm />
        </CardContent>
      </Card>
    </div>
  );
}
