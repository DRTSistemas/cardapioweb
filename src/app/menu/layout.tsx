import React from "react";

interface MenuLayoutProps {
  children: React.ReactNode;
}

export default function MenuLayout({ children }: MenuLayoutProps) {
  return <div className="min-h-screen flex-1">{children}</div>;
}
