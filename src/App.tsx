import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GenerationDemo from './pages/generation-demo';
import OfflineMaze from './pages/offline-maze';
import MultiplayerMaze from './pages/multiplayer-maze';

function App(): JSX.Element {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path="/offline">
          <OfflineMaze />
        </Route>
        <Route exact path="/generation-demo">
          <GenerationDemo />
        </Route>
        <Route>
          <MultiplayerMaze />
        </Route>
      </Switch>
    </>
  );
}

export default App;
