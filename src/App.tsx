import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import GenerationDemo from './pages/GenerateDemo';
import Maze from './pages/Maze';
import MultiPlayerMaze from './pages/MultiplayerMaze';

function App(): JSX.Element {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
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
    </HashRouter>
  );
}

export default App;
