import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { toast, ToastContainer, ToastPosition } from 'react-toastify';
import Canvas from '../components/canvas';
import Container from '../components/container';
import JoyStick from '../components/joy-stick';
import Nav from '../components/nav';
import { IDLE_CONTROL, TOAST_CONFIG } from '../constants';
import getCanvasSize, { getOnKey, getOffKey, getOnStick, getOffStick } from '../lib/misc-util';
import MultiplayerGame from '../lib/multiplayer-game';
import { Control } from '../type';

const position: ToastPosition = 'top-center';
const config = { position, ...TOAST_CONFIG };

const onGameOver = (win: boolean): void => {
  if (win) toast.success('Congrats, You won the game 🚀', config);
  else toast.error('Too Slow,  Faster Next Time 😭', config);
};

function MultiPlayerMaze(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bigScreen = useMediaQuery({ query: '(min-width: 600px)' });
  const midScreen = useMediaQuery({ query: '(min-width: 400px)' });
  const [canvasSize, setCanvasSize] = useState(getCanvasSize(bigScreen, midScreen));
  const gameRef = useRef<MultiplayerGame>();
  const animationRef = useRef(0);
  const control = useRef<Control>(IDLE_CONTROL);
  const keyDirs = useRef(0);

  const onKey = getOnKey(keyDirs, control);
  const offKey = getOffKey(keyDirs, control);
  const onStick = getOnStick(control);
  const offStick = getOffStick(control);

  const animate: FrameRequestCallback = useCallback(() => {
    gameRef.current?.performMove(control.current);
    gameRef.current?.render();
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    gameRef.current = new MultiplayerGame(canvasRef.current, onGameOver);
    return () => gameRef.current?.cleanUp();
  }, []);

  useEffect(() => {
    setCanvasSize(getCanvasSize(bigScreen, midScreen));
  }, [bigScreen, midScreen]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate]);

  window.onbeforeunload = () => {
    gameRef.current?.cleanUp();
  };

  return (
    <>
      <ToastContainer />
      <Container onKeyDown={onKey} onKeyUp={offKey}>
        <h1 className="text-4xl my-4">Maze Multiplayer</h1>
        <Nav />
        <Canvas ref={canvasRef} size={canvasSize} />
        <JoyStick size={120} offStick={offStick} onStick={onStick} />
      </Container>
    </>
  );
}

export default MultiPlayerMaze;
