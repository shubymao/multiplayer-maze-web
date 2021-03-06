import { isValidGrid } from './maze-generator';
import { Direction, Cell, Cord, CanvasOrNull, Ctx, OnUpdate } from '../type';
import { hasDirection, ALL_DIRS_ARR } from './direction-util';
import {
  BORDER_COLOR,
  DEFAULT_PLAYER_COLOR,
  END_COLOR,
  GRID_PADDING,
  INDICATOR_COLOR,
  PLAYER_RADIUS_TO_CELL_RATIO,
  START_COLOR
} from '../constants';
import { getContext } from './misc-util';

const TWO_PI = 2 * Math.PI;
const DEFAULT_STOKE_WIDTH = 1;
const PLAYER_STOKE_WIDTH = 2;
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
  private canvas: CanvasOrNull;

  private ctx: Ctx;

  private width: number;

  private height: number;

  private padX = 0;

  private padY = 0;

  private gridSize = -1;

  private cellSize = -1;

  private playerRadius = -1;

  constructor(canvas: CanvasOrNull) {
    this.canvas = canvas;
    const { ctx, height, width } = getContext(this.canvas);
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }

  public refreshContext(): void {
    const { ctx, height, width } = getContext(this.canvas);
    this.ctx = ctx;
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
    this.ctx.fillStyle = INDICATOR_COLOR;
    this.drawSquare(cord);
    this.ctx.fill();
  };

  public drawStartFinish = (maze: number[][]): void => {
    this.ctx.fillStyle = START_COLOR;
    this.drawSquare({ r: 0, c: 0 });
    this.ctx.fill();
    this.ctx.fillStyle = END_COLOR;
    this.drawSquare({ r: maze.length - 1, c: maze.length - 1 });
    this.ctx.fill();
  };

  public drawPlayer = (cord: Cord, color: string = DEFAULT_PLAYER_COLOR): void => {
    this.ctx.fillStyle = color;
    this.ctx.lineWidth = PLAYER_STOKE_WIDTH;
    this.drawCircle(cord, this.playerRadius);
    this.ctx.fill();
    this.ctx.stroke();
  };

  private initDimension = (width: number, height: number, grid: Cell[][]): void => {
    this.gridSize = Math.min(width, height) - 2 * GRID_PADDING;
    this.cellSize = this.gridSize / grid.length;
    this.playerRadius = this.cellSize * PLAYER_RADIUS_TO_CELL_RATIO;
    this.padY = (height - this.gridSize) / 2;
    this.padX = (width - this.gridSize) / 2;
  };

  private drawCircle = (cord: Cord, radius: number): void => {
    this.ctx.beginPath();
    const x = this.cCord(cord.c);
    const y = this.rCord(cord.r);
    this.ctx.arc(x, y, radius, 0, TWO_PI);
    this.ctx.closePath();
  };

  private drawSquare = (cord: Cord): void => {
    const { r, c } = cord;
    this.ctx.beginPath();
    this.ctx.moveTo(this.cCord(c) + 1, this.rCord(r) + 1);
    this.ctx.lineTo(this.cCord(c + 1) - 1, this.rCord(r) + 1);
    this.ctx.lineTo(this.cCord(c + 1) - 1, this.rCord(r + 1) - 1);
    this.ctx.lineTo(this.cCord(c) + 1, this.rCord(r + 1) - 1);
    this.ctx.closePath();
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
