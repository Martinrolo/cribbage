import express from 'express'
import { createServer } from "http";
import { Server } from 'socket.io';
import { __dirname } from '../public/getDirectory.js';

const app = express()
const httpserver = createServer(app);

//Create socket
const io = new Server(httpserver, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
});

//Listen to port 5000
app.use(express.static(__dirname));
httpserver.listen(5000);

// Update every tick rate
// setInterval(() => {
//     tick()
// }, 1000 / TICK_RATE );

app.get('/', (req, res) => {
    res.sendFile('menu.html', { root: __dirname });
});

app.get('/cribbage', (req, res) => {
    res.sendFile('cribbage.html', { root: __dirname });
});