import { Button } from "@/components/ui/button";
import React from "react";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-16 min-h-screen flex-1">
      {children}
      <div className="fixed bottom-0 z-50 w-full border-t border-border/60 bg-background p-4">
        <Button
          disabled
          className="mx-auto flex w-full items-center  justify-between md:w-2/3 lg:w-1/3"
        >
          <span>Avançar (0)</span>
          <span>R$ 0,00</span>
        </Button>
      </div>
    </div>
  );
}
