'use client';

// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { useState } from "react";
import { chooseCombo, Combo } from "@/lib/color";
import useSymbol from "@/hook/useSymbol";
import ErrorDialog from "@/component/ErrorDialog";

export type LotteryProps = {
  onClick?: (combo: Combo) => void;
}
export const Lottery = ({ onClick }: LotteryProps) => {
  const [combo, setCombo] = useState<Combo>(chooseCombo());
  const { symbols, error: useSymbolError } = useSymbol();
  const [error, setError] = useState<Error | undefined>(useSymbolError);
  return (
    <div>
      {symbols && (
        <div className="p-8 flex justify-center flex-col gap-8">
          <div className="flex gap-1 justify-center">
            {combo.map((symbol, index) => (
              <img
                key={`color-symbol${index}`}
                src={symbols[symbol]}
                alt={symbol}
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
      {error && (
        <ErrorDialog onClose={() => setError(undefined)}>
          <p>以下の情報を連絡先から管理者に送信してください</p>
          <p>(連絡先: {process.env.NEXT_PUBLIC_CONTACT_LINK})</p>
          <div className='p-4'>
            <div className="bg-gray-100 text-gray-800 text-sm p-4 rounded-md border border-gray-300 overflow-x-auto whitespace-pre-wrap">
              <p className='font-bold'>エラー内容: {`${error}`}</p>
            </div>
          </div>
        </ErrorDialog>
      )}
    </div>
  );
}

export default Lottery;