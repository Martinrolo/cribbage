export default class MenuSockets {
    constructor(socket, manager) {
        this.socket = socket;
        this.menuManager = manager;

        socket.on('playerJoined', (game) => {
            this.menuManager.onPlayerJoined(game);
        });

        socket.on('error', (msg) => {
            alert(msg);
            window.location.replace('/');
        });

        socket.once('roomJoined', (room) => {
            window.location.href = `/cribbage?room=${room}`;
        });
    }

    emitCreateRoom(roomId, playerId) {
        this.socket.emit('createRoom', roomId, playerId);
    }

    emitJoinRoom(roomId, playerId) {
        this.socket.emit('joinRoom', roomId, playerId);
    }
}
