import RoomManager from '../rooms/roomManager.js';
import GameManager from '../game/gameManager.js';

export default function menuSockets(io, socket) {

    socket.on('createRoom', roomId => {
        try {
            RoomManager.createRoom(roomId);
            socket.emit('roomJoined', roomId);
        } catch (err) {
            socket.emit('error', err.message);
        }
    });

    socket.on('joinRoom', roomId => {
        const room = RoomManager.getRoom(roomId);

        if (!room) {
            socket.emit('error', "Cette room n'existe pas");
            return;
        }

        if (room.isFull()) {
            socket.emit('error', "Room pleine");
            return;
        }

        socket.emit('roomJoined', roomId);
    });

    socket.on('pageLoaded', (roomId, playerId) => {
        const room = RoomManager.getRoom(roomId);

        if (!room) {
            socket.emit('error', "Room invalide");
            return;
        }

        socket.join(roomId);
        GameManager.addPlayer(room.game, playerId);
        io.to(roomId).emit('playerJoined', room.game);
    });

    socket.on('startGame', roomId => {
        const room = RoomManager.getRoom(roomId);
        if (!room) return;

        GameManager.startGame(room.game);
        io.to(roomId).emit('gameStarted', room.game);
    });
}