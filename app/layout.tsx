import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tactiflow",
  description: "Tactiflow web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
