"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function OrdersNav() {
  const segment = useSelectedLayoutSegment();

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
    <nav className="grid gap-4 text-sm text-muted-foreground">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn({
            "font-semibold text-primary": item.segment === segment,
          })}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
