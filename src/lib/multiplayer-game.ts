import firebase from 'firebase/app';
import 'firebase/database';
import { FIREBASE_CONFIG } from '../constants';
import { CanvasOrNull, Control, Cord } from '../type';
import Game from './game';

const REFRESH_THRESHOLD = 10;
firebase.initializeApp(FIREBASE_CONFIG);
type SnapShot = firebase.database.DataSnapshot;
type Reference = firebase.database.Reference;

export default class MultiplayerGame {
  private isWinner: boolean;

  private lastUpdatedPosition?: Cord;

  private opPositions: Map<string, Cord>;

  private refMap: Map<string, Reference>;

  private counter = 0;

  private game?: Game;

  private canvas: CanvasOrNull;

  private realTimeDB: firebase.database.Database;

  private onGameOver?: (win: boolean) => void;

  constructor(canvas: CanvasOrNull, onGameOver?: (win: boolean) => void) {
    this.isWinner = false;
    this.realTimeDB = firebase.database();
    this.canvas = canvas;
    this.opPositions = new Map();
    this.refMap = new Map();
    this.addSeedListener();
    this.addPlayersListener();
    this.onGameOver = onGameOver;
  }

  public performMove = (control: Control): void => {
    if (!this.game) return;
    this.counter++;
    this.game.performMove(control);
    if (this.counter >= REFRESH_THRESHOLD) {
      this.updateMyLocation();
      this.counter = 0;
    }
    if (this.game.checkWin()) {
      this.isWinner = true;
      this.setNewSeed();
    }
  };

  public render = (): void => {
    this.game?.renderGame();
  };

  public cleanUp = (): void => {
    if (this.game) this.removePlayer(this.game.getMyPlayer().id, true);
    this.refMap.forEach((ref) => ref.off());
  };

  private addSeedListener = () => {
    const path = '/seed';
    const seedRef = this.realTimeDB.ref(path);
    seedRef.on('value', (snapshot) => {
      const seed = snapshot.val();
      if (this.game && this.onGameOver) {
        this.onGameOver(this.isWinner);
      }
      this.initNewGame(seed);
    });
    this.refMap.set(path, seedRef);
  };

  private setNewSeed = () => {
    const newSeed = Math.floor(Math.random() * 1000000);
    this.realTimeDB.ref('/seed').set(newSeed);
  };

  private addPlayersListener = (): void => {
    const apiPath = '/players';
    const addPlayerRef = this.realTimeDB.ref(apiPath);
    addPlayerRef.on('child_added', this.onOtherPlayerJoin);
    this.refMap.set(`${apiPath}-added`, addPlayerRef);
    const removePlayerRef = this.realTimeDB.ref('/players');
    removePlayerRef.on('child_removed', this.onOtherPlayerLeave);
    this.refMap.set(`${apiPath}-removed`, removePlayerRef);
  };

  private onOtherPlayerJoin = (newChild: SnapShot) => {
    const playerId = newChild.key;
    if (playerId && playerId !== this.game?.getMyPlayer().id) {
      this.opPositions.set(playerId, newChild.val());
      const apiPath = `/players/${playerId}`;
      const playerRef = this.realTimeDB.ref(apiPath);
      playerRef.on('value', (player) => {
        this.opPositions.set(playerId, player.val());
      });
      this.refMap.set(apiPath, playerRef);
    }
  };

  private onOtherPlayerLeave = (removedChild: SnapShot) => {
    const playerId = removedChild.key;
    if (playerId && playerId !== this.game?.getMyPlayer().id) {
      this.removePlayer(playerId);
    }
  };

  private removePlayer = (playerId: string, del = false): void => {
    const apiPath = `/players/${playerId}`;
    this.opPositions.delete(playerId);
    this.refMap.delete(apiPath);
    this.realTimeDB.ref(apiPath).off();
    if (del) this.realTimeDB.ref(apiPath).remove();
  };

  private registerMyPlayer = (): void => {
    const myPlayer = this.game?.getMyPlayer();
    if (!myPlayer) return;
    this.realTimeDB.ref(`/players/${myPlayer.id}`).set(myPlayer.location);
  };

  private updateMyLocation = (): void => {
    const myPlayer = this.game?.getMyPlayer();
    if (!myPlayer) return;
    const newPos = myPlayer.location;
    const oldPos = this.lastUpdatedPosition;
    if (!oldPos || newPos.c !== oldPos.c || newPos.r !== oldPos.r) {
      this.realTimeDB.ref(`/players/${myPlayer.id}`).update(newPos);
      this.lastUpdatedPosition = newPos;
    }
  };

  private initNewGame = (seed: number) => {
    if (this.game) this.removePlayer(this.game.getMyPlayer().id, true);
    this.game = new Game(this.canvas, 10, seed);
    this.game.setOpponentsPos(this.opPositions);
    this.registerMyPlayer();
    this.isWinner = false;
  };
}
