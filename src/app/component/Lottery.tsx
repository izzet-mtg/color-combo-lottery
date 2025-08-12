'use client';

// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { useState } from "react";
import { chooseCombo, Combo } from "@/lib/color";

export type LotteryProps = {
  onClick?: (combo: Combo) => void;
}
export const Lottery = ({ onClick }: LotteryProps) => {
  const [combo, setCombo] = useState<Readonly<Combo>>(chooseCombo());
  return (
    <div>
      <p>{combo}</p>
      <button onClick={() => { const combo = chooseCombo(); setCombo(combo); onClick?.(combo); }}>再選択</button>
    </div>
  );
}

export default Lottery;