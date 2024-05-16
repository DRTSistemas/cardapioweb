import Link from "next/link";
import { PrinterNav } from "./_components/printer-nav";
import { Shell } from "@/components/shell";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <Shell variant={"sidebar"}>
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Impressora</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <PrinterNav />
        {children}
      </div>
    </Shell>
  );
}
