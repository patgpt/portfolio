import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import { fontDisplay, fontSans, geistMono, geistSans } from "@/app/fonts";
import { cn } from "@/app/lib/utils";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Next.js + Prismic Starter",
  description: "A starter template for Next.js and Prismic projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          fontDisplay.variable,
          fontSans.variable,
          "antialiased",
        )}
      >
        <ThemeProvider attribute="data-theme">
          <Header />
          <main className="flex min-h-screen flex-col bg-gradient-to-tr from-primary/20 via-accent/20 to-secondary/20 bg-[length:100%_100%] dark:from-primary/80 dark:via-accent/80 dark:to-secondary/80">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
