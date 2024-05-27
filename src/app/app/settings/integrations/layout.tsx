import { PageHeader, PageHeaderHeading } from "@/components/page-header"
import { Shell } from "@/components/shell"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Shell variant="sidebar" className="gap-4">
      <PageHeader className="max-w-full gap-4">
        <PageHeaderHeading size="sm" className="flex-1">
          Integrações
        </PageHeaderHeading>
      </PageHeader>
      {children}
    </Shell>
  )
}
