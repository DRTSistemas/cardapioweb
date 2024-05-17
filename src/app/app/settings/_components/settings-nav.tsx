"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface SettingsLayoutWithNavProps {
  children: React.ReactNode;
  items: {
    title: string;
    href: string;
    segment: string;
  }[];
}

export function SettingsLayoutWithNav({
  items,
  children,
}: SettingsLayoutWithNavProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
      <nav className="grid gap-4 text-sm text-muted-foreground">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn({
              "font-semibold text-primary": item.segment === segment,
            })}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
}
