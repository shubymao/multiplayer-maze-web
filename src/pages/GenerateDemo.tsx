import React from 'react';

function GenerationDemo(): JSX.Element {
  return (
    <div className="w-full h-screen flex flex-col space-y-3 text-center items-center text-white bg-gray-700">
      <h1 className="text-4xl my-4">Generation Demo</h1>
      <canvas className="bg-white" width="500px" height="500px" />
      <button className="p-5 rounded-lg bg-green-500 hover:bg-green-300" type="submit">
        Generate Maze
      </button>
    </div>
  );
}

export default GenerationDemo;
