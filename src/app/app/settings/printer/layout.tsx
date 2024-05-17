import { PageHeader, PageHeaderHeading } from "@/components/page-header";

import { Shell } from "@/components/shell";
import { SettingsLayoutWithNav } from "../_components/settings-nav";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: SettingsLayoutProps) {
  const items = [
    {
      title: "1. Informações impressora",
      href: "/app/settings/printer",
      segment: "(infos)",
    },
    {
      title: "2. Configurações avançadas",
      href: "/app/settings/printer/advanced-settings",
      segment: "advanced-settings",
    },
    {
      title: "3. Comanda",
      href: "/app/settings/printer/command",
      segment: "command",
    },
  ];
  return (
    <Shell variant={"sidebar"}>
      <PageHeader>
        <PageHeaderHeading size="sm" className="flex-1">
          Impressora
        </PageHeaderHeading>
      </PageHeader>

      <SettingsLayoutWithNav items={items}>{children}</SettingsLayoutWithNav>
    </Shell>
  );
}
