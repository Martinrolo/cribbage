import { createServer } from 'http'
import app from './app.js'
import initSocket from './config/socket.js'

const httpServer = createServer(app)

// init socket
initSocket(httpServer)

// listen
httpServer.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
})
