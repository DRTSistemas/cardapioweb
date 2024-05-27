import { MenuHeaderDesktop } from "../_components/menu-header-desktop";
import { MenuHeaderMobile } from "../_components/menu-header-mobile";
import { MenuNavMobile } from "../_components/menu-nav-mobile";
import { MenuSidebar } from "../_components/menu-sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mb-16 grid min-h-screen w-full md:mb-0 lg:grid-cols-[280px_1fr]">
      <MenuSidebar />
      <div className="flex flex-col">
        <MenuHeaderMobile />
        <MenuHeaderDesktop />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
      <MenuNavMobile />
    </div>
  );
}
