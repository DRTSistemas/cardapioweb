import React from "react";

import { MenuNavMobile } from "./_components/menu-nav-mobile";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex-1">
      {children}
      <MenuNavMobile />
    </div>
  );
}
