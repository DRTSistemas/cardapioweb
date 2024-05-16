"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function PrinterNav() {
  const segment = useSelectedLayoutSegment();

  const items = [
    {
      title: "1. Informações impressora",
      href: "/app/settings/printer",
      segment: "(infos)",
    },
    {
      title: "2. Configurações avançadas",
      href: "/app/settings/printer/advenced-settings",
      segment: "advenced-settings",
    },
    {
      title: "3. Comanda",
      href: "/app/settings/printer/command",
      segment: "command",
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
