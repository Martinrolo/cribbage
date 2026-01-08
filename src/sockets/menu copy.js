import { GameManager } from '../game/gameManager.js';
import { RoomManager } from '../rooms/roomManager.js'

export default function menuSockets(io, socket) {
    socket.on('createRoom', (room) => {
        RoomManager.createRoom(room);
        rooms.set(room, {game: GameManager.game, animationsDone: 0});
        socket.emit('roomJoined', room);
    });

    socket.on('joinRoom', (room) => {
        // const roomData = rooms.get(room)
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
            socket.emit('error', 'Cette room est pleine')
            return;
        }

        roomData.game.players.push(new Player(playerId));
        socket.join(room);

        io.to(room).emit('playerJoined', roomData.game);
    });

    socket.on('startGame', (room) => {
        const roomData = rooms.get(room);
        if (!roomData) return;

        //init cards
        roomData.game.initCards();
        roomData.game.giveCardsPlayers();

        roomData.game.started = true;
        io.to(room).emit('gameStarted', roomData.game);
    });
}

