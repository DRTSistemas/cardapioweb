import { Shell } from "@/components/shell"

import { PageHeader, PageHeaderHeading } from "@/components/page-header"
import { SettingsLayoutWithNav } from "../_components/settings-nav"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const items = [
    {
      title: "1. WhatsApp",
      href: "/app/settings/social",
      segment: "(whatsapp)",
    },
    {
      title: "2. Facebook/Instagram",
      href: "/app/settings/social/facebook-instagram",
      segment: "facebook-instagram",
    },
  ]
  return (
    <Shell variant="sidebar">
      <PageHeader>
        <PageHeaderHeading size="sm" className="flex-1">
          Meus pedidos
        </PageHeaderHeading>
      </PageHeader>
      <SettingsLayoutWithNav items={items}>{children}</SettingsLayoutWithNav>
    </Shell>
  )
}
