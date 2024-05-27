"use client"

import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import Link from "next/link"
import { useRouter, useSelectedLayoutSegment } from "next/navigation"

import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

type NavItem = {
  title: string
  href: string
  isActive: boolean
  icon: keyof typeof Icons
}

export function MenuTabs() {
  const router = useRouter()
  const segment = useSelectedLayoutSegment()
  console.log(segment)

  const tabs = [
    {
      title: "Inicío",
      href: "/menu",
      isActive: segment === null,
      icon: "home",
    },
    {
      title: "Carrinho",
      href: "/menu/cart",
      isActive: segment === "cart",
      icon: "cart",
    },
  ] satisfies NavItem[]

  return (
    <Tabs
      defaultValue={tabs.find((tab) => tab.isActive)?.href ?? tabs[0]?.href}
      onValueChange={(value) => router.push(value)}
    >
      <TabsList className="inline-flex w-full items-center justify-around space-x-1.5 text-muted-foreground">
        {tabs.map((tab) => {
          const Icon = Icons[tab.icon]
          return (
            <div
              key={tab.href}
              className={cn(
                "border-transparent border-t-2 py-1",
                tab.isActive && "border-foreground",
              )}
            >
              <TabsTrigger
                value={tab.href}
                className={cn(
                  "inline-flex items-center justify-center rounded-sm px-3 py-1.5 font-medium text-muted-foreground text-sm ring-offset-background transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
                  tab.isActive && "text-foreground",
                )}
                asChild
              >
                <Link href={tab.href} className="flex flex-col gap-0.5">
                  <Icon className="size-4" />
                  {tab.title}
                </Link>
              </TabsTrigger>
            </div>
          )
        })}
      </TabsList>
    </Tabs>
  )
}
