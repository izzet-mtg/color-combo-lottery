// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/color-combo-lottery" : "";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: "https://izzet-mtg.github.io/color-combo-lottery",
  },
  assetPrefix: basePath,
  basePath,
};

export default nextConfig;
