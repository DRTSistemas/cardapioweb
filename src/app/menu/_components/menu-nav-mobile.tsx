import { MenuTabs } from "./menu-tabs"

export function MenuNavMobile() {
  return (
    <div className="fixed bottom-0 z-50 w-full border-border/60 border-t bg-background lg:hidden">
      <MenuTabs />
    </div>
  )
}
