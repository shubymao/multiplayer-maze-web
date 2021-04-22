import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import drawGrid, { getOnUpdate } from '../lib/canvas';
import { generateMaze, getRandomSeed } from '../lib/maze-generator';

function handleChange(callBack: React.Dispatch<string>, check: (nVal: number) => boolean) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!value || check(parseInt(value, 10))) callBack(value);
  };
}

function GenerationDemo(): JSX.Element {
  const canvasRef: React.LegacyRef<HTMLCanvasElement> = useRef(null);
  const [size, setSize] = useState('10');
  const [delay, setDelay] = useState('10');
  const [seed, setSeed] = useState(getRandomSeed().toString());
  const [busy, setIsBusy] = useState(false);
  const bigScreen = useMediaQuery({ query: '(min-width: 550px)' });
  const [canvasSize, setCanvasSize] = useState(bigScreen ? 500 : 250);

  useEffect(() => {
    console.log('Changed size');
    setCanvasSize(bigScreen ? 500 : 200);
  }, [bigScreen]);

  const onClick = async () => {
    if (busy) return;
    setIsBusy(true);
    const canvas = canvasRef.current;
    const onUpdate = getOnUpdate(canvas, parseInt(delay, 10));
    const userSeed = parseInt(seed, 10);
    const maze = await generateMaze(parseInt(size, 10), { onUpdate, userSeed });
    if (canvas) drawGrid(canvas, maze);
    setIsBusy(false);
  };

  const updateSize = handleChange(setSize, (n) => n <= 50);
  const updateDelay = handleChange(setDelay, (d) => d < 400);
  const updateSeed = handleChange(setSeed, (s) => s < 100000);

  return (
    <div className="w-full min-h-screen bg-gray-700">
      <div className="space-y-3 flex flex-col items-center p-4 text-white">
        <h1 className="text-4xl my-4">Generation Demo</h1>
        <canvas ref={canvasRef} width={canvasSize} height={canvasSize} className="bg-white" />
        <div className="flex flex-wrap w-full gap-3 items-center place-content-center text-center text-black">
          <div className="flex flex-col items-center">
            <p className="inline-block text-white text-lg">Size</p>
            <input className="w-16" value={size} onChange={updateSize} />
          </div>
          <div className="flex flex-col items-center">
            <p className="inline-block text-white text-lg">Delay(ms)</p>
            <input className="w-16" value={delay} onChange={updateDelay} />
          </div>
          <div className="flex flex-col items-center">
            <p className="inline-block text-white text-lg">Seed</p>
            <input className="w-20" value={seed} onChange={updateSeed} />
          </div>
          <div className="flex flex-col items-center">
            <button
              className="p-3 rounded-lg bg-green-500 hover:bg-green-300"
              onClick={onClick}
              type="submit"
            >
              Generate Maze
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerationDemo;
