import { Search, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  children: React.ReactNode;
}

export function MenuHeaderMobile({ children }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background">
      <div className="flex h-14 items-center px-6">
        {children}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Search className="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="size-4" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
