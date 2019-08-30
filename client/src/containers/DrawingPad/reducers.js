import {
  DRAWING_PUBLISHER_PUBLISH,
  START_DRAWING_PUBLISHER,
  START_DRAWING_PUBLISHER_SUCCESS,
  START_DRAWING_PUBLISHER_ERROR,
} from './actionTypes'

const initialState = {
  isConnected: false,
  isConnecting: false,
  clientId: null,
  canvasState: {
    currentHash: null,
    hashList: {
      'hash': 'base64',
    }
  }
}

export function drawingReducer(state=initialState, action) {
  if (action.type === DRAWING_PUBLISHER_PUBLISH) {
    // pass
  }
  if (action.type === START_DRAWING_PUBLISHER) {
    // pass
  }
  if (action.type === START_DRAWING_PUBLISHER_SUCCESS) {
    // pass
  }
  if (action.type === START_DRAWING_PUBLISHER_ERROR) {
    // pass
  }
  return initialState;
}