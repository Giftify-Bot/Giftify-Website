import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});



export const metadata: Metadata = {
  metadataBase: new URL("https://giftifybot.vercel.app"),
  title: "Giftify Bot | Elevate Your Discord Server with Gifting Abilities",
  description: "Giftify Bot enhances your Discord server with advanced gifting features and offers various utility functions for server management.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://giftifybot.vercel.app",
    siteName: "Giftify Bot",
    title: "Giftify Bot | Elevate Your Discord Server with Gifting Abilities",
    description: "Giftify Bot enhances your Discord server with advanced gifting features and offers various utility functions for server management.",
    images: ["/favicon.ico"],
  },
  twitter: {
    card: "summary",
    images: ["/favicon.ico"],
    title: "Giftify Bot | Elevate Your Discord Server with Gifting Abilities",
    description: "Giftify Bot enhances your Discord server with advanced gifting features and offers various utility functions for server management.",
  },
  themeColor: "#000000",
  robots: { index: true, follow: true },
  keywords: [
    "Giftify",
    "Giftify Bot",
    "Discord Bot",
    "gifting",
    "server management",
    "advanced features",
    "Discord",
    "Discord Server",
    "Gifts",
    "Utility",
    "Server Enhancements",
  ],
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
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
        <Footer />
      </body>
    </html>
  );
}
