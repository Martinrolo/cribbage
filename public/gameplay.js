socket.on('gameStarted', async (game) => {
    overlay.style.display = 'none';

    await dealCards(6, true)
});






async function dealCards(nbCards, isPlayer) {
    for (let i = 0; i < nbCards; i++) {
        await dealOneCard();
    }
}

async function dealOneCard() {
    return new Promise(resolve => {
        const deck = document.getElementById('deck');
        const hand = document.getElementById('player-hand');

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
            finalCard.className = 'card back';
            hand.appendChild(finalCard);

            resolve()
        }, 400);
    });
}

//TODO: Appeler autres sockets dans serveurs dans autres fichiers. Faire truc dealer les cartes, faire crib, avec boutons


