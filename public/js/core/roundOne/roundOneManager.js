import { startPlay, showButtonsRoundOne } from '../../ui/roundOneUI.js';

export default class RoundOneManager {
    setSockets(sockets) {
        this.sockets = sockets;
    }

    startPlay(game)
    {
        maxSelectedCards = 1;
        selectedCards = [];
        
        startPlay();
        if(game.round.playerTurn == getIndexPlayer(game.players))
        {
            showButtonsRoundOne()
        }
    }
}