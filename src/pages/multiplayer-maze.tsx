import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';
import Canvas from '../components/canvas';
import Container from '../components/container';
import JoyStick from '../components/joy-stick';
import Nav from '../components/nav';
import { IDLE_CONTROL, INSTRUCTION, TOAST_CONFIG } from '../constants';
import getCanvasSize, { getOnKey, getOffKey, getOnStick, getOffStick } from '../lib/misc-util';
import MultiplayerGame from '../lib/multiplayer-game';
import { CallBack, Control } from '../type';

const onGameOver: CallBack = (win) => {
  if (win) toast.success('Congrats, You won the game 🚀', TOAST_CONFIG);
  else toast.error('Too Slow,  Faster Next Time 😭', TOAST_CONFIG);
};

const callBack: CallBack = (success, msg) => {
  if (success) toast.success(msg, TOAST_CONFIG);
  else toast.error(msg, TOAST_CONFIG);
};

function MultiplayerMaze(): JSX.Element {
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

  const onLeave = () => {
    gameRef.current?.cleanUp();
    return 'Are you sure you want to leave?';
  };

  useEffect(() => {
    gameRef.current = new MultiplayerGame(canvasRef.current, onGameOver, callBack);
    window.addEventListener('beforeunload', onLeave);
    return () => {
      gameRef.current?.cleanUp();
      window.removeEventListener('beforeunload', onLeave);
    };
  }, []);

  useEffect(() => {
    setCanvasSize(getCanvasSize(bigScreen, midScreen));
  }, [bigScreen, midScreen]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate]);

  return (
    <>
      <Container onKeyDown={onKey} onKeyUp={offKey}>
        <Nav />
        <h1 className="text-4xl my-4">Maze Multiplayer</h1>
        <p>
          No one is here? Invite your friend or open another client in incognito or another browser.
        </p>
        <p>{INSTRUCTION}</p>
        <Canvas ref={canvasRef} size={canvasSize} />
        <JoyStick size={100} offStick={offStick} onStick={onStick} />
      </Container>
    </>
  );
}

export default MultiplayerMaze;
