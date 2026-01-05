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
}