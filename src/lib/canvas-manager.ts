import { hasDirection, isValidGrid, ALL_DIRS_ARR } from './maze-generator';
import { Direction, Cell, Cord, OnUpdate, CanvasOrNull, Context } from '../type';

const PADDING = 10;
const BORDER_COLOR = '#000000';
const INDICATOR_COLOR = '#FF0000';
const DEFAULT_PLAYER_COLOR = '#';
const TWO_PI = 2 * Math.PI;
const DEFAULT_STOKE_WIDTH = 1;
const PLAYER_STOKE_WIDTH = 2;

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

export function getOnUpdate(canvasManager: CanvasManager, delay = 50): OnUpdate {
  const cm = canvasManager;
  return async (grid: Cell[][], cord: Cord) => {
    cm.drawGrid(grid);
    cm.drawIndicatorSquare(cord);
    await sleep(delay);
  };
}

export default class CanvasManager {
  private ctx: Context;

  private width: number;

  private height: number;

  private padX = 0;

  private padY = 0;

  private gridSize = -1;

  private cellSize = -1;

  private playerRadius = -1;

  constructor(canvas: CanvasOrNull) {
    const { context, height, width } = getContext(canvas);
    this.ctx = context;
    this.width = width;
    this.height = height;
  }

  public clearCanvas = (): void => {
    this.ctx.clearRect(0, 0, this.width, this.height);
  };

  public drawGrid = (grid?: Cell[][]): void => {
    if (!grid || !isValidGrid(grid)) throw new Error('Grid not valid');
    this.initDimension(this.width, this.height, grid);
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawBoundary();
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        this.drawCell(grid[r][c], { r, c });
      }
    }
  };

  public drawIndicatorSquare = (cord: Cord): void => {
    this.ctx.beginPath();
    this.ctx.fillStyle = INDICATOR_COLOR;
    const { r, c } = cord;
    this.ctx.moveTo(this.cCord(c) + 1, this.rCord(r) + 1);
    this.ctx.lineTo(this.cCord(c + 1) - 1, this.rCord(r) + 1);
    this.ctx.lineTo(this.cCord(c + 1) - 1, this.rCord(r + 1) - 1);
    this.ctx.lineTo(this.cCord(c) + 1, this.rCord(r + 1) - 1);
    this.ctx.closePath();
    this.ctx.fill();
  };

  public drawPlayer = (cord: Cord, color: string = DEFAULT_PLAYER_COLOR): void => {
    this.ctx.fillStyle = color;
    this.ctx.lineWidth = PLAYER_STOKE_WIDTH;
    this.drawCircle(cord, this.playerRadius);
  };

  private initDimension = (width: number, height: number, grid: Cell[][]): void => {
    this.gridSize = Math.min(width, height) - 2 * PADDING;
    this.cellSize = this.gridSize / grid.length;
    this.playerRadius = this.cellSize * 0.1;
    this.padY = (height - this.gridSize) / 2;
    this.padX = (width - this.gridSize) / 2;
  };

  private drawCircle = (cord: Cord, radius: number): void => {
    this.ctx.beginPath();
    const x = this.cCord(cord.c);
    const y = this.rCord(cord.r);
    this.ctx.arc(x, y, radius, 0, TWO_PI);
    this.ctx.fill();
    this.ctx.stroke();
  };

  private rCord = (r: number) => {
    return this.padY + r * this.cellSize;
  };

  private cCord = (c: number) => {
    return this.padX + c * this.cellSize;
  };

  private drawBoundary = (): void => {
    if (this.gridSize > 0) {
      this.ctx.lineWidth = DEFAULT_STOKE_WIDTH;
      this.ctx.strokeStyle = BORDER_COLOR;
      this.ctx.beginPath();
      this.ctx.moveTo(this.padX, this.padY);
      this.ctx.lineTo(this.padX + this.gridSize, this.padY);
      this.ctx.lineTo(this.padX + this.gridSize, this.padY + this.gridSize);
      this.ctx.lineTo(this.padX, this.padY + this.gridSize);
      this.ctx.closePath();
      this.ctx.stroke();
    }
  };

  private drawCell = (cell: Cell, cord: Cord): void => {
    for (const dir of ALL_DIRS_ARR) {
      if (hasDirection(cell, dir)) {
        this.drawWall(cord, dir);
      }
    }
  };

  private drawWall = (cord: Cord, dir: Direction): void => {
    const { r, c } = cord;
    this.ctx.beginPath();
    if (dir === Direction.TOP || dir === Direction.LEFT)
      this.ctx.moveTo(this.cCord(c), this.rCord(r));
    else this.ctx.moveTo(this.cCord(c + 1), this.rCord(r + 1));
    if (dir === Direction.TOP || dir === Direction.RIGHT)
      this.ctx.lineTo(this.cCord(c + 1), this.rCord(r));
    else this.ctx.lineTo(this.cCord(c), this.rCord(r + 1));
    this.ctx.closePath();
    this.ctx.stroke();
  };
}
