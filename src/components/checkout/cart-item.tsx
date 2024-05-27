import { cn, formatPrice } from "@/lib/utils"
import { Icons } from "../icons"
import { Separator } from "../ui/separator"
import { UpdateCart } from "./update-cart"

interface CartItemProps {
  item: {
    id: number
    name: string
    price: number
    quantity: number
    isEditable: boolean
  }
  variant: "default"
}

export function CartItem({ variant, item }: CartItemProps) {
  return (
    <div key={item.id} className="space-y-3 bg-background">
      <div
        className={cn(
          "flex flex-col items-center justify-between gap-4 md:flex-row",
        )}
      >
        <div className="flex w-full items-start justify-start space-x-4">
          <div className="relative aspect-square size-24 min-w-fit overflow-hidden rounded">
            <div className="flex h-full items-center justify-center bg-secondary">
              <Icons.placeholder
                className="size-4 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1 self-start">
            <span className="font-medium text-sm">{item.name}</span>

            <span className="text-muted-foreground text-xs">
              {formatPrice(item.price)} x {item.quantity} ={" "}
              {formatPrice(
                (Number(item.price) * Number(item.quantity)).toFixed(2),
              )}
            </span>
          </div>
        </div>
        <UpdateCart />
      </div>
      {variant === "default" ? <Separator /> : null}
    </div>
  )
}
