import { IDLE_CONTROL } from '../constants';
import { Cell, Control, Direction } from '../type';

export const ALL_DIRS_ARR = [Direction.TOP, Direction.RIGHT, Direction.DOWN, Direction.LEFT];
export const ALL_DIRS_CELL = 15; // 1111

export function getOPDir(dir: Direction): Direction {
  if (dir === Direction.TOP) return Direction.DOWN;
  if (dir === Direction.RIGHT) return Direction.LEFT;
  if (dir === Direction.DOWN) return Direction.TOP;
  return Direction.RIGHT;
}

export function getDirCordOffset(dir: Direction): number[] {
  if (dir === Direction.TOP) return [-1, 0];
  if (dir === Direction.RIGHT) return [0, 1];
  if (dir === Direction.DOWN) return [1, 0];
  return [0, -1];
}

export function hasDirection(cell: Cell, dir: Direction): boolean {
  const hasDir = (cell & dir) !== 0;
  return hasDir;
}

export function removeDir(dirCombo: number, dir: Direction): number {
  if (hasDirection(dirCombo, dir)) return dirCombo ^ dir;
  return dirCombo;
}

export function addDir(dirCombo: number, dir: Direction): number {
  return dirCombo | dir;
}

export default function getControlFromDir(dir: number): Control {
  let [dx, dy] = [0, 0];
  if (hasDirection(dir, Direction.TOP)) dy += 1;
  if (hasDirection(dir, Direction.DOWN)) dy -= 1;
  if (hasDirection(dir, Direction.RIGHT)) dx += 1;
  if (hasDirection(dir, Direction.LEFT)) dx -= 1;
  if (dy === 0 && dx === 0) return IDLE_CONTROL;
  const angle = Math.atan2(dy, dx);
  return { angle, magnitude: 1 };
}
