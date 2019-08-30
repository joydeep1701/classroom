import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

const server = http.Server(app);
const io = new SocketIO(server);

server.listen(port, () => {
    console.log('[INFO] Listening on *:' + port);
});