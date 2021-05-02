import CanvasManager from './canvas-manager';
import { generateMazeSync } from './maze-generator';
import { Cell, Cord, Direction, CanvasOrNull, Control, Player } from '../type';
import { hasDirection } from './direction-util';
import { generatePlayer, randomColorFromString } from './misc-util';
import { MAX_SPEED, PLAYER_RADIUS_TO_CELL_RATIO as MARGIN, START_POS } from '../constants';

export default class Game {
  private canvasManager: CanvasManager;

  private level: number;

  private maze: Cell[][];

  private gridSize: number;

  private player: Player;

  private opPositions?: Map<string, Cord>;

  private seed?: number;

  constructor(canvas: CanvasOrNull, level: number, seed?: number, pid?: string) {
    this.seed = seed;
    this.level = level;
    this.gridSize = this.level + 5;
    this.player = generatePlayer(START_POS, pid);
    this.maze = generateMazeSync(this.gridSize, this.seed);
    this.canvasManager = new CanvasManager(canvas);
  }

  public getMaze = (): Cell[][] => {
    return this.maze;
  };

  public getMyPlayer = (): Player => {
    return this.player;
  };

  public setOpponentsPos = (positions: Map<string, Cord>): void => {
    this.opPositions = positions;
  };

  public performMove = (control: Control): void => {
    const { magnitude, angle } = control;
    let nr = this.player.location.r;
    let nc = this.player.location.c;
    nr += -MAX_SPEED * magnitude * Math.sin(angle);
    nc += MAX_SPEED * magnitude * Math.cos(angle);
    this.player.location = this.getBoundedCord(nr, nc);
  };

  private getBoundedCord = (nr: number, nc: number): Cord => {
    const { r, c } = this.player.location;
    const [tr, tc] = [Math.floor(r), Math.floor(c)];
    const cell = this.maze[tr][tc];
    if (hasDirection(cell, Direction.TOP)) nr = Math.max(tr + MARGIN, nr);
    if (hasDirection(cell, Direction.DOWN)) nr = Math.min(tr + 1 - MARGIN, nr);
    if (hasDirection(cell, Direction.LEFT)) nc = Math.max(tc + MARGIN, nc);
    if (hasDirection(cell, Direction.RIGHT)) nc = Math.min(tc + 1 - MARGIN, nc);
    return { r: nr, c: nc };
  };

  public checkWin = (): boolean => {
    const dr = Math.abs(this.player.location.r - (this.gridSize - 0.5));
    const dc = Math.abs(this.player.location.c - (this.gridSize - 0.5));
    return dr <= 0.5 && dc <= 0.5;
  };

  public renderGame = (): void => {
    this.canvasManager.refreshContext();
    this.canvasManager.drawGrid(this.maze);
    this.canvasManager.drawStartFinish(this.maze);
    this.opPositions?.forEach((pos, id) =>
      this.canvasManager.drawPlayer(pos, randomColorFromString(id))
    );
    const { location, id } = this.player;
    this.canvasManager.drawPlayer(location, randomColorFromString(id));
  };
}
