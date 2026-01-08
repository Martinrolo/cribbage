import Room from './Room.js';

class RoomManager {
    static rooms = new Map();

    static createRoom(roomId) {
        if (this.rooms.has(roomId)) {
            throw new Error('Room existe déjà');
        }

        const room = new Room(roomId);
        this.rooms.set(roomId, room);
        return room;
    }

    static getRoom(roomId) {
        return this.rooms.get(roomId);
    }
}

export default RoomManager;
