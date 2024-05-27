import { PageHeaderHeading } from "@/components/page-header"

import { products as items } from "@/mocks/products"
import React from "react"
import { ProductCard } from "./_components/product-card"

export default function MenuIndex() {
  return (
    <div className="space-y-6">
      {items.map((category) => (
        <div id={category.categoria} key={category.categoria}>
          <PageHeaderHeading as="h3" size="sm">
            {category.categoria}
          </PageHeaderHeading>
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {category.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
