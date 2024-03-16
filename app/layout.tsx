import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Canva Clone",
  description: "AI Powered Image App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("fontIBMPlex antialiased", IBMPlex.variable)}>{children}</body>
    </html>
  );
}
