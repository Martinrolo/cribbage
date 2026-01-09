import app from './app.js'
import { createServer } from 'http'
import { Server } from 'socket.io'
import registerSocketsAndManagers from './index.js'

const httpServer = createServer(app)
httpServer.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
})

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    registerSocketsAndManagers(io, socket);
});

