/* eslint-disable */
import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import { SocketIOAuth } from './middleware';

const app = express();
const server = http.Server(app);
const io = new SocketIO(server, {
  path: '/ws',
});

const port = process.env.PORT || 8080;

app.use(express.json());
io.use(SocketIOAuth);

io.on('connection', (socket) => {
  console.log(`Client Connected ${socket.id}`);
  const { token, meetingId } = socket.handshake.query;
  socket.join(meetingId);
  socket.on('drawEvent', (e) => {
    io.sockets.in(meetingId)
      .emit('drawEvent', {
        clientId: socket.id,
        payload: e,
      });
  });
});


io.sockets.in('random').emit('event', "DATA");



server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[INFO] Listening on *:${port}`);
});
