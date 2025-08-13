// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "本サイトのプライバシーポリシーを記載しています",
  openGraph: {
    title: "プライバシーポリシー",
    description: "本サイトのプライバシーポリシーを記載しています",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
    images: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
      type: "image/png",
      alt: "ロゴ",
      width: 1200,
      height: 630,
    },
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl">
      <div>
        <h1 className="text-2xl font-extrabold pb-4">プライバシーポリシー</h1>
        <p>
          本ページでは本サイトの個人情報の取り扱いに関して記載しています。
        </p>
        <p>
          本サイトは<a href="https://mtg-jp.com/gameplay/format/commander.html">統率者戦</a>において使用する統率者の色をランダムに表示します。
          そのため、こちらから基本的には何らかの個人情報を収集・保存することはありません。
          また、 Cookie の提供や収集、保存も基本的には実施してないはずです。
        </p>
        <p>
          ただし、サイトとしては <a href="https://docs.github.com/ja/pages/getting-started-with-github-pages/what-is-github-pages">GitHub Pages</a> というサービスを利用して運営しています。
          そのため、 GitHub Pages を提供する GitHub や Scryfall 側がデータの収集・保存をおこなっている可能性があります。
          気になる方はリンク先をご覧ください。
        </p>
      </div>
    </main>
  );
}