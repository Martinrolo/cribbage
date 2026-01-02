import { Server } from 'socket.io'
import { cribbageSockets } from '../sockets/cribbageSockets.js'

export default function initSocket(httpServer) {
    const io = new Server(httpServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })

    io.on('connection', (socket) => {
        cribbageSockets(io, socket);

        //TODO: Faire autres fichiers pour sockets d'autres fonctionnalités
    });
}