import React from "react";
import { MenuHeaderMobile } from "../_components/menu-header-mobile";

import { Badge } from "@/components/ui/badge";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex-1">
      <MenuHeaderMobile>
        <p className="font-semibold">DRT Sistemas</p>
      </MenuHeaderMobile>
      <div className="flex w-full flex-row items-center justify-between border-b border-border/60 p-2 px-4">
        <div className="space-x-2">
          <Badge variant={"destructive"}>Offline</Badge>
          <span className="text-xs">Sem pedido minímo</span>
        </div>
        <p className="text-xs">Perfil da loja</p>
      </div>
      <div className="sticky top-14 space-x-2 border-b border-border/60 bg-background p-2 px-4">
        <Badge>Lanches</Badge>
        <Badge>Bebidas</Badge>
      </div>
      {children}
    </div>
  );
}
