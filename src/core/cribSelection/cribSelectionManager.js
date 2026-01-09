import { Game, Player, Round } from '../gameObjects.js';

export default class CribSelectionManager {
    setSockets(sockets) {
        this.sockets = sockets;
    }

    startRound(game)
    {
        //TODO: Créer RoundManger


        game.round = new Round();
    }

    cribCardsSelected(game, playerId, roomId, cards)
    {
        const playerIndex = game.players[0].playerId == playerId ? 0 : 1;
        const playerCards = game.players[playerIndex].cards;

        if(cards.every(card => playerCards.includes(card)))
        {
            game.crib = game.crib.concat(cards);

            this.sockets.emitConfirmCribCardsSelected(game, playerId, roomId);
        }
   
        if(game.crib.length == 4)
        {
            this.sockets.emitStartRoundOne(game, roomId);
        }
    }
}