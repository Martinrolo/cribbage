import { Player, Game, rooms } from '../gameObjects.js';

export function cribbageSockets(io, socket) {
    socket.on('createRoom', (room) => {
        let game = new Game();
        rooms.set(room, {game: game});

        console.log(rooms)

        game.players.push(new Player(socket.id));
        socket.join(room);
        socket.emit('roomJoined', room);
    });

    socket.on('joinRoom', (room) => {
        console.log("JOIN ROOM: " + room)
        console.log(rooms)

        // if (!game || game.players.length >= 2) return;

        // game.players.push(new Player(socket.id));
        // socket.join(room);
        // socket.emit('roomJoined', game);
    });

    socket.on('pageLoaded', (room) => {
        socket.emit('gameInfo', rooms.get(room).game);
    });

    socket.on('disconnect', () => {
        for (const [roomId, room] of rooms.entries()) {
            room.game.players = room.game.players.filter(p => p.socketId !== socket.id);
            if (room.game.players.length === 0) {
                rooms.delete(roomId);
            } else {
                io.to(roomId).emit('roomUpdate', room);
            }
        }
    });

    // PLUS TARD :
    // socket.on('playCard', ...)
    // socket.on('endTurn', ...)
}

