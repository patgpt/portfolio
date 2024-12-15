import { Geist, Geist_Mono, Noto_Sans, Quicksand } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontDisplay = Quicksand({
  variable: "--font-display",
  subsets: ["latin"],
});

export { geistSans, geistMono, fontSans, fontDisplay };
