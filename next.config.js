// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

// GitHub Pages は独自ドメインを使わずに素で使うと `https://<org 名>.github.io/<リポジトリー名>/<ページ URL>` になる
// つまり、 `/` で飛んでしまうと `https://<org 名>.github.io/` に飛んでしまうが、本来飛びたいのは `https://<org 名>.github.io/<リポジトリー名>/` なはず
// そのため、 production 環境である GitHub Pages 環境であれば URL に `/<リポジトリー名>` をくっつけるようにする。
const basePath = process.env.NODE_ENV === "production" ? "/color-combo-lottery" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_CONTACT_LINK: "https://forms.gle/2jK87DQ44CS2pfBR9",
    NEXT_PUBLIC_GITHUB_REPOSITORY_URL: "https://github.com/izzet-mtg/color-combo-lottery/",
    // OGP 用
    NEXT_PUBLIC_SITE_URL: "https://izzet-mtg.github.io/color-combo-lottery",
  },
  assetPrefix: basePath,
  basePath: basePath,
};

module.exports = nextConfig;
