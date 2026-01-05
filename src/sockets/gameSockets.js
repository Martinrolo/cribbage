import { rooms, Round } from '../gameObjects.js';

export function gameplaySockets(io, socket) {
    socket.on('cardsDealt', (room) => {
        const roomData = rooms.get(room);
        roomData.animationsDone++;

        if (roomData.animationsDone === 2) {
            roomData.animationsDone = 0; // reset 
            roomData.game.round = new Round();

            io.to(room).emit('newRound', roomData.game);
        }
    });

    socket.on('cribCardsSelected', (data) => {
        const { room, playerId, cards } = data;

        const gameData = rooms.get(room).game;
        gameData.crib = gameData.crib.concat(cards);

        io.to(room).emit('confirmCribCardsSelected', gameData, playerId)

        if(gameData.crib.length == 4)
        {
            io.to(room).emit('startPlay', gameData)
        }
    });
}