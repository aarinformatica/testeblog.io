const socket = io();

document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    socket.emit('chat message', message);
    document.getElementById('message-input').value = '';
});

socket.on('chat message', (msg) => {
    const item = document.createElement('div');
    item.textContent = msg;
    document.getElementById('messages').appendChild(item);
});
