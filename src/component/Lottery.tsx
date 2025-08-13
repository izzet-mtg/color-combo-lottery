'use client';

// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { useState } from "react";
import { ABZAN, AZORIUS, BANT, BOROS, BRGW, chooseCombo, COLORLESS, Combo, DIMIR, ESPER, GOLGARI, GRIXIS, GRUUL, GWUB, IZZET, JESKAI, JUND, MARDU, MONO_BLACK, MONO_BLUE, MONO_GREEN, MONO_RED, MONO_WHITE, NAYA, ORZHOV, RAKDOS, RGWU, SELESNYA, SIMIC, SULTAI, TEMUR, UBRG, WUBR, WUBRG } from "@/lib/color";
import Image from "next/image";
import useSymbol from "@/hook/useSymbol";
import ErrorDialog from "@/component/ErrorDialog";

const comboName = (combo: Combo): string => {
  const arrayEquals = (a: unknown[], b: unknown[]): boolean => {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((value, index) => value === b[index]);
  }
  const isColor = (targetCombo: Combo): boolean => {
    return arrayEquals(combo, targetCombo);
  }

  switch (true) {
    case isColor(COLORLESS):
      return "無色";
    case isColor(MONO_WHITE):
      return "白単";
    case isColor(MONO_BLUE):
      return "青単";
    case isColor(MONO_BLACK):
      return "黒単";
    case isColor(MONO_RED):
      return "赤単";
    case isColor(MONO_GREEN):
      return "緑単";
    case isColor(AZORIUS):
      return "アゾリウス";
    case isColor(DIMIR):
      return "ディミーア";
    case isColor(RAKDOS):
      return "ラクドス";
    case isColor(GRUUL):
      return "グルール";
    case isColor(SELESNYA):
      return "セレズニア";
    case isColor(ORZHOV):
      return "オルゾフ";
    case isColor(IZZET):
      return "イゼット";
    case isColor(GOLGARI):
      return "ゴルガリ";
    case isColor(BOROS):
      return "ボロス";
    case isColor(SIMIC):
      return "シミック";
    case isColor(ESPER):
      return "エスパー";
    case isColor(GRIXIS):
      return "グリクシス";
    case isColor(JUND):
      return "ジャンド";
    case isColor(NAYA):
      return "ナヤ";
    case isColor(BANT):
      return "バント";
    case isColor(ABZAN):
      return "アブザン";
    case isColor(JESKAI):
      return "ジェスカイ";
    case isColor(SULTAI):
      return "スゥルタイ";
    case isColor(MARDU):
      return "マルドゥ";
    case isColor(TEMUR):
      return "ティムール";
    case isColor(WUBR):
      return "WUBR";
    case isColor(UBRG):
      return "UBRG";
    case isColor(BRGW):
      return "BRGW";
    case isColor(RGWU):
      return "RGWU";
    case isColor(GWUB):
      return "GWUB";
    case isColor(WUBRG):
      return "WUBRG";
  }

  throw new Error("Unsupported Color name");
}

export const Lottery = () => {
  const [combo, setCombo] = useState<Combo>(chooseCombo());
  const { symbols, error: useSymbolError } = useSymbol();
  const [error, setError] = useState<Error | undefined>(useSymbolError);
  return (
    <div>
      {symbols && (
        <div className="p-8 flex justify-center flex-col gap-8">
          <p className="text-center font-bold">
            {comboName(combo)}
          </p>
          <div className="flex gap-1 justify-center">
            {combo.map((symbol, index) => (
              <Image
                key={`color-symbol${index}`}
                src={symbols[symbol]}
                alt={symbol}
                className="border border-gray-500 dark:border-0 rounded-full shadow-sm"
                width={64}
                height={64}
              />
            ))}
          </div>
          <button
            className="rounded-full px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-medium shadow-lg max-w-xs mx-auto"
            onClick={() => { setCombo(chooseCombo()); }}
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