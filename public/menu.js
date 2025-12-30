// Click sur "Multijoueur"
jouerBtn.addEventListener('click', () => {
    const room = roomInput.value.trim();

    if (!room) {
        alert('Entre un numéro de room tabarnak');
        return;
    }

    socket.emit('joinRoom', room);
    console.log('Joining room:', room);
});

// ✅ confirmation serveur → redirection
socket.on('roomJoined', (room) => {
    console.log('Joined room:', room);
    window.location.href = '/cribbage';
});