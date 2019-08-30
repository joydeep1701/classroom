import {
  START_DRAWING_PUBLISHER,
  START_DRAWING_PUBLISHER_SUCCESS,
  START_DRAWING_PUBLISHER_ERROR,
  DRAWING_PUBLISHER_PUBLISH
} from './actionTypes';

export function startDrawingPublisher() {
  return {
    type: START_DRAWING_PUBLISHER,
    payload: {

    }
  }
}

export function startDrawingPublisherSuccess() {
  return {
    type: START_DRAWING_PUBLISHER_SUCCESS,
    payload: {

    }
  }
}

export function startDrawingPublisherError(error) {
  return {
    type: START_DRAWING_PUBLISHER_ERROR,
    payload: {
      error
    }
  }
}

export function publishDrawingData({ from, to }) {
  return {
    type: DRAWING_PUBLISHER_PUBLISH,
    payload: {
      from,
      to,
    }
  }
}