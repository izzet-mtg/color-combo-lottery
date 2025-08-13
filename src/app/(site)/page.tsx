// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from "next";
import Lottery from "@/component/Lottery";

export const metadata: Metadata = {
  title: "ホーム",
  description: "Magic: the Gathering の色の組合わせをランダムに表示します",
  openGraph: {
    title: "ホーム",
    description: "Magic: the Gathering の色の組合わせをランダムに表示します",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    images: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
      type: "image/png",
      alt: "ロゴ",
      width: 1200,
      height: 630,
    },
  }
};

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <Lottery />
    </main>
  );
}
