import Link from "next/link";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <main className="flex flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="grid gap-4 text-sm text-muted-foreground">
          <Link href="#" className="font-semibold text-primary">
            Status do sistema
          </Link>
          <Link href="#">Sequência do pedido</Link>
          <Link href="#">Som dos pedidos</Link>
          <Link href="#">Impressão</Link>
          <Link href="#">Cancelar pedido</Link>
        </nav>
        {children}
      </div>
    </main>
  );
}
