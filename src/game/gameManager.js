import { Game, Player, Round } from './gameObjects.js';

class GameManager {
    static setSockets(sockets) {
        this.sockets = sockets;
    }

    static createGame() {
        return new Game();
    }

    static addPlayer(game, playerId) {
        if (game.players.length >= 2) {
            throw new Error('Room pleine');
        }

        game.players.push(new Player(playerId));
    }

    static startGame(game) {
        game.initCards();
        game.giveCardsPlayers();
        game.started = true;
    }

    static startRound(game)
    {
        //TODO: Créer RoundManger


        game.round = new Round();
    }

    static cribCardsSelected(game, playerId)
    {
        const playerIndex = game.players[0].playerId == playerId ? 0 : 1;
        const playerCards = game.players[playerIndex].cards;

        if(cards.every(card => playerCards.includes(card)))
        {
            game.crib = game.crib.concat(cards);

            this.sockets.emitConfirmCribCardsSelected(game, playerId);
            io.to(room).emit('confirmCribCardsSelected', game, playerId)
        }
   
        if(game.crib.length == 4)
        {
            this.sockets.emitStartRoundOne();
            io.to(room).emit('startPlay', game)
        }
    }
}

export default GameManager;
