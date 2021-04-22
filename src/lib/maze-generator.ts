// eslint-disable-next-line no-shadow
export enum Direction {
  TOP = 1, // 0001
  RIGHT = 2, // 0010
  DOWN = 4, // 0100
  LEFT = 8 // 1000
}
export type Cell = number;
export type Cord = { r: number; c: number };
export type OnUpdate = (grid: Cell[][], cord: Cord) => Promise<void>;
export type Config = { userSeed?: number; onUpdate?: OnUpdate };
export const START_CORD = { r: 0, c: 0 };
export const ALL_DIRS = [Direction.TOP, Direction.RIGHT, Direction.DOWN, Direction.LEFT];
const ALL_WALL = 15; // 1111
let globalSeed: number = Math.random() * 1e9;
let maze: Cell[][];
let seen: boolean[][];

export function isValidGrid(grid?: Cell[][]): boolean {
  if (!grid) return false;
  if (grid.length === 0) return false;
  const size = grid.length;
  const col = grid.reduce((prev, row) => {
    if (!row || row.length !== prev) return -1;
    return prev;
  }, size);
  if (col === -1) return false;
  return true;
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

export function getRandomSeed(): number {
  return Math.floor(Math.random() * 1e9);
}

function setSeed(inputSeed?: number) {
  if (inputSeed) globalSeed = inputSeed;
  else globalSeed = Math.random() * 1e9;
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

export function isVisited(cord: Cord): boolean {
  const { r, c } = cord;
  return seen[r][c];
}

export function visit(cord: Cord): void {
  const { r, c } = cord;
  seen[r][c] = true;
}

async function depthFirstSearch(cord: Cord, update?: OnUpdate): Promise<void> {
  const dirs = getDirs();
  visit(cord);
  if (update) await update(maze, cord);
  for (const dir of dirs) {
    const nextCord = getNextCord(cord, dir);
    if (!isOutOfBound(maze, nextCord) && !isVisited(nextCord)) {
      breakWall(maze, cord, dir);
      breakWall(maze, nextCord, getOPDir(dir));
      await depthFirstSearch(nextCord, update);
    }
  }
}

export async function generateMaze(size: number, params: Config = {}): Promise<Cell[][]> {
  const { userSeed, onUpdate } = params;
  maze = create2DArray<Cell>(size, ALL_WALL);
  seen = create2DArray<boolean>(size, false);
  setSeed(userSeed);
  await depthFirstSearch(START_CORD, onUpdate);
  return maze;
}
