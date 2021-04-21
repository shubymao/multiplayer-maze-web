import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GenerationDemo from './pages/GenerateDemo';
import Maze from './pages/Maze';
import MultiPlayerMaze from './pages/MultiplayerMaze';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/generation-demo">
          <GenerationDemo />
        </Route>
        <Route path="/online">
          <MultiPlayerMaze />
        </Route>
        <Route path="/">
          <Maze />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
