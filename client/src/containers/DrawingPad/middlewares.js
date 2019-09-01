import io from 'socket.io-client';
import { fromEvent } from 'rxjs';
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

    const socket = io('http://localhost:8080', {
      path: '/ws',
      query: {
        token: userToken,
        meetingId,
      }
    });
    window.socket = socket;

    socket.on('connectToRoom', e => {
      console.log(e); 
    })

    console.log(socket);

  }
  if (action.type === DRAWING_PUBLISHER_PUBLISH) {
    if (window.socket) {
      window.socket.emit('DRAWING_PUBLISHER_PUBLISH', action.payload);
    }
  }
  next(action);
}