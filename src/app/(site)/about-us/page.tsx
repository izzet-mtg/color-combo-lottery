// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "私達について",
  description: "本サイトを運用している私たちについて解説しています",
  openGraph: {
    title: "私達について",
    description: "本サイトを運用している私たちについて解説しています",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
    images: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
      type: "image/png",
      alt: "ロゴ",
      width: 1200,
      height: 630,
    },
  },
};

export default function AboutUs() {
  return (
    <main className="max-w-3xl">
      <div>
        <h1 className="text-2xl font-extrabold pb-4">私達について</h1>
        <p>
          本サイトは友人と<a href="https://mtg-jp.com/gameplay/format/commander.html">統率者戦</a>でランダムに統率者を選んで遊ぶために作られました。
          統率者を選ぶのではなく、機械にランダムに色を選択してもらうことで新しい発見や見たことのないシナジーといった体験を提供することを目的としています。
        </p>
        <p>
          是非色々な目的にご活用ください！
        </p>

        <h2 className="text-xl font-bold pt-10 pb-4">
          シンボル画像の取得先
        </h2>
        <p>
          シンボル画像は Scryfall から取得しています。
        </p>
      </div>
    </main>
  );
}