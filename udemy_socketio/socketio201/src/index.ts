/* eslint-disable no-console */
import express from 'express';
import { Server, Socket } from 'socket.io';
import path from 'path';

const app = express();
app.use(express.static(path.resolve(__dirname, '../public')));

const expressServer = app.listen(5000, () => {
  console.log(`app start at port 5000`);
});

const io = new Server(expressServer, {
  path: '/test', // this default is /socket.io
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket: Socket) => {
  socket.join('room1');
  io.to('room1').emit('join', `${socket.id} join to room1`);

  // Fired upon disconnection.
  socket.on('disconnect', (reason) => {
    console.log('disconnect...', reason);
  });

  // Fired when the client is going to be disconnected (but hasn’t left its rooms yet).
  socket.on('disconnecting', (reason) => {
    console.log('disconnecting...', reason);
  });
});

io.of('/admin').on('connection', (socket) => {
  console.log('Someone connecting to admin namespace');
  socket.emit('welcome', 'welcome to admin channel');
});
