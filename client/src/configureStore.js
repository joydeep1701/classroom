import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers';
import rootEpic from './epics'
import middlewares from './middlewares';

export default function configureStore(initialState = {}, history) {
  const appRouterMiddleware = routerMiddleware(history);
  const epicMiddleware = createEpicMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer(history), // Root reducer
    initialState, // Initial state
    composeEnhancers(
      applyMiddleware(
        appRouterMiddleware,        
        ...middlewares,
        epicMiddleware,
      )  
    )
  )
  epicMiddleware.run(rootEpic);
  return store;
}