import { Shell } from "@/components/shell"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <Shell variant={"centered"}>
      <div className="flex gap-2">
        <Link className={buttonVariants()} href={"/menu"}>
          Ir para o menu
        </Link>
        <Link className={buttonVariants()} href={"/app"}>
          Ir para o app
        </Link>
      </div>
    </Shell>
  )
}
