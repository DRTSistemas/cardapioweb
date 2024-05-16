import { Shell } from "@/components/shell";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <Shell variant={"centered"}>
      <Link className={buttonVariants()} href={"/app"}>
        Ir para o app
      </Link>
    </Shell>
  );
}
