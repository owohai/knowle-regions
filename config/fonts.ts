import { Fira_Code as FontMono, Inter as FontSans, Cardo as GovSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const govSans = GovSans({
  subsets: ["latin"],
  weight: "700",
  variable: "--gov-sans",
});