export default class WaitingRoomSockets {
    constructor(socket, manager) {
        this.socket = socket;

        socket.on('playerJoined', game => manager.onPlayerJoined(game));
        socket.on('error', msg => manager.onError(msg));
    }

    emitPageLoaded(roomId, playerId) {
        this.socket.emit('pageLoaded', roomId, playerId);
    }

    emitStartGame(roomId) {
        this.socket.emit('startGame', roomId);
    }
}
