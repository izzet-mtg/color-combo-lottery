// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import Image from "next/image";
import Lottery from "@/app/component/Lottery";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Lottery />
    </main>
  );
}
