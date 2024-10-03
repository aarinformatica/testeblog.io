const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname));

io.on('connection', (socket) => {
    console.log('Um usuário se conectou');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('Um usuário se desconectou');
    });
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
