import { Server } from 'socket.io'
import { createGameSockets } from '../sockets/createGame.js'
import { gameplaySockets } from '../sockets/gameSockets.js'

export default function initSocket(httpServer) {
    const io = new Server(httpServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })

    io.on('connection', (socket) => {
        createGameSockets(io, socket);
        gameplaySockets(io, socket)

        //TODO: Faire autres fichiers pour sockets d'autres fonctionnalités
    });
}