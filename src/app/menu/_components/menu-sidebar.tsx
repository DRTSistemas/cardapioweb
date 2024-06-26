import { ChevronRight, Package2 } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { products as categorias } from "@/mocks/products"

export function MenuSidebar() {
  return (
    <div className="hidden border-r bg-muted/40 lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[80px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">DRT Sistemas</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start gap-1 px-2 font-medium text-sm">
            {categorias.map(({ categoria }) => (
              <Link
                key={categoria}
                href={`#${categoria}`}
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-lg text-muted-foreground transition-all hover:bg-accent hover:text-primary"
              >
                {categoria}
                <ChevronRight className="ml-auto size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
