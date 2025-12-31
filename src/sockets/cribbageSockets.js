import { Player, Game, rooms } from '../gameObjects.js';

export function cribbageSockets(io, socket) {
    socket.on('createRoom', (room, playerId) => {
        let game = new Game();
        rooms.set(room, {game: game});

        game.players.push(new Player(playerId));
        socket.join(room);
        socket.emit('roomJoined', room);
    });

    socket.on('joinRoom', (room, playerId) => {
        const roomData = rooms.get(room)
        if (!roomData || roomData.game.players.length >= 2)
        {
            socket.emit('error', "Cette room n'existe pas!");
            return; 
        } 

        roomData.game.players.push(new Player(playerId));
        socket.join(room);
        socket.emit('roomJoined', room);
    });

    socket.on('pageLoaded', (room, playerId) => {
        const roomData = rooms.get(room);

        if(!roomData)
        {
            socket.emit('error', "Erreur! Retour vers le menu");
            return; 
        }

        if(roomData.game.players.filter(p => p.playerId === playerId).length === 0)
        {
            socket.emit('roomFull', 'Cette room est pleine')
            return;
        }

        socket.emit('playerJoined', roomData.game);
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

