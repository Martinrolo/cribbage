import { dealCards, newRound, confirmCribCardsSelected } from '../../ui/cribSelectionUI.js';

export default class CribSelectionManager {
    setSockets(sockets) {
        this.sockets = sockets;
    }

    async gameStarted(game)
    {
        await dealCards(game);
        this.sockets.emitCardsDealt();
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
