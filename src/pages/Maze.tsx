import React, { KeyboardEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Canvas from '../components/canvas';
import Nav from '../components/nav';
import Game from '../lib/game';
import { addDir, removeDir } from '../lib/maze-generator';
import { Direction } from '../type';

interface StringMap {
  [key: string]: number;
}

const KEY_MAP: StringMap = {
  ArrowLeft: Direction.LEFT,
  ArrowUp: Direction.TOP,
  ArrowRight: Direction.RIGHT,
  ArrowDown: Direction.DOWN
};

function Maze(): JSX.Element {
  const [level, setLevel] = useState(1);
  const canvasRef: React.LegacyRef<HTMLCanvasElement> = useRef(null);
  const bigScreen = useMediaQuery({ query: '(min-width: 550px)' });
  const [canvasSize, setCanvasSize] = useState(bigScreen ? 500 : 250);
  const game = useRef<Game>();
  const requestRef = React.useRef(0);
  let dirCombo = 0;

  useEffect(() => {
    setCanvasSize(bigScreen ? 500 : 200);
    game.current = new Game(canvasRef.current, level);
  }, [bigScreen, level]);

  const animate: FrameRequestCallback = useCallback(() => {
    game.current?.performMove(dirCombo);
    game.current?.renderGame();
    if (game.current?.checkWin()) {
      setLevel(level + 1);
    }
    requestRef.current = requestAnimationFrame(animate);
  }, [dirCombo, game, level]);

  React.useEffect(() => {
    requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  const onKeyDown: KeyboardEventHandler<HTMLCanvasElement> = (event) => {
    event.preventDefault();
    const dir = KEY_MAP[event.key] || 0;
    dirCombo = addDir(dirCombo, dir);
  };

  const onKeyUp: KeyboardEventHandler<HTMLCanvasElement> = (event) => {
    const dir = KEY_MAP[event.key] || 0;
    event.preventDefault();
    dirCombo = removeDir(dirCombo, dir);
  };

  return (
    <div className="w-full min-h-screen bg-gray-700">
      <div className="space-y-3 flex flex-col items-center p-4 text-white">
        <h1 className="text-4xl my-4">Offline Maze Level {level}</h1>
        <Nav />
        <Canvas onKeyDown={onKeyDown} onKeyUp={onKeyUp} ref={canvasRef} size={canvasSize} />
      </div>
    </div>
  );
}

export default Maze;
