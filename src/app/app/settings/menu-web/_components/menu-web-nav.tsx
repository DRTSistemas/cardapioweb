"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function MenuWebsNav() {
  const segment = useSelectedLayoutSegment();

  const items = [
    {
      title: "1. Configurações",
      href: "/app/settings/meu-web/settings",
      segment: "(settings)",
    },
    {
      title: "2. Cor do cardápio",
      href: "/app/settings/meu-web/colors",
      segment: "colors",
    },
    {
      title: "3. Descrição e Rodapé",
      href: "/app/settings/meu-web/description-footre",
      segment: "description-footre",
    },
    {
      title: "4. Produtos em destaque",
      href: "/app/settings/meu-web/featured-products",
      segment: "featured-products",
    },
    {
      title: "5. Adicionar descartáveis",
      href: "/app/settings/meu-web/add-disposable",
      segment: "add-disposable",
    },
    {
      title: "6. Produtos esgotados",
      href: "/app/settings/meu-web/out-products",
      segment: "out-products",
    },
    {
      title: "7. Link do Cardápio",
      href: "/app/settings/meu-web/link-menu",
      segment: "link-menu",
    },
    {
      title: "7. Clonagem de cardápio",
      href: "/app/settings/meu-web/clone-menu",
      segment: "clone-menu",
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
