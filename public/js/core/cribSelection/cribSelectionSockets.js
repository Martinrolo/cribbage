export default class CribSelectionSockets {
    constructor(socket, manager) {
        this.socket = socket;

        socket.on('gameStarted', async (game) => {
            manager.gameStarted(game);
        });

        socket.on('newRound', (game) => {
            manager.newRound(game);
        });

        socket.on('confirmCribCardsSelected', (game, playerId) => {
            manager.confirmCribCardsSelected(game, playerId)
        })
    }

    emitCribCardsSelected(cards)
    {
        socket.emit('cribCardsSelected', { roomId: localRoomId, playerId: localPlayerId, cards });
    }
}