import React from 'react';
import {
  HomePage, NotFound,
} from './routes';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
