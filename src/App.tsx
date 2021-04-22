import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GenerationDemo from './pages/GenerateDemo';
import MultiPlayerMaze from './pages/MultiplayerMaze';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/online">
          <MultiPlayerMaze />
        </Route>
        <Route path="/">
          <GenerationDemo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
