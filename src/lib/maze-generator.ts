export type Cell = number;
type Cord = { r: number; c: number };

// eslint-disable-next-line no-shadow
export enum Direction {
  TOP = 1, // 0001
  RIGHT = 2, // 0010
  DOWN = 4, // 0100
  LEFT = 8 // 1000
}

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

export const START_CORD = { r: 0, c: 0 };
const ALL_WALL = 15; // 1111

let globalSeed: number | undefined = Math.random() * 1e9;

export function hasWall(cell: Cell, dir: Direction): boolean {
  return (cell & dir) !== 0;
}

export function breakWall(grid: Cell[][], cord: Cord, dir: Direction): void {
  const { r, c } = cord;
  if (hasWall(grid[r][c], dir)) grid[r][c] ^= dir;
}

export function create2DArray<T>(size: number, val: T): T[][] {
  const arr = new Array<Array<T>>(size);
  return arr.fill([]).map(() => new Array<T>(size).fill(val));
}

function setSeed(inputSeed?: number) {
  globalSeed = inputSeed;
}

export function rand(): number {
  if (!globalSeed) return Math.random();
  const x = Math.sin(globalSeed) * 100000;
  globalSeed++;
  return x - Math.floor(x);
}

export function shuffle<T>(arr: T[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const ind = Math.floor(rand() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[ind];
    arr[ind] = temp;
  }
}

export function getDirs(): Direction[] {
  const dirs = [Direction.TOP, Direction.RIGHT, Direction.DOWN, Direction.LEFT];
  shuffle(dirs);
  return dirs;
}

export function getNextCord(cord: Cord, dir: Direction): Cord {
  const delta = getDirCordOffset(dir);
  if (!delta) throw new Error('Delta not found.');
  return { r: cord.r + delta[0], c: cord.c + delta[1] };
}

export function isOutOfBound(grid: Cell[][], cord: Cord): boolean {
  const { r, c } = cord;
  if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return true;
  return false;
}

export function isVisited(seen: boolean[][], cord: Cord): boolean {
  const { r, c } = cord;
  return seen[r][c];
}

export function visit(seen: boolean[][], cord: Cord): void {
  const { r, c } = cord;
  seen[r][c] = true;
}

function depthFirstSearch(grid: Cell[][], seen: boolean[][], cord: Cord): void {
  const dirs = getDirs();
  for (const dir of dirs) {
    const nextCord = getNextCord(cord, dir);
    if (!isOutOfBound(grid, nextCord) && !isVisited(seen, nextCord)) {
      visit(seen, nextCord);
      breakWall(grid, cord, dir);
      breakWall(grid, nextCord, getOPDir(dir));
      depthFirstSearch(grid, seen, nextCord);
    }
  }
}

export function generateMaze(size: number, userSeed?: number): Cell[][] {
  const maze = create2DArray<Cell>(size, ALL_WALL);
  const seen = create2DArray<boolean>(size, false);
  setSeed(userSeed);
  depthFirstSearch(maze, seen, START_CORD);
  return maze;
}
