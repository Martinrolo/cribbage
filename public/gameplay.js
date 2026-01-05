socket.on('gameStarted', async (game) => {
    overlay.style.display = 'none';
    await dealCards(6, game.players)
});

socket.on('newRound', (game) => {
    const indexPlayer = getIndexPlayer(game.players)

    document.querySelector('.controls').classList.add('show')
    document.querySelector('.center-table').style.visibility = 'visible'

    if(game.cribIndex === indexPlayer)
    {
        document.querySelector('.center-table').textContent = "Choisis des cartes pour ton crib"
    }

    else
    {
        document.querySelector('.center-table').textContent = "Choisis des cartes pour le crib de l'adversaire"
    }
});

confirmerCrib.addEventListener('click', function() {
    if (selectedCards.length === MAX_SELECTED) {
        const cards = selectedCards.map(card => Number(card.dataset.card));

        socket.emit('cribCardsSelected', {
            room,
            playerId: localStorage.getItem('playerId'),
            cards
        });
    }
})

socket.on('confirmCribCardsSelected', (game, playerId) => {
    removeSelectedCards(selectedCards, playerId)

    const indexPlayer = getIndexPlayer(game.players)

    moveCardsToCrib(game.cribIndex === indexPlayer)
})

socket.on('startPlay', (game) => {  
    document.querySelectorAll('.selected').forEach(element => {
        element.classList.remove('selected');
    });
})



