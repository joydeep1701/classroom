import io from 'socket.io-client';
import { WEBSOCKET_SERVER } from '../../utils/apiPaths';
import {
  START_DRAWING_PUBLISHER, DRAWING_PUBLISHER_PUBLISH,
} from './actionTypes';
import {
  startDrawingPublisherSuccess,
} from './actions';

export const DrawPadSocketMiddleware = ({ dispatch }) => next => (action) => {
  if (action.type === START_DRAWING_PUBLISHER) {
    console.log('[SOCKET] Connecting');
    const userToken = 'RandomFireBaseAuth';
    const meetingId = 'random';

    const socket = io(WEBSOCKET_SERVER, {
      path: '/ws',
      query: {
        token: userToken,
        meetingId,
      }
    });
    window.socket = socket;

    socket.on('connectToRoom', () => {
      dispatch(startDrawingPublisherSuccess());
    });
    console.log(socket);
  }
  next(action);
}