'use client';

// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { useState } from "react";
import { chooseCombo, Combo } from "@/lib/color";
import useSymbol from "@/hook/useSymbol";

export type LotteryProps = {
  onClick?: (combo: Combo) => void;
}
export const Lottery = ({ onClick }: LotteryProps) => {
  const [combo, setCombo] = useState<Combo>(chooseCombo());
  const { symbols, error: useSymbolError } = useSymbol();
  return (
    <div>
      {symbols && (
        <div className="p-8">
          <div className="flex gap-1">
            {combo.map((symbol, index) => <img key={`color-symbol${index}`} src={symbols[symbol]} />)}
          </div>
          <button onClick={() => { const combo = chooseCombo(); setCombo(combo); onClick?.(combo); }}>再選択</button>
        </div>
      )}
    </div>
  );
}

export default Lottery;