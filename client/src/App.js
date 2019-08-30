import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  HomePage,
  NotFound,
  LiveSession,
} from './routes';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/live/:classId" component={LiveSession} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
