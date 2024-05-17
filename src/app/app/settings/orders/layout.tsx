import { PageHeader, PageHeaderHeading } from "@/components/page-header";

import { Shell } from "@/components/shell";
import { SettingsLayoutWithNav } from "../_components/settings-nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const items = [
    {
      title: "1. Status do sistema",
      href: "/app/settings/orders",
      segment: "(system-status)",
    },
    {
      title: "2. Sequência do pedido",
      href: "/app/settings/orders/order-sequence",
      segment: "order-sequence",
    },
    {
      title: "3. Som dos pedidos",
      href: "/app/settings/orders/order-sound",
      segment: "order-sound",
    },
    {
      title: "4. Impressão",
      href: "/app/settings/orders/printer",
      segment: "printer",
    },
    {
      title: "5. Cancelar pedido",
      href: "/app/settings/orders/cancel-order",
      segment: "cancel-order",
    },
  ];

  return (
    <Shell variant="sidebar" className="gap-4">
      <PageHeader>
        <PageHeaderHeading size="sm" className="flex-1">
          Meus pedidos
        </PageHeaderHeading>
      </PageHeader>

      <SettingsLayoutWithNav items={items}>{children}</SettingsLayoutWithNav>
    </Shell>
  );
}
