import { Server } from 'socket.io'
import cribbageSockets from '../sockets/cribbage.js'

export default function initSocket(httpServer) {
    const io = new Server(httpServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })

    io.on('connection', (socket) => {
        console.log('Client connected:', socket.id)
        cribbageSockets(io, socket)
    })
}