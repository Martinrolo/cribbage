import { dealCards, newRound, confirmCribCardsSelected } from '../../ui/cribSelectionUI.js';

export default class CribSelectionManager {
    setSockets(sockets) {
        this.sockets = sockets;
    }

    gameStarted(game)
    {
        dealCards(game);
    }
    
    newRound(game)
    {
        newRound(game);
    }

    confirmCrib()
    {
        if (selectedCards.length === maxSelectedCards) {
            const cards = selectedCards.map(card => Number(card.dataset.card));
            this.sockets.emitCribCardsSelected(cards);
        }
    }

    confirmCribCardsSelected(game, playerId)
    {
        confirmCribCardsSelected(game, playerId);
    }
}
