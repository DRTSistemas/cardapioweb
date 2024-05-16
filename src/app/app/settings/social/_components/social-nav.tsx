"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function SocialNav() {
  const segment = useSelectedLayoutSegment();

  const items = [
    {
      title: "1. WhatsApp",
      href: "/app/settings/social",
      segment: "(whatsapp)",
    },
    {
      title: "2. Facebook/Instagram",
      href: "/app/settings/social/facebook-instagram",
      segment: "facebook-instagram",
    },
  ];

  return (
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
  );
}
