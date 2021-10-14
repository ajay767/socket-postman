const app = require('./app');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const server = http.Server(app);

const db = process.env.DATABASE_URL.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT,
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true,
  },
});

app.set('socketio', io);

io.on('connection', (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);
  console.log(id);
  socket.on('call', (id) => {
    console.log(id, 'someone calledd');
    socket.to(id).emit('reply', `hello ${id}`);
  });
  socket.on('disconnect', (reason) => {
    console.log(`${id} ${reason}`);
  });
});

mongoose.connect(db, () => {
  console.log('Database connected');
});

server.listen(process.env.PORT, () => {
  console.log(`Server is up and runnning on PORT ${process.env.PORT}`);
});
