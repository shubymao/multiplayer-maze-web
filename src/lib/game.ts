import CanvasManager from './canvas-manager';
import { generateMazeSync } from './maze-generator';
import { Cell, Cord, Direction, CanvasOrNull, Control } from '../type';
import { hasDirection } from './direction-util';

const START_POS: Cord = { r: 0.5, c: 0.5 };
const MARGIN = 0.1;
const MAX_SPEED = 0.05;

export default class Game {
  private canvasManager: CanvasManager;

  private level: number;

  private maze: Cell[][];

  private gridSize: number;

  private position: Cord;

  private seed?: number;

  constructor(canvas: CanvasOrNull, level: number, seed?: number) {
    this.seed = seed;
    this.level = level;
    this.gridSize = this.level + 5;
    this.position = START_POS;
    this.maze = generateMazeSync(this.gridSize, this.seed);
    this.canvasManager = new CanvasManager(canvas);
  }

  public setLevel = (level: number): void => {
    this.level = level;
    this.gridSize += level + 5;
    this.position = START_POS;
    this.maze = generateMazeSync(this.gridSize, this.seed);
    this.renderGame();
  };

  public getMaze = (): Cell[][] => {
    return this.maze;
  };

  public getPosition = (): Cord => {
    return this.position;
  };

  public performMove = (control: Control): void => {
    const { magnitude, angle } = control;
    let nr = this.position.r;
    let nc = this.position.c;
    nr += -MAX_SPEED * magnitude * Math.sin(angle);
    nc += MAX_SPEED * magnitude * Math.cos(angle);
    this.position = this.getBoundedCord(nr, nc);
  };

  private getBoundedCord = (nr: number, nc: number): Cord => {
    const { r, c } = this.position;
    const [tr, tc] = [Math.floor(r), Math.floor(c)];
    const cell = this.maze[tr][tc];
    if (hasDirection(cell, Direction.TOP)) nr = Math.max(tr + MARGIN, nr);
    if (hasDirection(cell, Direction.DOWN)) nr = Math.min(tr + 1 - MARGIN, nr);
    if (hasDirection(cell, Direction.LEFT)) nc = Math.max(tc + MARGIN, nc);
    if (hasDirection(cell, Direction.RIGHT)) nc = Math.min(tc + 1 - MARGIN, nc);
    return { r: nr, c: nc };
  };

  public checkWin = (): boolean => {
    const dr = Math.abs(this.position.r - (this.gridSize - 0.5));
    const dc = Math.abs(this.position.c - (this.gridSize - 0.5));
    return dr <= 0.5 && dc <= 0.5;
  };

  public renderGame = (): void => {
    this.canvasManager.refreshContext();
    this.canvasManager.drawGrid(this.maze);
    this.canvasManager.drawStartFinish(this.maze);
    this.canvasManager.drawPlayer(this.position);
  };
}
