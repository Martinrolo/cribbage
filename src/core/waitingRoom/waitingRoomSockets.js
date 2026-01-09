import RoomManager from '../../rooms/roomManager.js';

export default class WaitingRoomSockets {
    constructor(io, socket, manager)
    {
        this.io = io;

        socket.on('pageLoaded', (roomId, playerId) => {
            const room = RoomManager.getRoom(roomId);

            if (!room) {
                socket.emit('error', "Room invalide");
                return;
            }

            socket.join(roomId);
            manager.addPlayer(room.game, playerId);
            this.emitPlayerJoined(room.game, roomId);

        });

        socket.on('startGame', roomId => {
            const room = RoomManager.getRoom(roomId);
            if (!room) return;

            manager.startGame(room.game);
            this.emitGameStarted(room.game, roomId)
        });
    }

    emitGameStarted(game, roomId)
    {
        this.io.to(roomId).emit('gameStarted', game);
    }

    emitPlayerJoined(game, roomId)
    {
        this.io.to(roomId).emit('playerJoined', game);
    }

}