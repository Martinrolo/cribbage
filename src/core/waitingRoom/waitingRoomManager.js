import { Game, Player, Round } from '../gameObjects.js';

export default class WaitingRoomManager {
    setSockets(sockets) {
        this.sockets = sockets;
    }

    addPlayer(game, playerId) {
        if (game.players.length >= 2) {
            throw new Error('Room pleine');
        }

        game.players.push(new Player(playerId));
    }

    startGame(game) {
        game.initCards();
        game.giveCardsPlayers();
        game.started = true;
    }

    startRound(game)
    {
        //TODO: Créer RoundManger


        game.round = new Round();
    }

    cribCardsSelected(game, playerId)
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
