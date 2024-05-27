import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { MenuTabs } from "./menu-tabs"

export function MenuHeaderDesktop() {
  return (
    <header className="hidden h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:flex lg:h-[80px] lg:px-6">
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none lg:w-2/3"
            />
          </div>
        </form>
      </div>
      <MenuTabs />
    </header>
  )
}
