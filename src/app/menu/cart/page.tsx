import { CartItem } from "@/components/checkout/cart-item";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Teclado Mecânico",
    price: 250.0,
    quantity: 10,
    isEditable: true,
  },
  {
    id: 2,
    name: "Mouse Óptico",
    price: 75.0,
    quantity: 50,
    isEditable: false,
  },
  {
    id: 3,
    name: "Monitor Full HD",
    price: 900.0,
    quantity: 5,
    isEditable: true,
  },
  {
    id: 4,
    name: "Cadeira Gamer",
    price: 1200.0,
    quantity: 3,
    isEditable: false,
  },
  {
    id: 5,
    name: "Headset",
    price: 150.0,
    quantity: 20,
    isEditable: true,
  },
];

export default function CartPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-row items-center gap-2 border-b pb-2">
        <Link
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          href="/menu"
        >
          <ChevronLeft className="size-4" />
        </Link>
        <h1 className="text-lg font-semibold">Carrinho</h1>
      </div>
      <div className={cn("flex w-full flex-col gap-5")}>
        {products.map((item) => (
          <CartItem variant="default" key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
