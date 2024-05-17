import { Shell } from "@/components/shell";

import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { SettingsLayoutWithNav } from "../_components/settings-nav";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: SettingsLayoutProps) {
  const items = [
    {
      title: "1. Configurações",
      href: "/app/settings/meu-web/settings",
      segment: "(settings)",
    },
    {
      title: "2. Cor do cardápio",
      href: "/app/settings/meu-web/colors",
      segment: "colors",
    },
    {
      title: "3. Descrição e Rodapé",
      href: "/app/settings/meu-web/description-footre",
      segment: "description-footre",
    },
    {
      title: "4. Produtos em destaque",
      href: "/app/settings/meu-web/featured-products",
      segment: "featured-products",
    },
    {
      title: "5. Adicionar descartáveis",
      href: "/app/settings/meu-web/add-disposable",
      segment: "add-disposable",
    },
    {
      title: "6. Produtos esgotados",
      href: "/app/settings/meu-web/out-products",
      segment: "out-products",
    },
    {
      title: "7. Link do Cardápio",
      href: "/app/settings/meu-web/link-menu",
      segment: "link-menu",
    },
    {
      title: "7. Clonagem de cardápio",
      href: "/app/settings/meu-web/clone-menu",
      segment: "clone-menu",
    },
  ];

  return (
    <Shell variant="sidebar" className="gap-4">
      <PageHeader className="max-w-full gap-4">
        <PageHeaderHeading size="sm" className="flex-1">
          Cardápio Digital
        </PageHeaderHeading>
      </PageHeader>

      <SettingsLayoutWithNav items={items}>{children}</SettingsLayoutWithNav>
    </Shell>
  );
}
