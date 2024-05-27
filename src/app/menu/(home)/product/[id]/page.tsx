import { Button, buttonVariants } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = decodeURIComponent(params.id)

  return (
    <main className="mx-auto flex max-w-4xl flex-1 flex-col gap-4">
      <div className="flex flex-row items-center gap-2 border-b pb-2">
        <Link
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          href="/menu"
        >
          <ChevronLeft className="size-4" />
        </Link>
        <h1 className="font-semibold text-lg">Detalhes do produto </h1>
      </div>
      <div className="space-y-6">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-3xl">Produto {productId}</h2>
          <p className="font-semibold text-blue-500 text-xl">R$ 6,00</p>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            vitae ullam tenetur natus! Molestias iusto harum eos laudantium
            corporis aperiam nulla amet assumenda. Voluptatem blanditiis odit
            magni cupiditate, similique possimus.
          </p>
        </div>
        <div className="size-96 flex-shrink-0 overflow-hidden rounded-md border-border">
          <Image
            alt="Image do produto"
            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&dpr=2&q=80"
            className="h-full w-full object-cover object-center"
            width={800}
            height={800}
          />
        </div>
        <div className="space-y-4">
          <div className="flex h-12 w-full items-center rounded bg-muted/45 p-4 font-semibold">
            Observações
          </div>
          <Textarea />
        </div>
      </div>

      <Button size={"lg"} className="mt-auto w-full">
        <ShoppingCart className="mr-2 size-5" />
        Adicionar ao carrinho
      </Button>
    </main>
  )
}
