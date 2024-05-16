import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  children: React.ReactNode;
}

export function AppHeader({ children }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-6">
        {children}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-8">
            <Button variant="outline" size="icon">
              <Bell className="size-4" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
