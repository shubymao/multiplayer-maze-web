import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { FIREBASE_CONFIG } from '../constants';
import { CallBack, CanvasOrNull, Control, Cord, Player } from '../type';
import Game from './game';

const REFRESH_THRESHOLD = 3;

type Auth = firebase.auth.Auth;
type SnapShot = firebase.database.DataSnapshot;
type Reference = firebase.database.Reference;

export default class MultiplayerGame {
  private isWinner: boolean;

  private myUID?: string;

  private lastUpdatedPosition?: Cord;

  private opPositions: Map<string, Cord>;

  private refMap: Map<string, Reference>;

  private counter = 0;

  private game!: Game;

  private canvas: CanvasOrNull;

  private realTimeDB!: firebase.database.Database;

  private onGameOver?: CallBack;

  private callBack?: CallBack;

  constructor(canvas: CanvasOrNull, onGameOver?: CallBack, callBack?: CallBack) {
    this.initFirebaseService();
    this.isWinner = false;
    this.canvas = canvas;
    this.opPositions = new Map();
    this.refMap = new Map();
    this.onGameOver = onGameOver;
    this.callBack = callBack;
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
    if (this.game) this.removePlayer(this.game.getMyPlayer());
    this.refMap.forEach((ref) => ref.off());
  };

  private initFirebaseService = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    const app = firebase.app(); // if already initialized, use that one
    this.realTimeDB = firebase.database(app);
    const auth = firebase.auth(app);
    this.signInAndInitListener(auth);
  };

  private signInAndInitListener = (auth: Auth) => {
    auth.signInAnonymously().catch(() => {
      if (this.callBack) this.callBack(false, 'Login failed. Please try refresh the page.');
    });
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (this.callBack) this.callBack(true, `Login Success.`);
        this.myUID = user.uid;
        this.addSeedListener();
        this.addPlayersListener();
      }
    });
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
      const apiPath = `/players/${playerId}`;
      this.opPositions.delete(playerId);
      this.refMap.delete(apiPath);
      this.realTimeDB.ref(apiPath).off();
    }
  };

  private registerPlayer = (player: Player): void => {
    this.realTimeDB.ref(`/players/${player.id}`).set(player.location);
  };

  private removePlayer = (player: Player): void => {
    this.realTimeDB.ref(`/players/${player.id}`).remove();
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
    this.game = new Game(this.canvas, 10, seed, this.myUID);
    this.game.setOpponentsPos(this.opPositions);
    const myPlayer = this.game.getMyPlayer();
    if (myPlayer) this.registerPlayer(myPlayer);
    this.isWinner = false;
  };
}
