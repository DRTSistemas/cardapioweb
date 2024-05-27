"use client"

import Link from "next/link"

import { Icons } from "@/components/icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { appConfig } from "@/config/app"
import { cn } from "@/lib/utils"
import { useSelectedLayoutSegments } from "next/navigation"
import React from "react"
import { useSidebar } from "./sidebar-provider"

interface AppNavItemsProps {
  className?: string
}

export function AppNavItems({ className }: AppNavItemsProps) {
  const layoutSegment = useSelectedLayoutSegments()
  const { open, setOpen } = useSidebar()
  const segment = layoutSegment[layoutSegment.length - 2]
  const items = appConfig.mainNav
  if (!items?.length) return null
  console.log(segment)

  return (
    <Accordion
      type="multiple"
      className={cn("flex w-full flex-col gap-4 text-sm", className)}
    >
      {items.map((item) => {
        if (!item.href && !item.items) {
          return (
            <div key={`${item.title}divider`} className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-start text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  {item.title}
                </span>
              </div>
            </div>
          )
        }

        const Icon = Icons[item.icon]

        return item.items ? (
          <AccordionItem
            value={item.title}
            key={item.title}
            className="border-none"
          >
            <AccordionTrigger className="flex w-full items-center rounded-md border border-transparent px-2 py-1 data-[state=open]:text-primary">
              <div className="flex flex-row items-center gap-2">
                <Icon className="size-4" />
                {item.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-2 flex flex-col gap-4 pl-8">
              {item.items.map((subItem) => (
                <Link
                  aria-label={item.title}
                  key={subItem.title}
                  href={subItem.disabled ? "#" : subItem.href}
                  onClick={() => {
                    if (open) setOpen(false)
                  }}
                >
                  <span
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
                      subItem.segment === String(segment)
                        ? "bg-muted font-medium"
                        : "",
                      subItem.disabled
                        ? "cursor-default text-muted-foreground"
                        : "",
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
            href={item.disabled ? "#" : item.href}
            onClick={() => {
              if (open) setOpen(false)
            }}
          >
            <span
              className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
                item.segment === String(segment) ? "bg-muted font-medium" : "",
                item.disabled ? "cursor-default text-muted-foreground" : "",
              )}
            >
              <Icon className="size-4" />
              <span className="ml-2">{item.title}</span>
            </span>
          </Link>
        )
      })}
    </Accordion>
  )
}
