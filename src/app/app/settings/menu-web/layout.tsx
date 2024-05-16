import { Shell } from "@/components/shell";
import { MenuWebsNav } from "./_components/menu-web-nav";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <Shell variant={"sidebar"}>
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Cardápio Digital</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <MenuWebsNav />
        {children}
      </div>
    </Shell>
  );
}
