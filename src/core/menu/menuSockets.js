import RoomManager from '../../rooms/roomManager.js';

export default class MenuSockets {
    constructor(socket) {
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
    }
}