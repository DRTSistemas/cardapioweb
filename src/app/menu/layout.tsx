import React from "react";

import { MenuNavMobile } from "./_components/menu-nav-mobile";

interface MenuLayoutProps {
  children: React.ReactNode;
}

export default function MenuLayout({ children }: MenuLayoutProps) {
  return (
    <div className="min-h-screen flex-1">
      {children}
      <MenuNavMobile />
    </div>
  );
}
