import { Cell, Cord, Direction, hasWall, isValidGrid, ALL_DIRS, OnUpdate } from './maze-generator';

export type CanvasOrNull = HTMLCanvasElement | null;
export type Context = CanvasRenderingContext2D;
const PADDING = 10;
const BORDER_COLOR = '#000000';
const INDICATOR_COLOR = '#FF0000';
let padX = 0;
let padY = 0;
let gridSize = -1;
let cellSize = -1;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getContext(canvas?: CanvasOrNull) {
  if (!canvas) throw new Error('Canvas is not defined.');
  const { height, width } = canvas;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Unable to get context.');
  return { context, height, width };
}

function rCord(r: number) {
  return padY + r * cellSize;
}

function cCord(c: number) {
  return padX + c * cellSize;
}

function initDimension(width: number, height: number, grid: Cell[][]): void {
  gridSize = Math.min(width, height) - 2 * PADDING;
  cellSize = gridSize / grid.length;
  padY = (height - gridSize) / 2;
  padX = (width - gridSize) / 2;
}

function drawBoundary(context: Context) {
  if (gridSize > 0) {
    context.beginPath();
    context.moveTo(padX, padY);
    context.lineTo(padX + gridSize, padY);
    context.lineTo(padX + gridSize, padY + gridSize);
    context.lineTo(padX, padY + gridSize);
    context.closePath();
    context.stroke();
  }
}

function drawWall(context: Context, cord: Cord, dir: Direction) {
  const { r, c } = cord;
  context.beginPath();
  context.strokeStyle = BORDER_COLOR;
  if (dir === Direction.TOP || dir === Direction.LEFT) context.moveTo(rCord(r), cCord(c));
  else context.moveTo(rCord(r + 1), cCord(c + 1));
  if (dir === Direction.TOP || dir === Direction.RIGHT) context.lineTo(rCord(r), cCord(c + 1));
  else context.lineTo(rCord(r + 1), cCord(c));
  context.closePath();
  context.stroke();
}

function drawCell(context: Context, cell: Cell, cord: Cord) {
  const { r, c } = cord;
  context.clearRect(rCord(r), cCord(c), gridSize, gridSize);
  for (const dir of ALL_DIRS) {
    if (hasWall(cell, dir)) {
      drawWall(context, { r, c }, dir);
    }
  }
}

function drawIndicatorSquare(context: Context, cord: Cord) {
  context.beginPath();
  context.fillStyle = INDICATOR_COLOR;
  const { r, c } = cord;
  context.moveTo(rCord(r) + 1, cCord(c) + 1);
  context.lineTo(rCord(r) + 1, cCord(c + 1) - 1);
  context.lineTo(rCord(r + 1) - 1, cCord(c + 1) - 1);
  context.lineTo(rCord(r + 1) - 1, cCord(c) + 1);
  context.closePath();
  context.fill();
}

export function clearCanvas(canvas?: CanvasOrNull): void {
  const { context, height, width } = getContext(canvas);
  context.clearRect(0, 0, width, height);
}

export default function drawGrid(canvas?: CanvasOrNull, grid?: Cell[][]): void {
  if (!grid || !isValidGrid(grid)) throw new Error('Grid not valid');
  const { context, height, width } = getContext(canvas);
  initDimension(width, height, grid);
  context.clearRect(0, 0, width, height);
  drawBoundary(context);
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      drawCell(context, grid[r][c], { r, c });
    }
  }
}

export function getOnUpdate(canvas: CanvasOrNull, delay = 50): OnUpdate {
  const { context } = getContext(canvas);
  return async (grid: Cell[][], cord: Cord) => {
    drawGrid(canvas, grid);
    drawIndicatorSquare(context, cord);
    await sleep(delay);
  };
}
