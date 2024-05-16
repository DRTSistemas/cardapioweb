import { Input } from "@/components/ui/input";
import { AppHeader } from "./_components/app-header";
import { AppSidebar } from "./_components/app-sidebar";
import { SidebarProvider } from "./_components/sidebar-provider";
import { AppSidebarSheet } from "./_components/app-sidebar-sheet";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[17.5rem_1fr]">
        <AppSidebar className="top-0 z-30 hidden flex-col gap-4 border-r border-border/60 lg:sticky lg:block">
          <Input placeholder="Procurando por algo?" />
        </AppSidebar>
        <div className="flex flex-col">
          <AppHeader>
            <AppSidebarSheet className="lg:hidden">
              <AppSidebar>
                <Input placeholder="Procurando por algo?" />
              </AppSidebar>
            </AppSidebarSheet>
          </AppHeader>
          <main className="flex-1 overflow-hidden bg-muted/40 px-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
