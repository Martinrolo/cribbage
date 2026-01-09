import RoomManager from '../../rooms/roomManager.js';

export default class CribSelectionSockets {
    constructor(io, socket, manager)
    {
        this.io = io;
        this.room = null;

        socket.on('cardsDealt', (roomId) => {
            this.room = RoomManager.getRoom(roomId);
            const game = RoomManager.getGame(roomId);
            this.room.animationsDone++

            if (this.room.animationsDone === 2) {
                this.room.animationsDone = 0;
                manager.startRound(game)
                this.emitNewRound(game, roomId)
            }
        });

        socket.on('cribCardsSelected', (data) => {
            const { roomId, playerId, cards } = data;
            const gameData = RoomManager.getGame(roomId);

            manager.cribCardsSelected(gameData, playerId, roomId, cards);
        });
    }

    emitNewRound(game, roomId)
    {
        this.io.to(roomId).emit('newRound', game);
    }

    emitConfirmCribCardsSelected(game, playerId, roomId)
    {
        this.io.to(roomId).emit('confirmCribCardsSelected', game, playerId)
    }

    emitStartRoundOne(game, roomId)
    {
        this.io.to(roomId).emit('startPlay', game)
    }
}