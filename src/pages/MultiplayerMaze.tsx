import React from 'react';
import Nav from '../components/nav';

function MultiPlayerMaze(): JSX.Element {
  return (
    <div className="w-full h-screen flex flex-col space-y-3 text-center items-center">
      <h1>Maze Multiplayer</h1>
      <Nav />
    </div>
  );
}

export default MultiPlayerMaze;
