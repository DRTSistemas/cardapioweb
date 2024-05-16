import { OrdersNav } from "./_components/orders-nav";
import { Shell } from "@/components/shell";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <Shell variant="sidebar" className="gap-4">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Meus pedidos</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <OrdersNav />
        {children}
      </div>
    </Shell>
  );
}
