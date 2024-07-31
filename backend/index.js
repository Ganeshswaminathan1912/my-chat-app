const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('sendMessage', (message) => {
    console.log('Message received:', message);
    io.emit('message', { user: 'Someone', text: message });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

http.listen(5000, () => {
  console.log('Server listening on port 5000');
});