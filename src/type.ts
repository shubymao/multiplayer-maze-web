import { KeyboardEventHandler, MutableRefObject } from 'react';

// eslint-disable-next-line
export enum Direction {
  TOP = 1, // 0001
  RIGHT = 2, // 0010
  DOWN = 4, // 0100
  LEFT = 8 // 1000
}
export type Link = { name: string; url: string };
export type Cell = number;
export type Cord = { r: number; c: number };
export type OnUpdate = (grid: Cell[][], cord: Cord) => Promise<void>;
export type Config = { userSeed?: number; onUpdate?: OnUpdate };
export type CanvasOrNull = HTMLCanvasElement | null;
export type Ctx = CanvasRenderingContext2D;
export type Control = { magnitude: number; angle: number };
export type Player = { id: string; location: Cord };
export type RRef<T> = MutableRefObject<T>;
export type kHandler<T> = KeyboardEventHandler<T>;
export type Context = { ctx: Ctx; width: number; height: number };
export type CallBack = (success?: boolean, message?: string) => void;
export interface StringMap {
  [key: string]: number;
}
