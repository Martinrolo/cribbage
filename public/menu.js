localStorage.setItem('playerId', crypto.randomUUID());
const playerId = localStorage.getItem('playerId')


// Click sur "Créer"
creerRoomBtn.addEventListener('click', () => {
    const room = crypto.randomUUID(); 
    socket.emit('createRoom', room, playerId);

    socket.once('roomJoined', (room) => {
        window.location.href = `/cribbage?room=${room}`;
    });
});

// Click sur "Rejoindre"
rejoindreRoomBtn.addEventListener('click', () => {
    const room = roomInput.value;
    socket.emit('joinRoom', room, playerId);

    socket.once('roomJoined', (room) => {
        window.location.href = `/cribbage?room=${room}`;
    });

    socket.on('error', (errorMsg) => {
        alert(errorMsg);
    });
});


