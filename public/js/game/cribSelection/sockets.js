socket.on('gameStarted', async (game) => {
    dealCards(game);
});

socket.on('newRound', (game) => {
    newRound(game);
});

socket.on('confirmCribCardsSelected', (game, playerId) => {
    confirmCribCardsSelected(game, playerId)
})
