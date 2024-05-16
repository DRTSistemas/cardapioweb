"use client";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { appConfig } from "@/config/app";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";
import { Icons } from "@/components/icons";

export function AppNavItems() {
  const layoutSegment = useSelectedLayoutSegments();

  const segment = layoutSegment[layoutSegment.length - 2];
  const items = appConfig.mainNav;
  return (
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
