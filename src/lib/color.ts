// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

// シンボル
export const WHITE_SYMBOL = "{W}";
export type WhiteSymbol = typeof WHITE_SYMBOL;
export const BLUE_SYMBOL = "{U}";
export type BlueSymbol = typeof BLUE_SYMBOL;
export const BLACK_SYMBOL = "{B}";
export type BlackSymbol = typeof BLACK_SYMBOL;
export const RED_SYMBOL = "{R}";
export type RedSymbol = typeof RED_SYMBOL;
export const GREEN_SYMBOL = "{G}";
export type GreenSymbol = typeof GREEN_SYMBOL;
export type ColorledSymbol = WhiteSymbol | BlueSymbol | BlackSymbol | RedSymbol | GreenSymbol;
export const COLORLESS_SYMBOL = "{C}";
export type ColorlessSymbol = typeof COLORLESS_SYMBOL;
export type ColorSymbol = ColorledSymbol | ColorlessSymbol;

// 色の組合わせ
// 無色
export type Colorless = [ColorlessSymbol]
export const COLORLESS: Colorless = [COLORLESS_SYMBOL];

// 単色
export type MonoWhite = [WhiteSymbol];
export const MONO_WHITE: MonoWhite = [WHITE_SYMBOL];
export type MonoBlue = [BlueSymbol];
export const MONO_BLUE: MonoBlue = [BLUE_SYMBOL];
export type MonoBlack = [BlackSymbol];
export const MONO_BLACK: MonoBlack = [BLACK_SYMBOL];
export type MonoRed = [RedSymbol];
export const MONO_RED: MonoRed = [RED_SYMBOL];
export type MonoGreen = [GreenSymbol];
export const MONO_GREEN: MonoGreen = [GREEN_SYMBOL];
export type MonoColor = MonoWhite | MonoBlue | MonoBlack | MonoRed | MonoGreen;
// 2色(友好色)
export type Azorius = [WhiteSymbol, BlueSymbol];
export const AZORIUS: Azorius = [WHITE_SYMBOL, BLUE_SYMBOL];
export type Dimir = [BlueSymbol, BlackSymbol];
export const DIMIR: Dimir = [BLUE_SYMBOL, BLACK_SYMBOL];
export type Rakdos = [BlackSymbol, RedSymbol];
export const RAKDOS: Rakdos = [BLACK_SYMBOL, RED_SYMBOL];
export type Gruul = [RedSymbol, GreenSymbol];
export const GRUUL: Gruul = [RED_SYMBOL, GREEN_SYMBOL];
export type Selesnya = [GreenSymbol, WhiteSymbol];
export const SELESNYA: Selesnya = [GREEN_SYMBOL, WHITE_SYMBOL];
export type FriendlyColor = Azorius | Dimir | Rakdos | Gruul | Selesnya;
// 2色(対抗色)
export type Orzhov = [WhiteSymbol, BlackSymbol];
export const ORZHOV: Orzhov = [WHITE_SYMBOL, BLACK_SYMBOL];
export type Izzet = [BlueSymbol,RedSymbol];
export const IZZET: Izzet = [BLUE_SYMBOL, RED_SYMBOL];
export type Golgari = [BlackSymbol, GreenSymbol];
export const GOLGARI: Golgari = [BLACK_SYMBOL, GREEN_SYMBOL];
export type Boros = [WhiteSymbol, RedSymbol];
export const BOROS: Boros = [WHITE_SYMBOL, RED_SYMBOL];
export type Simic = [BlueSymbol, GreenSymbol];
export const SIMIC: Simic = [BLUE_SYMBOL, GREEN_SYMBOL];
// 3色(友好色)
export type Esper = [WhiteSymbol, BlueSymbol, BlackSymbol];
export const ESPER: Esper = [WHITE_SYMBOL, BLUE_SYMBOL, BLACK_SYMBOL];
export type Grixis = [BlueSymbol, BlackSymbol, RedSymbol];
export const GRIXIS: Grixis = [BLUE_SYMBOL, BLACK_SYMBOL, RED_SYMBOL];
export type Jund = [BlackSymbol, RedSymbol, GreenSymbol];
export const JUND: Jund = [BLACK_SYMBOL, RED_SYMBOL, GREEN_SYMBOL];
export type Naya = [RedSymbol, GreenSymbol, WhiteSymbol];
export const NAYA: Naya = [RED_SYMBOL, GREEN_SYMBOL, WHITE_SYMBOL];
export type Bant = [GreenSymbol, WhiteSymbol, BlueSymbol];
export const BANT: Bant = [GREEN_SYMBOL, WHITE_SYMBOL, BLUE_SYMBOL];
// 3色(対抗色)
export type Abzan = [WhiteSymbol, BlackSymbol, GreenSymbol];
export const ABZAN: Abzan = [WHITE_SYMBOL, BLACK_SYMBOL, GREEN_SYMBOL];
export type Jeskai = [BlueSymbol, RedSymbol, WhiteSymbol];
export const JESKAI: Jeskai = [BLUE_SYMBOL, RED_SYMBOL, WHITE_SYMBOL];
export type Sultai = [BlackSymbol, GreenSymbol, BlueSymbol];
export const SULTAI: Sultai = [BLACK_SYMBOL, GREEN_SYMBOL, BLUE_SYMBOL];
export type Mardu = [RedSymbol, WhiteSymbol, BlackSymbol];
export const MARDU: Mardu = [RED_SYMBOL, WHITE_SYMBOL, BLACK_SYMBOL];
export type Temur = [GreenSymbol, BlueSymbol, RedSymbol];
export const TEMUR: Temur = [GREEN_SYMBOL, BLUE_SYMBOL, RED_SYMBOL];
// 4色
export type WUBR = [WhiteSymbol, BlueSymbol, BlackSymbol, RedSymbol];
export const WUBR: WUBR = [WHITE_SYMBOL, BLUE_SYMBOL, BLACK_SYMBOL, RED_SYMBOL];
export type UBRG = [BlueSymbol, BlackSymbol, RedSymbol, GreenSymbol];
export const UBRG: UBRG = [BLUE_SYMBOL, BLACK_SYMBOL, RED_SYMBOL, GREEN_SYMBOL];
export type BRGW = [BlackSymbol, RedSymbol, GreenSymbol, WhiteSymbol];
export const BRGW: BRGW = [BLACK_SYMBOL, RED_SYMBOL, GREEN_SYMBOL, WHITE_SYMBOL];
export type RGWU = [RedSymbol, GreenSymbol, WhiteSymbol, BlueSymbol];
export const RGWU: RGWU = [RED_SYMBOL, GREEN_SYMBOL, WHITE_SYMBOL, BLUE_SYMBOL];
export type GWUB = [GreenSymbol, WhiteSymbol, BlueSymbol, BlackSymbol];
export const GWUB: GWUB = [GREEN_SYMBOL, WHITE_SYMBOL, BLUE_SYMBOL, BLACK_SYMBOL];
// 5色
export type WUBRG = [WhiteSymbol, BlueSymbol, BlackSymbol, RedSymbol, GreenSymbol];
export const WUBRG: WUBRG = [WHITE_SYMBOL, BLUE_SYMBOL, BLACK_SYMBOL, RED_SYMBOL, GREEN_SYMBOL];

