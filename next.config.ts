// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/color-combo-lottery" : "";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_CONTACT_LINK: "https://forms.gle/2jK87DQ44CS2pfBR9",
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_GITHUB_REPOSITORY_URL: "https://github.com/izzet-mtg/color-combo-lottery/",
    NEXT_PUBLIC_SITE_URL: "https://izzet-mtg.github.io/color-combo-lottery",
  },
  assetPrefix: basePath,
  basePath,
};

export default nextConfig;
