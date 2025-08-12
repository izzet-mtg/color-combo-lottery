// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Footer from "@/component/Footer";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    default: "カラーコンボ宝くじ",
    template: "%s | カラーコンボ宝くじ"
  },
  description: "Magic: the Gathering の色の組合わせをランダムに表示します",
  openGraph: {
    title: {
      default: "カラーコンボ宝くじ",
      template: "%s | カラーコンボ宝くじ"
    },
    description: "Magic: the Gathering の色の組合わせをランダムに表示します",
    siteName: "カラーコンボ宝くじ",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
      }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansJp.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="flex-grow w-full flex items-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
