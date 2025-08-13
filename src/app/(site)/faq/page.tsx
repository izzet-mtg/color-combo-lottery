// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { PropsWithChildren } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "よくある質問とその回答集です",
  openGraph: {
    title: "FAQ",
    description: "よくある質問とその回答集です",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/faq`,
    images: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
      type: "image/png",
      alt: "ロゴ",
      width: 1200,
      height: 630,
    },
  },
};

const Question = ({ children }: PropsWithChildren) => (
  <>
    <h2 className="font-bold">Q. {children}</h2>
    <hr />
  </>
);

const Answer = ({ children }: PropsWithChildren) => (
  <div className="flex gap-2">
    <p>A.</p>
    <div>
      {children}
    </div>
  </div>
);

const Section = ({ children }: PropsWithChildren) => (
  <div className="p-4 flex flex-col gap-2">
    {children}
  </div>
);

export default function Faq() {
  return (
    <main className="max-w-3xl">
      <h1 className="text-2xl font-extrabold pb-4">よくある質問と回答</h1>
      <Section>
        <Question>これは何？</Question>
        <Answer>
          ランダムに <a href="https://mtg-jp.com/">Magic: the Gathering</a> の色の組合わせを表示します。
          利用想定としては友人や様々な人と本ページで表示される色の組合わせを使って統率者戦を遊んでもらうことです。
          ただし、当地の法律や条例、その他定められ法令と Wizards of the Coast 社が用意している<a href="https://company.wizards.com/ja/legal/fancontentpolicy">ファンコテンツポリシー</a>にしたがってご利用ください。
        </Answer>
      </Section>
      <Section>
        <Question>バグやエラーを見つけました。どちらに問い合わせればよいですか？</Question>
        <Answer>
          <a href={process.env.NEXT_PUBLIC_CONTACT_LINK}>問い合わせフォーム</a>に記載して送信いただければ大丈夫です。
          開発者の方は <a href={process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_URL}>GitHub リポジトリー</a>から Issue をたてていただければ対応しますし、 Pull Request を送信いただいても構いません。
          その際は行動規範をよく読んだ上で実施してください。
        </Answer>
      </Section>
    </main>
  );
}
