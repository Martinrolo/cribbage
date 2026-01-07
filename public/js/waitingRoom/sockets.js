socket.emit('pageLoaded', room, localStorage.getItem('playerId'));

socket.on('playerJoined', (game) => {
    setPlayerInfo(game)
    updateWaitingState(game);
});

socket.on('error', (errorMsg) => {
    alert(errorMsg);
    window.location.replace('/');
});

startBtn.addEventListener('click', () => {
    socket.emit('startGame', room);
});