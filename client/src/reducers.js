import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { drawingReducer } from './containers/DrawingPad/reducers';

export default history => combineReducers({
  router: connectRouter(history),
  drawing: drawingReducer,
});