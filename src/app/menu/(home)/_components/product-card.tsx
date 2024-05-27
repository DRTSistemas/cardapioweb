"use client"

import { Card } from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: {
    id: number
    nome: string
    descricao: string
    preco: number
    imagem: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="rounded-sm">
      <Link href={`/menu/product/${product.id}`}>
        <div className="flex bg-muted/40 p-4 hover:bg-muted/45">
          <div className="flex flex-1 flex-col">
            <div className="grid items-start">
              <h3 className="font-medium text-base">{product.nome}</h3>

              <p className="mt-1 text-muted-foreground text-sm">
                {product.descricao}
              </p>
            </div>
            <p className="mt-auto grid items-end font-semibold text-blue-500 text-primary">
              R$ {product.preco}
            </p>
          </div>

          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border-border">
            <Image
              alt="Image do produto"
              src={product.imagem}
              className="h-full w-full object-cover object-center"
              width={90}
              height={90}
            />
          </div>
        </div>
      </Link>
    </Card>
  )
}
