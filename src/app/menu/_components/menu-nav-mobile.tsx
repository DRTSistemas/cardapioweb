import { Search, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {}

export function MenuNavMobile({}: DashboardHeaderProps) {
  return (
    <div className="fixed bottom-0 z-50 w-full border-t border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-6">
        <nav className="flex w-full justify-around space-x-2">
          <Button variant="outline" size="icon">
            <Search className="size-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="size-4" />
          </Button>
        </nav>
      </div>
    </div>
  );
}
