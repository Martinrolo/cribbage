export default class MenuManager {
    constructor() {
        this.socket = null
    }

    setSocket(socket) {
        this.socket = socket;
    }

    createRoom() {
        const roomId = crypto.randomUUID(); 
        this.socket.emitCreateRoom(roomId, localPlayerId);
    }

    joinRoom(roomId) {
        this.socket.emitJoinRoom(roomId, localPlayerId);
    }
}
