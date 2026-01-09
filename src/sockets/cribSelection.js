import RoomManager from '../rooms/roomManager.js';
import GameManager from '../game/gameManager.js';
import { Game } from '../game/gameObjects.js';

export default function cribSelectionSockets(io, socket) {
    socket.on('cardsDealt', (roomId) => {
        const room = RoomManager.getRoom(roomId);
        const game = RoomManager.getGame(roomId);
        room.animationsDone++


        if (room.animationsDone === 2) {
            room.animationsDone = 0;
            GameManager.startRound(game)

            io.to(roomId).emit('newRound', game);
        }

    });

    socket.on('cribCardsSelected', (data) => {
        const { roomId, playerId, cards } = data;
        const gameData = RoomManager.getGame(roomId);

        GameManager.cribCardsSelected(gameData, playerId);



    });
}