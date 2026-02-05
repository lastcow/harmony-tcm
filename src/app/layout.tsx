import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atlas Integrative Clinic | Traditional Chinese Medicine & Acupuncture",
  description: "Experience the profound healing wisdom of Traditional Chinese Medicine. Acupuncture, herbal medicine, cupping, and holistic therapies to restore balance in body, mind, and spirit.",
  keywords: ["Traditional Chinese Medicine", "TCM", "Acupuncture", "Herbal Medicine", "Cupping", "Moxibustion", "Tui Na", "Holistic Health", "Wellness", "San Francisco"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
