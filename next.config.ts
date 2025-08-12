// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_SITE_URL: "https://izzet-mtg.github.io/color-combo-lottery",
  }
};

export default nextConfig;
