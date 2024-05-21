import { MenuTabs } from "./menu-tabs";

interface DashboardHeaderProps {}

export function MenuNavMobile({}: DashboardHeaderProps) {
  return (
    <div className="fixed bottom-0 z-50 w-full border-t border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MenuTabs />
    </div>
  );
}
