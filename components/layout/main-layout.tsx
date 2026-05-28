import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />
      <main>{children}</main>
    </div>
  );
}
