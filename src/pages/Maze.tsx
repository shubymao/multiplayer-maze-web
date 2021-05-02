import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';
import Canvas from '../components/canvas';
import Container from '../components/container';
import JoyStick from '../components/joy-stick';
import Nav from '../components/nav';
import { IDLE_CONTROL, TOAST_CONFIG } from '../constants';
import Game from '../lib/game';
import getCanvasSize, { getOffStick, getOnStick, getOnKey, getOffKey } from '../lib/misc-util';
import { Control } from '../type';

function Maze(): JSX.Element {
  const [level, setLevel] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bigScreen = useMediaQuery({ query: '(min-width: 600px)' });
  const midScreen = useMediaQuery({ query: '(min-width: 400px)' });
  const [canvasSize, setCanvasSize] = useState(getCanvasSize(bigScreen, midScreen));
  const game = useRef<Game>();
  const animationRef = useRef(0);
  const control = useRef<Control>(IDLE_CONTROL);
  const keyDirs = useRef(0);
  const onKey = getOnKey(keyDirs, control);
  const offKey = getOffKey(keyDirs, control);
  const onStick = getOnStick(control);
  const offStick = getOffStick(control);

  useEffect(() => {
    setCanvasSize(getCanvasSize(bigScreen, midScreen));
  }, [bigScreen, midScreen]);

  const animate: FrameRequestCallback = useCallback(() => {
    game.current?.performMove(control.current);
    game.current?.renderGame();
    if (game.current?.checkWin()) {
      toast.success(`Reached Level ${level + 1}`, TOAST_CONFIG);
      setLevel(level + 1);
    }
    animationRef.current = requestAnimationFrame(animate);
  }, [control, game, level]);

  useEffect(() => {
    game.current = new Game(canvasRef.current, level);
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [level, animate]);

  return (
    <Container onKeyDown={onKey} onKeyUp={offKey}>
      <h1 className="text-4xl my-4 text-center">Offline Maze Level {level}</h1>
      <Nav />
      <Canvas ref={canvasRef} size={canvasSize} />
      <JoyStick size={120} offStick={offStick} onStick={onStick} />
    </Container>
  );
}

export default Maze;
