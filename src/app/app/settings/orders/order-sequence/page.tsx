import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OrderSequenceForm } from "./_components/order-sequence-form";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">2. Sequência do pedido</CardTitle>
          <CardDescription>Redefina os número dos seus pedidos</CardDescription>
        </CardHeader>
        <CardContent>
          <OrderSequenceForm />
        </CardContent>
      </Card>
    </div>
  );
}
