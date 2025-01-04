import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { fontDisplay, fontSans, geistMono, geistSans } from "@/app/fonts";
import { cn } from "@/app/lib/utils";
import { BackToTop } from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
          "font-sans antialiased",
        )}
      >
        <ThemeProvider attribute="data-theme">
          <Header />
          <main className="flex min-h-screen flex-col bg-gradient-to-tr from-primary/20 via-accent/20 to-secondary/20 bg-[length:100%_100%] font-sans text-base-content dark:from-primary/80 dark:via-secondary/80 dark:to-secondary/80">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
