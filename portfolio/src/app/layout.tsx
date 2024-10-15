import { ActiveContentProvider } from "@/providers/ActiveContentProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentin Melia",
  description: "Portfolio de Valentin Melia",
  openGraph: {
    title: "Valentin Melia",
    description: "Portfolio de Valentin Melia",
    url: "https://portfolio-vaal34s-projects.vercel.app/",
    images: [
      {
        url: "https://portfolio-vaal34s-projects.vercel.app/favicon.ico",
        width: 800,
        height: 600,
        alt: "Description de l'image",
      },
    ],
    siteName: "Valentin Melia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ActiveContentProvider>
        <body className={`${inter.className} hide-scrollbar bg-background`}>
          {children}
        </body>
      </ActiveContentProvider>
    </html>
  );
}
