import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shell"
import { UploadCard } from "./upload-images"

export default function Page() {
  return (
    <Shell variant="sidebar">
      <PageHeader>
        <PageHeaderHeading size="sm">Imagens do Cardápio</PageHeaderHeading>
        <PageHeaderDescription>
          Por aqui, é possível remover, alterar e editar as imagens dos seus
          itens
        </PageHeaderDescription>
      </PageHeader>

      <div className="grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
        {Array.from({ length: 8 }).map((_, idx) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <UploadCard key={idx} />
        ))}
      </div>
    </Shell>
  )
}
