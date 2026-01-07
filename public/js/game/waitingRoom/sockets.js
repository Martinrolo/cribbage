socket.emit('pageLoaded', room, localPlayerId);

socket.on('playerJoined', (game) => {
    setPlayerInfo(game)
    updateWaitingState(game);
});

socket.on('error', (errorMsg) => {
    alert(errorMsg);
    window.location.replace('/');
});