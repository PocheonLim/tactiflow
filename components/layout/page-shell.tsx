import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div
      className={`mx-auto flex w-full max-w-6xl flex-col px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 ${className}`}
    >
      {children}
    </div>
  );
}
