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
import { useSidebar } from "./sidebar-provider";

interface AppNavItemsProps {
  className?: string;
}

export function AppNavItems({ className }: AppNavItemsProps) {
  const layoutSegment = useSelectedLayoutSegments();
  const { open, setOpen } = useSidebar();

  const segment = layoutSegment[layoutSegment.length - 2];
  const items = appConfig.mainNav;
  console.log(segment);
  if (!items?.length) return null;
  return (
    <Accordion
      type="multiple"
      className={cn("flex w-full flex-col gap-2 text-sm", className)}
    >
      {items.map((item) => {
        const Icon = Icons[item.icon];

        return item.items ? (
          <AccordionItem
            value={item.title}
            key={item.title}
            className="border-none"
          >
            <AccordionTrigger className="flex w-full items-center rounded-md border border-transparent px-2 py-1">
              <div className="flex flex-row items-center gap-2">
                <Icon className="size-4" />
                {item.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-2 flex flex-col gap-2 pl-8">
              {item.items.map((subItem) => (
                <Link
                  aria-label={item.title}
                  key={subItem.title}
                  href={subItem.href}
                  onClick={() => {
                    if (open) setOpen(false);
                  }}
                >
                  <span
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
                      subItem.segment === String(segment)
                        ? "bg-muted font-medium text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    <span>{subItem.title}</span>
                  </span>
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ) : (
          <Link
            aria-label={item.title}
            key={item.title}
            href={item.href}
            onClick={() => {
              if (open) setOpen(false);
            }}
          >
            <span
              className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
                item.segment === String(segment)
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground",
              )}
            >
              <Icon className="size-4" />
              <span className="ml-2">{item.title}</span>
            </span>
          </Link>
        );
      })}
    </Accordion>
  );
}
