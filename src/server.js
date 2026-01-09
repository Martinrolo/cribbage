import { createServer } from 'http'
import { Server } from 'socket.io'
import registerSocketsAndManagers from './index.js'
import express from 'express'
import { __dirname } from '../public/getDirectory.js'
import pageRoutes from './routes/pages.js'

const app = express()
app.use(express.static(__dirname))
app.use('/', pageRoutes)

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

