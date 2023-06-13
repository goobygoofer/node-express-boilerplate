const socket = io();

socket.on('serverMsg', (msg) => {
  console.log(`Server: ${msg}`);
});

function msgServer(msg){
  socket.emit('serverMsg', msg);
}