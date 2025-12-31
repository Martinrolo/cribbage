// Click sur "Créer"
creerRoomBtn.addEventListener('click', () => {
    const room = crypto.randomUUID(); 
    socket.emit('createRoom', room);

    socket.once('roomJoined', (room) => {
        window.location.href = `/cribbage?room=${room}`;
    });
});

rejoindreRoomBtn.addEventListener('click', () => {
    const room = roomInput.value;
    socket.emit('joinRoom', room);

    socket.once('roomJoined', (room) => {
        window.location.href = `/cribbage?room=${room}`;
    });
});


