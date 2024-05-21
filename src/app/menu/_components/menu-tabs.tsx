"use client";

import Link from "next/link";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MenuTabs() {
  const router = useRouter();
  const segment = useSelectedLayoutSegment();

  const tabs = [
    {
      title: "Inicío",
      href: `/menu`,
      isActive: segment === "(home)",
      icon: "home",
    },
    {
      title: "Carrinho",
      href: `/menu/cart`,
      isActive: segment === "cart",
      icon: "cart",
    },
  ] satisfies {
    title: string;
    href: string;
    isActive: boolean;
    icon: keyof typeof Icons;
  }[];

  return (
    <Tabs
      defaultValue={tabs.find((tab) => tab.isActive)?.href ?? tabs[0]?.href}
      className="fixed bottom-0 z-50 w-full border-t border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      onValueChange={(value) => router.push(value)}
    >
      <TabsList className="inline-flex w-full items-center justify-around space-x-1.5 text-muted-foreground">
        {tabs.map((tab) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const Icon = Icons[tab.icon];
          return (
            <div
              role="none"
              key={tab.href}
              className={cn(
                "border-t-2 border-transparent py-1.5",
                tab.isActive && "border-foreground",
              )}
            >
              <TabsTrigger
                value={tab.href}
                className={cn(
                  "inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground ring-offset-background transition-all hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
                  tab.isActive && "text-foreground",
                )}
                asChild
              >
                <Link href={tab.href} className="flex flex-col gap-1">
                  <Icon className="size-4" />
                  {tab.title}
                </Link>
              </TabsTrigger>
            </div>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
