import React, {
  KeyboardEventHandler,
  LegacyRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { useMediaQuery } from 'react-responsive';
import Canvas from '../components/canvas';
import Container from '../components/container';
import JoyStick from '../components/joy-stick';
import Nav from '../components/nav';
import { IDLE_CONTROL } from '../constants';
import getControlFromDir, { addDir, removeDir } from '../lib/direction-util';
import Game from '../lib/game';
import { Control, Direction } from '../type';

interface StringMap {
  [key: string]: number;
}

function getCanvasSize(bigScreen: boolean, midScreen: boolean): number {
  if (bigScreen) return 500;
  if (midScreen) return 350;
  return 250;
}

const KEY_MAP: StringMap = {
  ArrowLeft: Direction.LEFT,
  ArrowUp: Direction.TOP,
  ArrowRight: Direction.RIGHT,
  ArrowDown: Direction.DOWN
};

function Maze(): JSX.Element {
  const [level, setLevel] = useState(1);
  const canvasRef: LegacyRef<HTMLCanvasElement> = useRef(null);
  const bigScreen = useMediaQuery({ query: '(min-width: 600px)' });
  const midScreen = useMediaQuery({ query: '(min-width: 400px)' });
  const [canvasSize, setCanvasSize] = useState(getCanvasSize(bigScreen, midScreen));
  const game = useRef<Game>();
  const animationRef = useRef(0);
  const control = useRef<Control>(IDLE_CONTROL);
  const keyDirs = useRef(0);

  const animate: FrameRequestCallback = useCallback(() => {
    game.current?.performMove(control.current);
    game.current?.renderGame();
    if (game.current?.checkWin()) {
      setLevel(level + 1);
    }
    animationRef.current = requestAnimationFrame(animate);
  }, [control, game, level]);

  useEffect(() => {
    setCanvasSize(getCanvasSize(bigScreen, midScreen));
  }, [bigScreen, midScreen]);

  useEffect(() => {
    game.current = new Game(canvasRef.current, level);
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [level, animate]);

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const dir = KEY_MAP[event.key] || 0;
    if (dir !== 0) event.preventDefault();
    keyDirs.current = addDir(keyDirs.current, dir);
    control.current = getControlFromDir(keyDirs.current);
  };

  const onKeyUp: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const dir = KEY_MAP[event.key] || 0;
    if (dir !== 0) event.preventDefault();
    keyDirs.current = removeDir(keyDirs.current, dir);
    control.current = getControlFromDir(keyDirs.current);
  };

  const onEventHandler = useCallback((ctrl: Control): void => {
    control.current = ctrl;
  }, []);

  const offEventHandler = useCallback((): void => {
    control.current = IDLE_CONTROL;
  }, []);

  return (
    <Container onKeyDown={onKeyDown} onKeyUp={onKeyUp}>
      <h1 className="text-4xl my-4 text-center">Offline Maze Level {level}</h1>
      <Nav />
      <Canvas ref={canvasRef} size={canvasSize} />
      <JoyStick size={120} offEventHandler={offEventHandler} onEventHandler={onEventHandler} />
    </Container>
  );
}

export default Maze;