export type Combo =
  // 無色
  | Colorless
  // 単色
  | MonoWhite | MonoBlue | MonoBlack | MonoRed | MonoGreen
  // 2色(友好色)
  | Azorius | Dimir | Rakdos | Gruul | Selesnya
  // 2色(対抗色)
  | Orzhov | Izzet | Golgari | Boros | Simic
  // 3色(友好色)
  | Esper | Grixis | Jund | Naya | Bant
  // 3色(対抗色)
  | Abzan | Jeskai | Sultai | Mardu | Temur
  // 4色
  | WUBR | UBRG | BRGW | RGWU | GWUB
  // 5色
  | WUBRG
  // 無色
  | Colorless

const combos: Combo[] = [
  // 無色
  COLORLESS,
  // 単色
  MONO_WHITE, MONO_BLUE, MONO_BLACK, MONO_RED, MONO_GREEN,
  // 2色(友好色)
  AZORIUS, DIMIR, RAKDOS, GRUUL, SELESNYA,
  // 2色(対抗色)
  ORZHOV, IZZET, GOLGARI, BOROS, SIMIC,
  // 3色(友好色)
  ESPER, GRIXIS, JUND, NAYA, BANT,
  // 3色(対抗色)
  ABZAN, JESKAI, SULTAI, MARDU, TEMUR,
  // 4色
  WUBR, UBRG, BRGW, RGWU, GWUB,
  // 5色
  WUBRG,
];
export const chooseCombo = (): Combo => {
  return combos[Math.floor(Math.random() * combos.length)];
}
