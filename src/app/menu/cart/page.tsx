import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-row items-center gap-2 border-b pb-2">
        <Link
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          href="/menu"
        >
          <ChevronLeft className="size-4" />
        </Link>
        <h1 className="text-lg font-semibold">Carrinho</h1>
      </div>
      <div className="h-screen"></div>
    </main>
  );
}
