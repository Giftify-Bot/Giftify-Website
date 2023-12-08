import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import Navbar from "@/components/Navbar";

import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
