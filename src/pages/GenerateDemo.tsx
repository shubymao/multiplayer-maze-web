import React, { createRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from '../components/button';
import Canvas from '../components/canvas';
import Container from '../components/container';
import LabelInput from '../components/label-input';
import Nav from '../components/nav';
import CanvasManager, { getOnUpdate } from '../lib/canvas-manager';
import { generateMaze, getRandomSeed } from '../lib/maze-generator';

function handleChange(callBack: React.Dispatch<string>, check: (nVal: number) => boolean) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!value || check(parseInt(value, 10))) callBack(value);
  };
}

function GenerationDemo(): JSX.Element {
  const canvasRef: React.LegacyRef<HTMLCanvasElement> = createRef();

  const [size, setSize] = useState('10');
  const [delay, setDelay] = useState('30');
  const [seed, setSeed] = useState(getRandomSeed().toString());
  const [busy, setIsBusy] = useState(false);
  const bigScreen = useMediaQuery({ query: '(min-width: 550px)' });
  const [canvasSize, setCanvasSize] = useState(bigScreen ? 500 : 250);

  useEffect(() => {
    setCanvasSize(bigScreen ? 500 : 200);
  }, [bigScreen]);

  const onClick = async () => {
    if (busy) return;
    setIsBusy(true);
    const canvas = canvasRef.current;
    const canvasManager = new CanvasManager(canvas);
    const onUpdate = getOnUpdate(canvasManager, parseInt(delay, 10));
    const userSeed = parseInt(seed, 10);
    const maze = await generateMaze(parseInt(size, 10), { onUpdate, userSeed });
    canvasManager.drawGrid(maze);
    setIsBusy(false);
  };

  const updateSize = handleChange(setSize, (n) => n <= 50);
  const updateDelay = handleChange(setDelay, (d) => d < 400);
  const updateSeed = handleChange(setSeed, (s) => s < 100000);

  return (
    <Container>
      <h1 className="text-4xl my-4">Generation Demo</h1>
      <Nav />
      <Canvas ref={canvasRef} size={canvasSize} />
      <div className="flex flex-wrap gap-3 items-center place-content-center">
        <LabelInput label="Size" value={size} onChange={updateSize} />
        <LabelInput label="Delay" value={delay} onChange={updateDelay} />
        <LabelInput label="Seed" value={seed} onChange={updateSeed} />
        <Button color="bg-green-500" onClick={onClick} label="Generate" />
      </div>
    </Container>
  );
}

export default GenerationDemo;
