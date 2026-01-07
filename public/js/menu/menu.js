localStorage.setItem('playerId', crypto.randomUUID());
const playerId = localStorage.getItem('playerId')

creerRoomBtn.addEventListener('click', () => {
    const room = crypto.randomUUID(); 
    socket.emit('createRoom', room, localPlayerId);

    socket.once('roomJoined', (room) => {
        window.location.href = `/cribbage?room=${room}`;
    });
});

rejoindreRoomBtn.addEventListener('click', () => {
    const room = roomInput.value;
    socket.emit('joinRoom', room, localPlayerId);

    socket.once('roomJoined', (room) => {
        window.location.href = `/cribbage?room=${room}`;
    });

    socket.on('error', (errorMsg) => {
        alert(errorMsg);
    });
});


