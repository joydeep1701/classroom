/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

export function SocketIOAuth(socket, next) {
  const { token } = socket.handshake.query;

  if (token) {
    console.log(`[Debug] User Token: ${token}`);
    socket.userId = token;
    return next();
  }
  console.log('[Debug]: No Token Provided');
  return next(new Error('Authentication Error'));
}
export function ExpressAuth() {

}
