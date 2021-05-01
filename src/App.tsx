import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GenerationDemo from './pages/GenerateDemo';
import Maze from './pages/Maze';
import MultiPlayerMaze from './pages/MultiplayerMaze';

function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/online">
        <MultiPlayerMaze />
      </Route>
      <Route path="/generator">
        <GenerationDemo />
      </Route>
      <Route path="/">
        <Maze />
      </Route>
    </Switch>
  );
}

export default App;
