import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesDemo from "@/animations/particle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentin Melia",
  description: "Portfolio de Valentin Melia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr en">
      <body className={`bg-[#E5ECF4] ${inter.className}`}>{children}</body>
    </html>
  );
}
