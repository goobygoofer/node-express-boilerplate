const express = require('express');
const app = express();
app.use(express.static(`${__dirname}/public`))
const http = require('http');
const server = http.createServer(app);
const { Server } = require ("socket.io");
const io = new Server(server);
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/client.html`);
});

io.on('connection', (socket) => {

  socket.on('serverMsg', (msg) => {
    console.log(`${socket.id}: ${msg}`);
    io.to(socket.id).emit('serverMsg', "Message received...");
  });

});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})