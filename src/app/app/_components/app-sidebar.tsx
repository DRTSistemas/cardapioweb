"use client";

import Link from "next/link";
import { Bell, Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { appConfig } from "@/config/app";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import React from "react";
import { Icons } from "@/components/icons";

export function AppSidebar() {
  const layoutSegment = useSelectedLayoutSegments();

  const segment = layoutSegment[layoutSegment.length - 2];
  const items = appConfig.mainNav;

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <ScrollArea className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Accordion type="multiple" className="p-1">
              {items.map((item) => {
                const Icon = Icons[item.icon];

                return item.items ? (
                  <AccordionItem
                    value={item.title}
                    key={item.title}
                    className="border-none"
                  >
                    <AccordionTrigger className="justify-start gap-2 px-2 text-sm capitalize">
                      <Icon className="size-4" />
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="mt-2 pl-8">
                      <div className="flex flex-col gap-6">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className={cn("font-normal", {
                              "font-semibold": subItem.segment === segment,
                            })}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <ItemWithoutItems
                    key={item.title}
                    href={item.href}
                    segment={String(segment)}
                  >
                    <Icon className="size-4" />
                    {item.title}
                  </ItemWithoutItems>
                );
              })}
            </Accordion>
          </ScrollArea>
        </div>
        <div className="mt-auto p-4">
          <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

interface ItemWithoutItemsProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  segment: string;
}

function ItemWithoutItems({
  children,
  href,
  segment,
  className,
  ...props
}: ItemWithoutItemsProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-1 items-center gap-2 px-2 py-4 text-start text-sm font-medium transition-all hover:underline",
        href.includes(segment) && "text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
