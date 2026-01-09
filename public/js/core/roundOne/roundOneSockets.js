export default class RoundOneSockets {
    constructor(socket, manager) {
        socket.on('startPlay', (game) => {  
            manager.startPlay(game);
        })
    }
}