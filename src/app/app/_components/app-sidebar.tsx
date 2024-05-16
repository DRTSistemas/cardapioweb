import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

import { AppNavItems } from "./app-nav-items";

interface DashboardSidebarProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function AppSidebar({
  children,
  className,
  ...props
}: DashboardSidebarProps) {
  return (
    <aside className={cn("h-screen w-full", className)} {...props}>
      <div className="hidden h-[3.55rem] items-center border-b border-border/60 px-4 lg:flex lg:px-6">
        <Link
          href="/app"
          className="flex w-fit items-center font-bold text-foreground/90 transition-colors hover:text-foreground"
        >
          Cardapio Web
        </Link>
      </div>
      <div className="flex flex-col gap-2.5 px-4 pt-2 lg:px-6 lg:pt-4">
        {children}
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)] px-3 py-2.5 lg:px-5">
        <AppNavItems className="mt-4" />
      </ScrollArea>
    </aside>
  );
}
