"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"

import { Icons } from "@/components/icons"
import { Button, type ButtonProps } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { useMediaQuery } from "@/hooks/use-media-query"
import { ArchiveX } from "lucide-react"
import { useSidebar } from "./sidebar-provider"

export interface DashboardSidebarSheetProps
  extends React.ComponentPropsWithRef<typeof SheetTrigger>,
    ButtonProps {}

export function AppSidebarSheet({
  children,
  className,
  ...props
}: DashboardSidebarSheetProps) {
  const { open, setOpen } = useSidebar()
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  if (isDesktop) return null

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "size-5 focus-visible:bg-transparent hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0",
            className,
          )}
          {...props}
        >
          <Icons.menu aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="inset-y-0 flex h-auto w-[18.75rem] flex-col items-center gap-4 px-0 py-4"
      >
        <SheetClose asChild>
          <Link
            href="/"
            className="mx-6 flex items-center self-start font-heading text-foreground/90 tracking-wider transition-colors hover:text-foreground"
          >
            <ArchiveX className="size-6" aria-hidden="true" />
          </Link>
        </SheetClose>
        {children}
      </SheetContent>
    </Sheet>
  )
}
