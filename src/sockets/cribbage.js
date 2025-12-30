export default function cribbageSockets(io, socket) {

    socket.on('joinRoom', (room) => {
        socket.join(room)
        console.log(`Socket ${socket.id} joined room ${room}`)

        socket.emit('roomJoined', room)
    })

    // PLUS TARD :
    // socket.on('playCard', ...)
    // socket.on('endTurn', ...)
}