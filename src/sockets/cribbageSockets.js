import { Player, Game, rooms } from '../gameObjects.js';

export function cribbageSockets(io, socket) {
    socket.on('createRoom', (room, playerId) => {
        let game = new Game();
        rooms.set(room, {game: game});
        socket.emit('roomJoined', room);
    });

    socket.on('joinRoom', (room, playerId) => {
        const roomData = rooms.get(room)
        if (!roomData || roomData.game.players.length >= 2)
        {
            socket.emit('error', "Cette room n'existe pas!");
            return; 
        } 

        socket.emit('roomJoined', room);
    });

    socket.on('pageLoaded', (room, playerId) => {
        const roomData = rooms.get(room);

        if(!roomData)
        {
            socket.emit('error', "Erreur! Retour vers le menu");
            return; 
        }

        if(roomData.game.players.length === 2)
        {
            socket.emit('roomFull', 'Cette room est pleine')
            return;
        }

        roomData.game.players.push(new Player(playerId));
        socket.join(room);
        console.log("PLAYERS: ")
        console.log(roomData)

        io.to(room).emit('playerJoined', roomData.game);
    });

    socket.on('disconnect', () => {
        // for (const [roomId, room] of rooms.entries()) {
        //     room.game.players = room.game.players.filter(p => p.playerId !== socket.id);
        //     if (room.game.players.length === 0) {
        //         rooms.delete(roomId);
        //     } else {
        //         io.to(roomId).emit('roomUpdate', room);
        //     }
        // }
    });



    // PLUS TARD :
    // socket.on('playCard', ...)
    // socket.on('endTurn', ...)
}

