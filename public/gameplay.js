socket.on('gameStarted', async (game) => {
    overlay.style.display = 'none';
    await dealCards(6, game.players)
});

async function dealCards(nbCards, players) {
    for (let i = 0; i < nbCards; i++) {
        let localPlayerID = localStorage.getItem('playerId')
        let indexPlayer = players[0].playerId == localPlayerID ? 0 : 1;
        
        await dealOneCard(true, players[indexPlayer].cards[i]);
        await dealOneCard(false, null);
    }
}

async function dealOneCard(isPlayer, cardData) {
    return new Promise(resolve => {
        const deck = document.getElementById('deck');
        let hand = null
        let visible = false;

        if(isPlayer)
        {
            hand = document.getElementById('player-hand');
            visible = true;
        }
        else
        {
            hand = document.getElementById('opponent-hand');
        }

        const deckRect = deck.getBoundingClientRect();
        const handRect = hand.getBoundingClientRect();

        const startX = deckRect.left + deckRect.width / 2 - 20;
        const startY = deckRect.top + deckRect.height / 2 - 35;
        const targetY = handRect.top + handRect.height / 2 - 35;

        const card = document.createElement('div');
        card.className = 'dealt-card';

        card.style.left = `${startX}px`;
        card.style.top = `${startY}px`;

        document.body.appendChild(card);

        requestAnimationFrame(() => {
            card.style.transform = `translateY(${targetY - startY}px)`;
        });

        // fin animation
        setTimeout(() => {
            card.remove();

            const finalCard = document.createElement('div');

            if(isPlayer)
            {
                const convertedCardData = numToSymbol(cardData)
                finalCard.className = 'card';
                finalCard.textContent = convertedCardData.rank + convertedCardData.suit;
                if(convertedCardData.suit == '♥' || convertedCardData.suit == '♦')
                {
                    finalCard.style.color = 'red'
                }
            }

            else
            {
                finalCard.className = 'card back';
            }

            hand.appendChild(finalCard);

            resolve()
        }, 400);
    });
}

//TODO: Appeler autres sockets dans serveurs dans autres fichiers. Faire truc dealer les cartes, faire crib, avec boutons


