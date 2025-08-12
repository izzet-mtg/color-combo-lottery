'use client';

// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { useState } from "react";
import { chooseCombo, Combo } from "@/lib/color";
import useSymbol from "@/hook/useSymbol";

export type LotteryProps = {
  onClick?: (combo: Combo) => void;
  onError?: (error: any) => void;
}
export const Lottery = ({ onClick, onError }: LotteryProps) => {
  const [combo, setCombo] = useState<Combo>(chooseCombo());
  const { symbols, error: useSymbolError } = useSymbol();
  if (useSymbolError) {
    onError?.(useSymbolError);
    return (<div></div>);
  }
  return (
    <div>
      {symbols && (
        <div className="p-8 flex justify-center flex-col gap-8">
          <div className="flex gap-1 justify-center">
            {combo.map((symbol, index) => (
              <img
                key={`color-symbol${index}`}
                src={symbols[symbol]}
                className="w-16 border border-gray-500 dark:border-0 rounded-full shadow-sm"
              />
            ))}
          </div>
          <button
            className="rounded-full px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-medium shadow-lg max-w-xs mx-auto"
            onClick={() => { const combo = chooseCombo(); setCombo(combo); onClick?.(combo); }}
          >
            再選択
          </button>
        </div>
      )}
    </div>
  );
}

export default Lottery;