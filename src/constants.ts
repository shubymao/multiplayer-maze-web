import { ToastPosition } from 'react-toastify';
import { Control, Cord, Direction, Link, StringMap } from './type';

const LINKS: Array<Link> = [
  { name: 'Home', url: 'https://shuby-mao.web.app/' },
  { name: 'Project Page', url: 'https://shuby-mao.web.app/projects/web-multiplayer-maze' },
  { name: 'Multiplayer Maze', url: '/online' },
  { name: 'Offline Maze', url: '/' },
  { name: 'Generator Demo', url: '/generator' }
];

export const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_firebase_apiKey,
  authDomain: process.env.REACT_APP_firebase_authDomain,
  databaseURL: process.env.REACT_APP_firebase_databaseURL,
  storageBucket: process.env.REACT_APP_firebase_storageBucket
};

const position: ToastPosition = 'top-right';

export const TOAST_CONFIG = {
  position,
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

export const KEY_MAP: StringMap = {
  ArrowLeft: Direction.LEFT,
  ArrowUp: Direction.TOP,
  ArrowRight: Direction.RIGHT,
  ArrowDown: Direction.DOWN
};

export const IDLE_CONTROL: Control = { magnitude: 0, angle: 0 };
export const ID_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const ID_LEN = 10;
export const PLAYER_RADIUS_TO_CELL_RATIO = 0.15;
export const MAX_SPEED = 0.05;
export const START_POS: Cord = { r: 0.5, c: 0.5 };
export const GRID_PADDING = 5;
export const START_COLOR = '#DC2626';
export const END_COLOR = '#10B981';
export const BORDER_COLOR = '#000000';
export const INDICATOR_COLOR = '#FF0000';
export const DEFAULT_PLAYER_COLOR = '#FBBF24';

export default LINKS;
