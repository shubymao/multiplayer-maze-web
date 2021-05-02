import { IDLE_CONTROL, ID_CHARSET, ID_LEN, KEY_MAP } from '../constants';
import { CanvasOrNull, Context, Control, Cord, kHandler, Player, RRef } from '../type';
import getControlFromDir, { addDir, removeDir } from './direction-util';

export default function getCanvasSize(bigScreen: boolean, midScreen: boolean): number {
  if (bigScreen) return 500;
  if (midScreen) return 350;
  return 250;
}

export function getContext(canvas?: CanvasOrNull): Context {
  if (!canvas) throw new Error('Canvas is not defined.');
  const { height, width } = canvas;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Unable to get context.');
  return { ctx, height, width };
}

export const getOnKey = <T>(keyDirs: RRef<number>, control: RRef<Control>): kHandler<T> => {
  const onKeyDown: kHandler<T> = (event) => {
    const dir = KEY_MAP[event.key] || 0;
    if (dir !== 0) event.preventDefault();
    keyDirs.current = addDir(keyDirs.current, dir);
    control.current = getControlFromDir(keyDirs.current);
  };
  return onKeyDown;
};

export const getOffKey = <T>(keyDirs: RRef<number>, control: RRef<Control>): kHandler<T> => {
  const onKeyUp: kHandler<T> = (event) => {
    const dir = KEY_MAP[event.key] || 0;
    if (dir !== 0) event.preventDefault();
    keyDirs.current = removeDir(keyDirs.current, dir);
    control.current = getControlFromDir(keyDirs.current);
  };
  return onKeyUp;
};

export const getOnStick = (control: RRef<Control>) => {
  return (ctrl: Control): void => {
    control.current = ctrl;
  };
};

export const getOffStick = (control: RRef<Control>) => {
  return (): void => {
    control.current = IDLE_CONTROL;
  };
};

function generateRandomID(len: number) {
  const result = [];
  const charSetLen = ID_CHARSET.length;
  for (let i = 0; i < len; i++) {
    const index = Math.floor(Math.random() * charSetLen);
    result.push(ID_CHARSET.charAt(index));
  }
  return result.join('');
}

export function generatePlayer(position: Cord, pid?: string): Player {
  const id = pid || generateRandomID(ID_LEN);
  const location = position;
  return { id, location };
}

function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i: number) {
  const c = (i & 0x00ffffff).toString(16).toUpperCase();
  return '00000'.substring(0, 6 - c.length) + c;
}

export function randomColorFromString(str: string): string {
  const rgb = intToRGB(hashCode(str));
  return `#${rgb}`;
}
