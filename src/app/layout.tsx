import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: "SnowBase Studio | AI Development",
    template: "%s | SnowBase Studio"
  },
  description: "SnowBase Studio is a premium AI development company creating high-converting solutions.",
  keywords: "AI development, machine learning, data analytics, AI consulting, SnowBase Studio",
  authors: [{ name: "SnowBase Studio" }],
  creator: "SnowBase Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snowbasestudio.com",
    title: "SnowBase Studio | AI Development",
    description: "SnowBase Studio is a premium AI development company creating high-converting solutions.",
    siteName: "SnowBase Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnowBase Studio | AI Development",
    description: "SnowBase Studio is a premium AI development company creating high-converting solutions.",
    creator: "@snowbasestudio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}