socket.on('gameStarted', async (game) => {
    overlay.style.display = 'none';
    await dealCards(6, game.players)
});

socket.on('newRound', (game) => {
    console.log(game)

    let localPlayerID = localStorage.getItem('playerId')
    let indexPlayer = game.players[0].playerId == localPlayerID ? 0 : 1;

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



