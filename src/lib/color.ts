// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

// シンボル
export const WHITE = "{W}";
export type White = typeof WHITE;
export const BLUE = "{U}";
export type Blue = typeof BLUE;
export const BLACK = "{B}";
export type Black = typeof BLACK;
export const RED = "{R}";
export type Red = typeof RED;
export const GREEN = "{G}";
export type Green = typeof GREEN;
export type Colorled = White | Blue | Black | Red | Green;
export const COLORLESS = "{C}";
export type Colorless = typeof COLORLESS;
export type ColorSymbol = Colorled | Colorless;

// モノカラー
export type MonoWhite = [White];
export const MONO_WHITE: Readonly<MonoWhite> = [WHITE];
export type MonoBlue = [Blue];
export const MONO_BLUE: Readonly<MonoBlue> = [BLUE];
export type MonoBlack = [Black];
export const MONO_BLACK: Readonly<MonoBlack> = [BLACK];
export type MonoRed = [Red];
export const MONO_RED: Readonly<MonoRed> = [RED];
export type MonoGreen = [Green];
export const MONO_GREEN: Readonly<MonoGreen> = [GREEN];
export type MonoColor = MonoWhite | MonoBlue | MonoBlack | MonoRed | MonoGreen;
// 2色(友好色)
export type Azorius = [White, Blue];
export const AZORIUS: Readonly<Azorius> = [WHITE, BLUE];
export type Dimir = [Blue, Black];
export const DIMIR: Readonly<Dimir> = [BLUE, BLACK];
export type Rakdos = [Black, Red];
export const RAKDOS: Readonly<Rakdos> = [BLACK, RED];
export type Gruul = [Red, Green];
export const GRUUL: Readonly<Gruul> = [RED, GREEN];
export type Selesnya = [Green, White];
export const SELESNYA: Readonly<Selesnya> = [GREEN, WHITE];
export type FriendlyColor = Azorius | Dimir | Rakdos | Gruul | Selesnya;
// 2色(対抗色)
export type Orzhov = [White, Black];
export const ORZHOV: Readonly<Orzhov> = [WHITE, BLACK];
export type Izzet = [Blue,Red];
export const IZZET: Readonly<Izzet> = [BLUE, RED];
export type Golgari = [Black, Green];
export const GOLGARI: Readonly<Golgari> = [BLACK, GREEN];
export type Boros = [White, Red];
export const BOROS: Readonly<Boros> = [WHITE, RED];
export type Simic = [Blue, Green];
export const SIMIC: Readonly<Simic> = [BLUE, GREEN];
// 3色(友好色)
export type Esper = [White, Blue, Black];
export const ESPER: Readonly<Esper> = [WHITE, BLUE, BLACK];
export type Grixis = [Blue, Black, Red];
export const GRIXIS: Readonly<Grixis> = [BLUE, BLACK, RED];
export type Jund = [Black, Red, Green];
export const JUNT: Readonly<Jund> = [BLACK, RED, GREEN];
export type Naya = [Red, Green, White];
export const NAYA: Readonly<Naya> = [RED, GREEN, WHITE];
export type Bant = [Green, White, Blue];
export const BANT: Readonly<Bant> = [GREEN, WHITE, BLUE];
// 3色(対抗色)
export type Abzan = [White, Black, Green];
export const ABZAN: Readonly<Abzan> = [WHITE, BLACK, GREEN];
export type Jeskai = [Blue, Red, White];
export const JESKAI: Readonly<Jeskai> = [BLUE, RED, WHITE];
export type Sultai = [Black, Green, Blue];
export const SULTAI: Readonly<Sultai> = [BLACK, GREEN, BLUE];
export type Mardu = [Red, White, Black];
export const MARDU: Readonly<Mardu> = [RED, WHITE, BLACK];
export type Temur = [Green, Blue, Red];
export const TEMUR: Readonly<Temur> = [GREEN, BLUE, RED];
// 4色
export type WUBR = [White, Blue, Black, Red];
export const WUBR: Readonly<WUBR> = [WHITE, BLUE, BLACK, RED];
export type UBRG = [Blue, Black, Red, Green];
export const UBRG: Readonly<UBRG> = [BLUE, BLACK, RED, GREEN];
export type BRGW = [Black, Red, Green, White];
export const BRGW: Readonly<BRGW> = [BLACK, RED, GREEN, WHITE];
export type RGWU = [Red, Green, White, Blue];
export const RGWU: Readonly<RGWU> = [RED, GREEN, WHITE, BLUE];
export type GWUB = [Green, White, Blue, Black];
export const GWUB: Readonly<GWUB> = [GREEN, WHITE, BLUE, BLACK];
// 5色
export type WUBRG = [White, Blue, Black, Red, Green];
export const WUBRG: Readonly<WUBRG> = [WHITE, BLUE, BLACK, RED, GREEN];
